import OfferdCOurse from "../pages/Faculty/OfferdCOurse";
import StudentDashboard from "../pages/Student/StudentDashboard";

export const studentPaths = [
    {
        name: "StudentDashboard",
        path: "studentdashboard",
        element: <StudentDashboard/>
    },
    {
        name: "Offercourse",
        path: "offercourse",
        element: <OfferdCOurse/>
    }
]