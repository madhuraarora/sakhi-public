import React, {useState, useEffect} from "react";
import "../styles/home.css"
import { HashLink } from 'react-router-hash-link';
import footerImage from '/images/stitch.jpg';



const Home = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const isTouchDevice = () => {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
};

useEffect(() => {
  const handleOutsideClick = (e) => {
    if (
      ("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
      !e.target.closest(".layer-img")
    ) {
      setActiveLayer(null);
    }
  };

  document.addEventListener("click", handleOutsideClick);
  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
}, []);
  
  const layerText = {
    top: {
       kicker: "TOP LAYER",
      title: "Soft on the skin. Safer for your body.",
      desc: "The topmost layer is made from <strong>100% organic cotton</strong>, unbleached and free from harsh chemicals. This is the first layer that touches the skin, and we’ve made sure it’s soft, breathable, and reduces chances of irritation or rashes.<br /><br />  Cotton is a <strong>natural fibre</strong>, recommended by dermatologists and gynaecologists for prolonged use.",
    },
    middle: {
       kicker: "MIDDLE LAYER",
      title: "Built to absorb — and last.",
      desc: "The core absorbent layer is made from <strong>bamboo fleece</strong>. Known for its high absorption capacity and antibacterial properties, this is the layer that does the heavy lifting, absorbing menstrual flow quickly while remaining soft.<br /><br /> With the right care, this layer remains effective for <strong>up to 2 years or more</strong>.",
    },
    bottom: {
       kicker: "BOTTOM LAYER",
      title: "Protection you can trust.",
      desc: "The bottom layer is made of <strong>PUL (polyurethane laminate)</strong>, a waterproof yet breathable material used in medical-grade products. It prevents leaks, allows airflow, and ensures the pad stays secure and mess-free through your day.<br /><br /> PUL is a popular material in reusable hygiene products globally because of its <strong>safety profile, durability, and comfort</strong> during wear.",
    },
    default: {
       kicker: "BY WOMEN, FOR WOMEN",
    title: "Inside the Sakhi Pad",
    desc: "The Sakhi Pad is made with <strong>organic materials</strong>, carefully chosen for comfort, absorbency, and long-term use. It is free from harmful chemicals and plastics commonly found in disposable alternatives.<br /><br /> Each pad is washable and <strong>designed to last up to two years<strong>.",
    }

    
  };

  const currentLayer = layerText[activeLayer] || layerText.default;
  

  return (
    <>
    <section className="hero-section">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="hero-content">
        <div className="hero-main">
          <img src="/logo/icon.png" alt="Sakhi Icon Logo" className="hero-logo" />
          <h1 className="hero-heading">A friend through every cycle.</h1>
        </div>
        <p className="hero-subtext">
          We work with women from low-income communities to create and sell reusable cloth pads. <br />
          Through simple support and shared effort, we’re making periods safer, conversations easier, and waste a little lighter.
        </p>
        <div className="hero-buttons">
          <HashLink smooth to="#about" className="ghost-button">
            Read Our Story
          </HashLink>
          <HashLink smooth to="#pad" className="filled-button">
            Learn About the Pad
          </HashLink>
        </div>
        <div className="scroll-indicator">↓</div>
      </div>
    </section>


    <section className="quote-belt" id="about">
      It starts with a pad. Moves with a woman.
          <svg
        className="quote-wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1260,100 1440,0 1440,0 L1440,100 L0,100 Z"
          fill="#FCC6D3"
        />
        <path
          d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1260,100 1440,0"
          fill="none"
          stroke="#FF90A1"
          strokeWidth="7"
          strokeDasharray="12 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>


    <section className="about-section">
      <div className="about-content">
          <p>
            Sakhi began because menstruation remains a multifaceted problem in India. Unaffordable menstrual care, the use of unsafe alternatives, and plastic waste are key concerns. Since menstruation is still considered a taboo, it remains hidden and so do the challenges surrounding it. At Sakhi, we aim to change this with affordable, eco-friendly pads, made and shared by women communities, to make periods slightly easier and dignified for everyone.
          </p>
        </div>
    </section>


    <section className="sakhi-belt" id="model">
      <div className="sakhi-scroll">
        <div className="scroll-content">
            {Array(10).fill(null).map((_, i) => (
              <span key={i}>
                <span className="hindi">सखी</span> • 
                <span className="tamil">சகி</span> • 
                <span className="bengali">সখী</span> • 
                <span className="telugu">సఖి</span> • 
                <span className="malayalam">സഖി</span> • 
                <span className="gujarati">સખી</span> • 
                <span className="kannada">ಸಖಿ</span> • 
                <span className="odia">ସଖୀ</span> • 
                <span className="punjabi">ਸਖੀ</span> • 
              </span>
            ))}
        </div>
      </div>
    </section>


    <section className="cards-section" >
      <h2 className="cards-title">
      <span className="highlight-text">People, Progress, and the Planet.</span></h2>
        <div className="card-container-simple">
          <div className="sakhi-card-simple">

            <img src="/logo/woman.png" alt="Sakhi training" className="card-icon" />
            <img src="/logo/woman.png" alt="Sakhi training" className="card-icon" />
            <img src="/logo/woman.png" alt="Sakhi training" className="card-icon" />
            <h3>Sakhis, our <span className="hover-frontliners">frontliners</span>.</h3>
            <p>
              Women trained in stitching, sales, and menstrual health become Sakhis,
              to produce Sakhi pads & lead community initiatives.
            </p>
          </div>
          <div className="sakhi-card-simple">
            <h3 className="hover-bold">Empowered communities.</h3>
            <p>
              Women from underserved communities receive affordable menstrual products,
              health education, and awareness flyers enabling them to make informed choices.
            </p>
            <img src="/logo/arrow.png" alt="Community impact" className="card-iconp" />
          </div>
          <div className="sakhi-card-simple">
            <div className="icon-comparison">
            <img src="/logo/pad.png" alt="Eco impact" className="card-icon" /> 
            <span className="equals">=</span>
            <img src="/logo/bag.png" alt="Eco impact" className="card-iconb" /> 
            <img src="/logo/bag.png" alt="Eco impact" className="card-iconb" />
            <img src="/logo/bag.png" alt="Eco impact" className="card-iconb" />
            <img src="/logo/bag.png" alt="Eco impact" className="card-iconb" />
            </div>
            <h3>All while helping<span className="hover-cursor">the environment.</span> </h3>
            <p>
              Each woman using Sakhi pads for a year prevents the equivalent of 348
              plastic bags from ending up in landfills.
            </p>
          </div>
        </div>
    </section>



    <section className="sakhi-pad-section" id="pad">
      <div className="overlay-text">
        THE SAKHI PAD
      </div>
      <div className="sakhi-pad-stitch-bottom"></div>
    </section>

    <section className="pad-layers-section">
      <div className="pad-layers-container">
           <div className="pad-layers-wrapper"></div>
          <div className="layer-illustrations">
            <img
              src="/images/top.png"
              alt="Top Layer"
              className={`layer-img top ${activeLayer === "top" ? "active" : ""}`}
              onClick={() => setActiveLayer(prev => prev === "top" ? null : "top")}
              {...(!isTouchDevice() && {
                onMouseEnter: () => setActiveLayer("top"),
                onMouseLeave: () => setActiveLayer(null),
              })}
            />

            <img
              src="/images/mid.png"
              alt="Middle Layer"
              className={`layer-img middle ${activeLayer === "middle" ? "active" : ""}`}
              onClick={() => setActiveLayer(prev => prev === "middle" ? null : "middle")}
              {...(!isTouchDevice() && {
                onMouseEnter: () => setActiveLayer("middle"),
                onMouseLeave: () => setActiveLayer(null),
              })}
            />

            <img
              src="/images/bott.png"
              alt="Bottom Layer"
              className={`layer-img bottom ${activeLayer === "bottom" ? "active" : ""}`}
              onClick={() => setActiveLayer(prev => prev === "bottom" ? null : "bottom")}
              {...(!isTouchDevice() && {
                onMouseEnter: () => setActiveLayer("bottom"),
                onMouseLeave: () => setActiveLayer(null),
              })}
            />

          </div>
          <div className="layer-description">
            <div className="layer-kicker">{currentLayer.kicker}</div>
              <h3>{currentLayer.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: currentLayer.desc }}></p>
            </div>
          </div>
    </section>


    <section>
      <div className="scalloped-top"></div>
        <div className="change-belt">
          Change Happens Together.
        </div>
    </section>


      <div className="core-values-section">
        <div className="core-values-container">
          <p className="intro-text">
            At Sakhi, we ground every decision in three priorities that we return to every day.
          </p>

              <div
            className="tab-buttons"
            onMouseLeave={() => setActiveLayer(null)}
          >
            <button
              className="tab-button"
              onMouseEnter={() => setActiveLayer("Sustainability")}
            >
              Sustainability
            </button>
            <button
              className="tab-button"
              onMouseEnter={() => setActiveLayer("Accessibility")}
            >
              Accessibility
            </button>
            <button
              className="tab-button"
              onMouseEnter={() => setActiveLayer("Awareness")}
            >
              Awareness
            </button  >
        </div>

        <div className="core-values-footer">
          <div className="partner-text">Want to partner, collaborate, or simply learn more?</div>
            <a href="/contact" className="core-values-cta">Get in touch →</a>
          </div>
        </div>

      </div>


    <section>
     <img src={footerImage} alt="Footer visual" className="footer-top-image" />
    </section>
    
    </>
  );
}
export default Home;