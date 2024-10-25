const SearchSection = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Handles city search form submission
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}$q=${searchInput.value}`;
    getWeatherDetails(API_URL);
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-outlined">search</span>
        <input
          type="search"
          placeholder="Enter a city name"
          className="search-input"
          required
        />
      </form>
      <button className="location-button">
        <span class="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
};

export default SearchSection;
