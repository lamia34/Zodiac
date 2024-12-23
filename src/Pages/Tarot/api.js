import axios from "axios";

const BASE_URL = "https://horoscope-app-api.vercel.app/api/v1/get-horoscope";

const getHoroscope = async (type, sign, day = "TODAY") => {
  const url =
    type === "daily"
      ? `${BASE_URL}/daily?sign=${sign}&day=${day}`
      : type === "weekly"
      ? `${BASE_URL}/weekly?sign=${sign}`
      : `${BASE_URL}/monthly?sign=${sign}`;

      

  try {
    const response = await axios.get(url, {
      headers: {
        "Cache-Control": "public,max-age=0,must-revalidate",
        "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    return null;
  }
};

export const getDailyHoroscope = (sign, day = "TODAY") =>
  getHoroscope("daily", sign, day);

export const getWeeklyHoroscope = (sign) => getHoroscope("weekly", sign);

export const getMonthlyHoroscope = (sign) => getHoroscope("monthly", sign);

  