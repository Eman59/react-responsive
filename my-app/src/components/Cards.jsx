import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from "./data";
import "./styles.css";
import mask from "../assets/arrow/mask.png";

const Cards = () => {

    const [products] = useState(data);

    useEffect(() => {
        console.log(products)
    })

    return (
        <Container className="container mt-4">
            <div className="row">
                {
                    products.map((product, index) => {
                        return (
                            <div class="card col-md-6 mt-4" key={product.id}>
                                <img src={product.img} class="card-img-top" alt="img.png" />
                                <div class="card-body d-flex flex-column justify-content-center" style={{backgroundColor: product.bgColor}}>
                                    <h5 class="card-title">{product.title}</h5>
                                    <p class="card-text">{product.para}</p>
                                    <Link to="/">
                                        <img src={mask} alt="mask.png" />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    .card {
        flex-direction: row-reverse;
        border: none;
        overflow: hidden !important;
        .card-img-top{
            width: 30%;
        }
        .card-body{
            h5{
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #1d1d2c;
            }
            p{
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                color: #1d1d2c;
                opacity: 0.8;

            }
        }
    }
`;

export default Cards
