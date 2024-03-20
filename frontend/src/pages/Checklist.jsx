import SecondPreviousButton from "../components/SecondPreviousButton/SecondPreviousButton";
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
import ChecklistOverview from "../components/ChecklistOverview/ChecklistOverview";

const Checklist = () => {
  return (
    <div className="z-0 h-screen w-screen bg-white bg-cover bg-center dark:bg-black">
      <SecondPreviousButton></SecondPreviousButton>
      <NavigationLinksButton></NavigationLinksButton>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="pb-5 font-primary text-4xl font-bold uppercase tracking-wide mobile:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl dark:text-white">
          Checklists
        </h1>
        <h2 className="pb-6 font-primary text-2xl text-gray-500 mobile:text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl dark:text-gray-200">
          Stay Organised On Tasks While Traveling
        </h2>
        <ChecklistOverview></ChecklistOverview>
      </div>
    </div>
  );
};

export default Checklist;
