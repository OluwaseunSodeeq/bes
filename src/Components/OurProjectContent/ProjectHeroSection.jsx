import { useState } from "react";
import Container from "../Reusable-Components/Container";
import RenderBtn from "../Reusable-Components/RenderBtn";
import styles from "./ProjectHeroSection.module.css";
import Project from "./Project";

const btnsTexts = [
  "All",
  "Piling",
  "Telecommunication",
  "Civil Engineering",
  "Borehole",
];
const clikedBtn = [
  "All",
  "Piling",
  "Telecommunication",
  "Civil Engineering",
  "Borehole",
];
const projectsData = [
  {
    img: "../project002.png",
    heading: "pile foundation",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    img: "../whatimage3.png",
    heading: "Telecommunication",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    img: "../proj1.png",
    heading: "Borehole",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },

  {
    img: "../whatimage3.png",
    heading: "Telecommunication",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    img: "../project-hero.png",
    heading: "Civil Engineering",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    img: "../project002.png",
    heading: "pile foundation",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    img: "../project002.png",
    heading: "pile foundation",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    img: "../proj1.png",
    heading: "Borehole",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    img: "../project003.png",
    heading: "Civil Engineering",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
];
function ProjectHeroSection() {
  const [index, setIndex] = useState(0);
  //   const [currentArray, setCurrentArray] = useState(projectsData);

  const handler = (i) => {
    // setCurrentbtn();
    setIndex(i);
    // setCurrentArray(index === 0 ? projectsData : curArray);
  };
  //   console.log(currenBtn);
  const curArray = projectsData
    .filter(
      (each) =>
        each.heading.toLowerCase().slice(0, 3) ===
        clikedBtn[index].toLowerCase().slice(0, 3)
    )
    .map((each) => each);
  //   console.log(curArray, projectsData);
  const currentArray = index === 0 ? projectsData : curArray;
  //   console.log(curArray, currentArray);

  return (
    <Container background="#fff">
      <div className={styles.projectHeroSection}>
        <h2>Browse Our Portfolio</h2>
        <p>A showcase of our completed construction projects.</p>
        <div className={styles.btnsContainer}>
          {btnsTexts.map((each, i) => (
            <RenderBtn
              each={each}
              i={i}
              key={i}
              setIndex={() => handler(i)}
              index={index}
              type="projBtn"
            />
          ))}
        </div>
        <div className={styles.projectsCards}>
          {currentArray.map((card, i) => (
            <Project index={index} card={card} key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ProjectHeroSection;
