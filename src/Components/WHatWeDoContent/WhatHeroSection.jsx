import Container from "../Reusable-Components/Container";
import WhatBottomCards from "./WhatBottomCards";
import styles from "./WhatHeroSection.module.css";
import WhatTopCards from "./WhatTopCards";
const topArray = [
  {
    icon: (
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_299_5255)">
            <path
              d="M23.1431 12.5999L12.686 17.417C12.4627 17.5189 12.22 17.5716 11.9746 17.5716C11.7291 17.5716 11.4865 17.5189 11.2631 17.417L0.857422 12.5999M23.1431 18.1713L12.686 22.9885C12.4627 23.0903 12.22 23.1431 11.9746 23.1431C11.7291 23.1431 11.4865 23.0903 11.2631 22.9885L0.857422 18.1713M12.806 11.8285C12.5517 11.9389 12.2775 11.9959 12.0003 11.9959C11.7231 11.9959 11.4488 11.9389 11.1946 11.8285L1.42314 7.30276C1.26446 7.22272 1.13112 7.10022 1.03796 6.94888C0.944792 6.79755 0.895463 6.62332 0.895463 6.44561C0.895463 6.2679 0.944792 6.09367 1.03796 5.94234C1.13112 5.791 1.26446 5.6685 1.42314 5.58847L11.1946 1.02847C11.4488 0.918058 11.7231 0.861084 12.0003 0.861084C12.2775 0.861084 12.5517 0.918058 12.806 1.02847L22.5774 5.55418C22.7361 5.63421 22.8694 5.75672 22.9626 5.90805C23.0558 6.05939 23.1051 6.23361 23.1051 6.41133C23.1051 6.58904 23.0558 6.76326 22.9626 6.9146C22.8694 7.06593 22.7361 7.18844 22.5774 7.26847L12.806 11.8285Z"
              stroke="#034BA1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_299_5255">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    ),
    heading: "Piling",
    text: "Engrained within our foundation work are core values that prioritize unwavering stability and enduring quality for your projects. Explore how our commitment to excellence sets us apart and ensures your project's success",
  },
  {
    icon: (
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.348 14.651C8.64483 13.9477 8.2498 12.994 8.2498 11.9995C8.2498 11.005 8.64483 10.0512 9.348 9.34798M14.652 9.34798C15.3552 10.0512 15.7502 11.005 15.7502 11.9995C15.7502 12.994 15.3552 13.9477 14.652 14.651M7.227 16.773C6.6002 16.1462 6.10299 15.4021 5.76376 14.5831C5.42454 13.7642 5.24994 12.8864 5.24994 12C5.24994 11.1136 5.42454 10.2358 5.76376 9.41685C6.10299 8.5979 6.6002 7.85378 7.227 7.22698M16.773 7.22698C17.3998 7.85378 17.897 8.5979 18.2362 9.41685C18.5755 10.2358 18.7501 11.1136 18.7501 12C18.7501 12.8864 18.5755 13.7642 18.2362 14.5831C17.897 15.4021 17.3998 16.1462 16.773 16.773M5.106 18.894C1.298 15.086 1.298 8.91398 5.106 5.10498M18.894 5.10498C22.702 8.91298 22.702 15.086 18.894 18.895M12 12H12.008V12.007H12V12ZM12.375 12C12.375 12.0994 12.3355 12.1948 12.2652 12.2651C12.1948 12.3355 12.0995 12.375 12 12.375C11.9005 12.375 11.8052 12.3355 11.7348 12.2651C11.6645 12.1948 11.625 12.0994 11.625 12C11.625 11.9005 11.6645 11.8051 11.7348 11.7348C11.8052 11.6645 11.9005 11.625 12 11.625C12.0995 11.625 12.1948 11.6645 12.2652 11.7348C12.3355 11.8051 12.375 11.9005 12.375 12Z"
            stroke="#034BA1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    heading: "Telecommunication Expertise",
    text: "Our cutting-edge telecommunications solutions seamlessly link communities, fostering robust communication networks. Experience the power of connectivity that unites communities like never before",
  },
  {
    icon: (
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6095 6.605L16.5645 6.57C16.478 5.913 16.1635 5.2285 15.6725 4.6515C14.875 3.714 13.575 3 11.835 3C10.12 3 8.91147 3.782 8.19847 4.7515C7.86589 5.2 7.62822 5.71158 7.49997 6.255C7.47662 6.35676 7.45794 6.45953 7.44397 6.563L7.38997 6.6045C6.82797 7.04 6.41547 7.568 6.51347 8.1735C6.60747 8.7585 7.13647 9.1145 7.62847 9.332C7.75347 9.3875 7.88847 9.4395 8.03197 9.488C7.95968 10.0516 8.00831 10.6242 8.17463 11.1676C8.34094 11.711 8.62113 12.2127 8.99652 12.6393C9.37191 13.0659 9.83388 13.4076 10.3517 13.6417C10.8695 13.8758 11.4312 13.9969 11.9995 13.9969C12.5677 13.9969 13.1295 13.8758 13.6473 13.6417C14.1651 13.4076 14.627 13.0659 15.0024 12.6393C15.3778 12.2127 15.658 11.711 15.8243 11.1676C15.9906 10.6242 16.0393 10.0516 15.967 9.488C16.1105 9.4395 16.2455 9.388 16.3705 9.332C16.8625 9.1145 17.391 8.7585 17.4855 8.1735C17.5835 7.568 17.171 7.04 16.609 6.6045L16.6095 6.605ZM8.47247 7.336C8.40747 7.149 8.39047 6.8485 8.47497 6.477C8.55797 6.1145 8.72997 5.717 8.99997 5.349V6.75C8.99997 6.88261 9.05265 7.00979 9.14642 7.10355C9.24018 7.19732 9.36736 7.25 9.49997 7.25C9.63258 7.25 9.75976 7.19732 9.85352 7.10355C9.94729 7.00979 9.99997 6.88261 9.99997 6.75V4.455C10.4115 4.221 10.909 4.0575 11.5 4.0125V5.75C11.5 5.88261 11.5526 6.00979 11.6464 6.10355C11.7402 6.19732 11.8674 6.25 12 6.25C12.1326 6.25 12.2598 6.19732 12.3535 6.10355C12.4473 6.00979 12.5 5.88261 12.5 5.75V4.0435C13.028 4.11005 13.5377 4.27995 14 4.5435V6.75C14 6.88261 14.0526 7.00979 14.1464 7.10355C14.2402 7.19732 14.3674 7.25 14.5 7.25C14.6326 7.25 14.7598 7.19732 14.8535 7.10355C14.9473 7.00979 15 6.88261 15 6.75V5.409C15.5525 6.117 15.682 6.881 15.5265 7.3395C15.4879 7.45298 15.4915 7.57652 15.5364 7.68762C15.5813 7.79872 15.6646 7.89 15.7712 7.94483C15.8777 7.99965 16.0005 8.01438 16.117 7.98633C16.2335 7.95828 16.336 7.88932 16.406 7.792C16.5045 7.9295 16.501 8.0025 16.499 8.014C16.4925 8.054 16.416 8.219 15.9665 8.418C15.7715 8.504 15.5395 8.5815 15.279 8.65L15.267 8.653C14.9845 8.726 14.67 8.788 14.3335 8.839C13.7094 8.92899 13.0804 8.98075 12.45 8.994C12.0166 9.00483 11.583 9.00016 11.15 8.98C10.6519 8.9577 10.1553 8.91031 9.66197 8.838C9.34929 8.79258 9.0392 8.73083 8.73297 8.653L8.72097 8.65C8.48604 8.59092 8.25616 8.51334 8.03347 8.418C7.58397 8.219 7.50747 8.054 7.50097 8.014C7.49897 8.0025 7.49547 7.9295 7.59397 7.792C7.66402 7.88976 7.76696 7.95899 7.88391 7.98701C8.00087 8.01503 8.12401 7.99995 8.23075 7.94455C8.33749 7.88914 8.42069 7.79712 8.46508 7.68535C8.50948 7.57358 8.5121 7.44955 8.47247 7.336ZM9.01097 9.7405C9.17697 9.773 9.34897 9.8025 9.52497 9.829C10.059 9.909 10.634 9.96 11.219 9.984C11.7404 10.0054 12.2625 10.0054 12.784 9.984C13.366 9.96 13.939 9.909 14.4705 9.829C14.644 9.80374 14.8169 9.77423 14.989 9.7405C15.0245 10.1546 14.9737 10.5715 14.8396 10.9649C14.7055 11.3583 14.4912 11.7195 14.2102 12.0257C13.9292 12.3319 13.5876 12.5764 13.2071 12.7436C12.8266 12.9108 12.4156 12.9972 12 12.9972C11.5844 12.9972 11.1733 12.9108 10.7928 12.7436C10.4124 12.5764 10.0708 12.3319 9.78977 12.0257C9.50874 11.7195 9.29441 11.3583 9.16034 10.9649C9.02628 10.5715 8.97541 10.1546 9.01097 9.7405Z"
            fill="#034BA1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 14.2451C14.829 14.3026 15.164 14.3696 15.5 14.4461C18.2215 15.0676 21 16.3101 21 18.0001V21.0001H3V18.0001C3 16.3101 5.7785 15.0676 8.5 14.4461C8.83156 14.3706 9.165 14.3035 9.5 14.2451V16.5001H14.5V14.2451ZM7.5 15.7451C7.827 15.6451 8.1625 15.5546 8.5 15.4731V17.5001H15.5V15.4736C16.0065 15.5948 16.507 15.7396 17 15.9076V20.0001H18V16.2986C18.145 16.3631 18.285 16.4296 18.419 16.4981C18.9875 16.7871 19.409 17.0851 19.676 17.3701C19.9385 17.6501 20 17.8566 20 18.0001V20.0001H4V18.0001C4 17.8566 4.0615 17.6501 4.324 17.3701C4.591 17.0851 5.0125 16.7871 5.581 16.4981C5.8655 16.3531 6.174 16.2171 6.5 16.0906V20.0001H7.5V15.7451Z"
            fill="#034BA1"
          />
        </svg>
      </span>
    ),
    heading: "Civil Engineering Mastery",
    text: "Within our skilled team, leaders in civil engineering contracting, we are sculpting the future with expertise infused into every brick and beam. Witness the craftsmanship that molds tomorrow's infrastructure",
  },
  {
    icon: (
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5.5C7.3056 5.5 3.5 9.40735 3.5 14.2273V17.5H20.5V14.2273C20.5 9.40735 16.6944 5.5 12 5.5Z"
            stroke="#034BA1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 17.5H2V20.5H22V17.5Z"
            stroke="#034BA1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 3H10.5V12H13.5V3Z"
            stroke="#034BA1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    ),
    heading: "Geotechnical Insights",
    text: "Our geotechnical services are a gateway to unraveling Earth's hidden mysteries, all while guaranteeing foundations that are not only safer but also stronger. Delve into the depths of discovery for secure and resilient structures",
  },
  {
    icon: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.0419 1.33887L2.1084 6.49512H21.8908L19.9573 1.33887H4.0419ZM5.57771 7.33887V15.5921C9.14134 16.9454 14.8578 16.9454 18.4215 15.5921V7.33887H17.5777V13.7808C17.2421 13.6092 16.8296 13.4691 16.3446 13.3479C15.2098 13.0642 13.6849 12.896 11.9996 12.896C11.6316 12.896 11.2718 12.9044 10.9215 12.9199C10.9207 12.3569 10.9216 11.794 10.9233 11.2309L12.0489 8.41699H11.1582L10.0777 11.1184V12.9731C9.16234 13.0486 8.33748 13.1771 7.6546 13.3479C7.16963 13.4691 6.75709 13.6093 6.42146 13.7808V7.33887H5.57771ZM9.74959 8.41699V9.16699H9.94956L10.2496 8.41699H9.74959ZM12.9577 8.41699L11.7577 11.417H12.5952L13.7953 8.41699H12.9577ZM3.74959 9.49512V10.3389H4.73396V9.49512H3.74959ZM7.26521 9.49512V10.3389H9.23396V9.49512H7.26521ZM14.2726 9.49512L13.5039 11.417H14.2496V10.3389H16.734V9.49512H14.2726ZM19.2652 9.49512V10.3389H19.8277V14.0889H22.4996V13.2451H20.6715V9.49512H19.2652ZM11.9996 13.7396C13.6279 13.7396 15.1031 13.9072 16.1399 14.1664C16.6583 14.296 17.0678 14.4519 17.3134 14.597C17.5186 14.7183 17.5649 14.8045 17.5748 14.8178C17.5766 14.8151 17.5778 14.8144 17.5778 14.8178C17.5778 14.8212 17.5767 14.8204 17.5748 14.8178C17.5649 14.8311 17.5185 14.9172 17.3134 15.0384C17.0678 15.1836 16.6584 15.3396 16.14 15.4692C15.1032 15.7284 13.628 15.8959 11.9997 15.8959C10.3713 15.8959 8.89618 15.7284 7.8594 15.4692C7.34096 15.3396 6.93151 15.1836 6.68588 15.0384C6.48071 14.9172 6.4344 14.8311 6.42451 14.8178C6.42263 14.8204 6.42151 14.8212 6.42151 14.8178C6.42151 14.8144 6.42259 14.8151 6.42451 14.8178C6.43435 14.8045 6.48076 14.7183 6.68584 14.597C6.93146 14.4519 7.34091 14.296 7.8593 14.1664C8.46704 14.0144 9.22618 13.8943 10.0777 13.8206V15.1669H10.9215V13.7649C11.271 13.7486 11.6311 13.7396 11.9996 13.7396V13.7396ZM18.4215 16.4896C16.8765 17.0341 15.0488 17.353 13.1715 17.4466V18.7333C15.0877 18.6385 16.9402 18.3098 18.4215 17.7472V16.4896ZM5.57771 16.4905V17.7482C6.04412 17.9252 6.54723 18.0792 7.07771 18.21V16.9293C6.55538 16.8044 6.05321 16.6581 5.57771 16.4905ZM7.92146 17.1094V18.3941C9.3024 18.6593 10.8203 18.781 12.3277 18.7602V17.4736C10.8282 17.4944 9.32021 17.3736 7.92146 17.1094V17.1094ZM18.4215 18.6458C18.1737 18.7331 17.9236 18.8135 17.6715 18.887V20.0663C17.9242 19.9893 18.1744 19.9039 18.4215 19.8103V18.6458ZM5.57771 18.6462V19.81C6.86462 20.2987 8.43193 20.6107 10.0777 20.7466V19.5541C8.46652 19.4209 6.91599 19.118 5.57771 18.6463V18.6462ZM16.8277 19.1074C15.0001 19.5334 12.9353 19.6997 10.9215 19.6075V20.8002C12.9474 20.8925 15.0373 20.7246 16.8277 20.2951V19.1074ZM5.57771 20.7084C5.65468 21.1375 5.97277 21.5327 6.32771 21.7257V20.9496C6.07553 20.8761 5.82543 20.7957 5.57771 20.7083V20.7084ZM18.4215 20.7087C17.8215 20.9202 17.1793 21.0983 16.5074 21.2418V22.1666C17.2817 21.9672 18.4103 21.4529 18.4215 20.7087ZM7.17146 21.1699V22.0735C8.75818 22.5074 10.6194 22.6557 11.9996 22.661C13.3676 22.661 14.6299 22.5501 15.6636 22.3566V21.4018C12.9139 21.8596 9.7974 21.7822 7.17146 21.1699Z"
            fill="#034BA1"
          />
        </svg>
      </span>
    ),
    heading: "Borehole Drilling Precision",
    text: "Our borehole drilling endeavors reach deep into the Earth's resources, yielding sustainable water solutions that quench the thirst of today while preserving the future. Unearth the essence of sustainability in our water solutions",
  },
  {
    icon: (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_299_5296)">
            <path
              d="M24 14.9999V23.9999H12V14.9999H15V11.9999H21V14.9999H24ZM16.5 14.9999H19.5V13.4999H16.5V14.9999ZM22.5 19.4999H21V20.9999H19.5V19.4999H16.5V20.9999H15V19.4999H13.5V22.4999H22.5V19.4999ZM22.5 16.4999H13.5V17.9999H22.5V16.4999ZM18.3398 10.4999C17.918 10.0233 17.418 9.65613 16.8398 9.39832C16.2617 9.1405 15.6484 9.00769 15 8.99988C14.375 8.99988 13.793 9.11707 13.2539 9.35144C12.7148 9.58582 12.2383 9.90613 11.8242 10.3124C11.4102 10.7186 11.0859 11.1991 10.8516 11.7538C10.6172 12.3085 10.5 12.8905 10.5 13.4999C10.5 14.2186 10.3398 14.8944 10.0195 15.5272C9.69922 16.16 9.24609 16.6913 8.66016 17.121C9.01172 17.3007 9.33984 17.5077 9.64453 17.7421C9.94922 17.9764 10.2344 18.2421 10.5 18.5389V22.4999C10.5 21.8827 10.3828 21.3007 10.1484 20.7538C9.91406 20.2069 9.59375 19.7303 9.1875 19.3241C8.78125 18.9178 8.30078 18.5936 7.74609 18.3514C7.19141 18.1093 6.60938 17.9921 6 17.9999C5.375 17.9999 4.79297 18.1171 4.25391 18.3514C3.71484 18.5858 3.23828 18.9061 2.82422 19.3124C2.41016 19.7186 2.08594 20.1991 1.85156 20.7538C1.61719 21.3085 1.5 21.8905 1.5 22.4999H0C0 21.9296 0.078125 21.3788 0.234375 20.8475C0.390625 20.3163 0.613281 19.8124 0.902344 19.3358C1.19141 18.8593 1.54297 18.4374 1.95703 18.0702C2.37109 17.703 2.83203 17.3866 3.33984 17.121C2.76172 16.6991 2.3125 16.1718 1.99219 15.5389C1.67188 14.9061 1.50781 14.2264 1.5 13.4999C1.5 12.8827 1.61719 12.3007 1.85156 11.7538C2.08594 11.2069 2.40625 10.7303 2.8125 10.3241C3.21875 9.91785 3.69531 9.59363 4.24219 9.35144C4.78906 9.10925 5.375 8.99207 6 8.99988C6.71875 8.99988 7.39453 9.16003 8.02734 9.48035C8.66016 9.80066 9.19141 10.2538 9.62109 10.8397C9.91797 10.2538 10.2969 9.73035 10.7578 9.26941C11.2188 8.80847 11.7461 8.42566 12.3398 8.12097C11.7617 7.6991 11.3125 7.17175 10.9922 6.53894C10.6719 5.90613 10.5078 5.22644 10.5 4.49988C10.5 3.88269 10.6172 3.30066 10.8516 2.75378C11.0859 2.20691 11.4062 1.73035 11.8125 1.3241C12.2188 0.917847 12.6953 0.593628 13.2422 0.35144C13.7891 0.109253 14.375 -0.00793457 15 -0.00012207C15.6172 -0.00012207 16.1992 0.117065 16.7461 0.35144C17.293 0.585815 17.7695 0.906128 18.1758 1.31238C18.582 1.71863 18.9062 2.1991 19.1484 2.75378C19.3906 3.30847 19.5078 3.8905 19.5 4.49988C19.5 5.21863 19.3398 5.89441 19.0195 6.52722C18.6992 7.16003 18.2461 7.69128 17.6602 8.12097C18.1914 8.3866 18.6719 8.71863 19.1016 9.11707C19.5312 9.5155 19.8945 9.97644 20.1914 10.4999H18.3398ZM6 16.4999C6.41406 16.4999 6.80078 16.4218 7.16016 16.2655C7.51953 16.1093 7.83984 15.8944 8.12109 15.621C8.40234 15.3475 8.61719 15.0311 8.76562 14.6718C8.91406 14.3124 8.99219 13.9218 9 13.4999C9 13.0858 8.92188 12.6991 8.76562 12.3397C8.60938 11.9803 8.39453 11.66 8.12109 11.3788C7.84766 11.0975 7.53125 10.8827 7.17188 10.7343C6.8125 10.5858 6.42188 10.5077 6 10.4999C5.58594 10.4999 5.19922 10.578 4.83984 10.7343C4.48047 10.8905 4.16016 11.1053 3.87891 11.3788C3.59766 11.6522 3.38281 11.9686 3.23438 12.328C3.08594 12.6874 3.00781 13.078 3 13.4999C3 13.9139 3.07812 14.3007 3.23438 14.66C3.39062 15.0194 3.60547 15.3397 3.87891 15.621C4.15234 15.9022 4.46875 16.1171 4.82812 16.2655C5.1875 16.4139 5.57812 16.4921 6 16.4999ZM12 4.49988C12 4.91394 12.0781 5.30066 12.2344 5.66003C12.3906 6.01941 12.6055 6.33972 12.8789 6.62097C13.1523 6.90222 13.4688 7.11707 13.8281 7.2655C14.1875 7.41394 14.5781 7.49207 15 7.49988C15.4141 7.49988 15.8008 7.42175 16.1602 7.2655C16.5195 7.10925 16.8398 6.89441 17.1211 6.62097C17.4023 6.34753 17.6172 6.03113 17.7656 5.67175C17.9141 5.31238 17.9922 4.92175 18 4.49988C18 4.08582 17.9219 3.6991 17.7656 3.33972C17.6094 2.98035 17.3945 2.66003 17.1211 2.37878C16.8477 2.09753 16.5312 1.88269 16.1719 1.73425C15.8125 1.58582 15.4219 1.50769 15 1.49988C14.5859 1.49988 14.1992 1.578 13.8398 1.73425C13.4805 1.8905 13.1602 2.10535 12.8789 2.37878C12.5977 2.65222 12.3828 2.96863 12.2344 3.328C12.0859 3.68738 12.0078 4.078 12 4.49988Z"
              fill="#034BA1"
            />
          </g>
          <defs>
            <clipPath id="clip0_299_5296">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    ),
    heading: "Project Management Excellence",
    text: "Guided by our project management expertise, your vision evolves from its initial concept to a flawless completion with unwavering precision. Witness your dreams seamlessly unfold under our meticulous guidance",
  },
];
const bottomArrayImages = [
  "../what0.png",
  "../what1.png",
  "../whatimage3.png",
  "../whatimage1.png",
  "../whatimage2.png",
];
function WhatHeroSection() {
  return (
    <Container paddingType="cover">
      <div className={styles.whatHerosection}>
        <div className={styles.content}>
          <h3>Building Tomorrow&apos;s Reality with Expertise</h3>
          <p>
            Crafting Your Visions, One Project at a Time, with Dedication and
            Expertise
          </p>
        </div>
      </div>
      <div className={styles.heromsg}>
        <h3>What We Do</h3>
        <p>
          Discover Our Comprehensive Range of Services, Tailored to Meet Your
          Construction Needs
        </p>
      </div>
      <WhatTopCards topArray={topArray} />
      <WhatBottomCards bottomArray={bottomArrayImages} />
    </Container>
  );
}

export default WhatHeroSection;