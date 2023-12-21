import Main from "../Frontend/Home";
import Upcoming from "../Frontend/Home/Upcoming";
import Franchise from "../Frontend/Franchise"
import About from "../Frontend/About"
import Appointment from "../Frontend/Appointment"


const FrontRoutes = [
  {
    path: "main",
    name: "Main",
    element: Main,
  },
  
  {
    path: "franchise",
    name: "Franchise",
    element: Franchise,
  },
  {
    path: "about",
    name: "About",
    element: About,
  },
  {
    path: "appointment-booking",
    name: "Appointment Booking",
    element: Appointment,
  },
  {
    path: "",
    name: "Upcoming",
    element: Upcoming,
  },

];

export default FrontRoutes;
