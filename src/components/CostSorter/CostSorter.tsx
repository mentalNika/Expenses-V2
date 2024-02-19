import React, { FC, useState } from "react";
import Cost from "../models/Cost";

interface CostsListProps {
  costsList: Cost[];
}

const monthNames: any= {
  1: "Январь",
  2: "Февраль",
  3: "Март",
  4: "Апрель",
  5: "Май",
  6: "Июнь",
  7: "Июль",
  8: "Август",
  9: "Сентябрь",
  10: "Октябрь",
  11: "Ноябрь",
  12: "Декабрь",
};

const CostSorter: FC<CostsListProps> = ({ costsList }) => {
  const [filteredCosts, setFilteredCosts] = useState<Cost[]>(costsList);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);

  const monthChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month: number = parseInt(e.target.value);
    setSelectedMonth(month);
    const filtered = costsList.filter(
      (cost) => new Date(cost.date).getMonth() + 1 === month
    );
    setFilteredCosts(filtered);
  };

  return (
    <div>
      <h2>Выберите месяц</h2>
      <select value={selectedMonth} onChange={monthChangeHandler}>
        {Object.keys(monthNames).map((month) => (
          <option key={month} value={month}>
            {monthNames[month]}
          </option>
        ))}
      </select>
      <ul>
        {filteredCosts.map((cost) => (
          <li key={cost.id}>
            {cost.title} - {cost.sum} - {cost.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CostSorter;
