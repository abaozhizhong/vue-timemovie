import axios from 'axios'
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = ''
// } else {
//     axios.defaults.baseURL = ''
// }
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
            let data = config.data
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            config.data = ret
    }
    return config
}, (error) => {
    alert('错误的传参', 'fail')
    return Promise.reject(error)
})

function fetch (url, methods, params) {
  if (methods === 'post') {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
          .then(res => {
            resolve(res)
          }, err => {
              reject(err)
          })
          .catch(err => {
            reject(err)
          })
    })
  } else {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default {
  getlocation () {
    return fetch('/ip')
  },
  getallcity () {
    return fetch('/api/Showtime/HotCitiesByCinema.api')
  },
  getonlist (id) {
    return fetch('/api/Showtime/LocationMovies.api?locationId=' + id)
  },
  getsoonlist (id) {
    return fetch('/api/Movie/MovieComingNew.api?locationId=' + id)
  },
  getdetail (locationid, moviesid) {
    return fetch('/api/movie/detail.api?locationId=' + locationid + '&movieId=' + moviesid)
  },
  getcommentsplus (movieid, page) {
    return fetch('/api/Movie/HotLongComments.api?pageIndex='+page+'&movieId=' + movieid)
  },
  getcommentsmini (movieid, page) {
    return fetch('/api/Showtime/HotMovieComments.api?pageIndex='+page+'&movieId=' + movieid)
  }
}