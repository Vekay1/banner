import React, { useState } from "react";
import ReactDOM from "react-dom";

// Компонент FixedBanner
type FixedBannerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FixedBanner: React.FC<FixedBannerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={bannerStyle}>
      <p>Це фіксоване повідомлення або рекламний банер!</p>
      <button onClick={onClose} style={closeButtonStyle}>
        Закрити
      </button>
    </div>,
    document.body
  );
};

const App: React.FC = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Контент сторінки
      </h1>
      <p style={{ textAlign: "center" }}>
        Прокрутіть сторінку, щоб побачити, як банер залишається внизу екрана.
      </p>

      <FixedBanner isOpen={isBannerOpen} onClose={closeBanner} />
    </div>
  );
};

// Стилі для банера
const bannerStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#007BFF",
  color: "white",
  textAlign: "center",
  padding: "15px",
  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
  zIndex: 1000,
};

// Стилі для кнопки закриття
const closeButtonStyle: React.CSSProperties = {
  marginLeft: "20px",
  padding: "5px 10px",
  backgroundColor: "#FF4136",
  color: "white",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

export default App;
