import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link className={iconStyles} href={social.path} key={index}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
