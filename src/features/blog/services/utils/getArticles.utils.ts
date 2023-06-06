// Utils
import { getRequest } from './../../../../foundation/utils/requests.utils'

// Types
import { ArticlesResponse } from '../@types/Articles'

export const getArticles = async (): Promise<ArticlesResponse> => {
  const endpoint = 'http://newsapi.org/v2/everything?q=tesla&from=2023-05-07&sortBy=publishedAt&apiKey='
  const response = await getRequest(endpoint)
  return response.data
}
