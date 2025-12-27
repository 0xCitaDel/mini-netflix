import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="card">
      <div className="card-inner">
        <img src={video.poster_full_url} alt={video.title} />

        <div className="card-overlay">
          <div className="card-actions">
            <button>▶</button>
            <button>＋</button>
            <button>ℹ</button>
          </div>

        </div>
      </div>
    </Link>
  );
}
