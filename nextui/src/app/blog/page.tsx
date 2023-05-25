import Image from 'next/image'
import Link from 'next/link'
import styles from './blog.module.css'
export const metadata = {
  title: 'Blog Page',
  description: 'it is blog page',
}
export default function Blog() {
  return (
    <main className={styles.main}>
      Blog 
      <Link href='/blog/create'>
       Create
                </Link>
                <Link href='/blog/1'>
       Blog 1
                </Link>
                <Link href='/blog/2'>
       Blog 2
                </Link>
                <Link href='/blog/3'>
       Blog 3
                </Link>
    </main>
  )
}
