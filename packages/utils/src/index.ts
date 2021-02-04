import { ITeam } from '@antlaht86/types';

export const getNewTeam = (id: ITeam['id'], teamName: ITeam['teamName']) => {
  const x: ITeam = {
    id,
    teamName,
  };
  return x;
};

export const stringIsNotEmptyOrNull = (value: any): value is string => {
  if (typeof value === 'string' && value.trim() !== '') {
    return true;
  } else {
    return false;
  }
};
