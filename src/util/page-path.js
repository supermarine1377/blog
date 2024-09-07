const PostsPagePath = (page) => {
  return `/posts/${page}`
}

const PostPagePath = (post) => {
  if (post.slug == '41') {
    console.log(post)
  }
  return `/post/${post.slugString || post.slug}`
}

module.exports = {
  PostsPagePath: PostsPagePath,
  PostPagePath: PostPagePath
}