import '../src';

describe('FIFA Date Conversion', () => {
  it('should convert dates to FIFA format correctly', () => {
    expect(new Date('1970-01-01').toFifaDate()).toEqual(141428);
    expect(new Date('1980-01-01').toFifaDate()).toEqual(145080);
    expect(new Date('1990-01-01').toFifaDate()).toEqual(148733);
    expect(new Date('2000-01-01').toFifaDate()).toEqual(152385);
    expect(new Date('2010-01-01').toFifaDate()).toEqual(156038);
  });

  it('should add a year correctly', () => {
    const date = new Date('1970-01-01');
    const newDate = date.addYear(1);
    expect(newDate.getFullYear()).toEqual(1971);
  });

  it('should calculate the age correctly', () => {
    const currentDate = new Date(); // Get the current date
    const dateOfBirth = new Date('1970-01-01');
    const age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    expect(dateOfBirth.age()).toEqual(age);
  });

  it('should normalize the date correctly', () => {
    const date = new Date('1970-01-01T03:00:00.000Z');
    const normalizedDate = date.normalize();
    expect(normalizedDate.toISOString()).toEqual('1970-01-01T00:00:00.000Z');
  });

  it('should convert FIFA date to regular date correctly', () => {
    const convertedDate = Date.fromFifaDate(141428);
    expect(convertedDate instanceof Date).toBe(true);
    expect(convertedDate.toISOString()).toEqual('1970-01-01T00:00:00.000Z');
  });
});
