import React from "react";
import "../styles/Sidebar.css";
// icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import SearchIcon from "@material-ui/icons/Search";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import MailIcon from "@material-ui/icons/Mail";
import BookIcon from "@material-ui/icons/Book";
import ListIcon from "@material-ui/icons/List";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// end icons
import { Button } from "@material-ui/core";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active Icon={HomeWorkIcon} text="home" />
      <SidebarOption Icon={SearchIcon} text="search" />
      <SidebarOption Icon={NotificationImportantIcon} text="notification" />
      <SidebarOption Icon={MailIcon} text="mail" />
      <SidebarOption Icon={BookIcon} text="book" />
      <SidebarOption Icon={ListIcon} text="list" />
      <SidebarOption Icon={PermIdentityIcon} text="identity" />
      <SidebarOption Icon={MoreHorizIcon} text="more" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
