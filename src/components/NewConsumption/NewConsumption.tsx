import React, { FC } from "react";



const NewConsumption: FC = () => {
  return (
    <div className="consumption-date">
      <form>
        <input name="title" type="text" placeholder="Название" value =""/>
        <input name="sum" type="number" placeholder="Сумма" value =""/>
        <input name="date" type="date" placeholder="Название" value =""/>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default NewConsumption;
