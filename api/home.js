import properties from '~/properties'
import requestAPI from '~/plugins/axios'

export function getHome () {
  const response = requestAPI({
    url: properties.LIST_API.HOME,
    method: 'get'
  })
  return response
}
