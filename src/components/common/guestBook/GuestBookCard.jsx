import React from "react";
import * as S from "./style";

function GuestBookCard(props) {
  const { icon, content, marginBottom, Height, width, isMobile } = props;

  return (
    <S.GuestBookBox
      marginBottom={marginBottom}
      Height={Height}
      width={width}
      isMobile={isMobile}
    >
      <S.GeustBookIcon>{icon}</S.GeustBookIcon>
      <S.GeustBookText isMobile={isMobile}>{content}</S.GeustBookText>
    </S.GuestBookBox>
  );
}

export default GuestBookCard;
