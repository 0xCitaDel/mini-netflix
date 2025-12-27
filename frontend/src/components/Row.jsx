import VideoCard from "./VideoCard";
import SkeletonCard from "./SkeletonCard";

export default function Row({ title, videos, loading }) {
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row-cards">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
      </div>
    </section>
  );
}
