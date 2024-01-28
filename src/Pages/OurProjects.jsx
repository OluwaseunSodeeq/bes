import { Link } from "react-router-dom";
import Header from "../Components/Reusable-Components/Header-Section/Header";

function OurProjects({ open, setOpen }) {
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>
        Page in Progress
      </h1>
      <Link to="/" style={{ fontSize: "30px", textAlign: "center" }}>
        Back to HomePage
      </Link>
    </div>
  );
}

export default OurProjects;
