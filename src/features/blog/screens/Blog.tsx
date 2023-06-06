// Libraries
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Loader from 'react-loader-spinner'
import { v4 as uuid } from 'uuid'

// Styles
import './styles/Blog.scss'
import BlogStore from '../services/store/BlogStore'
import ArticleBox from '../containers/ArticleBox'

type BlogProps = {
  blogStore: BlogStore
}

const Blog: React.FC<BlogProps> = observer(({ blogStore }) => {
  useEffect(() => {
    blogStore.fetchArticles()
  }, [])

  const articles = blogStore.getArticles()

  console.log('articles: ', articles)
  const ArticleList = () => (
    <div>
      {articles.map((article) => (
        <p>{article.author}</p>
      ))}
    </div>
  )

  const ArticleBoxes = () => (
    <div className="article-boxes">
      {articles.map((article) => (
        <ArticleBox
          author={article.author}
          title={article.title}
          description={article.description}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  )

  return blogStore.isLoading ? (
    <div className="loader">
      <Loader type="Circles" color="#000" height={100} width={100} />
    </div>
  ) : (
    <>
      <div className="blog">
        <p>test blog screen</p>
        <ArticleBoxes />
      </div>
      <div>
        <button
          onClick={() => {
            blogStore.fetchArticles()
          }}
        >
          Click me
        </button>
        <ArticleList />
      </div>
    </>
  )
})

export default Blog
