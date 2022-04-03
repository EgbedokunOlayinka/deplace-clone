import styles from './CustomLink.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string
}

const CustomLink = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <a>{ title }</a>
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
  )
}

export default CustomLink