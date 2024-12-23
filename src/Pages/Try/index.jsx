import React, { useState } from "react";
import "./style.css"; // Stil üçün ayrıca CSS faylı əlavə edəcəyik



import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";


const zodiacData = [
  { name: "Qoç", dateRange: "21 Mart - 19 Aprel", element: "Od", traits: "Cəsarətli, enerjili" },
  { name: "Buğa", dateRange: "20 Aprel - 20 May", element: "Torpaq", traits: "Səbirli, sabit" },
  { name: "Əkizlər", dateRange: "21 May - 20 İyun", element: "Hava", traits: "Zəkalı, sosial" },
  { name: "Xərçəng", dateRange: "21 İyun - 22 İyul", element: "Su", traits: "Həssas, qayğıkeş" },
  { name: "Şir", dateRange: "23 İyul - 22 Avqust", element: "Od", traits: "İradəli, liderlik bacarığı" },
  { name: "Qız", dateRange: "23 Avqust - 22 Sentyabr", element: "Torpaq", traits: "Əzimkar, analitik" },
  { name: "Tərəzi", dateRange: "23 Sentyabr - 22 Oktyabr", element: "Hava", traits: "Harmoniya axtaran, ədalətli" },
  { name: "Əqrəb", dateRange: "23 Okyabr - 21 Noyabr", element: "Su", traits: "Gizli, tutqun" },
  { name: "Oxatan", dateRange: "22 Noyabr - 21 Dekabr", element: "Od", traits: "Maceraperest, optimist" },
  { name: "Oğlaq", dateRange: "22 Dekabr - 19 Yanvar", element: "Torpaq", traits: "Ciddi, praktik" },
  { name: "Dolça", dateRange: "20 Yanvar - 18 Fevral", element: "Hava", traits: "İradəli, yaradıcı" },
  { name: "Balıqlar", dateRange: "19 Fevral - 20 Mart", element: "Su", traits: "Empatik, idealist" },

  
];

const getZodiacSign = (month, day) => {
  const signs = [
    { sign: "Qoç", start: [3, 21], end: [4, 19] },
    { sign: "Buğa", start: [4, 20], end: [5, 20] },
    { sign: "Əkizlər", start: [5, 21], end: [6, 20] },
    { sign: "Xərçəng", start: [6, 21], end: [7, 22] },
    { sign: "Şir", start: [7, 23], end: [8, 22] },
    { sign: "Qız", start: [8, 23], end: [9, 22] },
    { sign: "Tərəzi", start: [9, 23], end: [10, 22] },
    { sign: "Əqrəb", start: [10, 23], end: [11, 21] },
    { sign: "Oxatan", start: [11, 22], end: [12, 21] },
    { sign: "Oğlaq", start: [12, 22], end: [1, 19] },
    { sign: "Dolça", start: [1, 20], end: [2, 18] },
    { sign: "Balıqlar", start: [2, 19], end: [3, 20] },

    // Digər bürcləri buraya əlavə edin...
  ];

  for (let { sign, start, end } of signs) {
    const [startMonth, startDay] = start;
    const [endMonth, endDay] = end;
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay)
    ) {
      return sign;
    }
  }
  return null;
};



const Try = () => {
  const [birthDate, setBirthDate] = useState("");
  const [zodiacSign, setZodiacSign] = useState(null);

  const handleSubmit = () => {
    if (!birthDate) return;
    const [year, month, day] = birthDate.split("-").map(Number);
    const sign = getZodiacSign(month, day);
    setZodiacSign(sign);
  };

  const zodiacInfo = zodiacData.find((zodiac) => zodiac.name === zodiacSign);

  return (
    <>
<Header/>
    <div className="zodiac-page">
      <h1>Astroloji Doğum Xəritəsi</h1>
      <div className="input-container">
        <label>Doğum Tarixinizi daxil edin:</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={handleSubmit}>Bürcü Göstər</button>
      </div>

      {zodiacSign && zodiacInfo && (
        <div className="zodiac-info">
          <h2>{zodiacInfo.name} ({zodiacInfo.dateRange})</h2>
          <p><strong>Element:</strong> {zodiacInfo.element}</p>
          <p><strong>Xüsusiyyətlər:</strong> {zodiacInfo.traits}</p>
          <div className="zodiac-animation">
            {/* Bürclərin simvolik animasiyası üçün şəkil və ya GIF yerləşdirə bilərsiniz */}
            <img src={`/images/${zodiacInfo.name.toLowerCase()}.png`} alt={zodiacInfo.name} />
          </div>
        </div>
      )}
    </div>
    <Instagram />
      <Footer />

      </>
  );
};

export default Try;


