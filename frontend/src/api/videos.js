const API_BASE = "http://localhost:8000";
const API_URL = `${API_BASE}/api/videos`;

function normalizeVideo(video) {
  return {
    ...video,
    poster_full_url: `${API_BASE}/static/${video.poster_url}`
  };
}

export async function fetchVideos() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.map(normalizeVideo);
}

export async function fetchVideo(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  return normalizeVideo(data);
}

