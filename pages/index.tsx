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
        <title>BoilerNext - Home</title>
        <meta name="description" content="BoilerNext - A NextJS - Tailwind - Typescript Boilerplate" />
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
