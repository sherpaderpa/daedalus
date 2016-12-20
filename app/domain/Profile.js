// @flow
import { observable } from 'mobx';

export default class Profile {

  @observable name: string;
  @observable email: string;
  @observable phoneNumber: string;
  @observable passwordUpdateDate: Date;
  @observable languageLocale: string;

  constructor(data: {
    name: string,
    email: string,
    phoneNumber: string,
    passwordUpdateDate: Date,
    languageLocale: string
  }) {
    Object.assign(this, data);
  }

}
