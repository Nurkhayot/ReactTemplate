import React from 'react'

// Components
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

//Images
import rasm from "../Assets/Images/rasm.jpg";

// SVG
import Apple from "../Components/Lib/Svg/Random";


function Home() {


    return (
        <>
            <Header />

            <img
                className="rasm"
                src={rasm}
                width="100%"
                alt="inforamtion"

            />
            <Apple width={200} height={100} />

            <Footer />
        </>
    )
}

export default Home;