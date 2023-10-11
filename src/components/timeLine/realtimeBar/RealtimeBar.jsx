// import React, { useEffect, useState } from "react";
// import * as S from "./style";

// export default function RealtimeBar({ realtimeList }) {
//   // 실시간 공연 정보 3초 단위로 띄움-----------------------------

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % realtimeList.length);
//     }, 3000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <S.TimeTableNav>
//       <S.TimeTableSubTxt isseveral={realtimeList.length}>
//         <img src="/timetable/timetable_logo.png" alt="Logo" />
//         실시간
//       </S.TimeTableSubTxt>
//       <S.TimeTableMainTxt isseveral={realtimeList.length}>
//         {realtimeList.length !== 0
//           ? realtimeList[currentIndex].title
//           : "실시간 없음"}
//       </S.TimeTableMainTxt>
//       <S.TimeTableSubTxt2 isseveral={realtimeList.length}>
//         <S.LocationIMG src="/timetable/timetable_location.png" alt="Logo" />
//         {realtimeList.length !== 0 ? realtimeList[currentIndex].place : "미정"}
//       </S.TimeTableSubTxt2>
//     </S.TimeTableNav>
//   );
// }

import React, { useEffect, useState } from "react";
import * as S from "./style";

export default function RealtimeBar({ realtimeList }) {
  const hasRealtimeList = realtimeList && realtimeList.length > 0;
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentIndex);

  useEffect(() => {
   if (hasRealtimeList) {
      const intervalId = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % realtimeList.length);
      }, 3000);
    // const intervalId = setInterval(() => {
    //   setCurrentIndex(prevIndex => (prevIndex + 1) % realtimeList.length);
    // }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }
  }, [hasRealtimeList]);

  return (
    <S.TimeTableNav>
      <S.TimeTableSubTxt isseveral={realtimeList.length}>
        <img src="/timetable/timetable_logo.png" alt="Logo" />
        실시간
      </S.TimeTableSubTxt>
      <S.TimeTableMainTxt isseveral={realtimeList.length}>
        {realtimeList.length !== 0
          ? realtimeList[currentIndex]?.title
          : "실시간 없음"}
      </S.TimeTableMainTxt>
      <S.TimeTableSubTxt2 isseveral={realtimeList.length}>
        <S.LocationIMG src="/timetable/timetable_location.png" alt="Logo" />
        {realtimeList.length !== 0 ? realtimeList[currentIndex]?.place : "미정"}
      </S.TimeTableSubTxt2>
    </S.TimeTableNav>
  );
}
