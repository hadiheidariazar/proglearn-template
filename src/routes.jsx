import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";

const routes = [
    { path: '', element: <Home /> },
    { path: '/courses', element: <Courses /> },
]

export default routes