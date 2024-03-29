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
    id: 0,
    img: "../project002.png",
    heading: "pile foundation",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    id: 1,
    img: "../whatimage3.png",
    heading: "Telecommunication",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    id: 2,
    img: "../proj1.png",
    heading: "Borehole",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },

  {
    id: 3,
    img: "../whatimage3.png",
    heading: "Telecommunication",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    id: 4,
    img: "../project-hero.png",
    heading: "Civil Engineering",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    id: 5,
    img: "../project002.png",
    heading: "pile foundation",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    id: 6,
    img: "../project002.png",
    heading: "pile foundation",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    id: 7,
    img: "../proj1.png",
    heading: "Borehole",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
  {
    id: 8,
    img: "../project003.png",
    heading: "Civil Engineering",
    text: "151 bore pile foundations, each with a diameter of 600 meters and reaching a depth of 15 meters, situated in Lekki, Lagos.",
    address: "Lekki, Lagos",
  },
];

function ProjectHeroSection() {
  const [index, setIndex] = useState(0);

  const handler = (i) => {
    setIndex(i);
  };
  const curArray = projectsData
    .filter(
      (each) =>
        each.heading.toLowerCase().slice(0, 3) ===
        clikedBtn[index].toLowerCase().slice(0, 3)
    )
    .map((each) => each);
  const currentArray = index === 0 ? projectsData : curArray;

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
