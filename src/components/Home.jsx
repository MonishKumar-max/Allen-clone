import logo from "../assets/Banner2.webp";
import one from "../assets/live.webp";
import two from "../assets/Classroom.webp";
import three from "../assets/3rd.png";
import four from "../assets/4th.png";
import Trending from "../assets/Trending1.png";
import staricon from "../assets/staricon.png";
import { CourseCard } from "./Coursecard";
import { useState } from "react";
import StudentProfile from "./Studentprofile";


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
          <Stars />

        </div>
      </div>
    </>
  );
}


function Stars() {
  const [isOpen, setIsOpen] = useState('All');
  return <>
    <div>
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
          <button className={isOpen == 'All' ? 'phoneButton' : 'white'} style={{ height: '36px', width: '52px' }} onClick={() => setIsOpen('All')}>
            ALL
          </button>
        </div>
        <div style={{ paddingLeft: "8px", paddingTop: "8px" }}>
          <button className={isOpen == 'Neet' ? 'phoneButton' : 'white'} style={{ height: '36px', width: '55px' }} onClick={() => setIsOpen('Neet')}> NEET</button>
        </div>
        <div style={{ paddingLeft: "8px", paddingTop: "8px" }}>
          <button className={isOpen == 'Jee' ? 'phoneButton' : 'white'} style={{ height: '36px', width: '45px' }} onClick={() => setIsOpen('Jee')}> JEE</button>
        </div>
        <div style={{ paddingLeft: "8px", paddingTop: "8px" }}>
          <button className={isOpen == 'Classes' ? 'phoneButton' : 'white'} style={{ height: '36px', width: '110px' }} onClick={() => setIsOpen('Classes')}>CLASSES 6-10</button>
        </div>
        <div>
        </div>
      </div>
      {(isOpen == "All" || isOpen == "Neet") && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ paddingTop: '64px', paddingLeft: '16px' }}>
              <StudentProfile name="Sarthak Mahesh" image="https://asset.allen.in/20ca6e7e-e6b9-4945-bc30-e1b672e4d102/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=87_SARTHAK_MAHESH_PATIL"
                category="NEET '26" coursetype='DLP' achievement="AIR 14" />
            </div>
            <div style={{ paddingTop: '64px', paddingLeft: '22px' }}>
              <StudentProfile name="Sabyasachi Laskar" image="https://asset.allen.in/f1488e7b-fb40-4670-b069-deb2d4e796a9/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=Sabyasachi-Laskar"
                category="NEET '26" coursetype='Online Classroom Course' achievement="AIR 35" />
            </div>
            <div style={{ paddingTop: '64px', paddingLeft: '22px' }}>
              <StudentProfile name="Atharva Chauhan" image="https://asset.allen.in/34479128-06e1-49df-9b91-8d8990785d8b/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=49_Atharva-Chauhan"
                category="NEET '26" coursetype='Online Classroom Course' achievement="AIR 2213" />
            </div>
            <div style={{ paddingTop: '64px', paddingLeft: '22px' }}>
              <StudentProfile name="Nivedita Manoj" image="https://asset.allen.in/80a3a74d-3231-40c8-8557-23d32c4ed8b3/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=11_Nivedita-Manoj-Nair"
                category="NEET '26" coursetype='Online Classroom Course' achievement="AIR 2213" />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ paddingTop: '64px', paddingLeft: '16px' }}>
              <StudentProfile name="Ansari Jawwad" image="https://asset.allen.in/b5e47f73-3096-40a0-a14d-f99c2083aed3/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=28_Ansari_Jawwad_Mohammed"
                category="NEET '26" coursetype='Online Classroom Course' achievement="AIR 972" />
            </div>
            <div style={{ paddingTop: '64px', paddingLeft: '22px' }}>
              <StudentProfile name="Abhilashi Panda" image="https://asset.allen.in/a78a4a4c-39f1-425d-8491-3118bbe4cc9d/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=ABHILASHA-PANDA"
                category="NEET '26" coursetype='Online Classroom Course' achievement="AIR 225" />
            </div>
            <div style={{ paddingTop: '64px', paddingLeft: '22px' }}>
              <StudentProfile name="Fatima Rashid" image="https://asset.allen.in/724af358-1374-417b-9e1d-64c0f595a92f/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=fatima"
                category="NEET '26" coursetype='Online Classroom Course' achievement="AIR 2454" />
            </div>
            <div style={{ paddingTop: '64px', paddingLeft: '22px' }}>
              <StudentProfile name="Rudraksh Sharma" image="https://asset.allen.in/d696bff9-b788-4260-b6be-5a9272743440/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=34_Rudraksh-Sharma"
                category="NEET '26" coursetype='Online Classroom Course' achievement="AIR 957" />
            </div>
          </div>
        </div>)}

      {(isOpen == "Jee" || isOpen == "All") && (
        <div>Hi</div>
      )}

     {(isOpen=="Classes"||isOpen=="All") &&(
    <div style={{display:'flex'}}>
    <div style={{paddingTop:'64px',paddingLeft:'130px'}}>
    <StudentProfile name="Vedanshi Teotia" image="https://asset.allen.in/3c842ff7-9cf2-4931-8e3b-8590603a3d8b/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=Vedanshi%20Teotia"
      category='SASMO 2026' coursetype='online classroom course' achievement="85/85 Points"/>
    </div>
    <div style={{paddingTop:'64px',paddingLeft:'26px'}}>
    <StudentProfile name="Sarthak Mahesh" image="https://asset.allen.in/20ca6e7e-e6b9-4945-bc30-e1b672e4d102/sc/image_preview_extra_large/secondaryContent.webp?__ar__=1.41&__name__=87_SARTHAK_MAHESH_PATIL"
      category='SASMO 2026' coursetype='DLP' achievement="AIR 14"/>
    </div>
    </div>
     )}
    </div>
  </>
}