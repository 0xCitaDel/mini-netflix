const API_BASE = "http://localhost:8000/api";

export async function fetchVideos() {
  const res = await fetch(`${API_BASE}/videos`);
  return res.json();
}

export async function fetchVideo(id) {
  const res = await fetch(`${API_BASE}/videos/${id}`);
  return res.json();
}

