import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Breadcrumb = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <Container className="container">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">Home</li>
                    <li class="breadcrumb-item active" aria-current="page"><Link to="/">Experience</Link></li>
                </ol>
                </Container>
            </nav>
        </div>
    )
}

const Container = styled.nav`
    li{
        a{
            text-decoration: none;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #1d1d2c;
        }
    }
`;

export default Breadcrumb
