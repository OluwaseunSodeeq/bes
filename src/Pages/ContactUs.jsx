import Header from "../Components/Header-Section/Header";
import CompanyContentDiv from "../Components/OurCompanyContent/CompanyContentDiv";
import Map from "../Components/OurCompanyContent/Map";
// import CompanyContent from "../Components/OurCompanyContent/CompanyContent";
// import Map from "../Components/OurCompanyContent/Map";

function ContactUs({ setOpen, open }) {
  return (
    <div>
      <Header setOpen={setOpen} open={open} />
      <Map onClick={() => setOpen(false)} />
      <CompanyContentDiv onClick={() => setOpen(false)} />
    </div>
  );
}

export default ContactUs;
