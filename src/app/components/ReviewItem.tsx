import { Swiper, SwiperSlide } from 'swiper/react';


export default function ReviewItem(){
    return (
        <SwiperSlide>
            <div className="testimonial-col-01">
                <div className="media">
                    <div className="img">
                        <img src="static/img/team-2.jpg" title="" alt=""/>
                    </div>
                    <div className="media-body p-25px-l">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="tc-info">
                            <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                            <span>Co-founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
}