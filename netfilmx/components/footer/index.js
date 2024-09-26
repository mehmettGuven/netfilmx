import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ♥ by&nbsp;
      <Link href='https://github.com/mehmettGuven' target='_blank'>Mehmet Güven</Link>
    </footer>
  )
}

export default Footer