import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="mb-10">
      <h1 className="text-textColor text-8xl font-oswald mb-3">Marcus Adrian Go</h1>
      <div className="flex space-x-4">
        <FaInstagram className="size-10 text-textColor" />
        <FaFacebook className="size-10 text-textColor" />
        <FaTiktok className="size-10 text-textColor" />
        <FaMoneyCheck className="size-10 text-textColor" />
      </div>
    </div>
  );
};

export default Header;
