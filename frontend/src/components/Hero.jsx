export default function Hero({ video }) {
  if (!video) return null;

  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${video.poster_full_url})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>{video.title}</h1>

        <div className="meta">
          <span>{video.category}</span>
          <span>{video.duration}</span>
        </div>

        <p>{video.description}</p>

        <div className="hero-buttons">
          <button className="btn play">▶ Play</button>
          <button className="btn info">ℹ More Info</button>
        </div>
      </div>
    </header>
  );
}
