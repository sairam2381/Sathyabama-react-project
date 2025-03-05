import React from "react";
import { HeroHeader, HeroStyled } from "./hero-style";

export const HeroComponent = () => {
  const additionOfNumbers = (a, b) => {
    console.log("Addition of 2 numbers is", a + b);
  };
  return (
    <HeroStyled>
      <HeroHeader>Aptitude Guru Hem</HeroHeader>
      <h1 className="header">Sreesairam</h1>
      <h2 className="element">
        <b id="color">At AGH, we shape futures and build skills</b> that turn
        learning into success.
      </h2>
      <div className="element">
        Where Success Meets Opportunity! Are you ready to embark on a
        transformative journey towards success? At Aptitude Guru Hem, we are
        committed to providing you with the essential skills and knowledge to
        excel in your professional endeavors. Our expert training in aptitude
        and coding equips you to conquer every challenge, from company interview
        assessments to prestigious coding platforms like LeetCode,
        GeeksForGeeks, HackerRank , and more.
      </div>
      <button>Start new learning</button>
      <button>Join a Live Demo</button>
    </HeroStyled>
  );
};
