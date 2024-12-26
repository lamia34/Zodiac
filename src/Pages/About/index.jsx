import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";
import UpIcon from "../../components/UpIcon";

import "./style.css";



const About = () => {

  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreFeedbacks, setShowMoreFeedbacks] = useState(false);

  
  const handleShowMoreAbout = () => setShowMoreAbout(true);
  const handleShowLessAbout = () => setShowMoreAbout(false);


  const handleShowMoreFeedbacks = () => {
    document.querySelector(".feedbacks").classList.add("show-all");
    setShowMoreFeedbacks(true);
  };
  const handleShowLessFeedbacks = () => {
    document.querySelector(".feedbacks").classList.remove("show-all");
    setShowMoreFeedbacks(false);
  };

  return (
    <>
      <Header />
      <section className="about-us-sec">
      <div className="about-us-content">
        <h3>"Ulduzlar Həyatınızı İşıqlandırsın."</h3>
        <p>
        LamiAstro adı, "Lamia" adından gəlir, ki bu da "ulduz" mənasını verir.
         Saytımızın adı, hər bir insanın öz daxili ulduzunu tapması və həyatına rəhbərlik 
         edən astral qüvvələri kəşf etməsi ideyasına əsaslanır. Bizim məqsədimiz, 
         astrologiyanın qədim biliklərini müasir dövrə uyğun şəkildə təqdim edərək,
          istifadəçilərimizin həyatlarını daha aydın, anlamlı və məqsədyönlü bir şəkildə yaşamalarına dəstək olmaqdır.
        </p>
        {showMoreAbout && (
          <p>
            Astrologiya, çox qədim bir elm olaraq, ulduzların və planetlərin insan həyatına təsirini araşdırır. 
            LamiAstro saytı da bu mövzuda hərtərəfli və faydalı məlumatlar təqdim edərək,
             hər kəsin bürcünün və astroloji xəritəsinin özünəməxsus xüsusiyyətlərini başa düşməsinə kömək edir.
            Saytımızın hər bir bölməsi, astroloji təhlillər və şəxsi inkişafınıza dair rəhbərlik edəcək,
             hər anınızı daha dərin anlamla yaşamağa imkan verəcək.
          </p>
        )}
         <div className="show-more">
            {!showMoreAbout ? (
              <button onClick={handleShowMoreAbout}>Daha çoxunu göstər</button>
            ) : (
              <button onClick={handleShowLessAbout}>Bağla</button>
            )}
          </div>
      </div>
      <div className="about-us-img">
        <img
          src="https://alfheimaromaterapi.com/cdn/shop/articles/yay2.jpg?v=1699870740"
          alt="Astroloji Məkan"
        />
      </div>
    </section>
      <section className="why-choose-us-sec">
        <h2>Niyə bizi seçməlisiz?</h2>
        <div className="wcu-container">
          <div>
            
            <h4>Bürclər və Xüsusiyyətlər</h4>
            <p>
            Hər bir bürcün xasiyyəti, uyğunluqları, müsbət və mənfi cəhətləri 
            haqqında dərin təhlillər və bələdçilər təqdim edirik.
             Öz bürcünüzü daha yaxından tanıyın və həyatınızdakı istiqamətləri doğru seçin.
            </p>
          </div>
          <div>
            
            <h4>Günlük və Həftəlik Proqnozlar</h4>
            <p>
            Hər gün və hər həftə üçün astroloji təhlillər, 
            fərdi proqnozlar və istiqamətlər. Bu proqnozlar,
             həyatınızdakı vacib qərarları qəbul etməyə kömək
              edəcək və sizi hər yeni günə hazırlayacaq.
            </p>
          </div>
          <div>
            
            <h4>Digər astroloji məlumatlar</h4>
            <p>
            Bürclər arasında uyğunluq,Planetar hadisələr,
            Retro zamanları və s. kimi məlumatlar.Saytımızın hər bir bölməsi, 
            astroloji təhlillər və şəxsi inkişafınıza dair rəhbərlik edəcək,
             hər anınızı daha dərin anlamla yaşamağa imkan verəcək.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="feedbacks-section">
        <div className="feedbacks">
          <h2>Astroloqlar</h2>
          <ul>
            <li>
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.h2AKKGkq1enhWgdm5-aAOQHaLH&w=200&h=300&c=7"
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                    Susan Miller{" "}
                      <span className="volunteer"></span>
                    </p>
                    <p>
                    Amerikalı astroloq və yazıçı, "Astrology Zone" adlı vebsaytında 
                    aylıq və illik ulduz falı təhlilləri təqdim edir.
                    </p>
                    <button>
                     {" "}
                     <Link to="/contact">Əlaqə</Link>{" "}
                     </button>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <div className="feedback">
                <div className="fb">
                  <div>
                    <p className="name">
                    Liz Greene <span className="user"></span>
                    </p>
                    <p>
                    Psixoloji astrologiya sahəsində tanınmış britaniyalı astroloq və psixoterapevt,
                     insan xarakterini astrologiya vasitəsilə anlamağa çalışır.
                    </p>
                    <button>
                     {" "}
                     <Link to="/contact">Əlaqə</Link>{" "}
                     </button>
                  </div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.lpDDebz4q2UU_tX6ML2WsgAAAA&w=200&h=249&c=7"
                    alt="volunteer-girl"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.SUE5MnTwVrV3ObcCRXgn1wHaE7&w=200&h=133&c=7"
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                    Robert Hand <span className="user"></span>{" "}
                    </p>
                    <p>
                    Amerikalı astroloq və müəllif, 
                    astrologiyada tranzitlərin və planet hərəkətlərinin 
                    analizinə dair geniş işləri ilə tanınır.
                    </p>
                    <button>
                     {" "}
                     <Link to="/contact">Əlaqə</Link>{" "}
                     </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="extra-feedback">
              {" "}
              <div className="feedback">
                <div className="fb">
                  <div>
                    <p className="name">
                    Rick Levine{" "}
                      <span className="volunteer"></span>
                    </p>
                    <p>
                    Amerikalı astroloq və müəllif,
                     astrologiya sahəsində müxtəlif kitabların müəllifi 
                     və seminarların aparıcısıdır.
                    </p>
                    <button>
                     {" "}
                     <Link to="/contact">Əlaqə</Link>{" "}
                     </button>
                  </div>
                </div>{" "}
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.Nw3Vl287CZiOKzqAyFuXiwAAAA&w=200&h=226&c=7"
                  alt="volunteer-girl"
                />
              </div>
            </li>
            <li className="extra-feedback">
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=2KuVFEhKVdPstrmBo7m3pkaxiXkJMiJVUjelRxIcsoo="
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                      Liam Turner <span className="user"></span>
                    </p>
                    <p>
                      "The portion calculator is a game-changer for reducing
                      waste!"
                    </p>
                    <button>
                     {" "}
                     <Link to="/contact">Əlaqə</Link>{" "}
                     </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="show-more">
            {!showMoreFeedbacks ? (
              <button onClick={handleShowMoreFeedbacks}>
                Daha çoxunu göstər
              </button>
            ) : (
              <button onClick={handleShowLessFeedbacks}>Bağla</button>
            )}
          </div>
        </div>
      </section>
      <Instagram />
      <Footer />
      <UpIcon/>
    </>
  );
};

export default About;
