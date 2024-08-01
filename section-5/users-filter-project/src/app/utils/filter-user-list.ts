import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";


const filterUserList = (filterOptions: IFilterOptions, userList: IUser[]): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUserListByName(filterOptions.name, userList);
  filteredList = filterUserListByStatus(filterOptions.status, filteredList);
  filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

  return filteredList;
}

const filterUserListByName = (name: string | undefined, userList: IUser[]): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;
  if (NAME_NOT_TYPPED) {
    return userList;
  }

  return userList.filter(user => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
}


const filterUserListByStatus = (status: boolean | undefined, userList: IUser[]): IUser[] => {
  const STATUS_NOT_TYPPED = status === undefined;
  if (STATUS_NOT_TYPPED) {
    return userList;
  }

  return userList.filter(user => user.ativo === status);
}

const filterUserListByDate = (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
  const DATES_NOT_TYPPED = startDate === undefined || endDate === undefined;
  if (DATES_NOT_TYPPED) {
    return userList;
  }

  return filterUserListByDateWithInterval(endDate, startDate, userList);
}

const filterUserListByDateWithInterval = (endDate: Date, startDate: Date, userList: IUser[]) => {
  return userList.filter(user => {
    const dataCadastro: Date = new Date(user.dataCadastro);
    const interval = { start: startDate, end: endDate };
    return isWithinInterval(dataCadastro, interval);
  });
}

export { filterUserList };