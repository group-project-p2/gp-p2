import logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('userName')
    navigate('/login')
  }

  return (
    <div
      style={{
        height: "80px",
        width: "100%",
        position: "fixed",
        zIndex: 60,
        backgroundColor: "#0b1b26",
      }}
      className="row px-3 py-2 align-items-center shadow-lg text-light"
    >
      <div className="col-4">
        <img style={{ width: "64px" }} src={logo} alt="" />
      </div>
      <div
        style={{ height: "100%" }}
        className="d-flex justify-content-center align-items-center column-gap-3 col-4"
      >
        <Link className="text-light" to={"/"}>
          Home
        </Link>
        <Link className="text-light" to={"#"}>
          Play Game
        </Link>
      </div>
      <div className="d-flex justify-content-end col-4">
        <button className="bg-info rounded p-3 text-light">Login</button>
        <button
        onClick={logout}
          style={{ marginLeft: "10px" }}
          className="bg-danger p-3 rounded text-light"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;