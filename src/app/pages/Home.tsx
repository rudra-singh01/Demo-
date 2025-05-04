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

const Home = () => {
    return (
        <div>
            <main className="relative min-h-screen overflow-hidden">
                <CustomCursor />
                <Header />
                {/* <SocialSidebar /> */}
                <HeroSection />
                <About/>
                <Video/>
                <WebDesignService/>
                <FeaturedWorks/>
                <AwardsSection/>
            </main>
        </div>
    )
}

export default Home