import T1_Landing from "./component/T1_Landing";
import T1_Sidebar from "./component/T1_Sidebar";

const Template_1 = () => {
  return (
    <div className="flex h-screen w-full bg-white">
      <T1_Sidebar />

      <div className="w-[calc(100vw-200px)]">
        <T1_Landing />
      </div>
    </div>
  );
};

export default Template_1;
