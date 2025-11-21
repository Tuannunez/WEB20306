export default function Heading({
  label = "Khám phá tour",
  slogan = "Nơi Hành Trình Vô Giá Khởi Đầu. Chọn tour hôm nay, chinh phục ngày mai.",
}) {
  return (
    <div>
      <h1 className="text-blue-500 font-bold uppercase text-4xl">{label}</h1>
      <div className="w-1/7 h-1 bg-blue-500 mt-1"></div>
      <p className="text-xl text-gray-700 mt-8 font-medium">{slogan}</p>
    </div>
  );
}