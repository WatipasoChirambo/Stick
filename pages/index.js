import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact/Contact'
import Hero from '../components/Hero'
import Levels from '../components/Levels'
import Trending from '../components/Trending'
import Sector from '../components/Sector'
import ReMembers from '../components/ReMembers'
import Brief from '../components/Brief'

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero className="px-10"/>
      <Levels/>
      <Trending/>
      <ReMembers/>
      <Brief/>
    </div>
  )
}
