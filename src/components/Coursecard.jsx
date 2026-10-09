export function CourseCard(props) {
  return (
    <>
      <div
        style={{
          width: "230px",
          height: "110px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #C9C9C9",
          borderRadius: "20px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          padding: "18px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <img
          alt=""
          loading="lazy"
          data-testid="shownImage"
          src={props.icon}
          style={{
            display: "block",
            aspectRatio: "1 / 1",
            height:'60px',
            width:'55px',
            marginLeft:'-7px'
          }}
        />
        <div style={{fontWeight:'600',fontSize:'17px',marginLeft:'-7px',paddingTop:'5px'}}>
          {props.section}
        </div>
      </div>
    </>
  );
}
