import "./sidebar.scss";

const Sidebar = ({ sidebar, open }) => {
  const toggleSidebar = () => {
    sidebar(!open);
  };

  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-content">
        <h1 className="text-lg font-semibold">Sidebar</h1>
        <nav className="text-sm">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <i className="fa-solid fa-x"></i>
      </button>
    </div>
  );
};

export default Sidebar;
