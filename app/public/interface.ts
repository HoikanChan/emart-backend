export interface Address {
  id?: string;
  userName: string;
  telNumber: string;
  address: string;
  countyName: string;
  provinceName: string;
  cityName: string;
  detailInfo: string;
  isDefault?: number;
}
export interface PaginationParams {
  limit: number;
  offset: number;
}
