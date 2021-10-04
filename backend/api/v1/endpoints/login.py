from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.requests import Request

from models import User
from core import verify_password, create_access_token, deps
from scheams import (
    UserIn_Pydantic,
    Response400,
    ResponseToken,
    Response200,
    User_Pydantic,
)

login = APIRouter(tags=["认证相关"])


@login.post("/login", summary="登录")
async def user_login(request: Request, form_data: OAuth2PasswordRequestForm = Depends()):
    if user := await User.get(username=form_data.username):
        if verify_password(form_data.password, user.password):
            token = create_access_token({"sub": user.username})
            # s
            # await request.app.state.redis.set(user.username, token, 180)
            return ResponseToken(data={"token": f"bearer {token}"}, access_token=token)
    return Response400(msg="请求失败.")


@login.put("/logout", summary="注销")
async def user_logout(request: Request, user: User = Depends(deps.get_current_user)):
    request.app.state.redis.delete(user.username)
    return Response200()


@login.post("/user", summary="用户新增")
async def user_create(user: UserIn_Pydantic):
    return Response200(
        data=await User_Pydantic.from_tortoise_orm(await User.create(**user.dict()))
    )
