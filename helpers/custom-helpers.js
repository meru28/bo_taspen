export const toFormData = (formData, files, name) => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    formData.append(name, file)
  }
  return formData
}
