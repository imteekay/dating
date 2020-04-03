type SeparatedDate = {
  day: number
  month: number
  year: number
};

type DaysAgo = {
  daysAgo: Date
};

const getSeparatedDate = (): SeparatedDate => {
  const now: Date = new Date();
  const day: number = now.getDate();
  const month: number = now.getMonth();
  const year: number = now.getFullYear();

  return {
    day,
    month,
    year
  };
};

const beginningOfDay = (): Date => {
  const { day, month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, day);
};

const beginningOfMonth = (): Date => {
  const { month, year }: SeparatedDate = getSeparatedDate();

  return new Date(year, month, 1);
};

const beginningOfYear = (): Date => {
  const { year }: SeparatedDate = getSeparatedDate();

  return new Date(year, 0, 1);
};

const get = (n: number): DaysAgo => {
  const { day, month, year }: SeparatedDate = getSeparatedDate();
  const daysAgo: Date = new Date(year, month, day - n);

  return {
    daysAgo
  };
};
