import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer className="footer">
            <div className="container mt-5">
            <div className="row py-5">
                <div className="col-md">
                    <h5>About Us</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-square ms-3"></i>
                    </p>
                </div>
                <div className="col-md col-6">
                    <p>Experience</p>
                    <p>Concern</p>
                    <p>Skin Type</p>
                    <p>Accessories</p>
                    <p>Bath and Beyond</p>
                </div>
                <div className="col-md col-6">
                    <p>Subscription</p>
                    <p>Quiz</p>
                    <p>Contact Us</p>
                </div>
                <div className="col-md">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                </div>
                <div className="col-md">
                    <p><i className="fas fa-equals"></i></p>
                    <p>1772 Nevskaya Street NW, Suite 21389, Atlanta, GA 902344</p>
                    <p> <Link to="/">hello@wipro.com</Link> </p>
                    <p>Copyright © 2020. All rights reserved.</p>
                </div>
            </div>
        </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: #ebe8dd;
    .fa-equals{
        font-size: 1.25rem;
        color: #ffffff;
        padding: 12px;
        font-weight: 800;
        background-color: #6e38f7;
        border-radius: 50%;
    }
    .fab {
        font-family: "Font Awesome 6 Brands";
        font-weight: 800;
        font-size: 1.375rem;
    }
    h5{
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.22;
        letter-spacing: normal;
        color: #1d1d2c;
    }
    p, a{
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        color: #1d1d2c;
    }
`;

export default Footer
