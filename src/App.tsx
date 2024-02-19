import React, { FC, useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import CostsList from "./components/CostsList/CostsList";
import DisplayCost from "./components/DisplayCost/DisplayCost";
import Cost from "./components/models/Cost";
import "./App.scss";

const App: FC = () => {
  const initialCosts: Cost[] = [
    { title: "Холодильник", sum: "1500", date: "23.03.2023", id: "1" },
    { title: "Плита", sum: "600", date: "21.02.2023", id: "2" },
    { title: "Микроволновка", sum: "150", date: "02.09.2023", id: "3" },
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
      <CostsList />
      <DisplayCost costsList={costsList} />
    </div>
  );
};

export default App;
