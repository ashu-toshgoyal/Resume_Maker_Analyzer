import "./HomePost.scss";
import izent from "../assets/izent.png";

function HomePost() {
  const date = new Date();
  const Todate = date.getDate();
  const ToMonth = date.getMonth() + 1; // add +1 since JS months start at 0

  const Myfunction = () => {
    console.log("Clicked");
    alert("Function Triggered ✅");
  };

  return (
    <>
      <div className="MainSquare">
        <div className="PostBox">
          <div className="profleicon">
            <img
              src={izent}
              alt="profile"
              width={47}
              style={{ position: "absolute", top: "-3px" }}
            />
            <h3>
              <u>Zenieth</u>
            </h3>
            <h5>
              <u>
                {Todate}/{ToMonth}/{date.getFullYear()}
              </u>
            </h5>
          </div>
          <br />
          <br />
          <div
            style={{
              height: "10vh",
              width: "50vh",
              position: "absolute",
              top: "9vh",
              left: "8vh",
            }}
            className="ZennithPost"
          >
            <p>
              👋🏼 Welcome to Zeniath — your AI-powered resume companion. Here,
              every resume tells a story, and every story has the power to
              shine. ✨ Explore tools like{" "}
              <a href=""
                onClick={(e) => {
                  e.preventDefault();
                  Myfunction();
                }}>
                <u style={{ color: "#118dc3" }}>Resume Analyzer</u>
              </a>
              ,{" "}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  Myfunction();
                }}
              >
                <u style={{ color: "#118dc3" }}>Text-to-Resume</u>
              </a>
              , and{" "}
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  Myfunction();
                }}
              >
                <u style={{ color: "#118dc3" }}>The Resume Canvas</u>
              </a>{" "}
              to craft and refine your career journey. 🤝 Plus, you can connect
              with friends, share progress, and grow together — because smarter
              careers are built side by side!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePost;
