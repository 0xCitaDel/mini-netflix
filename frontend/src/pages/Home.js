import { useEffect, useState } from "react";
import { fetchVideos } from "../api/videos";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos().then(setVideos);
  }, []);

  return (
    <div className="page">
      <h1 className="logo">MiniFlix</h1>
      <VideoGrid videos={videos} />
    </div>
  );
}
