import Carousel from "react-multi-carousel";

import Container from "../Reusable-Components/Container";
import OurTeamCard from "./OurTeamCard";

//css
import "react-multi-carousel/lib/styles.css";
import styles from "./OurTeam.module.css";

function OurTeam() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 940 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 940, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 50,
    },
  };
  return (
    <Container background="#fff">
      <div className={styles.ourTeam}>
        <div></div>
        <h6>Our Team</h6>
        <h3>Meet Our Team</h3>
        <p>
          Discover the Passion, Dedication, and Expertise that Drive Our Success
        </p>

        <div className={styles.content}>
          <div></div>
          <div className={styles.svggs}>
            {Array.from({ length: 9 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
              >
                <circle
                  cx="4.03132"
                  cy="4.27442"
                  r="3.5"
                  transform="rotate(41 4.03132 4.27442)"
                  stroke="#00703C"
                />
              </svg>
            ))}
          </div>
          <div className={styles.cards}>
            <Carousel
              additionalTransfrom={0}
              arrows={true}
              autoPlaySpeed={3000}
              containerClass="container"
              draggable={true}
              minimumTouchDrag={80}
              responsive={responsive}
              slidesToSlide={1}
              swipeable={true}
              showDots={true}
              itemClass={styles.itemClass}
            >
              {Array.from({ length: 3 }, (_, i) => (
                <OurTeamCard key={i} />
              ))}
            </Carousel>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default OurTeam;

// const CustomRightArrow = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     carouselState: { currentSlide, deviceType }
//   } = rest;
//   // onMove means if dragging or swiping in progress.
//   return <button onClick={() => onClick()} />;
// };
// <Carousel customRightArrow={<CustomRightArrow />} />;
