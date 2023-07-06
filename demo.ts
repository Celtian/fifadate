import './src';

console.log(new Date('1970-01-01').toFifaDate()); // 141428
console.log(new Date('1980-01-01').toFifaDate()); // 145080
console.log(new Date('1990-01-01').toFifaDate()); // 148733
console.log(new Date('2000-01-01').toFifaDate()); // 152385
console.log(new Date('2010-01-01').toFifaDate()); // 156038

console.log(new Date('1970-01-01').addYear(1));
console.log(new Date('1970-01-01').age());
console.log(new Date('1970-01-01T03:00:00.000Z').normalize());
console.log(Date.fromFifaDate(141428));
