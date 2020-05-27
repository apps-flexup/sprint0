import Vue from 'vue'
// Importation des composants utilitaires
import FvAutoComplete from '@/components/FvAutoComplete'
import FvContractList from '@/components/FvContractList'
import FvContractListSearch from '@/components/FvContractListSearch'
import FvContractNav from '@/components/FvContractNav'
import FvContractNew from '@/components/FvContractNew'
import FvContractStepDetail from '@/components/FvContractStepDetail'
import FvContractStepProduit from '@/components/FvContractStepProduit'
import FvContractStepOffer from '@/components/FvContractStepOffer'
import FvContractStepStructure from '@/components/FvContractStepStructure'
import FvContractStepCommande from '@/components/FvContractStepCommande'
import FvContractStepPaiement from '@/components/FvContractStepPaiement'
import FvContractSummaryStepDetail from '@/components/FvContractSummaryStepDetail'
import FvContractSummaryStepProduct from '@/components/FvContractSummaryStepProduct'
import FvContractSummaryStepOffer from '@/components/FvContractSummaryStepOffer'
import FvContractSummaryStepStructure from '@/components/FvContractSummaryStepStructure'
import FvContractSummaryStepCommande from '@/components/FvContractSummaryStepCommande'
import FvContractSummaryStepPaiement from '@/components/FvContractSummaryStepPaiement'
import FvContractStepper from '@/components/FvContractStepper'
import FvFieldDate from '@/components/FvFieldDate'
import FvEtape from '@/components/FvEtape'

// Déclarations composants utilitaires
Vue.component('fv-auto-complete', FvAutoComplete)
Vue.component('fv-contract-list', FvContractList)
Vue.component('fv-contract-list-search', FvContractListSearch)
Vue.component('fv-contract-nav', FvContractNav)
Vue.component('fv-contract-new', FvContractNew)
Vue.component('fv-contract-step-detail', FvContractStepDetail)
Vue.component('fv-contract-step-produit', FvContractStepProduit)
Vue.component('fv-contract-step-offer', FvContractStepOffer)
Vue.component('fv-contract-step-structure', FvContractStepStructure)
Vue.component('fv-contract-step-commande', FvContractStepCommande)
Vue.component('fv-contract-step-paiement', FvContractStepPaiement)
Vue.component('fv-contract-summary-step-detail', FvContractSummaryStepDetail)
Vue.component('fv-contract-summary-step-produit', FvContractSummaryStepProduct)
Vue.component('fv-contract-summary-step-offer', FvContractSummaryStepOffer)
Vue.component(
  'fv-contract-summary-step-structure',
  FvContractSummaryStepStructure
)
Vue.component(
  'fv-contract-summary-step-commande',
  FvContractSummaryStepCommande
)
Vue.component(
  'fv-contract-summary-step-paiement',
  FvContractSummaryStepPaiement
)
Vue.component('fv-contract-stepper', FvContractStepper)
Vue.component('fv-field-date', FvFieldDate)
Vue.component('fv-etape', FvEtape)
