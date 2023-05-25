import Image from 'next/image'
import Link from 'next/link'
import styles from '../blog.module.css'
export const metadata = {
  title: 'Create Blog Page',
  description: 'it is blog page',
}
export default function CreateBlog(props:any) {
  return (
    <main className={styles.main}>
      Create Blog Page 
      <Link href='/blog'>
       Blog 
                </Link>
    </main>
  )
}
