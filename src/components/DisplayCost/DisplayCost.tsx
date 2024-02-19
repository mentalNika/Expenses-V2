import React, { FC, useState } from "react";
import Cost from "../models/Cost";
import CostsList from "../CostsList/CostsList";

interface CostsListProps {
  costsList: Cost[];
}

const DisplayCost: FC<CostsListProps> = ( {costsList} ) => {
  return <div>
    {costsList.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.date}</p>
          <p>{item.sum} ₽</p>
        </div>
      ))}
  </div>
};

export default DisplayCost;
