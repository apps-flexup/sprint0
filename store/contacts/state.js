export default () => ({
  items: [
    {
      id: 1,
      name: 'plop',
      address: '12 rue de la poupée qui tousse',
      city: 'Braniole de turbeuse',
      zip: '1574788',
      country: 'france',
      metrics: {
        contracts: 2,
        products: 0,
        commandes: 5,
        next: {
          daysRemaining: 5,
          amount: 45,
          currency: 'EUR'
        }
      }
    },
    {
      id: 2,
      name: 'toto',
      address: '12 rue de la poupée qui tousse',
      city: 'Braniole de turbeuse',
      zip: '1574788',
      country: 'france',
      metrics: {
        contracts: 1,
        products: 1,
        commandes: 1,
        next: {
          daysRemaining: 5,
          amount: 45,
          currency: 'EUR'
        }
      }
    },
    {
      id: 3,
      name: 'fred',
      address: '12 rue de la marjolaine',
      city: 'Courtanche sur Mer',
      zip: '66789',
      country: 'france',
      metrics: {
        contracts: 0,
        products: 0,
        commandes: 0,
        next: {
          daysRemaining: 1,
          amount: 45.55,
          currency: 'EUR'
        }
      }
    },
    {
      id: 4,
      name: 'grog',
      address: '19 avenue de la venue',
      city: 'Ploutoire les bois',
      zip: '7478518',
      country: 'france',
      metrics: {
        contracts: 2,
        products: 5,
        commandes: 5,
        next: {
          daysRemaining: 0,
          amount: 0,
          currency: 'EUR'
        }
      }
    }
  ]
})
