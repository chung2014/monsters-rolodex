import React from "react";

import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((mm) => (
        <Card key={mm.id} monster={mm} />
      ))}
    </div>
  );
};
