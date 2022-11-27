/**
 * Custom button
 * @date 6th September 2022
 */

import Link from "next/link";

interface Props {
  title: string;
  target: string;
}

const Button = ({ title, target }: Props) => {
  return (
    <Link href={target}>
      <div
        className={`mx-auto inline-block rounded-full border border-black py-6 px-12 font-semibold transition-all ease-in-out hover:border-black hover:bg-black hover:text-white`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Button;
