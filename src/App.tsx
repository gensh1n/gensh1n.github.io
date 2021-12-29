import "./resource/style.css";
import qiqi from "./resource/qiqi.png";

const App = () => {
  return (
    <div>
      <img
        src={qiqi}
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
          height: "70%",
          width: "auto",
        }}
        alt="치치"
      />
      <h1 style={{ left: "30%", top: "10%", color: "#bd2626" }}>픽</h1>
      <h1 style={{ left: "70%", top: "10%", color: "#bd2626" }}>뚫</h1>
      <h1
        style={{ left: "30%", top: "70%", color: "#4F33FF" }}
        className="qiqi"
      >
        치
      </h1>
      <h1
        style={{ left: "70%", top: "70%", color: "#4F33FF" }}
        className="qiqi"
      >
        치
      </h1>
    </div>
  );
};

export default App;