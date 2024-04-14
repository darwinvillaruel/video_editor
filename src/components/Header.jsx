import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="text-textColor mb-10">
      <h1 className="text-8xl font-oswald my-3">Marcus Adrian Go</h1>
      <p className="text-3xl font-oswald my-3">👨‍💻 a video editor...</p>

      <div className="flex space-x-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.instagram.com/marcusadriango"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram className="size-10" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.facebook.com/marcus.go.35"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook className="size-10" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.tiktok.com/@marcus.adrian.go"
          target="_blank"
          rel="noopener noreferrer">
          <FaTiktok className="size-10" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="mailto:marcgo314@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <FaMoneyCheck className="size-10" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
