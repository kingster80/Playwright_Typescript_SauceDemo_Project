// tests/Repositories/AuthorizationFixtureRepository.ts

export interface UserData {
  validUserName: string;
  validPassword: string;
  invalidPassword: string;
  invalidUserName: string;
  wrongCaseUsername: string;
  wrongCasePassword: string;
}
