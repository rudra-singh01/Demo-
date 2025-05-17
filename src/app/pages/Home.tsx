import React from 'react'
import CustomCursor from '../components/Custom-Cursor'
import Header from '../components/Header'
// import SocialSidebar from '../components/Social-Sidebar'
import HeroSection from '../components/Hero-Section'
import About from '../components/About'
import Video from '../components/Video'
import WebDesignService from '../components/WebDesignService'
import FeaturedWorks from '../components/FeaturedWorks'
import AwardsSection from '../components/AwardsSection'
import Clients from '../components/Clients'
import TeamSection from '../components/TeamSection'
import NewsSection from '../components/NewsSection'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='bg-black'>
            <main className="relative min-h-screen overflow-hidden z-20">
                <CustomCursor />
                <Header />
                {/* <SocialSidebar /> */}
                <HeroSection />
                <About/>
                <Video/>
                <WebDesignService/>
                <FeaturedWorks/>
                <AwardsSection/>
                <Clients/>
                <TeamSection/>
                <NewsSection/>
            </main>
                <Footer/>
        </div>
    )
}

export default Home