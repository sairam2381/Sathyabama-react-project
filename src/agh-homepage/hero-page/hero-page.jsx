import React from "react";
import { HeroHeader, HeroStyled } from "./hero-style";

export const HeroComponent = () => {
  const additionOfNumbers = (a, b) => {
    console.log("Addition of 2 numbers is", a + b);
  };
  return (
    <HeroStyled>
      <div className="parent">
        <h1>Aptitude Guru Hem</h1>
        <h2>At AGH, we shape futures and build skills that</h2>
        <div className="parent__child">
          Where Success Meets Opportunity! Are you ready to embark on a
          transformative journey towards success? At Aptitude Guru Hem, we are
          committed to providing you with the essential skills and knowledge to
          excel in your professional endeavors. Our expert training in aptitude
          and coding equips you to conquer every challenge, from company
          interview assessments to prestigious coding platforms like LeetCode,
          GeeksForGeeks, HackerRank , and more.
        </div>
        <button>Start your learning</button>
        <button>Join live demo</button>
      </div>
    </HeroStyled>
  );
};
