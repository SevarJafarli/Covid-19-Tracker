import React, { useEffect, useState } from "react";
import "./CovidData.css";

function GlobalData() {
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };

  return (
    <div className="covidData">
      <h1>COVID-19 Global</h1>

      {/* Showing the details of the country */}
      <div className="covidData__country__info">
        <p>All Cases : {cases}</p>

        <p>All Deaths : {deaths} </p>

        <p>Recovered : {recovered}</p>

        <p>Cases Today : {todayCases}</p>

        <p>Deaths Today : {deathCases}</p>

        <p>Recovered Today : {recoveredCases}</p>
      </div>
    </div>
  );
}

export default GlobalData;
