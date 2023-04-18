import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Slider from "./component/Slider";
import Sticky from "./component/Sticky";
import img1 from "./assets/img/Slider/1.png";
import img2 from "./assets/img/Slider/2.jpg";
import img3 from "./assets/img/Slider/3.jpg";

import ChatBox from "./component/Chatbox";
function App() {
  return (
    <div className="App">
      <Header />
      <Sticky />
      <Slider
        bgParent={"bg-gray"}
        text={
          "Talkdesk recognized as a Customers' Choice in the 2023 Gartner® Peer Insights™ 'Voice of the Customer’ for CCaaS."
        }
        positionOfImg="right"
        img={img1}
        button={[{ type: 1, name: "GET THE REPORT" }]}
      />
      <div
        style={{
          textAlign: "center",
          background: "#180136",
          padding: "30px 0",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Talkdesk named a Leader in the Gartner® Magic Quadrant™ for CCaaS for
        the 4th consecutive year.{" "}
        <span style={{ color: "#3ae8d9" }}>Download Now</span>
      </div>
      <Slider
        text={"Deliver a better customer experience."}
        subText="Create a seamless customer journey across channels that is fast and frictionless. Explore our automation-first solutions with AI for every day."
        positionOfImg="left"
        img={img2}
        button={[{ type: 1, name: "LEARN MORE" }]}
      />
      <Slider
        bgChild={"bg-gray"}
        text={"We never stop innovating."}
        subText="Each year, we release hundreds of new features, solutions, and integrations to keep our platform ahead of customer experience technology and trends."
        positionOfImg="right"
        img={img3}
        button={[
          { type: 1, name: "SEE OUR INNOVATIONS" },
          { type: 0, name: "EXPLORE SOLUTIONS" },
        ]}
      />
      <ChatBox />
      {/* <div className="main-content">
        Main Content
        <Card />
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
