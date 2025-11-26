// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
 const [tour, setTours] = useState([]);
 
 useEffect(() => {
   console.log("Chạy thử 1 lần");
   const getTours = async () => {
  try{
    const{data} = await axios.get("http://localhost:3001/tours")
    setTours(res.data)
  }catch (error){
    console.log(error);

  }
}
getTours()

 }, []);
 
  const tours = [
    {
      id: 1,
      title: "Cát Bà thú vị - 3 Ngày 2 Đêm",
      image:
        "https://sinhcafetour.vn/pic/Tour/CAT-BA_63_637915964181415712_HasThumb.png",
    },
    {
      id: 2,
      title: "Khám phá Tà Xùa - Săn mây tuyệt đẹp",
      image:
        "https://viettrekking.vn/wp-content/uploads/2021/10/tour-leo-nui-ta-xua-viettrekking.jpg",
    },
  
    {
      id: 3,
      title: "Khám phá vườn Quốc Gia Ba Vì",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeT4cTJxiz97Hg6Rg83XviI-6t2p0MFiP6Kw&s",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Header />
      <hr className="mt-5 h-3 border-gray-300" />
      <main>
        <h1 className="font-extrabold text-4xl md:text-5xl text-blue-500 text-center mb-2">
          TN_TRAVEL 
        </h1>
        <h2 className="font-medium text-lg text-gray-700 text-center mb-10">
          Khám Phá Mọi Điểm Đến
          
        </h2>
        <Heading />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 bg-white rounded-xl shadow-lg">
          {tours.map((tour) => (
            <TourCard key={tour.id} title={tour.name} image={tour.image} />
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Home;