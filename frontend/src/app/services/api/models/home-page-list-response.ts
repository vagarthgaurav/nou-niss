/* tslint:disable */
/* eslint-disable */
import { HomePageListResponseDataItem } from './home-page-list-response-data-item';
export interface HomePageListResponse {
  data?: Array<HomePageListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
