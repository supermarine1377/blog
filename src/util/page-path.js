const PostsPagePath = (page) => {
  return `/posts/${page}`
}

const PostPagePath = (slug) => {
  return `/post/${slug}`
}

module.exports = {
  PostsPagePath: PostsPagePath,
  PostPagePath: PostPagePath
}