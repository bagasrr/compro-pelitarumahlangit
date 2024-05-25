import "./Maps.css";
const Maps = () => {
  return (
    <div className="maps">
      <h3 className="mapsTitle">Google Maps</h3>
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
