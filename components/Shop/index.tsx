import CustomLink from '../CustomLink';
import styles from './Shop.module.scss';

const Shop = () => {
  return (
    <section className={styles.container}>
      <div>
        <p>no items found</p>
      </div>

      <div>
        <CustomLink title='shop all' />
      </div>
    </section>
  )
}

export default Shop