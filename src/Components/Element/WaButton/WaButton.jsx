// import React from "react";
// import "./WaButton.css";

// const openNewTabWa = (nomorWa) => {
//   window.open(`https://wa.me/62${nomorWa}?text=Halo, saya telah melihat produk anda pada website, saya tertarik untuk melakukan pemesanan`);
// };

// const WaButton = (props) => {
//   const { nomorWa } = props;

//   return (
//     <div className="wa-button" onClick={openNewTabWa(nomorWa)}>
//       <img src="image/WA logo.svg" alt="Contact us" />
//       <p>Hubungi Kami</p>
//     </div>
//   );
// };

// export default WaButton;
// WaButton.js
import React from "react";
import "./WaButton.css";

const openNewTabWa = (nomorWa, textWa) => {
  window.open(`https://wa.me/62${nomorWa}?text=${textWa}`);
};

const WaButton = (props) => {
  const { nomorWa, textWa } = props;

  return (
    <div className="wa-button" onClick={() => openNewTabWa(nomorWa, textWa)}>
      <img src="image/WA logo.svg" alt="Contact us" />
      <p>Hubungi Kami</p>
    </div>
  );
};

export default WaButton;
