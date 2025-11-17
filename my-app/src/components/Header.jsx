export default function Header() {
  return (
    <nav className="bg-gray-800 text-gray-100 p-4 shadow-md fixed w-full top-0 z-50">
      <ul className="flex items-center justify-around font-semibold max-w-5xl mx-auto">
        <li>
          <a
            href="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Booking
          </a>
        </li>
        <li>
          <a
            href="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
