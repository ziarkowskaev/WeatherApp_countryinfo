Application retrieves and displays information about different countries using a REST API. Isers input a search query into a search field to find country information.

The application allows users to search for countries. If the query matches more than 10 countries, a prompt asks for a more specific query. 

If there are fewer than 10 matches but more than one, all matching countries are listed. Next to each country there is a button. Clicking these buttons displays detailed information for the respective country.

When only one country matches the query, data, such as capital, area, flag, and spoken languages, are displayed.

The application integrates weather data for the capital city of a selected country using the OpenWeatherMap API. It retrieves the weather report and displays it alongside the country's basic data.

The application ensures secure handling of sensitive information by using environment variables to store the API key required for accessing weather data. Users need to provide the API key during the application startup using commands provided in the instructions.

Edge cases where a country's name overlaps with another country (e.g., Sudan and South Sudan) are ignored for simplicity.
