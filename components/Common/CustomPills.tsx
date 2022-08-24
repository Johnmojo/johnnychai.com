interface Props {
  title: string;
}

const CustomPills = ({ title }: Props) => {
  return (
    <div className="mx-auto inline-block rounded-full border border-gray-200 bg-white py-3 px-6 font-medium hover:bg-blue-700 hover:text-white">
      {title}
    </div>
  );
};

export default CustomPills;
