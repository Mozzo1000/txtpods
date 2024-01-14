import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { useSidebarContext } from "../context/SidebarContext";

const Sidebar = function ({
  theme, children,
}) {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } = useSidebarContext();

  return (
    <div className={`z-10 lg:!block ${isSidebarOpenOnSmallScreens ? "!block" : "hidden"}`}>
      <FlowbiteSidebar theme={theme}>{children}</FlowbiteSidebar>
    </div>
  );
};

export default Object.assign(Sidebar, { ...FlowbiteSidebar });