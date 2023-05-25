import Image from 'next/image'
import Link from 'next/link'
import styles from '../../app.module.css'
export const metadata = {
  title: 'Show Blog',
  description: 'it is about page',
}
interface IShowBlog {
  params: {
    category: string,
    itemId: string
  };

}
export default function ShowCategory(props: IShowBlog) {
  return (
    <main className={styles.main}>
      Show {props.params.category}/{props.params.itemId}
      <br />
    
    </main>
  )
}
