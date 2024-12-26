import React, { useState } from "react";
import "./style.css"; 
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";
import zodiacData from "../../Pages/Try/zodiacData"
import UpIcon from "../../components/UpIcon";


const Try = () => {
  const [birthDate, setBirthDate] = useState(""); 
  const [selectedSign, setSelectedSign] = useState(null); 

  const handleDateSubmit = () => {
    if (!birthDate) {
      alert("Zəhmət olmasa, doğum tarixinizi daxil edin.");
      return;
    }
  
    
    const dateParts = birthDate.split("-");
    if (dateParts.length !== 3) {
      alert("Tarixi düzgün formatda daxil edin (YYYY-MM-DD).");
      return;
    }
  
    const [year, month, day] = dateParts.map(Number);
    if (!month || !day || isNaN(month) || isNaN(day)) {
      alert("Tarixi düzgün daxil edin.");
      return;
    }
  
    const zodiacSign = getZodiacSign(month, day); 
    if (!zodiacSign) {
      alert("Doğum tarixiniz uyğun bürc tapmadı.");
      return;
    }
  
    setSelectedSign(zodiacSign); 
  };
  
  const getZodiacSign = (month, day) => {
    for (let zodiac of zodiacData) {
      const [startMonth, startDay] = zodiac.startDate;
      const [endMonth, endDay] = zodiac.endDate;
  
      
      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay) ||
        (startMonth > endMonth &&
          ((month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay)))
      ) {
        return zodiac;
      }
    }
    return null; 
  };
  
  return (
    <>
      <Header />
      <br/>
      <br/>
      <div className="zodiac-page">
        <h1>Astroloji Bürclər</h1>

        {/* Doğum tarixinə görə bürc tapma bölməsi */}
        <div className="input-container">
          <label>Doğum tarixinizi daxil edin:</label>
          <div className="input-row">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="date-input"
            />
            <button onClick={handleDateSubmit} className="btn primary">
              Bürcü Göstər
            </button>
          </div>
        </div>

        {/* Bütün bürclərin düymələri */}
        <div className="zodiac-buttons">
          {zodiacData.map((zodiac) => (
            <button
              key={zodiac.id}
              onClick={() => setSelectedSign(zodiac)}
              className={`zodiac-button ${
                selectedSign?.id === zodiac.id ? "active" : ""
              }`}
            >
              <img
                src={zodiac.image}
                alt={zodiac.name}
                className="zodiac-icon"
              />
              <span>{zodiac.name}</span>
            </button>
          ))}
        </div>

        {selectedSign && (
          <div className="zodiac-info">
            <div className="zodiac-info-container">
              <div className="zodiac-image">
                <img
                  src={selectedSign.image}
                  alt={selectedSign.name}
                  className="zodiac-img"
                />
              </div>

             
              <div className="zodiac-details">
               <h2>{selectedSign.name} </h2>
               <p><strong>Element:</strong> {selectedSign.element} ({selectedSign.icon})</p>
               <p><strong>Planet:</strong> {selectedSign.planet}</p>
               <p><strong>Güclü tərəfləri:</strong> {selectedSign.positive}</p>
               <p><strong>Zəif tərəfləri:</strong> {selectedSign.negative}</p>
               <p><strong>Uyğun bürclər:</strong> {selectedSign.compatibility}</p>
               <p><strong>Sevgi:</strong> {selectedSign.love}</p>
               <p><strong>Peşə:</strong> {selectedSign.career}</p>
               <p>{selectedSign.description}</p>
            </div>
            </div>
          </div>
        )}
      </div>
      <Instagram />
      <Footer />
      <UpIcon/>
    </>
  );
};

export default Try;




