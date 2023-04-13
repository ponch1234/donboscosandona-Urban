import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'
import Paragraph from 'components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <LandingHero
        opacity={0.5}
        title="Laboratori artistici"
        description="Diventa adulto con il metodo educativo di don Bosco preparandoti ad entrare a testa alta nel mondo professionale di domani!"
        buttonUrl='john pork'
        buttonText="Guarda il video"
        imageUrl="public/images/home/1661477503563.webp"
      />    
        
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  return {
    props: {
      datiArticoli,
    },
  }
}