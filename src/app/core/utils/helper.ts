// function to give timeLeft in days, hours, minutes, seconds comparing start and end date
export const timeLeft = (startDate: any, endDate: any) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const difference = end - start;
  if (difference < 0) {
    return 'Expired';
  }
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return `${days}d`;
};

// function to generate random project id
export const generateRandomProjectId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};
