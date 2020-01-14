import appProductionProperties from './app-production'
import appLokalProduction from './app-lokal'

// eslint-disable-next-line import/no-mutable-exports
let properties

if (process.env.MODE_ENV === 'lokal') {
  properties = appLokalProduction
} else {
  properties = appProductionProperties
}

export default properties
