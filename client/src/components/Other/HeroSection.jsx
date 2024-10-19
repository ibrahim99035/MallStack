import React from 'react';
import '../../CSS/HeroSection.css';
import Logo from '/icons/MallStackX-icon.jpg'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">معارض الضجيج للأثاث</h1>
          <p className="hero-subtitle">نقدم لكم مجموعة متنوعة من الأثاث العصري والكلاسيكي الذي يتناسب مع جميع الأذواق ويضيف لمسة من الفخامة إلى منزلك.</p>
          <img src={Logo} alt="Hero Section Logo" /> <br />
          <a href="/malls" className="hero-button">تسوق الأن</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;