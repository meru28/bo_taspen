const appLokalProperties = {
  LIST_API: {
    HOME: '/api/home',
    EDIT_HOME: '/api/home/edit',
    ADD_IMAGE_CAROUSEL: '/api/home/single-upload-carousel',
    EDIT_IMAGE_CAROUSEL: '/api/home/edit-carousel/',
    DELETE_CAROUSEL: '/api/home/delete-carousel/',
    EDIT_IMAGE_EMPLOYEE: '/api/home/edit-employee/',
    DELETE_IMAGE_CABANG: '/api/home/delete-cabang/',
    // profil
    GBP: '/api/profil/gbp',
    EDIT_GBP_IMAGE: '/api/profil/edit-image',
    EDIT_GBP_CABANG: '/api/profil/edit-cabang',
    // produk
    DEPOSITO: '/api/produk/add-deposito',
    EDIT_DEPOSITO: '/api/produk/edit-deposito',
    // info bank
    ADD_IMAGE: '/api/info-bank/image',
    DELETE_INFO_BANK: '/api/info-bank/delete/'
  },
  TASPEN: {
    BASE: 'http://localhost:8081',
    DASHBOARD: 'http://localhost:8082'
  }
}

export default appLokalProperties
