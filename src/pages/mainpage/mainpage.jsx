import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, LikeLionLogo } from "./style";
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";
import { Click } from "./style";

function Main() {
  return (
    <>
      <HeaderContainer>
        <LikeLionLogo src={DGULikeLion} alt="LikeLion_Logo" />
      </HeaderContainer>
      <Click>
        <Link to="/about">요기를 눌러봐</Link>
      </Click>
    </>
  );
}

export default Main;
