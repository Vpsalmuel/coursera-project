import React, { useRef } from 'react';

const Nav = () => {
  const home = useRef(null);
  const about = useRef(null);
  const menu = useRef(null);
  
  const testimonials = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <a href='/' onClick={() => scrollToSection(home)}>
            Home
          </a>
        </li>
        <li>
          <a href='/' onClick={() => scrollToSection(about)}>
            About
          </a>
        </li>
        <li>
          <a href='/' onClick={() => scrollToSection(menu)}>
            Menu
          </a>
        </li>
        <li>
          <a href='/booking'>Reservations</a>
        </li>
        <li>
          <a href='/'>Order Online</a>
        </li>
        <li>
          <a href='/' onClick={() => scrollToSection(testimonials)}>
            Testimonials
          </a>
        </li>
        <li>
          <a href='/'>LogIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
