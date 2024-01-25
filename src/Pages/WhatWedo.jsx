import Header from "../Components/Header-Section/Header";
import WhatHeroSection from "../Components/WHatWeDoContent/WhatHeroSection";
function WhatWedo({ setOpen, open }) {
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      <WhatHeroSection onClick={() => setOpen(false)} />
    </div>
  );
}

export default WhatWedo;
