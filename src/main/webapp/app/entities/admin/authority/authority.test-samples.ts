import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '666865b9-c3d9-4dbe-b6bb-ff98cf88a614',
};

export const sampleWithPartialData: IAuthority = {
  name: '659bd9de-81fb-431d-846f-17763054c45a',
};

export const sampleWithFullData: IAuthority = {
  name: '49a50fc6-64b2-40c9-8a13-ee4b916ee3dc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
