import React from 'react';
import styles from './SubMenu.module.scss';
import Link from 'next/link'

const SubMenu = () => {
  return (
    <section className={styles.container}>
      <Link href='/'>
        <a>SHOP</a>
      </Link>
      <Link href='/'>
        <a>COLLECTIONS</a>
      </Link>
      <Link href='/'>
        <a>ABOUT</a>
      </Link>
    </section>
  )
}

export default SubMenu