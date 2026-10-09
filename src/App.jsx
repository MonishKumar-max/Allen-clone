import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import logo from "./assets/Banner2.webp";
import one from "./assets/live.webp"
import two from "./assets/Classroom.webp"
import three from "./assets/3rd.png"
import four from "./assets/4th.png"
import Trending from "./assets/Trending1.png"
import { CourseCard } from "./components/Coursecard";
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
    <div>
      <div
        style={{
          paddingTop: "80px",
          height: "1000px",
          backgroundColor: "#EDF2FA",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "140px",
          }}
        >
          <img src={logo} style={{ height: "400px", width: "1000px" ,cursor:'pointer'}}></img>
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

        <div style={{display:'flex'}}>
        <div style={{paddingLeft:'125px',paddingTop:'35px'}}>
        <CourseCard icon={one} section="Live Courses"></CourseCard>
        </div>
         <div style={{paddingLeft:'14px',paddingTop:'35px'}}>
        <CourseCard icon={two} section="Classroom"></CourseCard>
        </div>
        <div style={{paddingLeft:'14px',paddingTop:'35px'}}>
        <CourseCard icon={three} section="Self Study"></CourseCard>
        </div>
        <div style={{paddingLeft:'14px',paddingTop:'35px'}}>
        <CourseCard icon={four} section="Test Series"></CourseCard>
        </div>
        </div>
      </div>
      <div style={{height:'1000px'}}>
        <div style={{fontWeight:'bold',fontSize:'23px',textAlign:'center',paddingTop:'17px'}}>
          What's Trending
        </div>
        <div style={{paddingTop:'18px'}}>
        <img src={Trending} style={{height:'250px',width:'800px',borderRadius:'30px',display: "block",
    margin: "0 auto",cursor:'pointer'}}/>
    </div>
      </div>
      </div>
    </>
  );
}
export default App;
