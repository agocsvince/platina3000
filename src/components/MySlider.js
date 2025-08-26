import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySlider = props => {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const url = `https://api-eu-central-1.graphcms.com/v2/ckwq5z05y2e8n01xmgomm92ka/master?query=query%20MyQuery%20%7B%0A%20%20sliders%20%7B%0A%20%20%20%20pictures%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%09url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=MyQuery`;
        fetch(url)
        .then(res => res.json())
        .then(json => setSlider(json.data.sliders[0].pictures));

        return () => {
            setSlider([])
        }
    }, []);

    return (
        <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            watchSlidesProgress={true}
            preloadImages={false}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            pagination={{ clickable: true }} 
            navigation={true}>
            {slider.map(slide => (
                <SwiperSlide className='swiper-slide' key={slide.id} ><div style={{backgroundImage:"url(" + slide.url + ")"}}></div></SwiperSlide>
            ))}
        </Swiper>
    )
}

export default MySlider;