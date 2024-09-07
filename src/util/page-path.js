const PostsPagePath = (page) => {
  return `/posts/${page}`
}

const PostPagePath = (post) => {
  return `/post/${post.slugString || post.slug}`
}

module.exports = {
  PostsPagePath: PostsPagePath,
  PostPagePath: PostPagePath
}