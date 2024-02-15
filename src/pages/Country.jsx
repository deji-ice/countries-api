import { useEffect, useState } from "react";

const Country = () => {
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
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search by name"
        className=" placeholder:ml-10 w-80 h-10 rounded-xl bg-slate-50 border-2 border-black "
      />

      <div className="grid grid-cols-5 mt-20 items-start gap-8 m-5">
        {country?.map((item) => (
          <div
            className="flex flex-col items-start  overflow-x-hidden  justify-start gap-2 "
            key={item.cca3}
          >
            <img
              src={item.flags.png}
              className="h-32 w-full border border-slate-400"
              alt={`a flag of ${item.name.common}`}
            />
            <p className="flex gap-2 items-center justify-center">
              Country:
              <div className="flex w-80 overflow-x-scroll no-scrollbar">
                <p className="flex   flex-nowrap">
                  <span className="w-[400px] flex overflow-x-scroll  flex-nowrap">
                    {item.name.official}
                  </span>
                </p>
              </div>
            </p>

            <p>Capital: {item?.capital}</p>
            <p>Population: {item.population}</p>
            <p>{item.independent ? "Independent" : "Dependent"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
