:root {
  --primary-color: #ff5722; /* Change to match your country theme */
  --secondary-color: #607d8b;
  --background-color: #f5f5f5;
  --font-family: Arial, sans-serif;
}

body {
  font-family: var(--font-family);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;
}

.hero img {
  width: 100%;
  height: auto;
}

.weather {
  padding: 2rem;
  text-align: center;
}

.weather-details p {
  font-size: 1.2rem;
}

.emoticon {
  font-size: 3rem;
}

footer {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media (max-width: 600px) {
  .hero img {
    max-width: 100%;
  }
}

@media (min-width: 601px) {
  .hero img {
    max-width: 100%;
  }
}
