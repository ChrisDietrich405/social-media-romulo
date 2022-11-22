import { BiUserCircle } from "react-icons/bi";

export const returnPostWithId = (id: number) => {
  return posts.find((post) => post.id === id);
};

export const posts = [
  {
    id: 1,
    title: "Otters are great!",
    text: "lorem ipsum with text editors as well. If you’re using the sublime text editor, for example, here’s how to add lorem ipsum. Within the paragraph tags <p></p>,type lorem then click the tab key on your keyboard.",
    author: "Romulo",
    image:
      "https://www.otterspecialistgroup.org/osg-newsite/wp-content/uploads/2017/04/ThinkstockPhotos-827261360.jpg",
    comments: [
      {
        id: 1,
        author: "Chris",
        message:
          "kkkkkkkkkkkkkkkkkkkkkk dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        like: 1,
        personalIcon: <BiUserCircle size="80" />,
      },
    ],
  },
  {
    id: 2,
    title: "Cows are great!",
    text: "You can use lorem ipsum with text editors as well. If you’re using the sublime text editor, for example, here’s how to add lorem ipsum. Within the paragraph tags <p></p>,type lorem then click the tab key on your keyboard.",
    author: "Paulleth",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg",
    comments: [
      {
        id: 2,
        author: "Christina",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur inventore eum illo architecto id non, cum ipsam numquam recusandae! Nobis veniam vel vitae, blanditiis debitis qui voluptate enim nisi?",
        like: 1,
        personalIcon: <BiUserCircle size="80" />,
      },
      {
        id: 3,
        author: "Chris",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque illum facilis! Voluptatem ut qui non! Incidunt voluptas veritatis repellendus? Nobis veniam vel vitae, blanditiis debitis qui voluptate enim nisi?",
        like: 4,
        personalIcon: <BiUserCircle size="80" />,
      },
      {
        id: 4,
        author: "Chris",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque illum facilis! Voluptatem ut qui non! Incidunt voluptas veritatis repellendus? Nobis veniam vel vitae, blanditiis debitis qui voluptate enim nisi?",
        like: 4,
        personalIcon: <BiUserCircle size="80" />,
      },
      {
        id: 6,
        author: "Chris",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque illum facilis! Voluptatem ut qui non! Incidunt voluptas veritatis repellendus? Nobis veniam vel vitae, blanditiis debitis qui voluptate enim nisi?",
        like: 4,
        personalIcon: <BiUserCircle size="80" />,
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
    id: 3,
    title: "Giraffes are great!",
    text: "You can use lorem ipsum with text editors as well. If you’re using the sublime text editor, for example, here’s how to add lorem ipsum. Within the paragraph tags <p></p>,type lorem then click the tab key on your keyboard.",
    author: "Paulleth",
    image:
      "https://i.natgeofe.com/n/3ac79952-e41e-4726-b41c-b0e56f1dd38a/giraffe_01_2x3.JPG",
    comments: [
      {
        id: 3,
        author: "Christina",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
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
