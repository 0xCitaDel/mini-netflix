from pymongo import MongoClient, errors
from app.core.config import settings
from app.core.logging import logger

try:
    client = MongoClient(settings.mongo_url)
    db = client["mini_netflix"]
    videos_collection = db["videos"]
    logger.info("Connected to MongoDB")
except errors.ConnectionFailure as e:
    logger.error(f"MongoDB connection failed: {e}")
    raise

