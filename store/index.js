import Cookie from 'js-cookie'

export const state = () => ({
  authUser: null,
  authToken: null,
  error: '',
  year: 0
})

export const mutations = {
  SET_TOKEN (state, payload) {
    state.authToken = payload.idToken
    state.authUser = payload.email
  },
  CLEAR_TOKEN (state) {
    state.authToken = null
  },
  SET_ERROR (state, error) {
    console.log('error :', error)
    state.error = error
  },
  SET_YEAR (state, year) {
    state.year = year
  }
}

export const actions = {
  async login ({ commit }, authData) {
    try {
      await this.$axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.apiKey,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }).then((res) => {
        commit('SET_TOKEN', res.data)
        localStorage.setItem('token', res.data.idToken)
        localStorage.setItem('tokenExpiration', new Date().getTime() + +res.data.expiresIn * 1000)
        Cookie.set('user', res.data.email)
        Cookie.set('jwt', res.data.idToken)
        Cookie.set('expirationDate', new Date().getTime() + +res.data.expiresIn * 1000)
        this.$router.push('/')
      }).catch((err) => {
        console.log('gagal :', err)
        if (err.response && err.response.status === 400) {
          commit('SET_ERROR', 'Password Salah')
        }
      })
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  getYear ({ commit }) {
    const year = new Date().getFullYear()
    commit('SET_YEAR', year)
    if (!Cookie.get('year')) {
      // console.log('set year')
      Cookie.set('year', year)
    }
  },

  logout ({ commit }) {
    // console.log('masuk logout')
    commit('CLEAR_TOKEN')
    Cookie.remove('jwt')
    Cookie.remove('expirationDate')
    Cookie.remove('user')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
  },

  initAuth ({ dispatch, commit }, req) {
    let token
    let expirationDate
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('expirationDate='))
        .split('=')[1]
    } else {
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log('tidak ada token || invalid token')
      dispatch('logout')
      // eslint-disable-next-line no-useless-return
      commit('CLEAR_TOKEN')
      return
    }
    // dispatch('logout', +expirationDate - new Date().getTime())
    commit('SET_TOKEN', token)
  }

}

export const getters = {
  isAuthenticated (state) {
    return state.authToken !== null
  },
  getYear: state => state.year
}
