import React, { useState } from "react";
//import the Link for routing
import { Link } from "react-router-dom";
//import all the icons necessary for this component
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
//import the css file for this component
import "./Header.css";

//create the react element
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      {/* left div element that holds the icon and youtube logo */}
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="youtube_logo"
            width="100px"
            height="100px"
          />
        </Link>
      </div>

      {/* div element for the center of the header that holds the search field and icon */}
      <div className="header__center">
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <Link to={`/search/${inputSearch}`}>
          {/* clicking on the search icon will use the search keyword inside the input search  */}
          <SearchIcon className="header__searchbutton" />
        </Link>
      </div>

      {/* div element for the right side of the header that holds the other icons and avatar */}
      <div className="header__left">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Amy Marais"
          src="https://avatars.githubusercontent.com/u/81366533?s=400&u=57f806ca5485228861365702fa53d5337fd425e1&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
