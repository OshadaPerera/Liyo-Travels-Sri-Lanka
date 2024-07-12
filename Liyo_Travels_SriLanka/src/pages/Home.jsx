import React from "react";
import NavBar from "../components/NavBar";
import "./styles/homeStyles.css";

function Home() {
  return (
    <div className="homePage">
      <div className="coverSection">
        <NavBar theme="white" />

        <div className="homeIntro">
          <h1>Liyo Travels Sri Lanka</h1>
          <p>Experience the Extraordinary</p>
        </div>
      </div>
      <div className="homeWelcome">
        <h2>Welcome to Liyo Travels</h2>
        <p>
          At Liyo Travels Sri Lanka, we are dedicated to providing the best
          travel experience in Sri Lanka. We offer exceptional tour packages and
          travel services. From landing to departure, we plan every detail for a
          seamless and unforgettable journey through Sri Lanka.
        </p>
      </div>

      <div className="homeDestinations">
        <h2>Popular Destinations</h2>
        <div className="destinationCards">
          <div className="destinationCard">
            <img
              src="https://images.unsplash.com/photo-1708694648935-eeafaa7fd1ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Kandy"
            />
            <h3>Kandy</h3>
            <p>
              Kandy, nestled in the heart of Sri Lanka, is a vibrant city known
              for its rich cultural heritage and stunning landscapes. Home to
              the sacred Temple of the Tooth Relic, Kandy offers visitors a
              unique blend of history, spirituality, and natural beauty.
              Surrounded by lush hills and picturesque tea plantations, it's the
              perfect destination for those seeking both adventure and
              tranquility.
            </p>
          </div>
          <div className="destinationCard">
            <img
              src="https://images.unsplash.com/photo-1706766810001-f1f2529b834a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nuwara Eliya"
            />
            <h3>Nuwara Eliya</h3>
            <p>
              Nuwara Eliya, often referred to as "Little England," is a charming
              town in the central highlands of Sri Lanka. Known for its cool
              climate, stunning tea plantations, and colonial-era architecture,
              Nuwara Eliya offers a refreshing escape from the tropical heat.
              Visitors can enjoy scenic landscapes, lush gardens, and the serene
              beauty of Lake Gregory, making it a perfect destination for
              relaxation and exploration.
            </p>
          </div>
          <div className="destinationCard">
            <img
              src="https://images.unsplash.com/flagged/photo-1567498975675-a3adf1574cb0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Galle"
            />
            <h3>Galle</h3>
            <p>
              Galle, a historic city on Sri Lanka's southwest coast, is renowned
              for its well-preserved colonial architecture and vibrant cultural
              scene. The iconic Galle Fort, a UNESCO World Heritage site, offers
              a glimpse into the city's rich past, with cobblestone streets,
              charming cafes, and boutique shops. Surrounded by stunning beaches
              and turquoise waters, Galle is a perfect blend of history,
              culture, and natural beauty.
            </p>
          </div>
        </div>
      </div>

      <div className="homeChoose">
        <h1>Why choose Us?</h1>
        <div className="chooseCards">
          <div className="chooseCard">
            <img
              src="https://images.unsplash.com/photo-1606782993067-3f4f5f3f5e1e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customized Tours"
            />
            <h3>Customized Tours</h3>
            <p>
              We offer personalized tour packages tailored to your preferences
              and interests. Whether you're looking for adventure, relaxation,
              or cultural experiences, we have the perfect itinerary for you.
            </p>
          </div>
          <div className="chooseCard">
            <img
              src="https://images.unsplash.com/photo-1606782993067-3f4f5f3f5e1e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Experienced Guides"
            />
            <h3>Experienced Guides</h3>
            <p>
              Our team of experienced guides and drivers are dedicated to
              ensuring a safe and enjoyable travel experience. They are
              knowledgeable, friendly, and committed to providing exceptional
              service.
            </p>
          </div>
          <div className="chooseCard">
            <img
              src="https://images.unsplash.com/photo-1606782993067-3f4f5f3f5e1e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Quality Accommodation"
            />
            <h3>Quality Accommodation</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
