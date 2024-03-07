import Container from "../Reusable-Components/Container";
import ContentCard from "./ContentCard";
import styles from "./ProjectOutlet.module.css";

const siteData = [
  {
    heading: "Location of Site",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_845_1505)">
          <path
            d="M12 12.9805C13.6569 12.9805 15 11.6373 15 9.98047C15 8.32361 13.6569 6.98047 12 6.98047C10.3431 6.98047 9 8.32361 9 9.98047C9 11.6373 10.3431 12.9805 12 12.9805Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 9.98047C19.5 16.7305 12 21.9805 12 21.9805C12 21.9805 4.5 16.7305 4.5 9.98047C4.5 7.99135 5.29018 6.08369 6.6967 4.67717C8.10322 3.27065 10.0109 2.48047 12 2.48047C13.9891 2.48047 15.8968 3.27065 17.3033 4.67717C18.7098 6.08369 19.5 7.99135 19.5 9.98047Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_845_1505">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.230469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "The project site is situated at [Provide detailed location information, including geographical coordinates, address, and any notable features]. It is accessible via [mention major transportation routes or landmarks].",
  },
  {
    heading: "Duration of Project",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_845_1514)">
          <path
            d="M19.5 3.98047H4.5C4.08579 3.98047 3.75 4.31626 3.75 4.73047V19.7305C3.75 20.1447 4.08579 20.4805 4.5 20.4805H19.5C19.9142 20.4805 20.25 20.1447 20.25 19.7305V4.73047C20.25 4.31626 19.9142 3.98047 19.5 3.98047Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 8.48047H20.25"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 12.2305L9.75 11.4805V17.4805"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9506 12.2305C13.0533 12.0538 13.1909 11.8999 13.3552 11.7783C13.5194 11.6567 13.7068 11.57 13.9058 11.5234C14.1047 11.4768 14.3111 11.4714 14.5123 11.5074C14.7135 11.5434 14.9051 11.6202 15.0755 11.733C15.246 11.8458 15.3915 11.9922 15.5033 12.1633C15.6152 12.3343 15.6908 12.5264 15.7257 12.7278C15.7606 12.9292 15.754 13.1355 15.7062 13.3342C15.6585 13.533 15.5707 13.7198 15.4481 13.8834L12.75 17.4805H15.75"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_845_1514">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.230469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "The project is scheduled to commence on [start date] and conclude by [end date]",
  },
  {
    heading: "Manpower Allocation:",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_845_1514)">
          <path
            d="M19.5 3.98047H4.5C4.08579 3.98047 3.75 4.31626 3.75 4.73047V19.7305C3.75 20.1447 4.08579 20.4805 4.5 20.4805H19.5C19.9142 20.4805 20.25 20.1447 20.25 19.7305V4.73047C20.25 4.31626 19.9142 3.98047 19.5 3.98047Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 8.48047H20.25"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 12.2305L9.75 11.4805V17.4805"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9506 12.2305C13.0533 12.0538 13.1909 11.8999 13.3552 11.7783C13.5194 11.6567 13.7068 11.57 13.9058 11.5234C14.1047 11.4768 14.3111 11.4714 14.5123 11.5074C14.7135 11.5434 14.9051 11.6202 15.0755 11.733C15.246 11.8458 15.3915 11.9922 15.5033 12.1633C15.6152 12.3343 15.6908 12.5264 15.7257 12.7278C15.7606 12.9292 15.754 13.1355 15.7062 13.3342C15.6585 13.533 15.5707 13.7198 15.4481 13.8834L12.75 17.4805H15.75"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_845_1514">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.230469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Our dedicated team, consisting of experienced professionals and specialists, will be on-site throughout the project.",
  },
  {
    heading: "Logistical Considerations:",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_845_1514)">
          <path
            d="M19.5 3.98047H4.5C4.08579 3.98047 3.75 4.31626 3.75 4.73047V19.7305C3.75 20.1447 4.08579 20.4805 4.5 20.4805H19.5C19.9142 20.4805 20.25 20.1447 20.25 19.7305V4.73047C20.25 4.31626 19.9142 3.98047 19.5 3.98047Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 8.48047H20.25"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 12.2305L9.75 11.4805V17.4805"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9506 12.2305C13.0533 12.0538 13.1909 11.8999 13.3552 11.7783C13.5194 11.6567 13.7068 11.57 13.9058 11.5234C14.1047 11.4768 14.3111 11.4714 14.5123 11.5074C14.7135 11.5434 14.9051 11.6202 15.0755 11.733C15.246 11.8458 15.3915 11.9922 15.5033 12.1633C15.6152 12.3343 15.6908 12.5264 15.7257 12.7278C15.7606 12.9292 15.754 13.1355 15.7062 13.3342C15.6585 13.533 15.5707 13.7198 15.4481 13.8834L12.75 17.4805H15.75"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_845_1514">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.230469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Given the unique challenges of the site, logistical considerations have been thoroughly addressed. Transportation and storage of materials and equipment will be strategically managed to optimize efficiency.",
  },
  {
    heading: "Site Preparation:",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_845_1514)">
          <path
            d="M19.5 3.98047H4.5C4.08579 3.98047 3.75 4.31626 3.75 4.73047V19.7305C3.75 20.1447 4.08579 20.4805 4.5 20.4805H19.5C19.9142 20.4805 20.25 20.1447 20.25 19.7305V4.73047C20.25 4.31626 19.9142 3.98047 19.5 3.98047Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 8.48047H20.25"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 12.2305L9.75 11.4805V17.4805"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9506 12.2305C13.0533 12.0538 13.1909 11.8999 13.3552 11.7783C13.5194 11.6567 13.7068 11.57 13.9058 11.5234C14.1047 11.4768 14.3111 11.4714 14.5123 11.5074C14.7135 11.5434 14.9051 11.6202 15.0755 11.733C15.246 11.8458 15.3915 11.9922 15.5033 12.1633C15.6152 12.3343 15.6908 12.5264 15.7257 12.7278C15.7606 12.9292 15.754 13.1355 15.7062 13.3342C15.6585 13.533 15.5707 13.7198 15.4481 13.8834L12.75 17.4805H15.75"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_845_1514">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.230469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "The project site presents [mention any unique features or challenges of the site, e.g., environmental sensitivity, accessibility issues]. To mitigate these challenges, we have developed tailored strategies, including [list specific strategies such as environmental impact assessment, community engagement, and alternative piling techniques].",
  },
  {
    heading: "Safety Measures:",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <g clipPath="url(#clip0_845_1514)">
          <path
            d="M19.5 3.98047H4.5C4.08579 3.98047 3.75 4.31626 3.75 4.73047V19.7305C3.75 20.1447 4.08579 20.4805 4.5 20.4805H19.5C19.9142 20.4805 20.25 20.1447 20.25 19.7305V4.73047C20.25 4.31626 19.9142 3.98047 19.5 3.98047Z"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 2.48047V5.48047"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 8.48047H20.25"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 12.2305L9.75 11.4805V17.4805"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9506 12.2305C13.0533 12.0538 13.1909 11.8999 13.3552 11.7783C13.5194 11.6567 13.7068 11.57 13.9058 11.5234C14.1047 11.4768 14.3111 11.4714 14.5123 11.5074C14.7135 11.5434 14.9051 11.6202 15.0755 11.733C15.246 11.8458 15.3915 11.9922 15.5033 12.1633C15.6152 12.3343 15.6908 12.5264 15.7257 12.7278C15.7606 12.9292 15.754 13.1355 15.7062 13.3342C15.6585 13.533 15.5707 13.7198 15.4481 13.8834L12.75 17.4805H15.75"
            stroke="#333437"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_845_1514">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.230469)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Stringent safety measures will be implemented to ensure the well-being of our personnel and maintain a safe working environment.",
  },
];
const approachData = [
  {
    heading: "Site Investigation:",
    text: "Begin by conducting a comprehensive geotechnical investigation to precisely understand the soil profile. This will involve soil testing, borehole drilling, and analyzing samples to identify the depth and characteristics of the soft clay layers.",
    week: "week",
  },
  {
    heading: "Engineering Analysis:",
    text: "Engage a team of geotechnical and structural engineers to analyze the soil data and design an appropriate piling solution. The engineers will determine the necessary pile length, diameter, and type to ensure stability and load-bearing capacity, taking into account the challenging soil conditions.",
    week: "week",
  },
  {
    heading: "Specialized Equipment Selection:",
    text: "Based on the engineering analysis, choose specialized piling equipment suitable for the challenging soil conditions. This might involve selecting equipment with high torque and vibration capabilities to penetrate through the soft clay layers efficiently.",
    week: "week",
  },
  {
    heading: "Pile Material Selection:",
    text: "Choose the right pile materials that are resistant to corrosion and can withstand the specific soil conditions. In this case, considering the soft clay layers, reinforced concrete piles or steel piles with appropriate corrosion protection may be recommended.",
    week: "week",
  },
  {
    heading: "Quality Control Measures:",
    text: "Implement stringent quality control measures during the piling process. This includes monitoring pile installation parameters, conducting regular pile integrity tests, and ensuring that each pile meets the specified standards.",
    week: "week",
  },
  {
    heading: "Contingency Planning:",
    text: "Develop a contingency plan to address any unforeseen challenges during the piling works. This may involve having additional equipment on standby, adjusting the construction schedule, and budgeting for potential variations in project costs.",
    week: "week",
  },
  {
    heading: "Regular Communication:",
    text: "Maintain open and transparent communication with the client throughout the project. Provide regular updates on the progress, share any findings during construction, and discuss solutions collaboratively.",
    week: "week",
  },
];

function ProjectOutlet({ data }) {
  console.log(data, siteData, approachData);
  return (
    <div className={styles.projectOutlet}>
      <Container background="#fff" paddingType="cover">
        <div className={styles.heroImage}>
          {/* <img src={data.img} alt={data.heading} /> */}
          <img src="../../outlet001.png" alt="Image" />
        </div>
      </Container>
      <Container background="#fff">
        <div className={styles.projectOutletContent}>
          <div className={styles.problem}>
            <h3>Client Statement (Problem)</h3>
            <p>
              The client expresses concern about the challenging soil conditions
              at the project site, specifically noting the presence of soft clay
              layers that could pose difficulties during pile installation. They
              are worried about potential delays and increased costs due to the
              unforeseen soil conditions.
            </p>
          </div>
          <div className={styles.projectOutletBody}>
            <div className={styles.leftBody}>
              <h3>Site Details and Project Logistics</h3>
              <div className={styles.leftContent}>
                {siteData.map((each) => (
                  <ContentCard
                    underline="underline"
                    data={each}
                    key={each.heading}
                    cardType="card1"
                  />
                ))}
              </div>
            </div>
            <div className={styles.rightBody}>
              <h3>Approach To The Problem</h3>
              <div className={styles.rightContent}>
                {approachData.map((each, i) => (
                  <div className={styles.container} key={i}>
                    <div className={styles.week}>
                      <div className={styles.weekTag}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="75"
                          height="33"
                          viewBox="0 0 75 33"
                          fill="none"
                        >
                          <path
                            d="M75 15.6151L60.5 0.230469H0V32.2305H60.5L75 15.6151Z"
                            fill="rgba(201, 236, 251, 0.5)"
                            // fill="#C9ECFB"
                            fillOpacity="0.5"
                          />
                          <text x="29" y="20">
                            <tspan
                              display="flex"
                              // justifyContent="center"
                              // textAlign="center"
                              fontWeight="bold"
                              fill="#01256b"
                            >
                              {/* {each.week} {i + 1} */}
                              {i + 1}
                            </tspan>
                          </text>
                        </svg>

                        {/* {each.week} {i + 1} */}
                      </div>
                      <div className={styles.line}></div>
                      <div className={styles.dot}></div>
                    </div>
                    <ContentCard data={each} cardType="card2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectOutlet;
