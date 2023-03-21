import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'Zenduku/styles/Home.module.css'
import { Divider } from '@chakra-ui/react'
import {BarraPrincipal} from "../containers/BarraPrincipal";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <BarraPrincipal/>        
    </div>
  )
}
