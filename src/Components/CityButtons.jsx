import React from "react";

const CityButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Akhisar",
    },
    {
      id: 3,
      title: "İzmir",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
    {
      id: 6,
      title: "İstanbul",
    },
    {
      id: 7,
      title: "Tokyo",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        {cities.map((city) => (
          <button
            onClick={() => setQuery({ q: city.title })}
            className="bg-main-left hover:bg-slate-100 text-slate-900 font-semibold hover:text-slate-900 py-2 px-4 border border-slate-200 hover:border-transparent rounded mx-2"
          >
            {city.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityButtons;
