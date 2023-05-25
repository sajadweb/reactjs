import Image from 'next/image'
import Link from 'next/link'
import styles from './app.module.css'
export const metadata = {
  title: 'About Page',
  description: 'it is about page',
}
export default function Shop() {
  return (<>
    <main className={styles.main}>
      Shop
      <Link href='/shop/t-shirt'>
         T-shirt
      </Link>
      <Link href='/shop/sport'>
        sport
      </Link>
    </main>
  </>

  )
}
