const FIFA_OFFSET = 141428;

const toFifaDate = (date: Date): number => {
  return Math.round((date.getTime() - date.getTimezoneOffset() * 60000) / 8.64e7) + FIFA_OFFSET;
}

const addYear = (date: Date, years: number): Date => {
  return new Date(date.setFullYear(date.getFullYear() + years));
}

const normalize = (date: Date): Date => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    -date.getTimezoneOffset() / 60,
    0,
    0
  );
}

const age = (date: Date, refDate?: Date) => {
  refDate = refDate ? normalize(refDate) : normalize(new Date());
  const diff = refDate.getTime() - date.getTime();
  return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}

const fromFifaDate = (value: number): Date => {
  return new Date((value - FIFA_OFFSET) * 8.64e7);
}

export const registerFifaDatePrototype = (): void => {
  if (!Date.prototype.toFifaDate) {
    Date.prototype.toFifaDate = function (): number {
      return toFifaDate(this);
    };
  }
  if (!Date.prototype.addYear) {
    Date.prototype.addYear = function (years: number): Date {
      return addYear(this, years);
    };
  }
  if (!Date.prototype.normalize) {
    Date.prototype.normalize = function (): Date {
      return normalize(this);
    };
  }
  if (!Date.prototype.age) {
    Date.prototype.age = function (refDate?: Date): number {
      return age(this, refDate);
    };
  }
  if (!Date.fromFifaDate) {
    Date.fromFifaDate = function (value: number): Date {
      return fromFifaDate(value);
    }
  }
}

registerFifaDatePrototype();

declare global {
  interface Date {
    /**
     * @returns date in fifa format
     */
    toFifaDate(): number;
    /**
     * @returns incremented date
     */
    addYear(years: number): Date;
    /**
     * @returns date without time and zone
     */
    normalize(): Date;
    /**
     * @returns age
     */
    age(refDate?: Date): number;
  }
  interface DateConstructor {
    /**
     * @returns date from fifa format
     */
    fromFifaDate(value: number): Date;
  }
}

export { };
