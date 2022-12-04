const PostsPagePath = (page) => {
  if (page == 1) {
    return "/"
  }
  return `/posts/${page}`
}

const PostPagePath = (slug) => {
  return `/post/${slug}`
}

module.exports = {
  PostsPagePath: PostsPagePath,
  PostPagePath: PostPagePath
}