import logo from "./assets/logo.png";
import mini_logo from "./assets/mini_logo.png";
import { BiSolidShoppingBags } from "react-icons/bi";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { PiWarningDiamond } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { SlRefresh } from "react-icons/sl";
import { TbVirusOff } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { useState } from "react";
import PageContent from "./PageContent";
import content from "./content.json";

function App() {
  const [page, setPage] = useState("home");

  const backgrounds = {
    home: IoArrowForwardCircleOutline,
    washing: IoWaterOutline,
    cleaning: TbVirusOff,
    maintenance: GoShieldCheck,
    renewal: SlRefresh,
    warning: PiWarningDiamond,
  };

  const navItems = [
    { key: "washing", label: "Mycie", icon: IoWaterOutline, danger: false },
    {
      key: "cleaning",
      label: "Czyszczenie",
      icon: TbVirusOff,
    },
    {
      key: "maintenance",
      label: "Konserwacja",
      icon: GoShieldCheck,
    },
    {
      key: "renewal",
      label: "Odnowa",
      icon: SlRefresh,
    },
    {
      key: "warning",
      label: "Uwaga!",
      icon: PiWarningDiamond,
      danger: true,
    },
  ];

  return (
    <>
      <main className="content-container">
        <PageContent {...content[page]} BackgroundIcon={backgrounds[page]} />
      </main>
      <section className="link-container">
        <div className="contact">
          <a href="tel:+48602367854">
            <BsTelephone className="icon" />
          </a>
          <a href="mailto:vioory@proton.me">
            <MdAlternateEmail className="icon" />
          </a>
          <a
            href="http://www.instagram.com/stolarnia_vioory/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialInstagram className="icon" />
          </a>
          <a
            href="https://www.etsy.com/pl/shop/StolarniaVIOORY?ref=shop_profile&listing_id=4347567752"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiSolidShoppingBags className="icon icon-red" />
          </a>
        </div>
        <button onClick={() => setPage("home")}>
          <img id="logo" src={logo} alt="Logo" />
          <img id="mini-logo" src={mini_logo} alt="Logo" />
        </button>
        <nav className="links">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={item.danger ? "danger-btn" : ""}
              >
                <Icon className={`icon ${item.danger ? "icon-red" : ""}`} />
                <span className="link-text">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </section>
    </>
  );
}

export default App;
