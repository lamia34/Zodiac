import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

// Icons
import { FaTrash, FaDollarSign, FaCarrot, FaSeedling } from "react-icons/fa";

// Css
import "./style.css";

// SplideJS Slider
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const Home = () => {
  // Feedback Show more
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    document.querySelector(".feedbacks").classList.add("show-all");
    setShowMore(true); // Update state to show "Show Less"
  };

  const handleShowLess = () => {
    document.querySelector(".feedbacks").classList.remove("show-all");
    setShowMore(false); // Update state to show "Show More"
  };

  // Discount-countdown
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      now.getDate()
    );
    const timeDiff = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <>
      <Header />
      {/* Hero */}
      <section className="hero-section">
        <div className="hero">
          <div className="hero-img">
            <div className="overlay-hero d-flex align-items-center">
              <div className="hero-content">
                <div className="bank-name d-flex">
                  <p> Bir ulduzun parıltısında bütün həyatın mənası gizlidir.</p>
                </div>
                <p className="d-flex">Kosmik harmoniya ilə bir olun.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promotion */}
      <section className="prom">
        <pre>{`
         "Kainatın sirlərini açmaq və ulduzların pıçıltılarını eşitmək üçün bir səfərə çıxın.
                          Hər ulduz sizin haqqınızda bir sirr daşıyır."
      `}</pre>
      </section>
      {/* Slider */}
      <section>
        <div className="slider-img d-flex align-content-center">
          <div className="slider">
            <Splide
              options={{
                type: "loop",
                rewind: true,
                autoplay: true,
                interval: 3000,
                pauseOnHover: false,
                arrows: true,
                pagination: true,
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                    {" "}
                    "Ulduzlar insanların taleyinə işarə edə bilər,
                     amma onların qərarlarını özləri verirlər."
                  </p>
                </div>
                <div className="author">
                  <img
                    src="https://st2.depositphotos.com/37825150/47734/i/450/depositphotos_477349532-stock-photo-nostradamus-french-astrologer-physician-reputed.jpg"
                    alt="Nostradamus"
                  />
                  <div className="author-info">
                    <p className="font-cookie">Nostradamus</p>
                    <p>Məşhur Kahin</p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                  "Astronomiya kainatı izah edir, 
                  astrologiya isə insan həyatının sirlərini açır."
                  </p>
                </div>
                <div className="author">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Galileo.arp.300pix.jpg"
                    alt="Pope Francis"
                  />
                  <div className="author-info">
                    <p className="font-cookie">Galileo Galilei</p>
                    <p>
                      Astronom
                    </p>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                  "Ulduzlar mənə gələcəyin istiqamətini göstərmir,
                   amma mənə qərarlarımın arxasında dayanmağa kömək edir."{" "}
                  </p>
                </div>
                <div className="author">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Princess Diana"
                  />
                  <div className="author-info">
                    <p className="font-cookie">Princess Diana</p>
                    <p>Uels Şahzadəsi</p>
                  </div>
                </div>
              </SplideSlide>
              
              <SplideSlide className="slide">
                <div className="slider-content">
                  <p className="red">
                  "Astrologiya insan psixikasının ən qədim təzahürlərindən biridir.
                   Onun kökləri insanın ulduzlarla əlaqəsini araşdırmağa yönəlib."{" "}
                  </p>
                </div>
                <div className="author">
                  <img
                    src="data:image/webp;base64,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"
                    alt="Albert Einstein"
                  />
                  <div className="author-info">
                    <p className="font-cookie">Albert Einstein</p>
                    <p>Fizik</p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
      {/* Feedbacks */}
      <section className="feedbacks-section">
        <div className="feedbacks">
          <h2>Testimonials</h2>
          <ul>
            <li>
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttLQ5cMFWWNnhDEkDrDUlF-x8oq5Mr1AF_Q&s"
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                      Ethan Brooks{" "}
                      <span className="volunteer">(volunteer)</span>
                    </p>
                    <p>
                      "I love being part of this project! Seeing how small
                      changes can have a big impact on food waste has been truly
                      eye-opening. Plus, the volunteer team is amazing!"
                    </p>
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
                      Sophia Miller <span className="user">(user)</span>
                    </p>
                    <p>
                      "LowWaste makes sustainable living so effortless. I love
                      it!"
                    </p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLljn3BG5vTPhlCGNFtJlrygxI883URPRfw&s"
                    alt="volunteer-girl"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="feedback">
                <div className="fb">
                  <img
                    src="https://t3.ftcdn.net/jpg/08/23/31/12/360_F_823311272_ARqhWc0IDvhfpvT4av2W0cX5N9Abdi02.jpg"
                    alt="volunteer-girl"
                  />
                  <div>
                    <p className="name">
                      Olivia Carter <span className="user">(user)</span>{" "}
                    </p>
                    <p>
                      "LowWaste is not just a project; it's a lifestyle. The
                      tools and resources provided make it so easy to adopt
                      sustainable habits.
                    </p>
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
                      Isabella Greene{" "}
                      <span className="volunteer">(volunteer)</span>
                    </p>
                    <p>
                      "Volunteering here was amazing. We truly made a
                      difference!"
                    </p>
                  </div>
                </div>{" "}
                <img
                  src="https://t3.ftcdn.net/jpg/06/46/92/68/360_F_646926810_sLEKc3E140TjFRlvIobHfK8JVedBBeIX.jpg"
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
                      Liam Turner <span className="user">(user)</span>
                    </p>
                    <p>
                      "The portion calculator is a game-changer for reducing
                      waste!"
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="show-more">
            {!showMore ? (
              <button onClick={handleShowMore}>Daha çoxunu göstər</button>
            ) : (
              <button onClick={handleShowLess}>Bağla</button>
            )}
          </div>
        </div>
      </section>
      {/* Discount */}
      <section id="discount">
        <div className="discount-bg d-flex">
          <div className="discount-img col-6"></div>
          <div className="countdown col-6">
            <div className="discount-heading d-flex align-items-center">
              <div className="discount-heading-text">
                <p className="summer2019">Yeni Marafon</p>
                <p className="discount">20 yanvar 2025</p>
              </div>
            </div>
            <div className="discount-content d-flex justify-content-center">
              <p>
                <span className="time">{timeRemaining.days}</span>
                <span className="time2">Gün</span>
              </p>
              <p>
                <span className="time">{timeRemaining.hours}</span>
                <span className="time2">Saat</span>{" "}
              </p>
              <p>
                <span className="time">{timeRemaining.minutes}</span>
                <span className="time2">Dəq</span>
              </p>
              <p>
                <span className="time">{timeRemaining.seconds}</span>
                <span className="time2">San</span>
              </p>
            </div>
            <div className="shopnow">
              <a href="/login">İndi qoşul</a>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="statistic-sec">
        <div className="statics-container">
          <ul className="statics-container-icons">
            <li>
              <FaTrash />
              <p>40% of all food is wasted globally</p>
            </li>
            <li>
              <FaDollarSign />
              <p>LowWaste users save an average of 30% more resources</p>
            </li>
            <li>
              <FaCarrot />
              <p>Join 5,000+ people already making a difference!</p>
            </li>
            <li>
              <FaSeedling />
              <p>Reduce up to 25kg of food waste annually per household.</p>
            </li>
          </ul>
        </div>
      </section>
      <Instagram />
      <Footer />
    </>
  );
};

export default Home;
