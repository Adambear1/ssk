import React from 'react'
import BulletinBoard from '../components/BulletinBoard'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <>
            <Navbar/>
            <BulletinBoard/>
            <Menu/>
        </>
    )
}

export default Home
