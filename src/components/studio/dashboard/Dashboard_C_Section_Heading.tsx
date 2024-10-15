const Dashboard_C_Section_Heading = ({
  subHeading,
  heading,
}: {
  subHeading?: string;
  heading: string;
}) => {
  return (
    <div className="flex items-end justify-between pr-6">
      <div className="w-fit">
        <div className="font-semibold text-neutral-400">{subHeading}</div>
        <div className="text-[24px] font-semibold">{heading}</div>
        <div className="relative">
          <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard_C_Section_Heading;
