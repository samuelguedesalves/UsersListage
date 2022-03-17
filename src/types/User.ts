type Url = string;
type Email = string;

export type User = {
  id: number;
  email: Email;
  first_name: string;
  last_name: string;
  avatar: Url;
};