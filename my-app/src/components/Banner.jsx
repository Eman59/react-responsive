import React from 'react';
import styled from 'styled-components';
import "./styles.css";

const Banner = () => {
    return (
        <BannerBG className="position-relative">
            <div className="banner-bg">
                <div className="container d-flex flex-column position-relative justify-content-center">
                    <div className="heading">
                        <h1>
                            Is your bath time about rush and go?
                        </h1>
                    </div>
                    <div className="para">
                        <p>If yes, It’s time for a change.</p>
                        <p className="customWidth">At The Better Bath, we think every bath is an opportunity to unwind, slow down, rejuvenate and start afresh. Pick a shower gel that you deserve and make it a bathing experience to enjoy.</p>
                    </div>
                </div>
            </div>
        </BannerBG>
    )
}

const BannerBG = styled.div`
    .container{
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: normal;
        color: #f7f4e9;
        height: 403px;
        .customWidth{
            max-width: 59%;
        }
    }
    .banner-bg::before{
        content: '';
        background: url(https://mcusercontent.com/b92d2485d10e61be82fefc4e7/images/527adad8-2dc3-4dc1-6502-88aa5d556623.png) 
                no-repeat center center/cover;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 403px;
    }
`;

export default Banner
