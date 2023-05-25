import Image from 'next/image'
import Link from 'next/link'
import styles from './app.module.css'
export const metadata = {
  title: 'About Page',
  description: 'it is about page',
}
export default function About() {
  return (<>
    <main className={styles.main}>
      About
      <Link href='/'>
        Main
      </Link>
    </main>
  </>

  )
}
