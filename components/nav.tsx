"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={stuck ? "stuck" : ""}>
        <div className="brand">
          <span className="sq" aria-hidden="true" />
          Rupali <span>Patwa</span>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Get in touch
        </a>
        <a
          href={site.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Résumé
        </a>
      </div>
    </>
  );
}
