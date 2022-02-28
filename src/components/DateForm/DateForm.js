import React, { useState } from "react";
import DatesList from "../DatesList/DatesList";

const dates = [
  {
    category: "adventure",
    name: "adventure",
  },
  {
    category: "home",
    name: "home",
  },
  {
    category: "romantic",
    name: "romantic",
  },
  {
    category: "cheap",
    name: "cheap",
  },
  {
    category: "alternative",
    name: "alternative",
  },
];

const DateForm = () => {
  const [filter, setFilter] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFilter = (e) => {
    if (e.target.checked == true) {
      let data = filter;
      data.push(e.target.value);
      setFilter(data);
      console.log(filter);
    } else if (e.target.checked == false) {
      const index = filter.indexOf(e.target.value);
      filter.splice(index, 1);
      console.log(filter);
    }
  };

  const showDates = (e) => {
    e.preventDefault();
    if (filter.length) {
      let data = filteredResults;
      for (let i = 0; i < filter.length; i++) {
        const element = dates.filter((d) => d.name == filter[i]);
        data.push(element);
      }
      setFilteredResults(data);
      setFilter([]);
      console.log(filteredResults);
    } else {
      console.log(dates);
    }

    setIsButtonClicked(true);
  };

  return (
    <div>
      {!isButtonClicked ? (
        <>
          <form>
            <label>Romantic</label>
            <input
              onChange={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
              value="romantic"
            />
            <label>Adventure</label>
            <input
              onChange={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
              value="adventure"
            />
            <label>At home</label>
            <input
              onChange={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
              value="home"
            />
            <label>Cheap</label>
            <input
              onChange={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
              value="cheap"
            />
            <label>Alternative</label>
            <input
              onChange={(e) => {
                handleFilter(e);
              }}
              type="checkbox"
              value="alternative"
            />
          </form>
          <button onClick={showDates}>Give me Dates</button>
        </>
      ) : (
        <>
          <DatesList />
        </>
      )}
    </div>
  );
};

export default DateForm;
