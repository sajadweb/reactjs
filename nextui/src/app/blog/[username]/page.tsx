import Image from 'next/image'
import Link from 'next/link'
import styles from '../blog.module.css'
export const metadata = {
  title: 'Show Blog Page',
  description: 'it is blog page',
}
interface IShowBlog {
  params: {
    username: string
  };
  // searchParams: any
  searchParams: {
    page?: number;
    count?: number;
  }

}
export default function ShowBlog(props: IShowBlog) {
  return (
    <main className={styles.main}>
      Show Blog  {props.params.username}<br />
      page=  {props.searchParams?.page} <br />
      count=  {props.searchParams?.count} <br />
      <br />
      {/* {JSON.stringify(props)} */}
      <Link href='/blog'>
        Blog
      </Link>
    </main>
  )
}
