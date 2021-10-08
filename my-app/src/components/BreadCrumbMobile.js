import React from "react";
import "./styles.css";
import styled from "styled-components";
import icon1 from "../assets/mobile/icon-1.png";
import icon2 from "../assets/mobile/icon-2.png";
import icon3 from "../assets/mobile/icon-3.png";
import icon4 from "../assets/mobile/icon-4.png";

const BreadCrumbMobile = () => {
    return (
        <div className="mb-3">
            <nav aria-label="breadcrumb">
                <Container className="container ">
                    <span>Shop By</span>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active">
                            <img src={icon4} alt="" />
                            <p>Experience</p>
                        </li>
                        <li class="breadcrumb-item active">
                            <img src={icon3} alt="" />
                            <p>Concern</p>
                        </li>
                        <li class="breadcrumb-item active">
                            <img src={icon2} alt="" />
                            <p>Skin Type</p>
                        </li>
                        <li class="breadcrumb-item active">
                            <img src={icon1} alt="" />
                            <p>Brand</p>
                        </li>
                    </ol>
                </Container>
            </nav>
        </div>
    );
};

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 5.5rem;
  span{
    text-orientation: sideways-right;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    background-color: #e0606b;
    color: #fff;
    padding-top: 0.813rem;
  }
  .breadcrumb-item::before {
        display: none !important;
    }
  li {
    a {
      text-decoration: none;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      color: #1d1d2c;
    }
    img{
        margin: auto;
        display: block;
    }
    p{
        text-align: center;
        font-size: smaller;
        font-weight: bold;
    }
  }
`;

export default BreadCrumbMobile;
