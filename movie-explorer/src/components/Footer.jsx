import { Link } from "react-router";
import { Facebook, Pinterest, TikTok, YouTube } from "../assets/social-icon";
import Logo from "./Logo";

const socialLinks = [
  { media: "Facebook", link: "#", icon: Facebook },
  { media: "YouTube", link: "#", icon: YouTube },
  { media: "TikTok", link: "#", icon: TikTok },
  { media: "Pinterest", link: "#", icon: Pinterest },
];

const Footer = () => {
  return (
    <footer className="py-10 px-4 gap-5 bg-blue-100">
      <div className="flex flex-col sm:flex-row justify-between ">
        <div className="flex-1">
          <Logo />
          <p className="mt-2">
            Discover movies, explore popular and trending titles, and find
            detailed information about your favorite films—all in one simple and
            easy-to-use place.
          </p>
          <h3 className="font-bold text-xl mt-4">Follow Us on</h3>
          <div className="flex gap-2 mt-1">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.media}
                  href={social.link}
                  aria-label={social.media}
                  className="inline-block w-7 h-7"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl">Useful Links</h3>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li className="hover:underline">
              <Link to="#">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="#">Movies</Link>
            </li>
            <li className="hover:underline">
              <Link to="#">About</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl">Contact Us</h3>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li className="hover:underline">
              <Link to="#">Email: movie@gmail.com</Link>
            </li>
            <li className="hover:underline">
              <Link to="#">Phone: 01700000000</Link>
            </li>
            <li className="hover:underline">
              <Link to="#">Address: Road No #6, Sector #6 Uttara, Dhaka</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-5">© 2026 MovieExplorer</p>
    </footer>
  );
};

export default Footer;
