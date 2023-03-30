import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './slider.css'

const Slider = ({slides}) => {
    return (
        <div className="container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                effect={"cube"}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
            >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} >
                    <img style={{ cursor: "grab"}} src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
            </Swiper>
    </div>
    )
}

export default Slider