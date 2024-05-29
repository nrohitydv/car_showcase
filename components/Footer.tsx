import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-center sm:text-left">
          @2024 Carhub. All Rights Reserved
        </p>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
