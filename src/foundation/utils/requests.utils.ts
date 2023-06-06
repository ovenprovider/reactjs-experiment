import axios from 'axios'

export const getRequest = (url: string): any => {
  return axios.get(url)
}

//  const postRequest = () => {}
