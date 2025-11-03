import Container from "../../Reusable-Components/Container";
import CardCounter from "./CardCounter";
import styles from "./SummaryOfJobs.module.css";

const myArray = [
  { num: "10", text: "Years  Experience" },
  { num: "500", text: "Projects Done" },
  { num: "100", text: "Clients Satisfied" },
  { num: "100", text: "Cities Visited" },
];
function SummaryOfJobs() {
  return (
    <Container paddingType="sidePaddings" background="#EEF5F2">
      <div className={styles.summaryDiv}>
        {myArray.map((each) => (
          <CardCounter text={each.text} num={each.num} key={each.text} />
        ))}
      </div>
    </Container>
  );
}

export default SummaryOfJobs;
