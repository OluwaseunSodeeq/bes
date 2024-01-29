import Header from "../Components/Reusable-Components/Header-Section/Header";
// import ProjectHeroSection from "../Components/OurProjectContent/ProjectHeroSection";
import ProjectOutlet from "../Components/OurProjectContent/ProjectOutlet";

function OurProjects({ open, setOpen }) {
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      {/* <ProjectHeroSection /> */}
      <ProjectOutlet />
    </div>
  );
}

export default OurProjects;
