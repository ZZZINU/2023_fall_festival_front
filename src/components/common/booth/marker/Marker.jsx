import React from "react";
import * as S from "./style";

function Marker(props) {
  return (
    <>
      <S.MapMarkWrap
        onClick={() => props.handleMarkerClick(props.markerName)}
        top={
          props.markerStates === props.markerName
            ? props.clickaftertop
            : props.clickbeforetop
        }
        left={
          props.markerStates === props.markerName
            ? props.clickafterleft
            : props.clickbeforeleft
        }
      >
        <S.MapMark
          backgroundcolor={
            props.markerStates === props.markerName ? "#DD7480" : "#ffffff"
          }
          fontSize={props.markerStates === props.markerName ? "15px" : "8px"}
          height={props.markerStates === props.markerName ? "30px" : "15px"}
          color={props.markerStates === props.markerName ? "#fff" : "#553c2e"}
        >
          {props.markerName}
        </S.MapMark>
        <S.MapMarkPin
          backgroundcolor={
            props.markerStates === props.markerName ? "#DD7480" : "#ffffff"
          }
          top={props.markerStates === props.markerName ? "20px" : "10px"}
        ></S.MapMarkPin>
      </S.MapMarkWrap>
    </>
  );
}

export default Marker;
