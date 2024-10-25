import CurrentWeather from "./Components/CurrentWeather";
import HourlyWeather from "./Components/HourlyWeather";
import SearchSection from "./Components/SearchSection";

const App = () => {
  // Declare the function as async
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL); // Fix typo here
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {/* Search Section */}
      <SearchSection />

      {/* Weather Section */}
      <div className="weather-section">
        <CurrentWeather />

        {/* Hourly weather forecast list */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeather />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
