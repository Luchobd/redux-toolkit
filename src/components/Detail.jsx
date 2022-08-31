import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersById } from "../redux/characterActions";

function Detail() {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharactersById(10));
  }, [dispatch]);
  return <div>{[Detail].length > 0 && <span>{detail.name}</span>}</div>;
}

export default Detail;
