from pydantic import BaseModel


class Video(BaseModel):
    id: int
    title: str
    description: str
    poster_url: str
    video_url: str
    duration: str
    year: int
    category: str
