import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "../Hamburger";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
  const notFullScreen = useMediaQuery("(max-width: 1024px)");

  const imgSrc = notFullScreen
    ? "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10e5bbc661d246c0117a60_de-logotype.svg"
    : "https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10db9372c981e229f12d3d_de-logotype-vert.svg";

  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.imgWrapper}>
          <Image
            alt="logo image"
            src={imgSrc}
            style={{ objectFit: "cover" }}
            layout="fill"
          />
        </a>
      </Link>

      {notFullScreen ? (
        <Hamburger />
      ) : (
        <div className={styles.modeWrapper}>
          <p>DARK MODE</p>
        </div>
      )}

      <div className={styles.cartTextWrapper}>
        <p>CART</p>
      </div>
    </header>
  );
};

export default Header;
