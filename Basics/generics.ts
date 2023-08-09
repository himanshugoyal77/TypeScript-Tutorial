interface IAuthor {
  name: string;
  email: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  body: string;
  extra: IAuthor[] | ICategory[];
} // instead of this we can use generics

interface IPostBetter<T> {
  id: number;
  title: string;
  body: string;
  extra: T[];
} // T can be anything like IAuthor or ICategory or any other type

const author1: IAuthor = {
  name: "John",
  email: "",
};

const author2: IAuthor = {
  name: "Alice",
  email: "",
};

const post1: IPostBetter<IAuthor> = {
  id: 1,
  title: "Post 1",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quos.",
  extra: [author1, author2],
};

interface IPostBest<T extends {}> {
  id: number;
  title: string;
  body: string;
  extra: T[];
}

const post2: IPostBest<{ id: String; title: String }> = {
  id: 1,
  title: "Post 1",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quos.",
  extra: [{ id: "1", title: "title" }],
};
