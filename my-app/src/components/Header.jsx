import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="my-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex items-center justify-start space-x-10 text-2xl">
        <li>
          <Link className="font-bold text-blue-600 hover:underline" to="/">
            Trang Chủ
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-gray-700 hover:underline" to="#">
            Các Tours Du Lịch
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-gray-700 hover:underline" to="#">
            Các Điểm Đến
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-gray-700 hover:underline" to="#">
            Đặt Tour
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-gray-700 hover:underline" to="/About">
            Về chúng tôi
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Header;