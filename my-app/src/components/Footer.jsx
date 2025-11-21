function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Về Chúng Tôi</h3>
          <p className="text-sm">✈️ TOUR MANAGEMENT SYSTEM</p>
          <p className="text-sm mt-2">Hotline: 0364887965</p>
          <p className="text-sm">Email: tourphuot@gmail.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Trợ Giúp</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-blue-400">
                Câu hỏi thường gặp (FAQ)
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-400">
                Chính sách hoàn tiền
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Khám Phá</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-blue-400">
                Các Tour Nội địa
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-400">
                Cẩm nang du lịch
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Kết Nối Với Chúng Tôi</h3>
          <p className="text-sm mb-4">Theo dõi chúng tôi trên mạng xã hội:</p>
          <p className="text-xs mt-6">
            © 2025 Tour Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;