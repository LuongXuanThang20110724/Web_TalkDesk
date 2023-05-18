import RealTimeDashBoard from "./pages/RealTimeDashBoard";
import Header from "./component/Header";
<<<<<<< HEAD
import { useParams, Routes, Route } from "react-router-dom";
import RemoveSpecialCharacters from "./utils/RemoveSpecialCharacters";

function AppUser() {
  const dict = {
    RealTimeDashboard: { src: <RealTimeDashBoard /> },
    // RealTimeDashboard: { src: <RealTimeDashBoard /> },
  };
  const Element = () => {
    let params = useParams();
    if (params.slug == undefined) return dict.RealTimeDashboard.src;
    params = RemoveSpecialCharacters(params.slug);
    return dict[params].src;
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Element />} />
        <Route path="/:slug" element={<Element />} />
      </Routes>
=======
function AppUser() {
  return (
    <div className="App">
      <Header />
      <RealTimeDashBoard />
>>>>>>> ThangLuong
    </div>
  );
}

export default AppUser;
