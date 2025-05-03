import { forwardRef } from "react";
import { SVGElementProps } from "../types/svg.type";

const LinkedInIcon = forwardRef<SVGSVGElement, SVGElementProps>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M3.646 15.25H.476V5.057h3.17V15.25ZM2.044 3.694c-.989 0-1.807-.853-1.807-1.875C.237.83 1.055.012 2.044.012c1.022 0 1.84.818 1.84 1.807 0 1.022-.818 1.875-1.84 1.875ZM12.339 15.25v-4.943c0-1.193-.034-2.693-1.67-2.693-1.637 0-1.875 1.261-1.875 2.59v5.046h-3.17V5.057h3.033v1.398h.034c.443-.784 1.466-1.636 3-1.636 3.205 0 3.818 2.113 3.818 4.84v5.591h-3.17Z"
        />
      </svg>
    );
  }
);

LinkedInIcon.displayName = "LinkedInIcon";

const GitHubIcon = forwardRef<SVGSVGElement, SVGElementProps>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      fill="none"
      viewBox="0 0 18 17"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.195 13.503c0 .066-.066.1-.165.1-.1.032-.166-.034-.166-.1s.067-.132.166-.132.165.066.165.132Zm-1.024-.165c.033-.066.132-.099.23-.066.1.033.133.1.133.165a.159.159 0 0 1-.198.066c-.1 0-.165-.099-.165-.165Zm1.486-.033c.066-.033.166.033.166.1.033.065-.034.098-.133.131s-.198 0-.198-.066c0-.099.066-.165.165-.165ZM8.805.62c4.592 0 8.325 3.502 8.325 8.06 0 3.668-2.247 6.806-5.55 7.897-.43.099-.595-.166-.595-.397 0-.264.033-1.652.033-2.742 0-.793-.264-1.288-.562-1.553 1.85-.198 3.8-.462 3.8-3.634 0-.925-.33-1.354-.86-1.949.067-.23.364-1.09-.098-2.246-.694-.231-2.28.892-2.28.892-.66-.198-1.354-.264-2.081-.264-.694 0-1.388.066-2.048.264 0 0-1.62-1.09-2.28-.892C4.147 5.21 4.411 6.07 4.51 6.3c-.529.595-.793 1.024-.793 1.95 0 3.171 1.883 3.435 3.733 3.633-.264.232-.462.595-.528 1.124-.496.231-1.685.594-2.412-.694a1.77 1.77 0 0 0-1.288-.859c-.793 0-.034.529-.034.529.53.23.892 1.189.892 1.189.496 1.486 2.809.991 2.809.991v2.048c0 .198-.133.463-.562.397C3.023 15.485.744 12.347.744 8.679c0-4.558 3.502-8.06 8.06-8.06ZM3.948 12.017c.033-.033.1 0 .166.033.066.066.066.165.033.198-.067.033-.133 0-.199-.033-.033-.066-.066-.165 0-.198Zm-.363-.265c.033-.033.066-.033.132 0s.1.066.1.1c-.034.066-.1.066-.166.032-.066-.033-.1-.066-.066-.132Zm1.057 1.19c.066-.066.165-.033.231.033s.066.165.033.198c-.033.066-.132.033-.198-.033-.099-.066-.099-.165-.066-.198Zm-.363-.496c.066-.033.132 0 .198.066.033.066.033.165 0 .198-.066.033-.132 0-.198-.066s-.066-.165 0-.198Z"
      />
    </svg>
  );
});

GitHubIcon.displayName = "GitHubIcon";

const TwitterIcon = forwardRef<SVGSVGElement, SVGElementProps>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="16"
      fill="none"
      viewBox="0 0 18 16"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="m.399 0 6.6 8.825L.357 16h1.495l5.815-6.282L12.365 16h5.087l-6.971-9.321L16.663 0h-1.495L9.813 5.785 5.486 0H.399Zm2.198 1.101h2.337L15.254 14.9h-2.337L2.597 1.1Z"
      />
    </svg>
  );
});

TwitterIcon.displayName = "TwitterIcon";

const FrontendMentorIcon = forwardRef<SVGSVGElement, SVGElementProps>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        fill="none"
        viewBox="0 0 18 16"
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          d="M17.423 8.389a.553.553 0 0 1-.224-.048l-4.696-2.098a.547.547 0 0 1 0-.997l4.696-2.09a.549.549 0 0 1 .723.276.548.548 0 0 1-.277.72l-3.579 1.593 3.58 1.6a.546.546 0 0 1-.223 1.044ZM11.022 15.999c-5.163 0-9.678-3.477-10.976-8.455a.547.547 0 0 1 1.059-.275 10.242 10.242 0 0 0 9.917 7.639.547.547 0 1 1 0 1.09ZM9.137 11.467a.547.547 0 0 1-.547-.546V.547a.547.547 0 0 1 1.094 0V10.92a.547.547 0 0 1-.547.546Z"
        />
      </svg>
    );
  }
);

FrontendMentorIcon.displayName = "FrontendMentorIcon";

const PatternLight = forwardRef<SVGSVGElement, SVGElementProps>(
  (props, ref) => {
    return (
      <svg
        width="212"
        height="423"
        viewBox="0 0 212 423"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <g clipPath="url(#clip0_2041_1555)">
          <mask
            id="mask0_2041_1555"
            style={{
              maskType: "luminance",
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="423"
            height="423"
          >
            <path d="M423 0H0V423H423V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_2041_1555)">
            <path
              d="M303.718 330.074L211.499 422.293L119.281 330.074L211.499 237.855L303.718 330.074ZM185.144 211.499L92.9248 303.718L0.707031 211.499L92.9248 119.281L185.144 211.499ZM422.293 211.499L330.074 303.718L237.855 211.499L330.074 119.281L422.293 211.499ZM303.718 92.9248L211.499 185.144L119.281 92.9248L211.499 0.707031L303.718 92.9248Z"
              stroke="url(#paint0_linear_2041_1555)"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2041_1555"
            x1="211.5"
            y1="0"
            x2="211.5"
            y2="423"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E5E3E1" />
            <stop offset="1" stopColor="#EFEDEB" stopOpacity="0.2" />
          </linearGradient>
          <clipPath id="clip0_2041_1555">
            <rect width="423" height="423" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

PatternLight.displayName = "PatternLight";

const PatternDark = forwardRef<SVGSVGElement, SVGElementProps>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="423"
      height="423"
      fill="none"
      viewBox="0 0 423 423"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#a)">
        <mask
          id="b"
          width="423"
          height="423"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M423 0H0v423h423V0Z" />
        </mask>
        <g mask="url(#b)">
          <path
            stroke="url(#c)"
            d="M330.075 303.718 237.856 211.5l92.219-92.218 92.218 92.218-92.218 92.218Zm-237.15 0L.707 211.5l92.219-92.218 92.218 92.218-92.219 92.218ZM211.5 422.293l-92.218-92.218 92.218-92.219 92.218 92.219-92.218 92.218Zm0-237.149-92.218-92.219L211.5.707l92.218 92.219-92.218 92.218Z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="c"
          x1="289"
          x2="226.5"
          y1="37.5"
          y2="383"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#34302D" />
          <stop offset="1" stopColor="#292725" stopOpacity=".2" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h423v423H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

PatternDark.displayName = "PatternDark";

export {
  LinkedInIcon,
  GitHubIcon,
  TwitterIcon,
  FrontendMentorIcon,
  PatternLight,
  PatternDark,
};
