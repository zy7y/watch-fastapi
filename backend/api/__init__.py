"""
create app
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from tortoise.contrib.fastapi import register_tortoise

from .v1 import v1
from core import settings


app = FastAPI(title=settings.TITLE, description=settings.DESC)


app.include_router(v1, prefix="/api")


# 可以不要
# @app.on_event("startup")
# async def startup():
#     """aioredis"""
#     app.state.redis: Redis = await aioredis.from_url("redis://127.0.0.1:6379",  decode_responses=True)
#
#
# @app.on_event("shutdown")
# async def shutdown():
#     """close redis"""
#     await app.state.redis.close()


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


register_tortoise(
    app,
    db_url="sqlite://watch.sqlite",
    modules={"models": ["models"]},
    generate_schemas=True,
    add_exception_handlers=True,
)

