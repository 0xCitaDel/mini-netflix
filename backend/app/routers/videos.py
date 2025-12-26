from fastapi import APIRouter, HTTPException
from typing import List
from app.db import videos_collection
from app.models.video import Video

router = APIRouter(prefix="/api/videos", tags=["Videos"])


@router.get("", response_model=List[Video])
def get_videos():
    """ Get all available videos """
    return list(videos_collection.find({}, {"_id": 0}))


@router.get("/{video_id}", response_model=Video)
def get_video(video_id: int):
    """ Get single video by ID """
    video = videos_collection.find_one({"id": video_id}, {"_id": 0})
    if not video:
        raise HTTPException(status_code=404, detail="Video not found")
    return video
