import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import logo from "./assets/Banner2.webp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function Home() {
  return (
    <>
      <div
        style={{
          paddingTop: "80px",
          height: "100%",
          backgroundColor: "#EDF2FA",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "200px",
          }}
        >
          <img src={logo} style={{ height: "400px", width: "1000px" }}></img>
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            paddingLeft: "125px",
            paddingTop: "100px",
          }}
        >
          Explore Courses
        </div>
      </div>
    </>
  );
}
export default App;
