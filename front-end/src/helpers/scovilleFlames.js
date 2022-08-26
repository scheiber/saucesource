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
