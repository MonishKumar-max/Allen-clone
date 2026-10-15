import logo from "../assets/Banner2.webp";
import one from "../assets/live.webp";
import two from "../assets/Classroom.webp";
import three from "../assets/3rd.png";
import four from "../assets/4th.png";
import Trending from "../assets/Trending1.png";
import staricon from "../assets/staricon.png";
import { CourseCard } from "./Coursecard";

export default function Home() {
  return (
    <>
      <div>
        <div
          style={{
            paddingTop: "80px",
            height: "1000px",
            width: "100%",
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
            <img
              src={logo}
              style={{ height: "400px", width: "1000px", cursor: "pointer" }}
            ></img>
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

          <div style={{ display: "flex" }}>
            <div style={{ paddingLeft: "125px", paddingTop: "35px" }}>
              <CourseCard icon={one} section="Live Courses"></CourseCard>
            </div>
            <div style={{ paddingLeft: "14px", paddingTop: "35px" }}>
              <CourseCard icon={two} section="Classroom"></CourseCard>
            </div>
            <div style={{ paddingLeft: "14px", paddingTop: "35px" }}>
              <CourseCard icon={three} section="Self Study"></CourseCard>
            </div>
            <div style={{ paddingLeft: "14px", paddingTop: "35px" }}>
              <CourseCard icon={four} section="Test Series"></CourseCard>
            </div>
          </div>
        </div>
        <div style={{ height: "1000px" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "26px",
              textAlign: "center",
              paddingTop: "17px",
            }}
          >
            What's Trending
          </div>
          <div style={{ paddingTop: "18px" }}>
            <img
              src={Trending}
              style={{
                height: "250px",
                width: "800px",
                borderRadius: "30px",
                display: "block",
                margin: "0 auto",
                cursor: "pointer",
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                fontWeight: "bold",
                paddingLeft: "230px",
                paddingTop: "100px",
                fontSize: "26px",
              }}
            >
              Meet our Stars
            </div>
            <div style={{ paddingTop: "90px", marginLeft: "-4px" }}>
              <img src={staricon} style={{ height: "30px" }}></img>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ paddingLeft: "230px", paddingTop: "8px", }}>
              <button className="phoneButton" style={{height:'36px',width:'52px'}}> ALL</button>
            </div>
            <div style={{ paddingLeft: "8px", paddingTop: "8px"}}>
              <button className="phoneButton"  style={{height:'36px',width:'55px'}}> NEET</button>
            </div>
            <div style={{ paddingLeft: "8px", paddingTop: "8px"}}>
              <button className="phoneButton"  style={{height:'36px',width:'45px'}}> JEE</button>
            </div>
            <div style={{ paddingLeft: "8px", paddingTop: "8px"}}>
              <button className="phoneButton"  style={{height:'36px',width:'110px'}}>CLASSES 6-10</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
