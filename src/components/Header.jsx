import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="mb-10">
      <h1 className="text-textColor text-8xl font-oswald my-3">
        Marcus Adrian Go
      </h1>
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/marcusadriango"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram className="size-10 text-textColor" />
        </a>
        <a
          href="https://www.facebook.com/marcus.go.35"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook className="size-10 text-textColor" />
        </a>
        <a
          href="https://www.tiktok.com/@marcus.adrian.go"
          target="_blank"
          rel="noopener noreferrer">
          <FaTiktok className="size-10 text-textColor" />
        </a>
        <a
          href="mailto:marcgo314@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <FaMoneyCheck className="size-10 text-textColor" />
        </a>
      </div>
    </div>
  );
};

export default Header;
