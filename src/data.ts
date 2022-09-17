

export const returnPostWithId = (id: number) => {
  return posts.find((post) => post.id === id)
}

export const posts = [
  {
    id: 1,
    title: "Octupuses are great!",
    text: "You can use lorem ipsum with text editors as well. If you’re using the sublime text editor, for example, here’s how to add lorem ipsum. Within the paragraph tags <p></p>,type lorem then click the tab key on your keyboard.",
    author: "Romulo",
    comments: [
      {
        id: 1,
        author: "Chris",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        like: 1,
      },
    //   {
    //     id: 2,
    //     author: "Milena",
    //     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //     like: 1,
    //   },
    ],
  },
  {
    id: 2,
    title: "post 2",
    text: "You can use lorem ipsum with text editors as well. If you’re using the sublime text editor, for example, here’s how to add lorem ipsum. Within the paragraph tags <p></p>,type lorem then click the tab key on your keyboard.",
    author: "Paulleth",
    comments: [
      {
        id: 1,
        author: "Christina",
        message: "silly post",
        like: 1,
      },
    //   {
    //     id: 2,
    //     author: "Junior",
    //     message: "great post",
    //     like: 1,
    //   },
      
    ],
  },
  {
    id: 2,
    title: "post 2",
    text: "You can use lorem ipsum with text editors as well. If you’re using the sublime text editor, for example, here’s how to add lorem ipsum. Within the paragraph tags <p></p>,type lorem then click the tab key on your keyboard.",
    author: "Paulleth",
    comments: [
      {
        id: 1,
        author: "Christina",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        like: 1,
      },
    //   {
    //     id: 2,
    //     author: "Junior",
    //     message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //     like: 1,
    //   },
      
    ],
  },
];
