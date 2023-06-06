export interface ArticlesResponse {
  status: string
  totalResults: number
  articles: Article[]
}

interface ArticleSource {
  id: string
  name: string
}

export interface Article {
  source: ArticleSource
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  text: string
  publishedAt: string
  content: string
}
