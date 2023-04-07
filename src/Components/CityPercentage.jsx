import React from "react";

const CityPercentage = () => {
  return (
    <div className=" w-full h-56 flex justify-around items-center">
      <div className="bg-white w-1/6 h-full rounded-3xl  shadow-lg shadow-gray-600">
        <div
          className="radial-progress bg-orange-600"
          style={{ "--value": 80 }}
        >
          80%
        </div>
        <img src="" alt="" />
      </div>
      <div className=" bg-white flex items-center w-1/6 h-full rounded-3xl  shadow-lg shadow-gray-600">
        <div className="w-1/2 h-full flex flex-col items-center justify-around ">
          <h1 className="mx-5 text-gray-400 font-medium">Humidity</h1>
          <div
            className="radial-progress bg-gray-200"
            style={{ "--value": "70", "--size": "3rem", "--thickness": "2px" }}
          >
            <span className="font-medium"> 70%</span>
          </div>
          <h1 className="font-medium">Normal</h1>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 64" id="drop">
            <path
              fill="#3EBBDD"
              d="M36 2c-2.906 0-5.654 2.892-8.177 8.618l-.839 2.04a56.93 56.93 0 0 0-.764 2.114l-.609 1.894C24.024 21.862 23 27.489 23 31c0 8.271 5.832 15 13 15s13-6.729 13-15c0-7.229-5.25-29-13-29z"
            ></path>
            <path
              fill="#38A8C7"
              d="M47.952 22.912c.03.474.048.921.048 1.319 0 8.908-6.281 16.154-14 16.154-4.215 0-7.991-2.17-10.56-5.581C24.905 41.235 29.973 46 36 46c7.168 0 13-6.729 13-15 0-1.906-.368-4.826-1.048-8.088z"
            ></path>
            <path
              fill="#3EBBDD"
              d="M55 36c-4.44 0-7 12.901-7 17 0 4.963 3.141 9 7 9s7-4.037 7-9c0-4.099-2.56-17-7-17zM23 43c-3.449 0-5 9.274-5 11.667C18 58.159 20.243 61 23 61s5-2.841 5-6.333C28 52.274 26.449 43 23 43zM55 24c2.757 0 5-2.841 5-6.333C60 15.274 58.449 6 55 6s-5 9.274-5 11.667C50 21.159 52.243 24 55 24zM38 48c-2.91 0-4 7.474-4 9 0 2.757 1.794 5 4 5s4-2.243 4-5c0-1.526-1.09-9-4-9zM15 11c-2.91 0-4 7.474-4 9 0 2.757 1.794 5 4 5s4-2.243 4-5c0-1.526-1.09-9-4-9zM14.95 39.771c-.168-.699-.355-1.4-.566-2.115l-.662-2.013C12.33 31.846 10.786 30 9 30c-4.44 0-7 12.901-7 17 0 4.963 3.141 9 7 9s7-4.037 7-9c0-1.31-.214-3.142-.606-5.182l-.444-2.047z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-white w-1/6 h-full rounded-3xl  shadow-lg shadow-gray-600"></div>
      <div className="bg-white w-1/6 h-full rounded-3xl  shadow-lg shadow-gray-600"></div>
    </div>
  );
};

export default CityPercentage;
