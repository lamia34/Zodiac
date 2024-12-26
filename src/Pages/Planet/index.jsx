import React, { useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Instagram from "../../components/Instagram";
import Footer from "../../components/Footer";
import UpIcon from "../../components/UpIcon";


const planetsData = [
    {
      name: "Merkuri",
      description: "Merkuri düşüncə, ünsiyyət və məlumat mübadiləsini təmsil edir. Əkizlər bürcündə sürətli düşüncə və çeviklik, Qız bürcündə isə analitik düşünmə və diqqətlilik ön plandadır.",
      image: "https://freesvg.org/img/Mercury-In-Color-Prockter07-centered--by-Merlin2525.png",
      speed: "4s",  
      distance: "50px"  
    },
    {
      name: "Venera",
      description: "Venera sevgi, gözəllik və estetikə təsir edir. Tərəzi bürcündə harmoniya və münasibətlərə diqqət, Buğa bürcündə isə materialist və sabitlikə olan bağlılıq önə çıxır.",
      image: "https://freesvg.org/storage/img/thumb/venus-dan-gerhards-01.png",
      speed: "6s", 
      distance: "80px"
    },
    {
      name: "Yer",
      description: "Həyatın və doğanın planeti. Ruhsal və fiziki sağlamlıq.",
      image: "https://freesvg.org/storage/img/thumb/The-Earth-Seen-From-Apollo-17-by-Merlin2525.png",
      speed: "8s", 
      distance: "120px"
    },
    {
      name: "Mars",
      description: "Mars enerji, mübarizə və hədəfə çatmaq istəyini təmsil edir. Qoç bürcündə cəsarət və aktivlik, Əqrəb bürcündə isə güclü iradə və dərinlik axtarışı vurğulanır.",
      image: "https://freesvg.org/storage/img/thumb/Mars.png",
      speed: "10s", 
      distance: "160px"
    },
    {
      name: "Yupiter",
      description: "Yupiter şans, genişlənmə və müdrikliklə əlaqələndirilir. Şir bürcündə özünü göstərmə və liderlik, Balıqlar bürcündə isə mənəvi inkişaf və həssaslıq önə çıxır.",
      image: "https://freesvg.org/storage/img/thumb/jupiter-dan-gerhards-01.png",
      speed: "12s", 
      distance: "200px"
    },
    {
      name: "Saturn",
      description: "Saturn məsuliyyət, quruculuq və səy ilə əlaqələndirilir. Oğlaq bürcündə intizam və məqsəd yönümlülük, Dolça bürcündə isə yenilikçilik və azadlıq axtarışı vurğulanır.",
      image: "https://freesvg.org/img/saturn-dan-gerhards-01.png",
      speed: "14s", 
      distance: "240px"
    },

    {
            name: "Pluton",
            description: "Pluton güc, dönüşüm və yenilənmə planetidir. Əqrəb bürcündə isə bu, dərin emosional və psixoloji dəyişiklikləri təmsil edir.",
            image: "https://freesvg.org/img/Pluto-map-hs-2010-06-90deg-Face-by-Merlin2525.png",
            speed: "16s",
            distance:"280px"
    },
    ];
  


const Planet = ({ name, description, image, speed, distance, onClick }) => {
    return (
      <div className="planet" style={{ animationDuration: speed, marginLeft: distance }} onClick={() => onClick(name, description)}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  };

const PlanetsPage = () => {
  const [planetInfo, setPlanetInfo] = useState(null);

  
  const handlePlanetClick = (name, description) => {
    setPlanetInfo({ name, description });
  };

  return (
    <>
    <Header/>
    <br/>
    <br/>
    <br/>
    
    <div className="planets-page">
      <h1> Astroloji Planetlər</h1>

      <div className="sun"
      ></div> {/* Günəş */}
      
      <div className="planet-orbits">
        {planetsData.map((planet, index) => (
          <Planet
            key={index}
            name={planet.name}
            description={planet.description}
            image={planet.image}
            speed={planet.speed}
            distance={planet.distance}
            onClick={handlePlanetClick}
          />
        ))}
      </div>

      {planetInfo && (
        <div className="planet-details">
          <h2>{planetInfo.name}</h2>
          <p>{planetInfo.description}</p>
        </div>
      )}
    </div>
    <br/>
    <br/>
    <br/>
    <Instagram/>
    <Footer/>
    <UpIcon/>
    </>
  );
};

export default PlanetsPage;

