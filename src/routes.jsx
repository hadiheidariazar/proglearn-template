import Article from "./Pages/Article/Article";
import Articles from "./Pages/Articles/Articles";
import Category from "./Pages/Category/Category";
import ContactUs from "./Pages/ContactUs/ContactUs";
import CourseInfo from "./Pages/CourseInfo/CourseInfo";
import Courses from "./Pages/Courses/Courses";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Counter from "./Pages/UserPanel/Counter/Counter";
import UserPanel from "./Pages/UserPanel/Index";
import UserCourses from "./Pages/UserPanel/UserCourses/UserCourses";
import UserDetails from "./Pages/UserPanel/UserDetails/UserDetails";
import UserTickets from "./Pages/UserPanel/UserTickets/UserTickets";

const routes = [
    { path: '', element: <Home /> },
    { path: '/courses', element: <Courses /> },
    { path: '/articles', element: <Articles /> },
    { path: '/article/:articleName', element: <Article /> },
    { path: '/course/:courseName', element: <CourseInfo /> },
    { path: '/category/:categoryName', element: <Category /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/my-account/*', element: <UserPanel />, children: [
        {path: '', element: <Counter />},
        {path: "courses", element: <UserCourses />},
        {path: "tickets", element: <UserTickets />},
        {path: "details", element: <UserDetails />},
    ] }
]

export default routes