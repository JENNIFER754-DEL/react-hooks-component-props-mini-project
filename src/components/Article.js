import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Helper function to generate the minutes to read string with emojis
  function renderMinutesToRead(minutes) {
    if (!minutes) return null;

    let emoji = "";
    let count = 0;
    let roundedMinutes = 0;

    if (minutes < 30) {
      // Round up to nearest 5
      roundedMinutes = Math.ceil(minutes / 5) * 5;
      count = roundedMinutes / 5;
      emoji = "☕️";
    } else {
      // Round up to nearest 10
      roundedMinutes = Math.ceil(minutes / 10) * 10;
      count = roundedMinutes / 10;
      emoji = "🍱";
    }

    return (
      <span>
        {emoji.repeat(count)} {minutes} min read
      </span>
    );
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderMinutesToRead(minutes)}</p>
    </article>
  );
}

export default Article;
