import appProductionProperties from './app-production'
import appLokalProduction from './app-lokal'

// eslint-disable-next-line import/no-mutable-exports
let properties

if (process.env.MODE_ENV === 'lokal') {
  console.log('masuk lokal')
  properties = appLokalProduction
} else {
  console.log('masuk production')
  properties = appProductionProperties
}

export default properties
