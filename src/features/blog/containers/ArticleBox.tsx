// Library
import React from 'react'

// Styles
import './styles/ArticleBox.scss'
type ArticleBoxProps = {
  author: string
  title: string
  description: string
  urlToImage: string
  publishedAt: string
}

const ArticleBox: React.FC<ArticleBoxProps> = ({
  author,
  title,
  description,
  urlToImage,
  publishedAt,
}) => {
  return (
    <div className="article-box">
      <img height={100} width={100} src={urlToImage} />
      <h1>{title}</h1>
      <span>
        {author} {publishedAt}
      </span>
      <p className="article-description">{description}</p>
    </div>
  )
}

export default ArticleBox
