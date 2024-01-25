import Header from "../Components/Header-Section/Header";
import OurTeam from "../Components/ProjectContent/OurTeam";
import ProjectHeroSection from "../Components/ProjectContent/ProjectHeroSection";
import RecentProject from "../Components/ProjectContent/RecentProject";

function OurCompany({ setOpen, open }) {
  return (
    <div className="projectPage">
      <Header setOpen={setOpen} open={open} />
      <ProjectHeroSection onClick={() => setOpen(false)} />
      <OurTeam />
      <RecentProject />
    </div>
  );
}

export default OurCompany;
// 2178833754
