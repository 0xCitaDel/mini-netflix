import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVideo } from "../api/videos";

export default function Player() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchVideo(id).then(setVideo);
  }, [id]);

  if (!video) return <div className="page">Loading...</div>;

  return (
    <div className="page">
      <Link to="/" className="back">← Back</Link>

      <h1>{video.title}</h1>
      <p className="description">{video.description}</p>

      <video controls className="player">
        <source src={video.video_url} type="video/mp4" />
      </video>
    </div>
  );
}

