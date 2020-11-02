export const menus = {
    user: 'user',
    account: 'account',
    seller: 'seller',
    buyer: 'buyer',
    manage: 'manage'
}
export const defaultMenu = 'user'

export const categories = {
    user: 'user',
    account: 'account',
    space: 'space'
}
export const defaultCategory = 'user' 

export const spaceTitle = {
    buyer: 'buyer',
    seller: 'seller',
    manage: 'manage'
}
export const defaultSpaceTitle = 'buyer'

export const fakeList = [
    {
        "active": true,
        "icon": "mdi-circle",
        "title": "titre test",
        "to": "/"
    },
    {
        "active": true,
        "icon": "mdi-store-outline",
        "title": "deuxieme titre",
        "to": "/orders"
    },
    {
        "active": true,
        "icon": "mdi-briefcase-check",
        "title": "manageMenu.contracts",
        "to": "/contracts"
    },
    {
        "active": true,
        "icon": "mdi-flask-empty",
        "title": "manageMenu.products",
        "to": "/products"
    },
    {
        "active": true,
        "icon": "mdi-barcode",
        "title": "manageMenu.offers",
        "to": "/offers"
    },
    {
        "active": true,
        "icon": "mdi-email-outline",
        "title": "manageMenu.contacts",
        "to": "/contacts"
    },
]
