import React, { useState } from "react";
import * as S from "./style";
import PageTitle from "../../components/common/pageTitle/PageTitle";
import DateSelector from "../../components/common/dateSelector/dateSelector";

function Booth() {
  const [selectedDate11, setSelectedDate11] = useState(true);

  const handleDateClick = bool => {
    setSelectedDate11(bool);
  };

  return (
    <>
      <PageTitle mainTitle={"부스 정보"} />
      <DateSelector
        selectedDate11={selectedDate11}
        handleDateClick={handleDateClick}
      />
    </>
  );
}

export default Booth;
