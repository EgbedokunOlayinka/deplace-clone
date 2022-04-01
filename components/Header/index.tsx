import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href='/'>
        <a className={styles.imgWrapper}>
          <Image 
            alt='logo image' 
            src='https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10db9372c981e229f12d3d_de-logotype-vert.svg'
            width={50} height={145}
          />
        </a>
      </Link>

      <div className={styles.modeWrapper}>
        <p>DARK MODE</p>
      </div>

      <div className={styles.cartTextWrapper}>
        <p>CART</p>
      </div>
    </header>
  )
}

export default Header