// Libraries
import { action, makeObservable, observable, toJS } from 'mobx'

import { getArticles } from './../utils/getArticles.utils'
import { Article } from './../@types/Articles'

class BlogStore {
  articles: Article[] = []
  pagination = 10
  page = 1
  lastUpdated = new Date()
  isLoading = false

  constructor() {
    makeObservable(this, {
      articles: observable,
      pagination: observable,
      page: observable,
      isLoading: observable,
      getArticles: action,
      incrementPage: action,
      decrementPage: action,
      fetchArticles: action,
    })
  }

  incrementPage(): void {
    this.page += 1
  }

  decrementPage(): void {
    this.page -= 1
  }

  getArticles(): Article[] {
    return toJS(this.articles)
  }

  fetchArticles(): void {
    this.isLoading = true
    getArticles().then((data) => {
      this.articles = data.articles
      this.isLoading = false
    })
  }
}

export default BlogStore
