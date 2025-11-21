// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TourCard from "../components/TourCard";
import Heading from "../components/Heading";

function Home() {
  const tours = [
    {
      id: 1,
      title: "Hạ Long Huyền Bí - 3 Ngày 2 Đêm",
      image:
        "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long-1024x576.jpg",
    },
    {
      id: 2,
      title: "Khám phá Phố Cổ Hội An",
      image:
        "https://gocheapv.b-cdn.net/storage/app/media/Travel/h%E1%BB%99i%20an/pho-co-hoi-an.png",
    },
    {
      id: 3,
      title: "Đà Lạt Mộng Mơ - Tour Cắm Trại",
      image:
        "https://samtenhills.vn/wp-content/uploads/2024/11/kinh-nghiem-du-lich-da-lat-1-minh.jpg",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Header />
      <hr className="mt-5 h-3 border-gray-300" />
      <main>
        <h1 className="font-extrabold text-4xl md:text-5xl text-blue-500 text-center mb-2">
          TOUR MANAGEMENT SYSTEM
        </h1>
        <h2 className="font-medium text-lg text-gray-700 text-center mb-10">
          Sẵn Sàng Cất Cánh: Các Điểm Đến Nổi Bật Mà Bạn Không Thể Bỏ Qua Trong
          Mùa Du Lịch Này
        </h2>
        <Heading />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 bg-white rounded-xl shadow-lg">
          {tours.map((tour) => (
            <TourCard key={tour.id} title={tour.title} image={tour.image} />
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