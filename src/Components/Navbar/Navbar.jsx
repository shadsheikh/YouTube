import "./Navbar.css";

// ---------------importImages-------------------
import menu_icon from "../../assets/menu.png";
// import logo from "../../assets/logo.png";
import logo from "../../assets/youtube.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile_icon from "../../assets/user.jpg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to="/youtube/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="type" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification} alt="" />
        <img className="user-icon" src={profile_icon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
