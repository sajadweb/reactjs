import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      Main  <Link href='/blog'>
       Blog 
                </Link>
                <Link href='/about'>
       About 
                </Link>
    </main>
  )
}
