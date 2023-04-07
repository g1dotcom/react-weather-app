import React from "react";

const CityPercentage = () => {
  return (
    <div className=" w-full h-56 flex justify-around items-center">
      <div className=" bg-white flex items-center w-1/6 h-full rounded-3xl  shadow-lg shadow-gray-600">
        <div className="w-full h-full flex flex-col items-center justify-around ">
          <h1 className="mx-5 text-gray-400 font-medium mb-8">Wind</h1>
          <p className="text-4xl font-medium">
            2.10 <span className="text-xl">km/h</span>
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
      <div className=" bg-white flex items-center w-1/6 h-full rounded-3xl  shadow-lg shadow-gray-600">
        <div className="w-1/2 h-full flex flex-col items-center justify-around ">
          <h1 className="mx-5 text-gray-400 font-medium">Humidity</h1>
          <div
            className="radial-progress bg-custom-red"
            style={{ "--value": "70", "--size": "3rem", "--thickness": "2px" }}
          >
            <span className="font-medium text-white"> 70%</span>
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
