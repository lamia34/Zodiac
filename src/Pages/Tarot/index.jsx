import React, { useState } from "react";
import {
  getDailyHoroscope,
  getWeeklyHoroscope,
  getMonthlyHoroscope,
} from "./api";
import Header from "../../components/Header";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";

const Tarot = () => {
  const [sign, setSign] = useState("virgo");
  const [result, setResult] = useState(null);
  const [type, setType] = useState("daily");

  const fetchHoroscope = async () => {
    let data;
    if (type === "daily") {
      data = await getDailyHoroscope(sign);
    } else if (type === "weekly") {
      data = await getWeeklyHoroscope(sign);
    } else {
      data = await getMonthlyHoroscope(sign);
    }
    setResult(data?.data?.horoscope_data || "No data available.");
  };

  return (
    <>
    <Header/>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Horoscope App</h1>
      <select onChange={(e) => setSign(e.target.value)} value={sign}>
        <option value="virgo">Virgo</option>
        <option value="aries">Aries</option>
        <option value="taurus">Taurus</option>
        {/* Digər bürclər */}
      </select>
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <button onClick={fetchHoroscope}>Get Horoscope</button>
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Horoscope:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
    <Instagram/>
    <Footer/>
    </>
  );
};

export default Tarot;
