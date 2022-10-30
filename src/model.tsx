export interface IComments {
  id: number;
  author: string;
  message: string;
  like: number;
}

export interface IPost {
  id: number;
  title: string;
  text: string; 
  author: string;
  image: string;
  comments: IComments[];
}

export interface IInitialState {
  password: string;
  username: string;
  error: string;
  isLoading: boolean;
  isLoggedIn: boolean;
}
