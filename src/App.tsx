import React, { FC, useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Cost from "./components/models/Cost";
import "./App.scss";
import CostSorter from "./components/CostSorter/CostSorter";

const App: FC = () => {
  const initialCosts: Cost[] = [
    { title: "Холодильник", sum: "1500", date: "2023-03-21", id: "1" },
    { title: "Плита", sum: "600", date: "2022-04-25", id: "2" },
    { title: "Микроволновка", sum: "150", date: "2020-03-05", id: "3" },
  ];

  const [costsList, setCostsList] = useState<Cost[]>(initialCosts);

  const addCost = (newCost: Cost) => {
    const newCostsList = [...costsList, newCost];
    setCostsList(newCostsList);
    console.log(costsList, 'app');
  };

  return (
    <div>
      <NewCost addCost={addCost} />
      <CostSorter costsList={costsList} />
      
    </div>
  );
};

export default App;
