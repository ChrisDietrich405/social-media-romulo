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
  comments: IComments[];
}
