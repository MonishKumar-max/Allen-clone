import arrow from "../assets/arrowicon.png"
export default function StudentProfile(props) {
    return (
        <div
            style={{
                width: "290px",
                height: "100px",
                backgroundColor: "#F7F9FF",
                border: "1px solid #C9C9C9",
                borderRadius: "20px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginTop: '-45px',
                display: 'flex'
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "120px",
                    height: "100px",
                    flexShrink: 0,
                    overflow: "hidden",
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    alignSelf: "flex-end",
                }}
            >
                <img
                    src={props.image}
                    alt="Student"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "120px",
                        height: "130px",
                        objectFit: "contain",
                        objectPosition: "bottom",
                        display: "block",

                        backgroundColor: '#D5E8FF'

                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "#111",
                        color: "#fff",
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: 800,
                        lineHeight: "20px",
                        whiteSpace: "nowrap",
                        transform: "translateY(3px)",
                        borderBottomLeftRadius: '20px'
                    }}
                >
                    {props.category}
                </div>
            </div>
            <div style={{paddingLeft:'2px'}}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', paddingLeft: '4px', paddingTop: '6px', textOverflow: 'ellipsis' }}>{props.name}</div>
                <div style={{ fontSize: '12px', fontWeight: "600", color: '#555', fontStretch: 'expanded', paddingLeft: '4px', paddingTop: '5px' }}>{props.coursetype}</div>
                <div style={{fontSize:'14px',fontWeight:"600",fontStretch:'expanded',paddingLeft:'4px',paddingTop:'3px'}}>{props.category}</div>
                <div style={{display:'flex',position:'relative'}}>
                    <div style={{ fontSize: '22px', fontWeight: "600", fontStretch: 'expanded', }}>{props.achievement}</div>
                    <span style={{position:'absolute',bottom:'-6px',left:'148px',zIndex:10}}>
                        <img src={arrow} style={{ height: '13px', width: '13px' }}></img>
                    </span>
                </div>
            </div>
        </div>
    );
}
