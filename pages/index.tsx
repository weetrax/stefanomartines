import Container from '../components/_Layout/Container';
import Head from 'next/head';
import type { NextPage } from 'next'
import Hero from '../components/Home/Hero';
import AboutMe from '../components/Home/AboutMe';
import Skills from '../components/Home/Skills';
import TimelineExp from '../components/Home/TimelineExp';
import TimelineStudies from '../components/Home/TimelineStudies';
import Interest from '../components/Home/Interest';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stefano Martines | Portfolio</title>
        <meta name="description" content="Stefano Martines - Personal Portfolio" />
        <meta property="og:title" content="Stefano Martines | Portfolio"></meta>
        <meta property="og:description" content="Personal Portfolio"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container>
        <AboutMe />
        <Skills />
        <TimelineExp />
        <TimelineStudies />
        <Interest />
      </Container>
    </div>
  )
}

export default Home
