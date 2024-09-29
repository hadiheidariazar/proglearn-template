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
import AdminPanel from "./Pages/AdminPanel/Index";
import MainPage from "./Pages/AdminPanel/MainPage/MainPage";
import AdminCourses from "./Pages/AdminPanel/AdminCourses/AdminCourses";
import AdminSessions from "./Pages/AdminPanel/AdminSessions/AdminSessions";
import Menus from "./Pages/AdminPanel/Menus/Menus";
import AdminArticles from "./Pages/AdminPanel/AdminArticles/AdminArticles";
import Draft from "./Components/Draft";
import Users from "./Pages/AdminPanel/Users/Users";
import AdminComments from "./Pages/AdminPanel/AdminComments/AdminComments";
import AdminDiscount from "./Pages/AdminPanel/AdminDiscount/AdminDiscount";
import AdminContactUsTickets from "./Pages/AdminPanel/AdminContactUsTickets/AdminContactUsTickets";
import AdminCategories from "./Pages/AdminPanel/AdminCategories/AdminCategories";

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
    {
        path: '/my-account/*', element: <UserPanel />, children: [
            { path: '', element: <Counter /> },
            { path: "courses", element: <UserCourses /> },
            { path: "tickets", element: <UserTickets /> },
            { path: "details", element: <UserDetails /> },
        ]
    },
    {
        path: '/panel-admin/*', element: <AdminPanel />, children: [
            { path: "", element: <MainPage /> },
            { path: "courses", element: <AdminCourses /> },
            { path: "sessions", element: <AdminSessions /> },
            { path: "menus", element: <Menus /> },
            { path: "articles", element: <AdminArticles /> },
            { path: "articles/draft/:shortName", element: <Draft /> },
            { path: "users", element: <Users /> },
            { path: "comments", element: <AdminComments /> },
            { path: "discount-codes", element: <AdminDiscount /> },
            {path: "categories", element: <AdminCategories />},
            { path: "contact-us-tickets", element: <AdminContactUsTickets /> },
        ]
    },
]

export default routes