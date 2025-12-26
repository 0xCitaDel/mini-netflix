import os
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Mini Netflix API"
    mongo_url: str = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    allowed_origins: list[str] = ["http://localhost:3000"]

settings = Settings()

