/* tslint:disable */
/* eslint-disable */
import { PageBlocksSection } from './page-blocks-section';
export interface HomePageListResponseDataItem {
  attributes?: {
'pageComponents'?: Array<PageBlocksSection>;
'createdAt'?: string;
'updatedAt'?: string;
'publishedAt'?: string;
'createdBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
'firstname'?: string;
'lastname'?: string;
'username'?: string;
'email'?: string;
'resetPasswordToken'?: string;
'registrationToken'?: string;
'isActive'?: boolean;
'roles'?: {
'data'?: Array<{
'id'?: number;
'attributes'?: {
'name'?: string;
'code'?: string;
'description'?: string;
'users'?: {
'data'?: Array<{
'id'?: number;
'attributes'?: {
};
}>;
};
'permissions'?: {
'data'?: Array<{
'id'?: number;
'attributes'?: {
'action'?: string;
'subject'?: string;
'properties'?: any;
'conditions'?: any;
'role'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'createdAt'?: string;
'updatedAt'?: string;
'createdBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'updatedBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
};
}>;
};
'createdAt'?: string;
'updatedAt'?: string;
'createdBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'updatedBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
};
}>;
};
'blocked'?: boolean;
'preferedLanguage'?: string;
'createdAt'?: string;
'updatedAt'?: string;
'createdBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'updatedBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
};
};
};
'updatedBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
};
  id?: number;
}
