export const stringIsNotEmptyOrNull = (value: any): value is string => {
  if (typeof value === 'string' && value.trim() !== '') {
    return true;
  } else {
    return false;
  }
};
