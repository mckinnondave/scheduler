import React from "react"
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem({selected, spots, name, setDay}) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots
  })

  const formatSpots = (spots) => {
    if (!spots) {
      return "no spots remaining"
    }
    if (spots === 1) {
      return "1 spot remaining"
    }
    return `${spots} spots remaining`
  }

  return (
    <li 
      className={dayClass}
      selected={selected}
      onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}