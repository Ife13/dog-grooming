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
  <nav>
    <img src="doodles logo.jpg" alt="Logo of brand" className="nav logo" />
    <a href="home.jsx">Home</a>
    <a href="contact-us.jsx">Contact Us</a>
    <i className="fa fa-phone" style={{ fontSize: 24 }} />
    <p>07889907850</p>
  </nav>
  {/* Navigation bar will be a component */}
  <main>
    <div className="heading">
      <h1>Doodles of Tetbury</h1>
      <p>
      Welcome to “Doodles”! 🐾 
            </p>
      {/* button will be component */}
      <button type="button" className="button1">
        Book Now
      </button>
      <button type="button" className="button2">
        Find a salon
      </button>
      {/* button will be component */}
      <img src="brushing dog.jpg" alt="dog being groomed" />
    </div>
    <div className="intro">
    We are a small independent dog grooming business
    located in the Costold Town of Tetbury.
    </div>
    <div className="services">
      <h2>Our Grooming Services</h2>
      <p>
      Catering for dogs of all sizes. We offer wash, clip, and blowdry services to leave your pooch looking and smelling incredible.
      </p>
      <div className="benefit1">
        <img src="shower-icon.png" alt="wash" />
        <h3>Why us?</h3>
        <p>
        Fully Qualified and insured dog groomer.
        </p>
      </div>
      <div className="benefit2">
        <img src="bubbles-icon.png" alt="clean" />
        <h3>Why us?</h3>
        <p>
        We use only the best products for your dogs. The Milly’s range offers a fantastic range of shampoos for every coat type leaving the best results possible. They are 
* Hand made in the uk with luxurious ingredients
* Free from animal testing
* Hypoallergenic 
* Nulphate free and vegan friendly 
* Natural alternative to medicated shampoo
        </p>
      </div>
      <div className="benefit3">
        <img src="brush-icon.png" alt="groom" />
        <h3>Why us?</h3>
        <p>
        Small and quiet to ensure a low stress environment for your pet.
        </p>
      </div>
      {/* button will be component */}
      <button type="button" className="button1">
        Book Now
      </button>
      {/* button will be component */}
    </div>
    <div className="pawprints">
      <img src="pawprints.png" alt="pawprints" />
    </div>
    <div className="clients">
      <h2>Our Fluffy Clients</h2>
      <p>Photos of our dogs after grooming</p>
      {/* carousel will be component */}
      <div className="dog">
        <img src="dog 1.jpg" alt="dog1" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
      </div>
      <div className="dog">
        <img src="dog 2.jpg" alt="dog2" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
      </div>
      <div className="dog">
        <img src="dog 3.jpg" alt="dog3" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
      </div>
      <div className="dog">
        <img src="dog 4.jpg" alt="dog4" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
      </div>
      <div className="dog">
        <img src="dog 5.jpg" alt="dog5" />
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
</>;
