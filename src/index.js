module.exports = function toReadable (number) {
  const upToNineteen = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const upToNinetyInTen = [    
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  if (number < 20) {
    return upToNineteen[number];
  } else if (number < 100 && !(number % 10)) {
    return upToNinetyInTen[number / 10 - 2];
  } else if (number < 100) {
    return `${upToNinetyInTen[Math.floor(number / 10) - 2]} ${upToNineteen[number % 10]}`;
  } 
  if (!(number % 100)) {
    return `${upToNineteen[number / 100]} hundred`
  }
  if (!(number % 10) && (number % 100) > 19) {
    return `${upToNineteen[Math.floor(number / 100)]} hundred ${upToNinetyInTen[(number % 100) / 10 - 2]}`
  } else if (!(number % 10)) {
    return `${upToNineteen[Math.floor(number / 100)]} hundred ten`
  }
  if ((number % 100) < 20) {
    return `${upToNineteen[Math.floor(number / 100)]} hundred ${upToNineteen[number % 100]}`
  } else {
    return `${upToNineteen[Math.floor(number / 100)]} hundred ${upToNinetyInTen[Math.floor((number % 100) / 10) - 2]} ${upToNineteen[(number % 100) % 10]}`
  }
  
}