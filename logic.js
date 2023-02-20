const Tweeter = function () {
  let postIdcounter = 2;
  let commentIdCounter = 6;
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  const getPosts = () => posts;
     

  const addPost = function (text) {
    posts.push({
      id: "p" + postIdcounter++,
      text: text,
      comments: [],
    });
  };

  const removePost = function (postID) {
    for (let i in posts) {
      if (postID == posts[i].id) {
        posts.splice(i, 1);
      }
    }
  };
  
  let addComment = function (text, postID) {
    let index = indexPosts(postID);
    posts[index].comments.push({
      id: "c" + commentIdCounter++,
      text: text,
    });
    
  }; 
  let showPosts = function (postID, commentID) {
    let delPost = indexPosts(postID);
    let delComm = removedComment(commentID, delPost);
    posts[delPost].comments.splice(delComm, 1);
  };
  let indexPosts = function (postID) {
    for (let indexing in posts) {
      if (posts[indexing].id == postID) {
        return indexing;
      }
    }
  };

  let removedComment = function (commentID, postIndex) {
    for (let i in posts[postIndex].comments) {
      if (posts[postIndex].comments[i].id == commentID) {
        return i;
      }
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
     indexPosts,
    addComment,
    removeComment: showPosts,
  };
};
