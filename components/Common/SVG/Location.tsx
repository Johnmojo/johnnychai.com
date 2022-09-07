const Location = () => {
  return (
    <>
      <svg
        width="20"
        height="21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          clipPath="url(#a)"
          strokeWidth="1.667"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M17.5 8.833c0 5.834-7.5 10.834-7.5 10.834s-7.5-5-7.5-10.834a7.5 7.5 0 0 1 15 0Z"
            stroke="currentColor"
          />
          <path
            d="M10 11.333a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            stroke="#101828"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" transform="translate(0 .5)" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Location;
