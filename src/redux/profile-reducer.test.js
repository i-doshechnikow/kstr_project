import profileReducer, {
  addPostActionCreator,
  deleteActionCreator,
} from "./profile-reducer";

it("profile reducer test, for new post added", () => {
  // test data
  let action = addPostActionCreator("test text");
  let state = {
    postsData: [
      {
        id: 1,
        post: "info post 0",
        likes: 80,
      },
      {
        id: 2,
        post: "info post 1",
        likes: 100,
      },
      {
        id: 3,
        post: "info post 2",
        likes: 880,
      },
      {
        id: 4,
        post: "props awesome",
        likes: 37,
      },
    ],
  };
  // action
  let newTest = profileReducer(state, action);

  // expectation
  expect(newTest.postsData.length).toBe(5);
});

it("profile reducer test, for new post text", () => {
  // test data
  let action = addPostActionCreator("test text");
  let state = {
    postsData: [
      {
        id: 1,
        post: "info post 0",
        likes: 80,
      },
      {
        id: 2,
        post: "info post 1",
        likes: 100,
      },
      {
        id: 3,
        post: "info post 2",
        likes: 880,
      },
      {
        id: 4,
        post: "props awesome",
        likes: 37,
      },
    ],
  };
  // action
  let newTest = profileReducer(state, action);

  // expectation
  expect(newTest.postsData[4].post).toBe("test text");
});

it("profile reducer test, for delete post", () => {
  // test data
  let action = deleteActionCreator(1);
  let state = {
    postsData: [
      {
        id: 1,
        post: "info post 0",
        likes: 80,
      },
      {
        id: 2,
        post: "info post 1",
        likes: 100,
      },
      {
        id: 3,
        post: "info post 2",
        likes: 880,
      },
      {
        id: 4,
        post: "props awesome",
        likes: 37,
      },
    ],
  };
  // action
  let newTest = profileReducer(state, action);

  // expectation
  expect(newTest.postsData.length).toBe(3);
});
it("profile reducer test, for delete post with no exist id", () => {
  // test data
  let action = deleteActionCreator(1111);
  let state = {
    postsData: [
      {
        id: 1,
        post: "info post 0",
        likes: 80,
      },
      {
        id: 2,
        post: "info post 1",
        likes: 100,
      },
      {
        id: 3,
        post: "info post 2",
        likes: 880,
      },
      {
        id: 4,
        post: "props awesome",
        likes: 37,
      },
    ],
  };
  // action
  let newTest = profileReducer(state, action);

  // expectation
  expect(newTest.postsData.length).toBe(4);
});
