import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import userImage from "/home/yosef/Desktop/react folders/React_Social_Media_Project/src/pages/images/image3.jpg";

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className="left">
              <Link to="/" style={{textDecoration:"none"}}>
                <span>SimplexSocial</span>
              </Link>
              <HomeOutlinedIcon/>
              <DarkModeOutlinedIcon/>
              <GridViewOutlinedIcon/>
              <div className="search">
                <SearchOutlined/>
                <input type="text" placeholder="Search..."/>
              </div>
            </div>
            <div className="right">
                <PersonOutlineOutlined/>
                <EmailOutlined/>
                <NotificationsOutlined/>
                <div className="user">
                    <img src={userImage} alt="" />
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar