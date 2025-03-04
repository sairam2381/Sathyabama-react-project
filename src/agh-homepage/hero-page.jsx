import React from "react";
// function app(){

// }
export const HeroComponent = () => {
  const additionOfNumbers = (a, b) => {
    console.log("Addition of 2 numbers is", a + b);
  };
  return (
    <div>
      <h1>Aptitude Guru Hem</h1>
      <h2>
        <b>At AGH, we shape futures and build skills</b> that turn learning into
        success.
      </h2>
      <div>
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
    </div>
  );
};
