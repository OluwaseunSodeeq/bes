import Header from "../Components/Reusable-Components/Header-Section/Header";
import { Outlet } from "react-router-dom";

function OurProjects({ open, setOpen }) {
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      <Outlet />
    </div>
  );
}

export default OurProjects;
