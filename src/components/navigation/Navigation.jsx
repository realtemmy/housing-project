import { useState } from "react";
import Notification from "../Notification/Notification";

import {
  List,
  ListItem,
  Card,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      {<Notification message={""} />}
      <div className="bg-gray-100 relative">
        <section>
          <div className="flex justify-between items-center p-4">
            <button className="block sm:hidden" onClick={toggleSidebar}>
              {isOpen ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
            <p className="text-gray-800 font-semibold">
              Welcome to HouseConnect
            </p>
            <div onClick={handleDropdownToggle}>
              <Avatar
                variant="circular"
                alt="name"
                size="sm"
                src="data:image/jpeg;base64,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"
              />
            </div>
            {/* Navigation Links (Desktop) */}
            <nav className="hidden sm:flex space-x-4">
              <Link to="/" className="hover:text-gray-300">
                Profile
              </Link>
              <Link to="/" className="hover:text-gray-300">
                History
              </Link>
              <Link to="/" className="hover:text-gray-300">
                Settings 
              </Link>
            </nav>
          </div>
        </section>
        {dropdown && (
          <div className="max-w-80 text-right absolute right-0 z-10">
            <Card>
              <List>
                <Link to="/profile">
                  <ListItem>
                    <ListItemPrefix>
                      <i className="fa-solid fa-user"></i>
                    </ListItemPrefix>{" "}
                    Profile
                  </ListItem>
                </Link>
                <Link to="/">
                  <ListItem>
                    <ListItemPrefix>
                      <i className="fa-solid fa-clock-rotate-left"></i>
                    </ListItemPrefix>{" "}
                    History
                  </ListItem>
                </Link>
                <Link to="/">
                  <ListItem>
                    <ListItemPrefix>
                      <i className="fa-solid fa-gear"></i>
                    </ListItemPrefix>{" "}
                    Settings
                  </ListItem>
                </Link>
              </List>
            </Card>
          </div>
        )}

        {/* Sidebar */}
        {isOpen && <Sidebar sidebar={setIsOpen} open={isOpen} />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
