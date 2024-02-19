import React, { FC, useState } from "react";
import Cost from "../models/Cost";

interface NewCostProps {
  addCost: (newCost: Cost) => void;
}

const initState = {
  title: "",
  sum: "",
  date: "",
  id: "",
};

const NewCost: FC<NewCostProps> = ({ addCost }) => {
  const [newCost, setNewCost] = useState<{
    title: string;
    sum: string;
    date: string;
    id: any;
  }>(initState);

  const costValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewCost({
      ...newCost,
      [name]: value,
      id: Math.random(),
    });
  };

  console.log(newCost);

  const submitCostHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, sum, date, id } = newCost;
    if (title && sum && date && id) {
      addCost({
        title,
        sum,
        date,
        id,
      });
    } else {
      const errorMessage: string = "Заполните все поля!";
      alert(errorMessage);
    }
  };

  return (
    <div className="consumption-date">
      <form onSubmit={submitCostHandler}>
        <input
          onChange={costValueHandler}
          name="title"
          type="text"
          placeholder="Название"
          value={newCost.title}
        />
        <input
          onChange={costValueHandler}
          name="sum"
          type="text"
          placeholder="Сумма"
          value={newCost.sum}
        />
        <input
          onChange={costValueHandler}
          name="date"
          type="text"
          placeholder="Дата"
          value={newCost.date}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default NewCost;
