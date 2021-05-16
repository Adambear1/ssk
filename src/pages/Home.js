import React, {useState} from 'react'
import BulletinBoard from '../components/BulletinBoard'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
    const [display, setDisplay] = useState(null)
    return (
        <>
            <Header/>
            <BulletinBoard/>
            <Footer setDisplay={setDisplay} display={display}/>
        </>
    )
}

export default Home
