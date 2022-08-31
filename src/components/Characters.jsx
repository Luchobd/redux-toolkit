import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/characterActions";

function Characters() {
  const dispatch = useDispatch();
  const { characters, detail } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div>
      {characters &&
        characters.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />
            </div>
          );
        })}
    </div>
  );
}

export default Characters;
