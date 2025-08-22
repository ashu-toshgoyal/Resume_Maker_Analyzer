import './Searchbar.scss';

function Navbar() {
  return (
    <div>
      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <div id="searchbarholder">
          {/* You can add a search icon here if needed */}
          <i className="bi bi-search searchicon" style={{marginRight:'18px',cursor:'pointer'}}></i> 
          <input type="text" placeholder="Search" id="Search" />
        </div>
      </div>

      {/* Notification */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "space-around",
          alignItems: "flex-end",
          position: "absolute",
          right: "60vh",
        }}
        className='Notificationclass'
      >
        <div id="notiandid">
          <div className="noti">
            {/* ICON WILL COME HERE */}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "space-around",
          alignItems: "flex-end",
          position: "absolute",
          right: "52vh",
        }}
        className='Proifleclasss'
      >
        <div id="notiandid">
          <div className="Profile">
            {/* ICON USING JS WILL COME HERE */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
