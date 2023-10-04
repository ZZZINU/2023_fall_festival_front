import React from "react";
import * as S from "./style";

function GuestBookCard(props) {
  return (
    <S.GuestBookBox>
      <S.GeustBookIcon>{props.icon}</S.GeustBookIcon>
      <S.GeustBookText>{props.content}</S.GeustBookText>
    </S.GuestBookBox>
  );
}

export default GuestBookCard;
