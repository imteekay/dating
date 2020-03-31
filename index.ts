const beginningOfDay = (): Date => {
  const now: Date = new Date();
  const day: number = now.getDate();
  const month: number = now.getMonth();
  const year: number = now.getFullYear();

  return new Date(year, month, day);
};

const beginningOfMonth = (): Date => {
  const now: Date = new Date();
  const month: number = now.getMonth();
  const year: number = now.getFullYear();

  return new Date(year, month, 1);
};

const beginningOfYear = (): Date => {
  const now: Date = new Date();
  const year: number = now.getFullYear();

  return new Date(year, 0, 1);
};
