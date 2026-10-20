export default function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      <span className="stars-bg" aria-hidden="true">★★★★★</span>
      <span className="stars-fill" style={{ width: `${(rating / 5) * 100}%` }} aria-hidden="true">★★★★★</span>
    </span>
  );
}
