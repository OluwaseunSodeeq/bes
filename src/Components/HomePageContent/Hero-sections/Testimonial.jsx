import Carousel from "react-multi-carousel";

// import WithStyles from "react-multi-carousel";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Container from "../../Reusable-Components/Container";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const testimonialArrayLength = 3;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <Container background="#fff">
      <div className={styles.testimonial}>
        <h3>Testimonials</h3>
        <div className={styles.testimonailContent}>
          <Carousel
            additionalTransfrom={0}
            arrows={true}
            autoPlaySpeed={3000}
            focusOnSelect={true}
            containerClass="container"
            draggable={true}
            itemClass={styles.itemClass}
            minimumTouchDrag={80}
            responsive={responsive}
            slidesToSlide={1}
            swipeable={true}
            // showDots={true}
            // centerMode={true}
          >
            {Array.from({ length: testimonialArrayLength }, (_, i) => (
              <TestimonialCard maxRating="5" key={i} i={i} />
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
}

export default Testimonial;

/*
import Carousel from "react-multi-carousel";
import Container from "../Reusable-Components/Container";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const testimonialArrayLength = 3;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  // const c = <Carousel responsive={responsive}></Carousel>;
  // console.log(c);
  return (
    <Container>
      <div className={styles.testimonial}>
        <h3>Testimonials</h3>
        <ul className={styles.testimonailContent}>
          <Carousel
            arrows={true}
            centerMode={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            itemClass={styles.carouselItem}
          >
            {Array.from({ length: testimonialArrayLength }, (_, i) => (
              <TestimonialCard maxRating="5" key={i} />
            ))}
          </Carousel>
        </ul>
      </div>
    </Container>
  );
}

export default Testimonial;




*/
