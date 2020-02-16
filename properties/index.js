import appProductionProperties from './app-production'
import appLokalProduction from './app-lokal'

// eslint-disable-next-line import/no-mutable-exports
let properties

if (process.env.MODE_ENV === 'lokal') {
  // console.log('masuk lokal')
  properties = appProductionProperties
} else {
  properties = appLokalProduction
  // console.log('masuk production')
}

export default properties
