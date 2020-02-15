import appProductionProperties from './app-production'
import appLokalProduction from './app-lokal'

// eslint-disable-next-line import/no-mutable-exports
let properties

if (process.env.MODE_ENV === 'production') {
  console.log('masuk production')
  properties = appProductionProperties
} else {
  console.log('masuk lokal')
  properties = appLokalProduction
}

export default properties
