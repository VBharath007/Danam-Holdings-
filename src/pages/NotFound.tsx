import { Link } from "react-router-dom";
import usePageTitle from "../components/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <div className="container-x section text-center">
      <h1 className="text-5xl text-deep">Page not found</h1>
      <p className="mt-3 text-mut">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-green mt-8">Back to Home</Link>
    </div>
  );
}
