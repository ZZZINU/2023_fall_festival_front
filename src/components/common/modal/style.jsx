import styled from "styled-components";

export const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: initial;
  z-index: 999;
`;
export const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 348px;
  height: 177px;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;
export const ModalBoxImg = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
`;
export const ModalBoxContent = styled.div`
  display: flex;
  color: #dd7481;
  text-align: center;
  font-family: NotoSansRegular;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  margin-top: 15px;
`;
export const ModalButton = styled.button`
  display: flex;
  border-radius: 17px;
  background: #eba0a2;
  display: inline-flex;
  height: 23px;
  padding: 9px 17px;
  justify-content: center;
  align-items: center;
  gap: 9px;
  flex-shrink: 0;
  font-family: NotoSansRegular;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  margin-top: 30px;
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;
