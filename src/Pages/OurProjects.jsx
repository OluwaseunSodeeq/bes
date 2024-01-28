import Header from "../Components/Reusable-Components/Header-Section/Header";
import ProjectHeroSection from "../Components/OurProjectContent/ProjectHeroSection";

function OurProjects({ open, setOpen }) {
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      <ProjectHeroSection />
    </div>
  );
}

export default OurProjects;
