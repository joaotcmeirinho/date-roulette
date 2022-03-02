import React, { useState, useEffect } from "react";
import DatesList from "../DatesList/DatesList";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const DateForm = () => {
  const [dates, setDates] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [result, setResult] = useState();

  const datesCollectionRef = collection(db, "dates");

  useEffect(() => {
    const getDates = async () => {
      const data = await getDocs(datesCollectionRef);
      setDates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDates();
  }, []);

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
        const element = dates.filter((d) => d.category == filter[i]);
        data.push(element);
      }
      setFilteredResults(data);
      setFilter([]);

      const finalResult =
        filteredResults[Math.floor(Math.random() * filteredResults.length)];

      setResult(finalResult[Math.floor(Math.random() * finalResult.length)]);
    } else {
      setResult(dates[Math.floor(Math.random() * dates.length)]);
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
          <DatesList result={result} />
        </>
      )}
    </div>
  );
};

export default DateForm;
