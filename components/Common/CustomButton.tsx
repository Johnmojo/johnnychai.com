import Link from "next/link";

interface Props {
  title: string;
  target: string;
}

const CustomButton = ({ title, target }: Props) => {
  return (
    <Link href={target}>
      <a>
        <div
          className={`mx-auto inline-block rounded-full border border-gray-200 bg-white py-6 px-12 font-semibold transition-all ease-in-out hover:border-blue-700 hover:bg-blue-700 hover:text-white`}
        >
          {title}
        </div>
      </a>
    </Link>
  );
};

export default CustomButton;
