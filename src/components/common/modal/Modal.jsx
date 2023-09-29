import React from "react";
import * as S from "./style";

function Modal(props) {
  return (
    <>
      <S.ModalBackground />
      <S.ModalWrap>
        <S.ModalBox>
          <S.ModalBoxImg src={props.img} alt="모달 이미지" />
          <S.ModalBoxContent>{props.content}</S.ModalBoxContent>
          <S.ModalButton
            onClick={() => {
              props.onClose();
            }}
          >
            확인
          </S.ModalButton>
        </S.ModalBox>
      </S.ModalWrap>
    </>
  );
}

export default Modal;
