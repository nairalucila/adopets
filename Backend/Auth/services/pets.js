export const createAPet = (req) => {
  const {firstName, lastName, gander, age} = req;

  if (gander !== 'M' && gander !== 'F') {
    throw new Error('Bad object');
  }

  if (age < 0 || age > 50) {
    throw new Error('Is very old!');
  }

  return {
    firstName,
    lastName,
    gander,
    age,
  };
};
