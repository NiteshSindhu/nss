import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import { Avatar } from "@mui/material";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [head, setHead] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80 || head) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  useEffect(() => {
    if (head || colorChange) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  }, [head, colorChange]);
  return (
    <Container>
      <header
        className="header"
        style={{ backgroundColor: `${colorChange ? "teal" : "transparent"}` }}
      >
        <a href="/" className="logo">
        <Avatar src="./logo1.jpg" />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              activeClass="active"
              to="/"
              onClick={() => animateScroll.scrollToTop()}
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>

          <li>
          <a href="https://drive.google.com/u/0/uc?id=1sz41DUZj0qrHWskFS5tUz-EgVhnjiD1U&export=download">Resume</a>
           
          </li>

        </ul>
      </header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color:#1976d2;
  color:white;
  display:flex;
  align-items:center;


  a {
    color: #000;
  }

  /* header */

  .header {
    position: fixed;
    width: 100%;
    z-index: 3;
    padding-top: 10px;
  }

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    padding-right: 50px;
  }

  .header li a {
    display: block;
    padding: 20px 25px;
    text-decoration: none;
  }

  .header .logo {
    display: flex;
    float: left;
    font-size: 2em;
    padding: 10px 30px;
    text-decoration: none;
    color: #343a40;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    color: #343a40;
  }

  li a {
    color: #fff;
  }

  li a:hover {
    color:#FFE433;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 3% 20%;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    width: 100%;
    max-height: 300px;
    background-color: teal;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 55em) {
    .header li {
      float: left;
    }

    .header li a {
      padding: 20px 30px;
    }

    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }

    .header .menu-icon {
      display: none;
    }
  }
`;

export default Navbar;
