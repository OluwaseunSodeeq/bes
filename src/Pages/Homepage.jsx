import Header from "../Components/Reusable-Components/Header-Section/Header";
import HeroSection from "../Components/HomePageContent/Hero-sections/HeroSection";

function Homepage({ setOpen, open }) {
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      <>
        <HeroSection />
      </>
    </div>
  );
}

export default Homepage;
