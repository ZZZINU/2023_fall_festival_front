import React from "react";
import * as S from "./style";

function GuestBookCard(props) {
  const { icon, content, marginBottom, Height } = props;

  return (
    <S.GuestBookBox marginBottom={marginBottom} Height={Height}>
      <S.GeustBookIcon>{icon}</S.GeustBookIcon>
      <S.GeustBookText>{content}</S.GeustBookText>
    </S.GuestBookBox>
  );
}

export default GuestBookCard;
