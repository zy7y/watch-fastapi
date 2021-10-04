from typing import List, Any, Union

from fastapi import APIRouter, Depends

from core import deps
from models import Movie
from scheams import Movie_Pydantic, MovieIn_Pydantic, Response200, Response400

movie = APIRouter(tags=["电影相关"])


@movie.get("/movie", summary="电影列表", response_model=Union[Response200, Response400])
async def movie_list(limit: int = 10, page: int = 1):
    skip = (page - 1) * limit
    data = {
        "total": await Movie.all().count(),
        "movies": await Movie_Pydantic.from_queryset(Movie.all().offset(skip).limit(limit).order_by('-id'))
    }
    return Response200(data=data)


@movie.post("/movie", summary="新增电影")
async def movie_create(movie_form: MovieIn_Pydantic, token: Any = Depends(deps.get_current_user)):
    return Response200(data=await Movie_Pydantic.from_tortoise_orm(await Movie.create(**movie_form.dict())))


@movie.put("/movie/{pk}", summary="编辑电影")
async def movie_update(pk: int, movie_form: MovieIn_Pydantic, token: Any = Depends(deps.get_current_user)):
    if await Movie.filter(pk=pk).update(**movie_form.dict()):
        return Response200()
    return Response400(msg="更新失败")


@movie.delete("/movie/{pk}", summary="删除电影")
async def movie_delete(pk: int, token: Any = Depends(deps.get_current_user)):
    if await Movie.filter(pk=pk).delete():
        return Response200()
    return Response400(msg="删除失败")
