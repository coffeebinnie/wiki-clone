"use client";

import React, { useState } from "react";

export default function WikipediaClone() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showEnMenu, setShowEnMenu] = useState(false);
  const [showLangGrid, setShowLangGrid] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(searchQuery)}&go=Go`;
  };

  const leftSide = [
    { name: "中文", sub: "1,530,000+ 条目", angle: 140, code: "zh" },
    { name: "Deutsch", sub: "3,111,000+ Artikel", angle: 160, code: "de" },
    { name: "Português", sub: "1,168,000+ artigos", angle: 185, code: "pt" }, 
    { name: "Italiano", sub: "1,964,000+ voci", angle: 210, code: "it" },
    { name: "Français", sub: "2,750,000+ articles", angle: 230, code: "fr" },
  ];

  const rightSide = [
    { name: "日本語", sub: "1,497,000+ 記事", angle: 40, code: "ja" },
    { name: "Español", sub: "2,106,000+ artículos", angle: 15, code: "es" },
    { name: "English", sub: "7,166,000+ articles", angle: 345, code: "en" },
    { name: "Polski", sub: "1,690,000+ haseł", angle: 325, code: "pl" }, 
    { name: "Русский", sub: "2,094,000+ статей", angle: 300, code: "ru" },
  ];

  const gridLanguages = ["Afrikaans", "Polski", "العربية", "Deutsch", "English", "Español", "Français", "Italiano", "日本語", "Русский", "中文", "Português"];

  return (
    <div className="page" onClick={() => setShowEnMenu(false)}>
      <div className="header">
        <h1 className="logo">W<span className="logo-mid">IKIPEDI</span>A</h1>
        <p className="tagline">The Free Encyclopedia</p>
      </div>

      <div className="main-content">
        <div className="orbit-container">
          <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png" alt="Globe" className="globe-img" />

          {[...leftSide, ...rightSide].map((lang) => {
            const radiusX = 320; 
            const radiusY = 200; 
            const x = Math.cos((lang.angle * Math.PI) / 180) * radiusX;
            const y = Math.sin((lang.angle * Math.PI) / 180) * radiusY;
            
            return (
              <a 
                href={`https://${lang.code}.wikipedia.org/`}
                key={lang.name} 
                className="lang-node-bend" 
                style={{ 
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  textAlign: lang.angle > 90 && lang.angle < 270 ? 'right' : 'left',
                  textDecoration: 'none',
                  pointerEvents: 'auto'
                }}
              >
                <div className="lang-name">{lang.name}</div>
                <div className="lang-sub">{lang.sub}</div>
              </a>
            );
          })}
        </div>

        <div className="search-area" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSearch} className="search-bar">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <div className="en-dropdown-container">
              <div className="lang-indicator" onClick={() => setShowEnMenu(!showEnMenu)}>EN ▼</div>
              {showEnMenu && (
                <div className="en-menu">
                  {gridLanguages.map(l => <div key={l} className="en-menu-item">{l}</div>)}
                </div>
              )}
            </div>
            <button type="submit" className="search-button">
              <svg viewBox="0 0 24 24" className="search-icon"><path fill="white" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </button>
          </form>

          <div className="divider-wrapper">
            <hr className="side-line" />
            <button className="read-more-btn" onClick={() => setShowLangGrid(!showLangGrid)}>
              <span className="translate-icon">文A</span> Read Wikipedia in your language {showLangGrid ? '▲' : '▼'}
            </button>
            <hr className="side-line" />
          </div>

          {showLangGrid && (
            <div className="language-grid-dropdown">
              <div className="grid-header">1,000,000+ articles</div>
              <div className="grid-items">
                {gridLanguages.map(lang => <a key={lang} href="#">{lang}</a>)}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="footer-section">
        <p className="footer-text">
          This page is available under the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-ShareAlike License</a> | 
          <a href="https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use" target="_blank" rel="noopener noreferrer"> Terms of Use</a> | 
          <a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}