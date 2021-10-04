from typing import Optional, Iterable

from tortoise import models, BaseDBAsyncClient
from tortoise import fields

from core import get_password_hash


class User(models.Model):
    username = fields.CharField(max_length=20, null=False, description="账号")
    password = fields.CharField(max_length=128, null=False, description="密码")
    nickname = fields.CharField(max_length=20, null=True, description="昵称", default="你好")

    async def save(
        self,
        using_db: Optional[BaseDBAsyncClient] = None,
        update_fields: Optional[Iterable[str]] = None,
        force_create: bool = False,
        force_update: bool = False,
    ) -> None:
        if force_create or "password" in update_fields:
            self.password = get_password_hash(self.password)

        await super(User, self).save(using_db, update_fields, force_create, force_update)







