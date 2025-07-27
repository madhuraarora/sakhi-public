import React from "react";
import "../styles/behindsakhi.css";
import madhuraImg from "/images/madhura.png";
import anukalpImg from "/images/anukalp.png";
import pitchImg   from "/images/sakhipitch.png";

import logo1      from "/other images/totalwoman.png";
import logo2      from "/other images/khajaniins.png";
import logo3      from "/other images/nityohum.jpg";
import logo4      from "/other images/rcbw.jpg";
import logo5      from "/other images/rinadharod.jpg";

const BehindSakhi = () => (
  <>
    <section className="behind-sakhi-section">
      <h2 className="behind-sakhi-title">Behind Sakhi</h2>

      <div className="founders-intro-paragraph">
        <p>
          What you see here carries our names, but its shape has been carved by many hands. It’s been made by every story that lingered long after we heard it, by every mentor who asked “what next?”, by those who met us with both questions and conviction, and by a community that keeps reminding us why this matters.
        We’ve been fortunate to be met with belief and backing from people and platforms who saw the shape of Sakhi even before it fully formed. <br></br>Sakhi is proudly supported and funded by <a href="https://resolutionproject.org/ventures/sakhi/">Resolution Project</a>.
        </p>
      </div>

      <div className="founders-container">
        <div className="founder-card madhura">
          <div className="founder-img-wrapper">
            <img src={madhuraImg} alt="Madhura Arora" className="founder-img" />
          </div>
          <h3 className="founder-name">Madhura Arora</h3>
          <p className="founder-bio">
            Madhura is a computer engineering student who co-founded Sakhi after a personal moment led her to start listening more closely to the people around her. What followed were months of community conversations, prototyping, and learning alongside women in Mumbai.<br></br>
            She has moved through many kinds of tasks, from designing systems and adjusting budgets to coordinating outreach and handling small, necessary details. Through it all, she has tried to stay close to the original intent of the work, making sure it reflects the needs and voices of the people it is meant for.
          </p>
        </div>

        <div className="founder-card anukalp">
          <div className="founder-img-wrapper">
            <img src={anukalpImg} alt="Anukalp Chaturvedi" className="founder-img" />
          </div>
          <h3 className="founder-name">Anukalp Chaturvedi</h3>
          <p className="founder-bio">
           Anukalp, an Information Technology student, co-founded Sakhi with a vision to drive innovation that empowers communities. He shapes Sakhi’s mission through strategy, operations, and building strong collaborations with partners who champion women’s empowerment.
          <br></br>Watching the first pad prototype come to life marked a shared dream with Madhura taking form. His belief in localising change and fostering community engagement shapes how Sakhi is just as much about encouraging menstrual dialogue as it is about sustainable access.
          </p>
                </div>
            </div>

            <div className="chevron-divider" />
    </section>

    <section className="supporters-section">
      <h2 className="supporters-title">With Us, in Spirit and Action</h2>
      <p className="supporters-caption">
        Gratitude to those who’ve shared their intent to support Sakhi as it grows.
      </p>

      <div className="logo-grid">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, idx) => (
          <div className="logo-grid-item" key={idx}>
            <img src={logo} alt={`Supporter logo ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="founders-candid-photo">
        <img src={pitchImg} alt="Pitching to Susan Afan" />
        <p className="candid-caption">
          One of our first conversations that made the idea feel real, with
          Susan Afan.
        </p>
      </div>
    </section>
  </>
);

export default BehindSakhi;
