export const list = (a = [], standard = false) => {
  if (standard) {
    a = a.map((ele) => stds.find((std) => std === ele));
  }
  if (a.length === 0) return '';
  return [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(
    a.length < 2 ? '' : ' & ',
  );
};

export const getMonth = (month) => {
  switch (month) {
    case '01':
      return 'January'
      break;

    case '02':
      return 'February'
      break;

    case '03':
      return 'March'
      break;

    case '04':
      return 'April'
      break;

    case '05':
      return 'May'
      break;

    case '06':
      return 'June'
      break;

    case '07':
      return 'July'
      break;

    case '08':
      return 'August'
      break;

    case '09':
      return 'September'
      break;

    case '10':
      return 'October'
      break;

    case '11':
      return 'November'
      break;

    case '12':
      return 'December'
      break;

    default: return null
  }
}
