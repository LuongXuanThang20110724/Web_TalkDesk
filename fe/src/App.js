import Header from "./component/Header";
import Footer from "./component/Footer";
import Card from "./component/Card";
import Slider from "./component/Slider";
import Sticky from "./component/Sticky";
import img1 from "./assets/img/Slider/1.png";
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
      {/* <div className="main-content">
        Main Content
        <Card />
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
