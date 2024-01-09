import Main from "../Frontend/Home";
import Upcoming from "../Frontend/Home/Upcoming";
import Franchise from "../Frontend/Franchise"
import About from "../Frontend/About" 
import Appointment from "../Frontend/Appointment"
import PrivacyPolicy from "../Frontend/PrivacyPolicy"
import shippingPolicy from "../Frontend/ShippingPolicy"
import TermAndCondition from "../Frontend/TermAndCondition"

const FrontRoutes = [
  {
    path: "home",
    name: "Home",
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
    path: "privacy-policy",
    name: "Privacy Policy",
    element: PrivacyPolicy,
  },
  {
    path: "shipping-policy",
    name: "Shipping Policy",
    element: shippingPolicy,
  },
  {
    path: "terms-and-conditions",
    name: "Terms And Conditions",
    element: TermAndCondition,
  },
  {
    path: "",
    name: "Upcoming",
    element: Upcoming,
  },

];

export default FrontRoutes;
