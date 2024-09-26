import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        <div className="nav-bar-content-group1">
          <Link to={"/"} className="nav-link">
            <div className="nav-bar-button">Home</div>
          </Link>
          <Link to={"/Video"} className="nav-link">
            <div className="nav-bar-button">Video</div>
          </Link>

          <Link to={"/Video"} className="nav-link">
            <div className="nav-bar-button">Upload</div>
          </Link>
        </div>

        <div className="nav-bar-button">About Us</div>
      </div>
    </div>
  );
}
