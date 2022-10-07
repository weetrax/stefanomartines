import type { NextPage } from 'next'
import Head from 'next/head'
import ProjectAbsMedical from '../components/Portfolio/ProjectAbsMedical'
import ProjectBadgetor from '../components/Portfolio/ProjectBadgetor'
import ProjectJexchange from '../components/Portfolio/ProjectJexchange'
import ProjectSeekgamers from '../components/Portfolio/ProjectSeekgamers'
import ProjectSnearkArtsMarketplace from '../components/Portfolio/ProjectSnearkArtsMarketplace'
import ProjectTripsti from '../components/Portfolio/ProjectTripsti'
import Container from '../components/_Layout/Container'

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
            <Container>
                <div className="min-h-screen-nav flex items-center">
                    <div className="grid grid-cols-2 gap-5 w-full">
                        <div className="col-span-2 md:col-span-1">
                            <h1 className="hero-title text-gradient text-center md:text-left">
                                Bienvenue dans mon labo !
                                <br />
                                Ici sont regroupés certains de <br /> mes
                                <span className="badge">Projets personnels</span> et
                                <span className="badge">Expérimentations</span>
                            </h1>
                        </div>
                        <div className="col-span-2 md:col-span-1 mt-0 md:-mt-20 mb-10 md:mb-0">
                            <div className="flex justify-center" style={{ minHeight: "200px" }}>
                                <img src="assets/img/projects/tripsti-card.png" alt="Image projet 1" style={{ height: "200px", width: "200px" }} className="object-cover absolute bg-dark rounded-2xl transform scale-110 -translate-x-12 translate-y-36 rotate-6 hoverzindex-1"></img>
                                <img src="assets/img/projects/seekgamers.png" alt="Image projet 2" style={{ height: "200px", width: "200px" }} className="object-cover absolute bg-dark rounded-2xl transform -rotate-6 translate-y-8 hoverzindex-1 translate-x-4"></img>
                                <img src="assets/img/projects/tripsti.png" alt="Image projet 3" style={{ height: "200px", width: "200px" }} className="object-cover absolute bg-dark rounded-2xl transform translate-x-16 translate-y-36 rotate-12 hoverzindex-1"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <ProjectSnearkArtsMarketplace />
                <ProjectBadgetor />
                <ProjectJexchange />
                <ProjectSeekgamers />
                <ProjectTripsti />
                <ProjectAbsMedical />
            </Container>
        </div>
    )
}

export default Home
