// Project.js
import { useNavigate } from "react-router-dom";
import styles from "./Project.module.css";

function Project({ card }) {
  const navigate = useNavigate();
  const { id, heading, address, text, img } = card;

  const handleClick = () => {
    navigate(`/ourprojects/projects/${id}`);
  };

  return (
    <div>
      <div className={styles.projCard} onClick={handleClick}>
        <div className={styles.cardImg}>
          <img src={img} alt={`${heading} image`} />
        </div>
        <h3>{heading}</h3>
        <p>
          {text} <span>{address}</span>
        </p>
      </div>
    </div>
  );
}

export default Project;

// // import { NavLink, useNavigate } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import styles from "./Project.module.css";

// function Project({ card }) {
//   // const navigate = useNavigate();
//   const { id, heading, address, text, img } = card;
//   const handleClick = function (e) {
//     e.preventDefault();
//     console.log("Hello", id);
//     // navigate(`projects${id}`);
//   };
//   return (
//     <div>
//       <Link to={`${id}`}>
//         <div className={styles.projCard} onClick={handleClick}>
//           <div className={styles.cardImg}>
//             <img src={img} alt={`${heading} image`} />
//           </div>
//           <h3>{heading}</h3>
//           <p>
//             {text} <span>{address}</span>
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Project;
