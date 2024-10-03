import Logo from "./Logo";
import instaImage from "../assets/instagram.png";
import whatsappImage from "../assets/whatsapp.png";
import twitterImage from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-gray-700  bottom-0 py-14 px-40 mt-8 max-sm:p-4 max-sm:pt-7 max-sm:self-center">
      <div className="flex gap-28 justify-center max-sm:flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-10 max-sm:text-center ">
        <div>
          <Logo color="white" />
          <div className="flex gap-2 justify-center">
            <img src={instaImage} className="w-6" />
            <img src={twitterImage} className="w-6" />
            <img src={whatsappImage} className="w-6" />
          </div>
          <div className="text-white font-normal">
            Designed by{" "}
            <a href="https://rahulportfolio247.netlify.app">@Rahul Gurjar</a>
          </div>
        </div>
        <div className="ml-12 max-sm:ml-0">
          <div className=" text-white font-medium">Shop</div>
          <div>
            {Shop.map((item) => {
              return (
                <li className="list-none text-gray-400 ">
                  <a href={item.link}>{item.text}</a>{" "}
                </li>
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-white font-medium">Link</div>
          <div>
            {ItemLinks.map((item) => {
              return (
                <li className="list-none text-gray-400">
                  <a href={item.link}>{item.text}</a>{" "}
                </li>
              );
            })}
          </div>
        </div>
        <div>
          <div className="text-white font-medium">Contact</div>
          <div>
            {Address.map((item) => {
              return (
                <li className="list-none text-gray-400">
                  <a href={item.link}>{item.text}</a>{" "}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

interface information {
  text: string;
  link?: string;
}
const Shop: information[] = [
  { text: "About us", link: "/about" },
  { text: "Contact", link: "/Contact" },
  { text: "Location", link: "/Location" },
  { text: "FAQ", link: "/about" },
];

const ItemLinks: information[] = [
  { text: "Electronic", link: "/about" },
  { text: "ALL products", link: "/product" },
  { text: "Asserios", link: "/Asserios" },
];

const Address: information[] = [
  { text: "+918107327289" },
  { text: "Rahul@gmail.com" },
  { text: "Ghasa near Panjab Bank" },
];
