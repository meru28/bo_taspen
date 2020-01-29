import properties from '~/properties'
import instance from '~/plugins/axios'

export function addProdukDeposito () {
  const response = instance({
    url: properties.LIST_API.ADD_DEPOSITO,
    method: 'post'
  })
  return response
}

export function editProdukDeposito () {
  const response = instance({
    url: properties.LIST_API.EDIT_DEPOSITO,
    method: 'post'
  })
  return response
}
