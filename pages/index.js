import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
import ReMembers from '../components/ReMembers'

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero className="px-10"/>
      <Trending className="px-10"/>
      <ReMembers/>
    </div>
  )
}
