from typing import Generator

import pytest
from fastapi.testclient import TestClient
from tortoise.contrib.test import initializer, finalizer

from api import app


@pytest.fixture(scope="module")
def client() -> Generator:
    initializer(["backend.models"])
    with TestClient(app) as c:
        yield c
    finalizer()


@pytest.fixture(scope="module")
def event_loop(client: TestClient) -> Generator:
    yield client.task.get_loop()