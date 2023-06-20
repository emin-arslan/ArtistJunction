
import HomePage from "./components/home_page/HomePage";
import LoginPage from "./components/LoginPage";
import Navi from "./components/Navi";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserPortal from "./components/user_portal/UserPortal";
import { useEffect, useRef } from "react";
function App() {
  const mainDiv = useRef();
  const location = useLocation();
  console.log(mainDiv.current)
  useEffect(() => {
    if (mainDiv.current) {
      const path = window.location.pathname;
      mainDiv.current.style.backgroundColor = path === "/posts" ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.3)";
    }
  }, [location]);
  return (
    <div ref={mainDiv}
      className="bg-black  2xl:container xl:container md:container lg:container sm:w-full  mx-auto h-screen text-white  "
    >
      {location.pathname !== "/posts" && <Navi/>} 
      <Routes>
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<UserPortal />} />
      </Routes>
    </div>
  );
}

export default App;
