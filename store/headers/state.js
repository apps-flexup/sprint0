export default () => ({
  etapes: [
    'Détail',
    'Produits',
    'Offres',
    'Structure',
    'Commandes',
    'Paiement'
  ],
  contracts: [
    {
      text: "Date d'effet",
      align: 'start',
      sortable: true,
      value: 'dteEffect'
    },
    {
      text: 'Date de signature',
      align: 'start',
      sortable: true,
      value: 'dteSignature'
    },
    {
      text: 'Date de fin',
      align: 'start',
      sortable: true,
      value: 'dteEnd'
    },
    {
      text: 'Partenaire',
      align: 'start',
      sortable: true,
      value: 'partnerName'
    },
    {
      text: 'Type de partenariat',
      align: 'start',
      sortable: true,
      value: 'contractType'
    },
    {
      text: 'Structure',
      align: 'start',
      sortable: true,
      value: 'structureName'
    },
    {
      text: 'Offre',
      align: 'start',
      sortable: true,
      value: 'offers.length'
    },
    {
      text: 'Commande',
      align: 'start',
      sortable: true,
      value: 'commandes.length'
    }
  ],
  products: [
    {
      text: 'nom du produit',
      align: 'start',
      sortable: true,
      value: 'name'
    },
    {
      text: 'Quantité',
      align: 'end',
      sortable: true,
      value: 'quantity'
    },
    {
      text: 'Prix',
      align: 'end',
      sortable: true,
      value: 'price'
    },
    {
      text: 'Unité de prix',
      align: 'center',
      sortable: true,
      value: 'unitStr'
    },
    {
      text: 'Statut',
      align: 'start',
      sortable: true,
      value: 'statusStr'
    }
  ]
})
