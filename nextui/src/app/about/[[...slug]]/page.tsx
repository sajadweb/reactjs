import Image from 'next/image'
import Link from 'next/link'
import styles from '../app.module.css'
export const metadata = {
  title: 'Show Blog',
  description: 'it is about page',
}
interface IShowBlog {
  params: {
    slug: any
  };
 
}
export default function ShowBlog(props: IShowBlog) {
  return (
    <main className={styles.main}>
      Show Blog 
      <br />
      {JSON.stringify(props)}
      <Link href='/blog'>
        Blog
      </Link>
    </main>
  )
}
