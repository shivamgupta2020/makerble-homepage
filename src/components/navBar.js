import searchpic from "../assets/search-logo.png";
import logo from "../assets/logo-fotor-bg-remover-20240110162716.png";
import profilePic from "../assets/man.png";
import notificationPic from "../assets/bell.png";
import chatPic from "../assets/chat.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar
      className="navbar navbar-expand-xl bg-white"
      style={{ paddingRight: "3rem", paddingLeft: "3rem", flex: "1 3 1" }}
    >
      <div className="container-fluid">
        <div className="company">
          <img
            src={logo}
            style={{
              height: "auto",
              maxHeight: "50px",
              width: "auto",
              maxWidth: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ border: "none", backgroundColor: "#dadedf" }} // Remove border
          />

          <button
            className="btn btn-outline-success "
            type="submit"
            style={{
              border: "none",
              "&:hover": {
                backgroundColor: "white",
              },
            }} // Remove border and hover effect
          >
            <img src={searchpic} style={{ width: "20px", height: "20px" }} />
          </button>
        </form>
        <div
          className="profile"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "15rem",
          }}
        >
          <div
            className="chat"
            style={{
              backgroundColor: "#dadedf",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={chatPic}
              style={{
                width: "2rem",
                height: "2rem",
                padding: "auto",
                margin: "auto",
              }}
            />
          </div>
          <div
            className="notification"
            style={{
              backgroundColor: "#dadedf",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={notificationPic}
              style={{ width: "2rem", height: "2rem" }}
            />
          </div>
          <div
            className="profile"
            style={{
              backgroundColor: "#dadedf",
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={profilePic} style={{ width: "2rem", height: "2rem" }} />
          </div>
        </div>
      </div>
    </Navbar>
  );
};
export default NavBar;
