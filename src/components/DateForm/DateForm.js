import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Date from "../Date/Date";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./DateForm.css";
import heart from "../../assets/heart.png";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";

const DateForm = () => {
  const [dates, setDates] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [active, setActive] = useState(false);
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

  const handleSubmit = () => {
    setActive(true);

    setTimeout(showDates, 1000);
  };

  return (
    <div className="form-bg">
      <div className="form-ctn">
        <div className="go-back-btn">
          <NavLink to="/">
            <IconContext.Provider value={{ size: "20px", color: "black" }}>
              <IoIosArrowBack />
            </IconContext.Provider>
          </NavLink>
        </div>

        {!isButtonClicked ? (
          <>
            <h1 className="form-title">Date Roulette</h1>
            <img
              className={!active ? "heart-img" : "heart-img-2"}
              src={heart}
            />
            <div className="input-fields-ctn">
              <h4 className="filters">Filters:</h4>
              <div className="input-fields-body">
                <div className="input-field">
                  <label>Romantic</label>
                  <input
                    onChange={(e) => {
                      handleFilter(e);
                    }}
                    type="checkbox"
                    value="romantic"
                  />
                </div>
                <div className="input-field">
                  <label>Adventure</label>
                  <input
                    onChange={(e) => {
                      handleFilter(e);
                    }}
                    type="checkbox"
                    value="adventure"
                  />
                </div>
                <div className="input-field">
                  <label>At home</label>
                  <input
                    onChange={(e) => {
                      handleFilter(e);
                    }}
                    type="checkbox"
                    value="home"
                  />
                </div>
                <div className="input-field">
                  <label>Cheap</label>
                  <input
                    onChange={(e) => {
                      handleFilter(e);
                    }}
                    type="checkbox"
                    value="cheap"
                  />
                </div>
                <div className="input-field">
                  <label>Alternative</label>
                  <input
                    onChange={(e) => {
                      handleFilter(e);
                    }}
                    type="checkbox"
                    value="alternative"
                  />
                </div>
                <div className="input-field">
                  <label>Long Distance</label>
                  <input
                    onChange={(e) => {
                      handleFilter(e);
                    }}
                    type="checkbox"
                    value="long_distance"
                  />
                </div>
                <div className="input-field">
                  <label>Expensive</label>
                  <input
                    onChange={(e) => {
                      handleFilter(e);
                    }}
                    type="checkbox"
                    value="expensive"
                  />
                </div>
              </div>
            </div>
            <button className="form-btn" onClick={handleSubmit}>
              Give me Dates
            </button>
          </>
        ) : (
          <>
            <Date result={result} />
          </>
        )}
      </div>
    </div>
  );
};

export default DateForm;
