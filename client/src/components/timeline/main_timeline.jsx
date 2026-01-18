import Timeline from "../timeline/timeline.jsx";
import MobileViewTimeline from "./mobileview.jsx";

function Main_timeline() {
  return (
    <>
      <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
        <Timeline />
      </div>
      <div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden">
        <MobileViewTimeline />
      </div>
    </>
  );
}

export default Main_timeline;
