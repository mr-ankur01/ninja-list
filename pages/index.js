import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home </title>
      <meta name="keywords" content="home" />
    </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit provident, odit repudiandae magni nemo alias! Et laudantium neque voluptatum, tempora ut eos culpa, voluptate doloremque vitae suscipit sequi accusantium? </p>
        <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit provident, odit repudiandae magni nemo alias! Et laudantium neque voluptatum, tempora ut eos culpa, voluptate doloremque vitae suscipit sequi accusantium? </p>
        <Link className={styles.btn} href='/ninjas'>Ninja Listing </Link>
      </div>
    </>
  )
}
