// Importing the required dependencies and files
import "./App.css"; // Importing the CSS file for styling
import React from "react"; // Importing React library
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import { useState, useEffect } from "react"; // Importing useState hook from React

// Importing the pages that will be used for routing
import Home from "./pages/Home/Home"; // Home page component
import Gallery from "./pages/Gallery/Gallery"; // Gallery page component
import AboutUs from "./pages/AboutUs/AboutUs"; // About Us page component
import ContactUs from "./pages/ContactUs/ContactUs"; // Contact Us page component
import NoPage from "./pages/NoPage/NoPage"; // NoPage component for handling undefined routes

import { LanguageProvider } from "./components/languageContext"; // Importing the LanguageProvider from languageContext

//Import the loader component
//import Loader from "./components/Loader"; // Loader component

// Importing the Footer component
import Footer from "./components/Footer/Footer"; // Footer component

// Main App component
function App() {
  //Loader state
  const [isLoading, setIsLoading] = useState(true);

  //Simulating a delay for the loader
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  }, []);

  return (
  // isLoading ?
   
    // Conditional rendering of the loader
    // <Loader />
  // ) : (
    <LanguageProvider>
      <BrowserRouter>
        {/* Routes is used to render the route definitions */}
        <Routes>
          {/* Route component to define the path and the corresponding component to render */}
          <Route path="/" element={<Home />} /> {/* Route for the Home page */}
          <Route path="/gallery" element={<Gallery />} />{" "}
          {/* Route for the Gallery page */}
          <Route path="/about" element={<AboutUs />} />{" "}
          {/* Route for the About Us page */}
          <Route path="/contact" element={<ContactUs />} />{" "}
          {/* Route for the Contact Us page */}
          <Route path="*" element={<NoPage />} />{" "}
          {/* Route for handling undefined paths */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

// Exporting the App component as the default export
export default App;
