"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import Image from "next/image";


export default function Testimonials(){
    return (
        <section className="section" id="testimonials">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Testimonials</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>


                {/*<div className="owl-carousel" data-items="2" data-nav-dots="true" data-md-items="2" data-sm-items="1"*/}
                {/*     data-xs-items="1" data-xx-items="1" data-space="30">*/}

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className="testimonial-col-01">
                        <div className="media">
                            <div className="img">
                                <Image src="/static/img/team-1.jpg" width="690" height="690" title="" alt=""/>
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

                </Swiper>
                {/*</div>*/}
            </div>
        </section>
    );
}