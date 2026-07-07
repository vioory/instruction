import { useState } from "react";

import logo from "./assets/logo.png";
import miniLogo from "./assets/mini_logo.png";

import { BiSolidShoppingBags } from "react-icons/bi";
import { SlSocialInstagram, SlRefresh } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { PiWarningDiamond } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { TbVirusOff } from "react-icons/tb";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import PageContent from "./PageContent";
import content from "./content.json";

const pages = {
  home: {
    content: content.home,
    nav: null,
    background: IoArrowForwardCircleOutline,
  },

  washing: {
    content: content.washing,
    nav: {
      label: "Mycie",
      icon: IoWaterOutline,
    },
    background: IoWaterOutline,
  },

  cleaning: {
    content: content.cleaning,
    nav: {
      label: "Czyszczenie",
      icon: TbVirusOff,
    },
    background: TbVirusOff,
  },

  maintenance: {
    content: content.maintenance,
    nav: {
      label: "Konserwacja",
      icon: GoShieldCheck,
    },
    background: GoShieldCheck,
  },

  renewal: {
    content: content.renewal,
    nav: {
      label: "Odnowa",
      icon: SlRefresh,
    },
    background: SlRefresh,
  },

  warning: {
    content: content.warning,
    nav: {
      label: "Uwaga!",
      icon: PiWarningDiamond,
      danger: true,
    },
    background: PiWarningDiamond,
  },
};

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <main className="content-container">
        <PageContent
          {...pages[page].content}
          BackgroundIcon={pages[page].background}
        />
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
            href="https://instagram.com/stolarnia_vioory"
            target="_blank"
            rel="noreferrer"
          >
            <SlSocialInstagram className="icon" />
          </a>

          <a
            href="https://etsy.com/pl/shop/StolarniaVIOORY"
            target="_blank"
            rel="noreferrer"
          >
            <BiSolidShoppingBags className="icon icon-red" />
          </a>
        </div>

        <button onClick={() => setPage("home")}>
          <img src={logo} id="logo" alt="logo" />
          <img src={miniLogo} id="mini-logo" alt="logo" />
        </button>

        <nav className="links">
          {Object.entries(pages)
            .filter(([key]) => key !== "home")
            .map(([key, pageData]) => {
              const Icon = pageData.nav.icon;

              return (
                <button
                  key={key}
                  onClick={() => setPage(key)}
                  className={pageData.nav.danger ? "danger-btn" : ""}
                >
                  <Icon
                    className={pageData.nav.danger ? "icon danger-btn" : "icon"}
                  />

                  <span className="link-text">{pageData.nav.label}</span>
                </button>
              );
            })}
        </nav>
      </section>
    </>
  );
}

export default App;
