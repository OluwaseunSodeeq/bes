import Header from "../Components/Header-Section/Header";
import HeroSection from "../Components/Hero-sections/HeroSection";

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
