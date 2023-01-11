interface Props {
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill = ({ title, active, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`group flex w-fit max-w-full items-center justify-center space-x-2 whitespace-nowrap rounded-full border border-black px-6 py-[10px] text-black ${
        active && "bg-black text-white"
      }`}
    >
      <div className="text-xs font-medium capitalize md:text-base">{title}</div>
    </button>
  );
};

export default Pill;
