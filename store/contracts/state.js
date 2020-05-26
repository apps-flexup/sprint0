export default () => ({
  items: [
    {
      id: 1,
      dteEffect: '10/02/2020',
      dteEnd: '10/02/2022',
      dteSignature: '05/02/2020',
      partnerName: 'partner 1',
      contractType: 'Bail',
      structure: 2,
      structureName: '20% Base, 80% Equity',
      offers: [
        {
          id: 2,
          name: 'offre 1'
        },
        {
          id: 3,
          name: 'itération 3'
        }
      ],
      commandes: [
        {
          id: 2,
          name: 'itération 1'
        },
        {
          id: 4,
          name: 'itération 1'
        }
      ]
    },
    {
      id: 2,
      dteEffect: '12/02/2020',
      dteEnd: '13/02/2022',
      dteSignature: '11/02/2020',
      partnerName: 'partner 5',
      contractType: 'Financement',
      structure: 2,
      structureName: '50% Base, 50% Equity',
      offers: [
        {
          id: 2,
          name: 'offre 1'
        },
        {
          id: 3,
          name: 'itération 3'
        }
      ],
      commandes: [
        {
          id: 2,
          name: 'itération 1'
        },
        {
          id: 4,
          name: 'itération 1'
        }
      ]
    }
  ],
  typeContrat: [
    {
      id: 1,
      name: 'contract type 1'
    },
    {
      id: 2,
      name: 'contract type 2'
    },
    {
      id: 3,
      name: 'contract type 3'
    },
    {
      id: 4,
      name: 'contract type 4'
    }
  ]
})
