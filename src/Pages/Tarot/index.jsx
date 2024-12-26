import React, { useState } from 'react';
import zodiacData from './data';
import Header from '../../components/Header';
import Instagram from '../../components/Instagram';
import Footer from '../../components/Footer';
import UpIcon from '../../components/UpIcon';

function Tarot() {
  const [selectedZodiac, setSelectedZodiac] = useState(null);

  const handleClick = (zodiac) => {
    setSelectedZodiac(zodiac);
  };

  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#fdf8f5",
    color: "#333",
  };

  const headerStyle = {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#7b4b94",
  };

  const paragraphStyle = {
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "justify",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const buttonStyle = (image) => ({
    backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center", 
  width: "120px",
  height: "120px",
  border: "3px solid #7b4b94",
  borderRadius: "50%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  });

  const buttonHoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    color: "gold",
  };

  const selectedStyle = {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: selectedZodiac?.color.toLowerCase(),
    color: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const imageStyle = {
    width: "250px",
    borderRadius: "15px",
    marginTop: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <br/>
      <br/>
      <br/>
      <h1 style={headerStyle}>Tarot</h1>
      <p style={paragraphStyle}>
        Tarot, orta əsrlərin sonlarına doğru ortaya çıxan 78 kartdan ibarət oyun kartları göyərtəsinə aiddir.
        Zaman keçdikcə psixoloji yardım məqsədi ilə istifadə olunmağa başladı və çağımızda falçılıq və falçılıqla bağlı aktual olmağa davam edir.
      </p>
      <p style={paragraphStyle}>
        Ənənəvi olaraq, Tarot 22 əsas arcana və ya arcana major kartından və 56 kiçik arcana və ya arcana minor kartından ibarətdir.
        Tarotda ən güclü və ən yaxşı kartlardan biri taleyin çarxıdır. Bu kart fərdin həm şəxsi həyatında, həm də iş həyatında xoşbəxt və ya uğurlu olacağını göstərir.
      </p>
      <p style={paragraphStyle}>İndi isə keçək bürclər və kartlar arasında olan əlaqəyə.</p>

      <h2 style={headerStyle}>Bürclərə uyğun Tarot karları və Rəngləri</h2>
      <div style={buttonContainerStyle}>
        {zodiacData.map((zodiac) => (
          <button
            className="tarot"
            key={zodiac.name}
            onClick={() => handleClick(zodiac)}
            style={buttonStyle(zodiac.image)}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle(zodiac.image))}
          >
            {zodiac.name}
          </button>
        ))}
      </div>

      {selectedZodiac && (
        <div style={selectedStyle}>
          <h2>{selectedZodiac.name} Bürcü</h2>
          <p>{selectedZodiac.description}</p>
          <img
            src={selectedZodiac.imageDescription}
            alt={`${selectedZodiac.name} rəngi`}
            style={imageStyle}
          />
        </div>
      )}
      <br/>
      <br/>
      <br/>
      <Instagram />
      <Footer />
      <UpIcon/>
    </div>
  );
}

export default Tarot;


