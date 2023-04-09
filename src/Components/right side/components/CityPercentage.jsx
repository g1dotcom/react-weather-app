import React from "react";
import { BsThermometerSun } from "react-icons/bs";

const CityPercentage = ({
  weather: { speed, humidity, feels_like, name },
  units,
  setUnits,
}) => {
  //handle units
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className=" w-full h-56  flex items-center flex-wrap">
      <div className=" bg-white flex justify-around  items-center mx-10 sm:w-1/5 w-12 h-full rounded-3xl shadow-xl shadow-gray-600 hover:scale-105  transition-all duration-500 ">
        <div className=" h-full flex flex-col items-center justify-around ">
          <h1 className=" text-gray-400 font-medium mb-8">Wind</h1>
          <p className="text-6xl font-medium">
            {`${speed.toFixed()}`} <span className="text-xl">km/h</span>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500.359"
            height="400.359"
            fill-rule="evenodd"
            clip-rule="evenodd"
            image-rendering="optimizeQuality"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            viewBox="0 0 6.827 8.827"
            id="wind"
          >
            <path
              fill="#0288d1"
              d="m3.086 4.077.018.001c.101.01.194.048.261.126.068.079.098.183.098.286a.435.435 0 0 1-.103.284.36.36 0 0 1-.274.13.356.356 0 0 1-.24-.095c-.065-.058-.118-.11-.136-.195-.018-.083.033-.183.118-.182.082 0 .084.078.12.155.128.285.422-.206.139-.202H1.473a.154.154 0 0 1 0-.308h1.613z"
            ></path>
            <path
              fill="#1976d2"
              d="M4.406 3.238c0-.085.069-.154.153-.154H5.6a.053.053 0 0 0 .044-.02c.018-.02.023-.059.023-.086 0-.029-.008-.06-.028-.083-.01-.012-.025-.022-.042-.022a.052.052 0 0 0-.034.015.112.112 0 0 0-.032.059.154.154 0 0 1-.3-.065.42.42 0 0 1 .126-.223.356.356 0 0 1 .24-.094.36.36 0 0 1 .274.13c.068.078.103.18.103.283 0 .104-.03.208-.098.287a.382.382 0 0 1-.26.125l-.019.001H4.56a.154.154 0 0 1-.153-.153zm-.207.232.017.001a.553.553 0 0 1 .381.18c.101.116.143.27.143.422a.641.641 0 0 1-.151.418.514.514 0 0 1-.39.186.506.506 0 0 1-.34-.135.614.614 0 0 1-.186-.325.154.154 0 0 1 .3-.065c.014.06.044.12.091.162a.2.2 0 0 0 .135.055.21.21 0 0 0 .158-.078.334.334 0 0 0 .076-.218.346.346 0 0 0-.068-.222.203.203 0 0 0-.163-.074h-2.8a.154.154 0 0 1 0-.307H4.2z"
            ></path>
            <path
              fill="#0288d1"
              d="M1.007 2.823h2.8c.065 0 .12-.024.163-.074a.346.346 0 0 0 .067-.222.334.334 0 0 0-.075-.218.21.21 0 0 0-.158-.078.2.2 0 0 0-.135.055.307.307 0 0 0-.09.163.154.154 0 0 1-.3-.065.614.614 0 0 1 .184-.326.506.506 0 0 1 .34-.134c.153 0 .292.07.39.185.1.115.152.266.152.418a.644.644 0 0 1-.143.423.553.553 0 0 1-.381.179H1.007a.154.154 0 0 1 0-.306z"
            ></path>
            <path fill="none" d="M0 0h6.827v6.827H0z"></path>
          </svg>
          <h1 className="font-medium">Normal</h1>
        </div>
      </div>
      <div className=" bg-white flex justify-around sm items-center mx-10 w-1/4 h-full rounded-3xl shadow-xl shadow-gray-600 hover:scale-105  transition-all duration-500 ">
        <div className="w-1/2 h-full flex flex-col items-center justify-around ">
          <h1 className="mx-5 text-gray-400 font-medium">Humidity</h1>
          <div
            className="radial-progress bg-custom-red"
            style={{ "--value": "70", "--size": "3rem", "--thickness": "2px" }}
          >
            <span className="font-medium text-white">
              {" "}
              {`${humidity.toFixed()}`}{" "}
            </span>
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
      <div className=" bg-white flex items-center w-1/4 sm h-full mx-10 rounded-3xl shadow-xl shadow-gray-600 hover:scale-105 transition-all duration-500">
        <div className="w-1/2  h-full flex flex-col items-center justify-around ">
          <h1 className=" text-gray-400 font-medium">Real Fell </h1>
          <div className="text-3xl font-medium flex justify-center items-center">
            <BsThermometerSun className="mx-1" />
            {`${feels_like.toFixed()}`}°
          </div>

          <h1 className="font-medium">İzmir</h1>
        </div>
        <div className="w-1/2  h-full flex justify-center items-center">
          <div className="-ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="86"
              enable-background="new 0 0 64 64"
              viewBox="0 0 50 64"
              id="thermometer"
            >
              <path d="M38.374 10.241c.204.004.413.009.626.009.552 0 1-.433 1-.967s-.448-.967-1-.967c-.198 0-.393-.004-.583-.008-1.155-.024-2.339-.048-3.253.817C34.359 9.888 34 11.128 34 13.15c0 2.021.359 3.262 1.164 4.023.765.724 1.72.825 2.685.825.189 0 .38-.003.569-.007.19-.005.385-.009.583-.009.552 0 1-.433 1-.967s-.448-.967-1-.967c-.213 0-.422.005-.626.009-.929.017-1.513.016-1.812-.267C36.306 15.55 36 14.895 36 13.15c0-1.745.306-2.4.563-2.643C36.861 10.226 37.445 10.221 38.374 10.241zM44 3.967c-1.654 0-3 1.301-3 2.899 0 1.6 1.346 2.9 3 2.9s3-1.301 3-2.9C47 5.268 45.654 3.967 44 3.967zM44 7.833c-.551 0-1-.433-1-.967C43 6.333 43.449 5.9 44 5.9s1 .433 1 .966C45 7.4 44.551 7.833 44 7.833zM31.444 44.992V8.708c0-1.507-.552-2.929-1.559-4.006C28.849 3.604 27.47 3 26 3c-3.002 0-5.444 2.562-5.444 5.708v36.284C18.32 46.672 17 49.287 17 52.087 17 57.001 21.038 61 26 61s9-3.999 9-8.913C35 49.287 33.68 46.672 31.444 44.992zM26 59.066c-3.86 0-7-3.131-7-6.979 0-2.34 1.167-4.511 3.122-5.808.271-.181.434-.479.434-.797V8.708c0-2.081 1.545-3.774 3.444-3.774.9 0 1.755.38 2.404 1.067.671.719 1.04 1.68 1.04 2.707v2.025H28c-.552 0-1 .433-1 .967s.448.967 1 .967h1.444v3.866H28c-.552 0-1 .433-1 .967s.448.967 1 .967h1.444v3.866H28c-.552 0-1 .433-1 .967s.448.967 1 .967h1.444v3.867H28c-.552 0-1 .432-1 .966 0 .535.448.967 1 .967h1.444v15.416c0 .318.163.616.434.797C31.833 47.576 33 49.747 33 52.087 33 55.936 29.86 59.066 26 59.066z"></path>
              <path
                d="M28.67,48.219v-8.485c0-0.839-0.231-1.645-0.652-2.269c-0.495-0.733-1.23-1.153-2.018-1.153
			c-1.497,0-2.67,1.503-2.67,3.422v8.485C21.886,49.096,21,50.637,21,52.3c0,2.501,2.003,4.604,4.569,4.808
			c0.142,0.021,0.292,0.026,0.431,0.026s0.289-0.005,0.431-0.026C28.997,56.904,31,54.801,31,52.3
			C31,50.637,30.114,49.096,28.67,48.219z M26.238,55.184c-0.016,0.001-0.093,0.012-0.109,0.014C26.088,55.203,26.042,55.2,26,55.2
			c-0.042,0.001-0.085,0.002-0.119-0.001c-0.039-0.008-0.079-0.013-0.119-0.016C24.213,55.074,23,53.809,23,52.3
			c0-1.047,0.585-2.013,1.527-2.521c0.081-0.043,0.154-0.097,0.22-0.16c0.022-0.021,0.054-0.054,0.074-0.077
			c0.058-0.067,0.113-0.131,0.177-0.187c0.211-0.183,0.332-0.444,0.332-0.719v-8.903c0-0.967,0.476-1.489,0.67-1.489
			c0.078,0,0.213,0.086,0.342,0.277c0.208,0.309,0.328,0.75,0.328,1.212v8.903c0,0.274,0.121,0.536,0.332,0.719
			c0.064,0.056,0.12,0.119,0.177,0.187c0.02,0.023,0.051,0.056,0.074,0.077c0.065,0.063,0.139,0.117,0.22,0.16
			C28.415,50.287,29,51.253,29,52.3C29,53.809,27.787,55.074,26.238,55.184z"
              ></path>
            </svg>
          </div>
          ;
        </div>
      </div>
      <div className="bg-white w-1/4 h-full rounded-3xl sm  flex flex-col mx-10 justify-around items-center shadow-xl shadow-gray-600 hover:scale-105  transition-all duration-500">
        <div className=" form-control ">
          <button
            name="metric"
            className="btn btn-active px-10 font-main bg-gray-400 rounded-full text-black hover:text-white"
            onClick={handleUnitsChange}
          >
            Celsius
          </button>
        </div>
        <h1 className="text-xl font-main font-medium ">Choose Value </h1>

        <div className="form-control bg-gray-100">
          <button
            name="imperial"
            className="btn btn-active px-10 font-main bg-gray-600 rounded-full hover:bg-gray-400 hover:text-black"
            onClick={handleUnitsChange}
          >
            Fahrenheit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityPercentage;
