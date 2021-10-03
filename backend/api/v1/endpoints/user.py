from fastapi import APIRouter, Depends

from backend.core import deps

from backend.scheams import User_Pydantic, UserIn_Pydantic, Response200, Response400
from backend.models import User

user = APIRouter(tags=["用户相关"], dependencies=[Depends(deps.get_current_user)])


@user.get("/user", summary="当前用户")
async def user_info(user_obj: User = Depends(deps.get_current_user)):
    """
    - username: str 必传
    - password: str 必传
    """
    return Response200(data=await User_Pydantic.from_tortoise_orm(user_obj))


@user.put("/user", summary="修改信息")
async def user_update(user_form: UserIn_Pydantic):
    """
    修改当前用户信息
    - username: str 必传
    - password: str 必传
    """
    if await User.filter(username=user_form.username).update(**user_form.dict()):
        return Response200()
    return Response400(msg="更新失败")
