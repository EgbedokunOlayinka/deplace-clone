import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.top}>
          <p>SPRING</p>
        </div>
        <div className={styles.bottom}>
          <p>SUMMER</p>
          <div>
            <p>COLL.</p>
            <p>2022</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgBox}>
          <div>
            <Image 
              alt="men category" 
              src='https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default-p-500.jpeg'
              layout='fill'
              className={styles.img}
            />
          </div>
          <div>
            <p>(01)</p>
            <p>MAN</p>
            <p></p>
          </div>
        </div>
        <div className={styles.imgBox}>
          <div>
            <Image 
              alt="women category" 
              src='https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default-p-500.jpeg'
              layout='fill'
              className={styles.img}
            />
          </div>
          <div>
            <p>(02)</p>
            <p>WMNS</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <Link href='/'>
          <a>EXPLORE</a>
        </Link>
        <div>
          <div>
            <Image 
              alt="cursor outer" 
              src='https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d14818767ac37ac193eccf4_circle-container.svg'
              layout='fill'
              className={styles.img}
            />
          </div>
          <div>
            <Image 
              alt="cursor inner" 
              src='https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d24aa633c6cae18850994a2_arrow.svg'
              layout='fill'
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero