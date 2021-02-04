import { stringIsNotEmptyOrNull } from '@antlaht86/utils';
export interface ITeam {
  id: number;
  teamName: string;
}

export interface IPerson {
  id: number;
  name: string;
  team: ITeam;
}

export function isTeam(value: any): value is ITeam {
  if (
    value &&
    'id' in value &&
    'teamName' in value &&
    stringIsNotEmptyOrNull(value.teamName)
  ) {
    return true;
  } else {
    return false;
  }
}

export function isPerson(value: any): value is IPerson {
  if (
    value &&
    'id' in value &&
    'name' in value &&
    'team' in value &&
    stringIsNotEmptyOrNull(value.name) &&
    isTeam(value.team)
  ) {
    return true;
  } else {
    return false;
  }
}
