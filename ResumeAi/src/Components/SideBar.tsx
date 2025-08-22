import "./Sidebar.scss";
// Import our custom CSS
// import '../scss/styles.scss'

// Import all of Bootstrap’s JS
// import * as bootstrap from 'bootstrap'

function SideBar() {
  return (
    <>
      <div className="SideBarBody">
        <p style={{color:'#8080801a',cursor:'default'}}>Zenith with Nova</p>
        <div className="SidebarIcons">
          <div>
            <div id="HomeBar">
              <button
                id="Button_Home"
                style={{
                  border: "none",
                  width: "200px",
                  height: "30px",
                  borderRadius: "25px",
                  fontWeight: "100",
                  fontSize: "16px",
                }}>
                    
                <i className="bi bi-house-door-fill iconcss"></i> Home
              </button>
            </div>
            <div id="Profilebar">
              <button
                id="Button_Home"
                style={{
                  border: "none",
                  width: "200px",
                  height: "30px",
                  borderRadius: "25px",
                  fontWeight: "100",
                  fontSize: "16px",
                }}>
                    <i className="bi bi-person-fill iconcss" ></i>Profile
              </button>
            </div>
            <div id="DiscoverBar">
              <button
                id="Button_Home"
                style={{
                  border: "none",
                  width: "200px",
                  height: "30px",
                  borderRadius: "25px",
                  fontWeight: "100",
                  fontSize: "16px",
                }}>
                <i className="bi bi-people-fill iconcss"></i>
                Discover
              </button>
            </div>
            <div id="MessageBar">
              <button
                id="Button_Home"
                style={{
                  border: "none",
                  width: "200px",
                  height: "30px",
                  borderRadius: "25px",
                  fontWeight: "100",
                  fontSize: "16px",
                }}
              >
                <i className="bi bi-chat-fill iconcss"></i>Messages
              </button>
            </div>
            <div id="NotificationBar">
              <button
                id="Button_Home"
                style={{
                  border: "none",
                  width: "200px",
                  height: "30px",
                  borderRadius: "25px",
                  fontWeight: "100",
                  fontSize: "16px",
                }}
              >
                <i className="bi bi-bell-fill iconcss"></i>Notification
              </button>
            </div>
            <div id="SettingBar">
              <button
                id="Button_Home"
                style={{
                  border: "none",
                  width: "200px",
                  height: "30px",
                  borderRadius: "25px",
                  fontWeight: "100",
                  fontSize: "16px",
                }}
              >
               <i className="bi bi-gear-fill iconcss"></i> Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBar;
