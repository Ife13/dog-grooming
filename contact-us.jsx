<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="website.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <title>Doodles Contact Us</title>
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
    <div className="form">
      <h1>Contact Us</h1>
      <fieldset>
        <img src="doodles logo.jpg" alt="logo" />
        <p>Send us your query</p>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" required="" placeholder="required" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" required="" placeholder="required" />
        </label>
        <label htmlFor="Subject">
          Subject
          <input type="text" id="subject" placeholder="subject" />
        </label>
        <label htmlFor="Message">
          Message:
          <textarea
            name="Message"
            id="Message"
            cols={150}
            rows={10}
            placeholder="Type here"
            defaultValue={""}
          />
          <br />
        </label>
        {/* button will be component */}
        <button type="submit" method="post">
          submit
        </button>
        {/* button will be component */}
      </fieldset>
    </div>
    <div className="details">
      <div className="hours">
        <h2>Opening Hours</h2>
        <ul>
          <li>Monday: CLOSED</li>
          <li>Tuesday: 9am-2pm</li>
          <li>Wednesday: 9am-2pm</li>
          <li>Thursday: CLOSED</li>
          <li>Friday: 9am-2pm</li>
          <li>Saturday: CLOSED</li>
          <li>Sunday: CLOSED</li>
        </ul>
      </div>
      <div className="location">
        <h2>Location</h2>
        <i style={{ fontSize: 24 }} className="fa">
          
        </i>
        <p>18 Hampton Street, Tetbury, United Kingdom</p>
        <i style={{ fontSize: 24 }} className="fa">
          
        </i>
        <p>E-mail: Morrisonnatalie02@gmail.com</p>
        <i className="fa fa-phone" style={{ fontSize: 24 }} />
        <p>07889907850</p>
      </div>
      <img src="map.png" alt="map" />
    </div>
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
