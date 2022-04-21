import styles from "./Quotes.module.scss";
import Image from "next/image";

const Quotes = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          alt="quote"
          src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d0b92e20369a4438cd54272_virgolette.svg"
          layout="fill"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <div>
          <p>william gibson</p>
          <p>
            Good things come to those who wait - Deplace maison is what has been
            missing in the modern fashion industry for years. Buy a shoe of high
            quality and design, it finally happened
          </p>
        </div>
        <div>
          <p>jamie k. cohen</p>
          <p>
            Deplace maison is a convincer for anticipation. The urban trekking
            has never seen before an exceptional product that has no equal
            alongside a great team that represent the brand globally
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
