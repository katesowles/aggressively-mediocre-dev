import { DateTime } from 'luxon';

const createCustomDateObject = (
  dt: DateTime,
  dateDelimiter = '.',
  timeDelimiter = ':',
) => {
  const yearLong = dt.toFormat('yyyy'); // year, padded to 4 digits
  const yearShort = dt.toFormat('yy'); // year, padded to 2 digits
  const monthLong = dt.toFormat('MMMM'); // month, full alpha name
  const monthShort = dt.toFormat('MMM'); // month, abbreviated alpha name
  const monthNumeric = dt.toFormat('MM'); // month, padded to 2 digits
  const dayLong = dt.toFormat('EEEE'); // day (of the week), full alpha name
  const dayShort = dt.toFormat('EEE'); // day (of the week), abbreviated alpha name
  const dayNumeric = dt.toFormat('dd'); // day (of the month), padded to 2 digits
  const hours24 = dt.toFormat('HH'); // hour (24-hour), padded to 2 digits
  const hours12 = dt.toFormat('hh'); // hour (24-hour), padded to 2 digits
  const minutes = dt.toFormat('mm'); // minute, padded to 2 digits
  const seconds = dt.toFormat('ss'); // second, padded to 2 digits
  const meridium = dt.toFormat('a'); // i.e. AM
  const offsetShort = dt.toFormat('ZZZZ'); // i.e. PDT
  const offsetNumeric = dt.toFormat('ZZZ'); // i.e. -0700

  return {
    yearLong,
    yearShort,
    monthLong,
    monthShort,
    monthNumeric,
    dayLong,
    dayShort,
    dayNumeric,
    hours24,
    hours12,
    minutes,
    seconds,
    meridium,
    offsetShort,
    offsetNumeric,
    formattedDateNumeric: `${yearLong}${dateDelimiter}${monthNumeric}${dateDelimiter}${dayNumeric}${dateDelimiter}${dayShort}`,
    formattedDateShort: `${dayShort} ${monthShort} ${dayNumeric} ${yearLong}`,
    formattedDateLong: `${dayLong} ${monthLong} ${dayNumeric} ${yearLong}`,
    formattedTimeShort24: `${hours24}${timeDelimiter}${minutes}${timeDelimiter}${seconds}`,
    formattedTimeLong24: `${hours24}${timeDelimiter}${minutes}${timeDelimiter}${seconds} ${offsetShort}${offsetNumeric}`,
    formattedTimeShort12: `${hours12}${timeDelimiter}${minutes}${timeDelimiter}${seconds} ${meridium}`,
    formattedTimeLong12: `${hours12}${timeDelimiter}${minutes}${timeDelimiter}${seconds} ${meridium} ${offsetShort}${offsetNumeric}`,
  };
};

export const getDateObjects = (date: string) => {
  const luxonDT = DateTime.fromJSDate(new Date(date));
  const localDT = luxonDT.toLocal();
  const utcDT = luxonDT.toUTC();

  return {
    utc: createCustomDateObject(utcDT),
    local: createCustomDateObject(localDT),
  };
};
