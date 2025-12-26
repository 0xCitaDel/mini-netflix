from app.db import videos_collection
from app.core.logging import logger


VIDEOS = [
    {
        "id": 1,
        "title": "Tears of Steel",
        "description": "In a dystopian future where humanity and machines collide, a group of rebels faces an impossible choice. A visually striking sci-fi short blending live action and cutting-edge CGI.",
        "poster_url": "posters/tears_of_steel.jpg",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        "duration": "12:14",
        "year": 2012,
        "category": "Sci-Fi / Action"
    },
    {
        "id": 2,
        "title": "Elephants Dream",
        "description": "Two characters. One surreal world. Reality bends as imagination and obsession collide in this visually experimental, open-source animated classic.",
        "poster_url": "posters/elephants_dream.jpg",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "duration": "10:54",
        "year": 2006,
        "category": "Sci-Fi / Experimental"
    },
    {
        "id": 3,
        "title": "Sintel",
        "description": "A young warrior embarks on a dangerous journey to save her lost dragon. An emotional fantasy epic about courage, sacrifice, and the true meaning of loyalty.",
        "poster_url": "posters/sintel.jpg",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "duration": "14:48",
        "year": 2010,
        "category": "Fantasy / Adventure"
    },
    {
        "id": 4,
        "title": "Big Buck Bunny",
        "description": "When a gentle giant is pushed too far, revenge becomes inevitable. A charming and humorous animated adventure with stunning visuals and heart.",
        "poster_url": "posters/big_buck_bunny.jpg",
        "video_url": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "duration": "9:56",
        "year": 2008,
        "category": "Animation / Family"
    }
]


def seed_videos() -> None:
    """
    Seed database with initial videos if collection is empty
    """
    try:
        if videos_collection.count_documents({}) == 0:
            videos_collection.insert_many(VIDEOS)
            logger.info("MongoDB seeded with videos")
    except Exception as e:
        logger.error(f"Seeding failed: {e}")
