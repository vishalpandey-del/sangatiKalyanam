import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="card py-16 text-center">
      <div className="mb-4 text-5xl">🪷</div>
      <h1 className="mb-2 text-2xl font-extrabold text-slate">Page not found</h1>
      <p className="mb-6 text-sm text-slate-m">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
