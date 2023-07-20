import './header.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import logo from '../../imgs/logo.png'

// Import swiper images
import img2 from '../../imgs/swiper/WhatsApp Image 2023-07-19 at 2.46.28 PM.jpeg'
import img3 from '../../imgs/swiper/WhatsApp Image 2023-07-19 at 2.47.44 PM.jpeg'

function Header() {
    return (
        <header>
            <Swiper
                className="swiper"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                loop={true}
            >
                <SwiperSlide><img src={img2} alt="swiper images" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="swiper images" /></SwiperSlide>
            </Swiper>
            <img src={logo} className='logo' alt="logo" />
        </header>
    )
}

export default Header