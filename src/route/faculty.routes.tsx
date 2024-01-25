import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import OfferdCOurse from "../pages/Faculty/OfferdCOurse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "OfferCourse",
    path: "offercourse",
    element: <OfferdCOurse/>
  },
];
