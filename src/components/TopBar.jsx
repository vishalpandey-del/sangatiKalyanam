import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="top-bar">
      🪷 Sangati Kalyanam — India's Healing & Astrology Platform · All Services <strong>Coming Soon!</strong>
      <Link to="/services">Explore Services →</Link>
    </div>
  );
}
