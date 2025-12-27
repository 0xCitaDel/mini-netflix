import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="video-card">
      <img src={video.poster_url} alt={video.title} />
      <div className="video-title">{video.title}</div>
    </Link>
  );
}
