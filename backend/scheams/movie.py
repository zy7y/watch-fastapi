from tortoise.contrib.pydantic import pydantic_model_creator

from models import Movie

Movie_Pydantic = pydantic_model_creator(Movie, name="Movie")
MovieIn_Pydantic = pydantic_model_creator(Movie, name="MovieIn", exclude_readonly=True)