const shuffleArray = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

export default shuffleArray;
