import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Home.module.css'
import HomePage from './home'
import Layout from '@/components/Layout/Layout';



export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  )
}
