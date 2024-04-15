import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa6";

import { motion } from "framer-motion";

const Header = () => {
  const size = "size-9";

  return (
    <div className="text-textColor mb-10">
      <h1 className="text-8xl font-oswald my-3">Marcus Adrian Go</h1>
      <p className="text-3xl font-oswald my-3">👨‍💻 a video editor...</p>

      <div className="flex space-x-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.instagram.com/marcusadriango"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram">
          <FaInstagram className={size} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.facebook.com/marcus.go.35"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook">
          <FaFacebook className={size} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://www.tiktok.com/@marcus.adrian.go"
          target="_blank"
          rel="noopener noreferrer"
          title="Tiktok">
          <FaTiktok className={size} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="mailto:marcgo314@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email">
          <FaMoneyCheck className={size} />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
