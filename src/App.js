import "./App.css";
import logo from "../src/images/doodles logo.jpg";
import headingpic from "../src/images/brushing dog.jpg";
import wash from "../src/images/shower-icon.png";
import clean from "../src/images/bubbles-icon.png";
import groom from "../src/images/brush-icon.png";
import pawprints from "../src/images/pawprints.png";
import dog1 from "../src/images/dog 1.jpg";
import dog2 from "../src/images/dog 2.jpg";
import dog3 from "../src/images/dog 3.jpg";
import dog4 from "../src/images/dog 4.jpg";
import dog5 from "../src/images/dog 5.jpg";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="website.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <title>Doodles</title>
      {/* Navigation bar will be a component */}
      <nav className="nav">
        <img src={logo} alt="Logo of brand" className="navlogo" width="25" />
        <a href="home.jsx">Home</a>
        <a href="contact-us.jsx">Contact Us</a>
        <i className="fa fa-phone" style={{ fontSize: 24 }} />
        <p>07889907850</p>
      </nav>
      {/* Navigation bar will be a component */}
      <main>
        <div className="heading">
          <h1 className="mainheading">Doodles of Tetbury</h1>
          <p className="tagline">
            We are a small independent business <br></br>located just off the high street
            in Tetbury.
          </p>
          {/* button will be component */}
          <button type="button" className="button1">
            Book Now
          </button>
          <button type="button" className="button2">
            Find a salon
          </button>
          {/* button will be component */}
          <img
            src={headingpic}
            className="dogbeinggroomed"
            alt="dog being groomed"
            width="250"
          />
        </div>
        <div className="intro">
          Welcome to Doodles 🐾. I am Natalie the owner of the business. <br></br>I
          trained at Hartpury College and have experience with a wide range of
          breeds, temperaments and coat types.
        </div>
        <div className="services">
          <h2>Our Grooming Services</h2>
          <p>
            Catering for dogs of all sizes. We offer wash, clip, and blowdry
            services to leave your pooch looking and smelling incredible.
          </p>

          <div class="row">
            <div class="column">
              <div class="card">
                <img src={wash} alt="wash" width="40" />
                <h4>Why us</h4>
                <p>Qualified and fully insured.</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src={clean} alt="clean" width="40" />
                <h4>Why us</h4>
                <p>
                  We use only the best products for your dogs. The Milly’s range
                  offers a fantastic range of shampoos for every coat type
                  leaving the best results possible.
                  <br></br>They are:
                  <li>Hand made in the uk with luxurious ingredients.</li>
                  <li>Free from animal testing. </li>
                  <li>Hypoallergenic </li>
                  <li>Sulphate free and vegan friendly</li>
                  <li>Natural alternative to medicated shampoo</li>
                </p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src={groom} alt="groom" width="40" />
                <h4>Why us</h4>
                <p>
                  Small and quiet to ensure a low stress environment for your
                  pet.
                </p>
              </div>
            </div>
          </div>

          {/* button will be component */}
          <button type="button" className="button1">
            Book Now
          </button>
          {/* button will be component */}
        </div>
        <div className="pawprints">
          <img src={pawprints} alt="pawprints" width="165" />
        </div>
        <div className="clients">
          <h2>Our Fluffy Clients</h2>
          <p>Photos of our dogs after grooming</p>
          {/* carousel will be component */}
          <div className="dog">
            <img src={dog1} alt="dog1" width="100" />
            <br />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star not-checked" />
          </div>
          <div className="dog">
            <img src={dog2} alt="dog2" width="100" />
            <br />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="dog">
            <img src={dog3} alt="dog3" width="100" />
            <br />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
          <div className="dog">
            <img src={dog4} alt="dog4" width="100" />
            <br />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
          </div>
          <div className="dog">
            <img src={dog5} alt="dog5" width="100" />
            <br />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
        </div>
        {/* carousel will be component */}
      </main>
      {/* footer will be a component */}
      <footer>
        <i className="fa fa-twitter" />
        <i className="fa fa-instagram" />
        <i className="fa fa-facebook-f" />
        <p>© Copyright 2023</p>
      </footer>
      {/* footer will be a component */}
    </>
  );
}

export default App;
