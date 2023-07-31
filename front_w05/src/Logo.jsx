import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.p`
    padding: 10px 10px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin: 5px;
    color: orange;
    background-color: black;
`

const Logo = () => {
    return (
        <div>
            <StyledLogo>🦁LIKELION UNIV. COMMUNITY🦁</StyledLogo>
        </div>
    );
};

export default Logo;