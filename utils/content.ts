import readingTime from 'reading-time';

const DEFAULT_WORDS_PER_MINUTE = 275;

export const getTimeToRead = (
  content: string,
  rate = DEFAULT_WORDS_PER_MINUTE,
) => {
  const stats = readingTime(content, { wordsPerMinute: rate });
  const roundedMinutes = Math.ceil(stats.minutes);
  const unit = roundedMinutes > 1 ? 'mins' : 'min';
  const durationString = `${roundedMinutes} ${unit}`;
  return { ...stats, roundedMinutes, durationString };
};
