# 返回
from tortoise.contrib.pydantic import pydantic_model_creator

from models import User

User_Pydantic = pydantic_model_creator(User, name="User", exclude=['password'])
UserIn_Pydantic = pydantic_model_creator(User, name="UserIn", exclude_readonly=True)