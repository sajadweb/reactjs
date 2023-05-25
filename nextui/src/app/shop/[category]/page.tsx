import Image from 'next/image'
import Link from 'next/link'
import styles from '../app.module.css'
export const metadata = {
  title: 'Show Blog',
  description: 'it is about page',
}
interface IShowBlog {
  params: {
    category: string
  };

}
export default function ShowBlog(props: IShowBlog) {
  return (
    <main className={styles.main}>
      Show Blog
      <br />
      {props.params.category === 't-shirt' ? <>
        <Link href='/shop/t-shirt/blue'>
          t-shirt blue
        </Link>
        <Link href='/shop/t-shirt/red'>
          t-shirt red
        </Link>
        <Link href='/shop/t-shirt/small'>
          t-shirt small
        </Link>
      </> : <>
        <Link href='/shop/sport/shows'>
          sport shows
        </Link>

      </>}

    </main>
  )
}
