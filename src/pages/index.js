import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import HomePage from './home'




export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}
