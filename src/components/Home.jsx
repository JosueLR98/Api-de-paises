import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [nameCountry, setNameCountry] = useState("");

  const handleChangeRegion = (e) => {
    setRegion(e.target.value)
    setNameCountry("")
  }

  const newCountries = countries.filter((country) => country.name.common.toLowerCase().includes(nameCountry.toLowerCase()))

  //?https://restcountries.com/v3.1/region/{region}

  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/${region === "" ? "all" : `region/${region}`}`;
    console.log(URL)
    axios
      .get(URL)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, [region]);

  return (
    <section>
      <form className="grid gap-6 py-6 px-4 md:flex md:justify-between max-w-[1000px] mx-auto dark:text-white">
        <div className="flex items-center gap-2 bg-cyan-200 p-4 rounded-md shadow-md shadow-gray-200 dark:shadow-gray-950 dark:bg-slate-600 duration-200">
          <i className="bx bx-search text-gray-400 dark:text-white text-lg"></i>
          <input
            className="flex-1 outline-none text-xs dark:bg-slate-600 dark:text-white duration-200"
            type="text"
            value={nameCountry}
            onChange={(e) => setNameCountry(e.target.value)}
            placeholder="Search for a country"
          />
        </div>

        <select onChange={handleChangeRegion} className="max-w-max p-4 rounded-md shadow-md shadow-gray-200 outline-none font-semibold dark:bg-slate-600 dark:shadow-gray-950 duration-200">
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>

      <section className="grid gap-8 px-10 max-w-[1000px] mx-auto auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] py-4">
        {newCountries.map((country) => (
          <Country key={country.name.official} country={country} />
        ))}
      </section>
    </section>
  );
};

export default Home;
