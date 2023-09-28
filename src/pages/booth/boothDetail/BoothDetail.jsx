import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";

function BoothDetail() {
  const { id } = useParams();
  return <>디테일{id}</>;
}

export default BoothDetail;
