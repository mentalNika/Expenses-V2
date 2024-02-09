import React, { FC } from "react";

const NewConsumption: FC = () => {
  return <div className="consumption-date">
    <input name='title' type="text" placeholder="Название"/>
    <input name='sum' type="number" placeholder="Сумма"/>
    <input name='date' type="date" placeholder="Название"/>
</div>;
};

export default NewConsumption;
