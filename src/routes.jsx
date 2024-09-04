import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const routes = [
    { path: '', element: <Home /> },
    { path: '/courses', element: <Courses /> },
    { path: '/course/:courseName', element: <CourseInfo /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]

export default routes