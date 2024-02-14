import React, { FC, useState } from "react";
import NewConsumption from "./components/NewConsumption/NewConsumption";
import CostsList from "./components/CostsList/CostsList";
import Cost from "./components/models/Cost";
import "./App.scss";

const App: FC = () => {

  const initialCosts: Cost[] = [
    { title: "Холодильник", sum: 1500, date: "23.03.2023", id: 1 },
    { title: "Плита", sum: 600, date: "21.02.2023", id: 2 },
    { title: "Микроволновка", sum: 150, date: "02.09.2023", id: 3 },
  ]

  const [costsList, setCostsList] = useState<Cost[]>(initialCosts);

  const addCost = (newCost: Cost) => {
    setCostsList([...costsList, newCost])
  }

  return (
    <div>
      <NewConsumption addCost={addCost} />
      <CostsList />
    </div>
  );
};

export default App;
