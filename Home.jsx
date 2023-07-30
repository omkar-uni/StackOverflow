import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/Leftsidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import '../../App.css'

const Home = () => {
    return (
        <div className='home-conatiner-1'>
            <LeftSidebar />
            <div className="home-conatainer-2">
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}

export default Home