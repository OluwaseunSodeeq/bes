import Header from "../Components/Reusable-Components/Header-Section/Header";
import OurTeam from "../Components/OurCompanyContent/OurTeam";
import ProjectHeroSection from "../Components/OurCompanyContent/ProjectHeroSection";
import RecentProject from "../Components/OurCompanyContent/RecentProject";

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
