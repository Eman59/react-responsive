import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./styles.css";
import pic1 from "../assets/slider/pic1.png";
import pic2 from "../assets/slider/pic2.png";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="mt-5" style={{ backgroundColor: "#fdefcf" }}>
                <Container className="container">
                    <h2 className="pt-5 pb-4"> Blogs </h2>
                    <Slider {...settings} className="pb-5">
                        <div className="d-flex">
                            <img src={pic1} alt="pic.png" />
                            <div className="details d-flex flex-column justify-content-center ms-3 flex-nowwrap">
                                <h6>Showertime Accessories</h6>
                                <p>Working up a nice, relaxing shower after a long day? Add these essentials to make it a relaxing ritual</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={pic2} alt="pic.png" />
                            <div className="details d-flex flex-column justify-content-center ms-3 flex-nowwrap">
                                <h6>Showertime Accessories</h6>
                                <p>Working up a nice, relaxing shower after a long day? Add these essentials to make it a relaxing ritual</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={pic1} alt="pic.png" />
                            <div className="details d-flex flex-column justify-content-center ms-3 flex-nowwrap">
                                <h6>Showertime Accessories</h6>
                                <p>Working up a nice, relaxing shower after a long day? Add these essentials to make it a relaxing ritual</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={pic2} alt="pic.png" />
                            <div className="details d-flex flex-column justify-content-center ms-3 flex-nowwrap">
                                <h6>Showertime Accessories</h6>
                                <p>Working up a nice, relaxing shower after a long day? Add these essentials to make it a relaxing ritual</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={pic1} alt="pic.png" />
                            <div className="details d-flex flex-column justify-content-center ms-3 flex-nowwrap">
                                <h6>Showertime Accessories</h6>
                                <p>Working up a nice, relaxing shower after a long day? Add these essentials to make it a relaxing ritual</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={pic2} alt="pic.png" />
                            <div className="details d-flex flex-column justify-content-center ms-3 flex-nowwrap">
                                <h6>Showertime Accessories</h6>
                                <p>Working up a nice, relaxing shower after a long day? Add these essentials to make it a relaxing ritual</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={pic1} alt="pic.png" />
                            <div className="details d-flex flex-column justify-content-center ms-3 flex-nowwrap">
                                <h6>Showertime Accessories</h6>
                                <p>Working up a nice, relaxing shower after a long day? Add these essentials to make it a relaxing ritual</p>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    overflow: hidden;
    h2{
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #1d1d2c;
        z-index: 3;
    }
    h6{
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #3cbcc3;
    }
    p{
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.45;
        letter-spacing: normal;
        color: #1d1d2c;
    }
`;