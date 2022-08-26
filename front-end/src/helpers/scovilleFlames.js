/**
 * Accepts a scoville heat unit (SHU) rating and returns a string with a specific amount of flame emoji characters. The higher the rating, the more characters are returned.
 * @param  {Number} scoville A scoville heat unit (SHU) rating
 * @return {string} A sequence of flame emoji characters
 */

const scovilleFlames = (scoville) => {
  return scoville > 20_000
    ? "🔥🔥🔥🔥🔥"
    : scoville > 10_000
    ? "🔥🔥🔥🔥"
    : scoville > 4000
    ? "🔥🔥🔥"
    : scoville > 2000
    ? "🔥🔥"
    : "🔥";
};

module.exports = { scovilleFlames };
