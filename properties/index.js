import appLokalProduction from './app-lokal'
import appProductionProperties from './app-production'
// eslint-disable-next-line import/no-mutable-exports
let properties

if (process.env.MODE_ENV === 'lokal') {
  // console.log('lokal')
  properties = appLokalProduction
} else {
  properties = appProductionProperties
}

export default properties
