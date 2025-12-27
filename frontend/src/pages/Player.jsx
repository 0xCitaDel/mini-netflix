import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVideo } from "../api/videos";

export default function Player() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideo(id).then(setVideo);
  }, [id]);

  if (!video) return <div className="watch-loading">Loading...</div>;

  return (
    <div
      className="watch-page"
      style={{ backgroundImage: `url(${video.poster_full_url})` }}
    >
      <div className="watch-overlay" />

      <Link to="/" className="watch-back">← Back</Link>

      <div className="watch-content">
        <h1>{video.title}</h1>

        <div className="watch-meta">
          <span>{video.year}</span>
          <span>{video.duration}</span>
          <span>{video.category}</span>
        </div>

        <p className="watch-description">{video.description}</p>

        <div className="watch-player">
          <video controls>
            <source src={video.video_url} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
