export const list = (a = [], standard = false) => {
  if (standard) {
    a = a.map((ele) => stds.find((std) => std === ele));
  }
  if (a.length === 0) return '';
  return [a.slice(0, -1).join(', '), a.slice(-1)[0]].join(
    a.length < 2 ? '' : ' & ',
  );
};

export const teachesClass = (batches) => {
  let classes = [];
  let otherClasses = [];

  batches?.forEach((batch) => {
      if(!classes.includes(batch.standard)){
        classes.push(batch.standard)
      }
  })
  return classes;
}

export const teachesSubject = (batches) => {
  let subject = [];
  let otherClasses = [];

  batches?.forEach((batch) => {
      if(!subject.includes(batch.subject)){
        subject.push(batch.subject)
      }
  })
  return subject;
}


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

export const getLowestPrice = (batches) => {
  let amt = Number.MAX_SAFE_INTEGER;
  const allowedPrices = [];
  batches.forEach((element) => {
    if (element.offline_group_fee && element.offline_group_fee > 0)
      allowedPrices.push(element.offline_group_fee);
    if (element.online_group_fee && element.online_group_fee > 0)
      allowedPrices.push(element.online_group_fee);
    if (element.offline_private_fee && element.offline_private_fee > 0)
      allowedPrices.push(element.offline_private_fee);
    if (element.online_private_fee && element.online_private_fee > 0)
      allowedPrices.push(element.online_private_fee);
    const min_amt = Math.min(...allowedPrices);
    if (min_amt === Infinity) {
      amt = 1000;
    } else if (min_amt < amt) {
      amt = min_amt;
    }
  });
  return amt;
};
