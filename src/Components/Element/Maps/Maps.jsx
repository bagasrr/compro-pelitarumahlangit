import "./Maps.css";
const Maps = () => {
  return (
    <div className="maps">
      <div className="mapsHeader">
        <h3 className="mapsTitle">Google Maps</h3>
        <div className="mapsLocation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
          </svg>
          <a href="https://maps.app.goo.gl/d5VxUP2MHHPCK9Zv9" target="_blank">
            PT Pelita Rumah Langit
          </a>
        </div>
      </div>

      <div className="mapsBox">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d212.62990983377716!2d106.99209190391646!3d-6.4210769817849425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1714808942366!5m2!1sen!2sid"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mapsIframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
