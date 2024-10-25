export interface IAuth {
  accessToken: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}
