export const list = (a = [], standard = false) => {
  if (standard) {
    a = a.map((ele) => stds.find((std) => std === ele));
  }
  if (a.length === 0) return '';
  return [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(
    a.length < 2 ? '' : ' & ',
  );
};
