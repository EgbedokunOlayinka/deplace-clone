import styles from './About.module.scss';
import Link from 'next/link';

const About = () => {
  return (
    <section className={styles.container}>
      <h2>Who we are</h2>
      <p>
        An independent <Link href='/'><a>brand</a></Link> of urban trekking shoes and accessories that comes from a convergence of arts and personalities.
      </p>
    </section>
  )
}

export default About