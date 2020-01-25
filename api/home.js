import properties from '~/properties'
import instance from '~/plugins/axios'

const headers = {
  headers: { 'Content-Type': 'multipart/form-data' }
}

export function getHome () {
  const response = instance({
    url: properties.LIST_API.HOME,
    method: 'get'
  })
  return response
}

export function addImageCarousel (formData) {
  const response = instance({
    url: properties.LIST_API.ADD_IMAGE_CAROUSEL,
    method: 'post',
    data: formData,
    headers
  })
  return response
}

export function editCarousel (formData, id) {
  const response = instance({
    url: properties.LIST_API.EDIT_IMAGE_CAROUSEL + id,
    method: 'post',
    data: formData,
    headers
  })
  return response
}

export function deleteCarousel (id) {
  const response = instance({
    url: properties.LIST_API.DELETE_CAROUSEL + id,
    method: 'delete'
  })
  return response
}
