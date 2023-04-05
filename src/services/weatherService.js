const API_KEY = "3320da48438dec85f7460ff6068efb7b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3987a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + "infoType");
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;
