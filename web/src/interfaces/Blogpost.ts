export interface BlogPost {
  _id: string,
  title: string,
  contentSummary: string,
  imageUrl: string,
  authorName: string
}

export interface BlogPosts {
  posts: [BlogPost]
}
