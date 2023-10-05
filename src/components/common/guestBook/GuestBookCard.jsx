import React from "react";
import * as S from "./style";

function GuestBookCard(props) {
  const { icon, content, marginBottom } = props;

  return (
    <S.GuestBookBox marginBottom={marginBottom}>
      <S.GeustBookIcon>{icon}</S.GeustBookIcon>
      <S.GeustBookText>{content}</S.GeustBookText>
    </S.GuestBookBox>
  );
}

export default GuestBookCard;
