import { useEffect, useState } from "react";
import { fetchVideos } from "../api/videos";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Row from "../components/Row";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos().then(data => {
      setVideos(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero video={videos[0]} />

      <div className="content">
        <Row title="Trending Now" videos={videos} loading={loading} />
        <Row title="Popular" videos={videos} loading={loading} />
        <Row title="Watch Again" videos={videos} loading={loading} />
      </div>
    </>
  );
}
