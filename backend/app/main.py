from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.seed import seed_videos
from app.routers import videos
from app.core.config import settings
from app.core.logging import logger

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)


app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static"
)

@app.on_event("startup")
def on_startup():
    seed_videos()

app.include_router(videos.router)
