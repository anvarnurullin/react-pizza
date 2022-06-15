export type SortType = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export enum SortPropertyEnum {
  RATING = '-rating',
  TITLE = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: SortType;
}
