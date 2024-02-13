import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [country, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${input ? `/name/${input}` : "all"} `)
      .then((res) => res.json())
      .then((res) => {
        let country = res;
        setCountries(country);
      })
      .catch((err) => setError(err));
  }, [input]);

  return (
    <div className="">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search by name"
        className=" placeholder:ml-10 w-80 h-10 rounded-xl bg-slate-50 border-2 border-black "
      />

      <div className="grid grid-cols-5 items-start gap-8 m-5">
        {country?.map((item) => (
          <div
            className="flex flex-col items-start justify-start "
            key={item.cca3}
          >
            <img src={item.flags.png} alt={`a flag of ${item.name.common}`} />
            <p>Country: {item.name.official}</p>
            <p>Capital: {item?.capital}</p>
            <p>Population: {item.population}</p>
            <p>{item.independent ? "Independent" : "Dependent"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
