import Vue from 'vue'
// Importation des composants utilitaires
import FvAutoComplete from '@/components/FvAutoComplete'
import FvContractList from '@/components/FvContractList'
import FvContractListSearch from '@/components/FvContractListSearch'
import FvNav from '@/components/FvNav'
import FvContractNav from '@/components/FvContractNav'
import FvContractNew from '@/components/FvContractNew'
import FvContractStepCommande from '@/components/FvContractStepCommande'
import FvContractStepDetail from '@/components/FvContractStepDetail'
import FvContractStepOffer from '@/components/FvContractStepOffer'
import FvContractStepPaiement from '@/components/FvContractStepPaiement'
import FvStepper from '@/components/FvStepper'
import FvContractStepper from '@/components/FvContractStepper'
import FvContractStepProduct from '@/components/FvContractStepProduct'
import FvContractStepStructure from '@/components/FvContractStepStructure'
import FvContractSummaryStepCommande from '@/components/FvContractSummaryStepCommande'
import FvContractSummaryStepDetail from '@/components/FvContractSummaryStepDetail'
import FvContractSummaryStepOffer from '@/components/FvContractSummaryStepOffer'
import FvContractSummaryStepPaiement from '@/components/FvContractSummaryStepPaiement'
import FvContractSummaryStepProduct from '@/components/FvContractSummaryStepProduct'
import FvContractSummaryStepStructure from '@/components/FvContractSummaryStepStructure'
import FvEtape from '@/components/FvEtape'
import FvFieldDate from '@/components/FvFieldDate'
import FvPartnerDialog from '@/components/FvPartnerDialog'
import FvPaymentSummaryCard from '@/components/FvPaymentSummaryCard'
import FvPartnerEdit from '@/components/FvPartnerEdit'
import FvPartnerList from '@/components/FvPartnerList'
import FvPartnerNew from '@/components/FvPartnerNew'
import FvPartnerStepDetail from '@/components/FvPartnerStepDetail'
import FvPartnerStepOffer from '@/components/FvPartnerStepOffer'
import FvPartnerStepProduct from '@/components/FvPartnerStepProduct'
import FvPartnerSummaryStepDetail from '@/components/FvPartnerSummaryStepDetail'
import FvPartnerSummaryStepOffer from '@/components/FvPartnerSummaryStepOffer'
import FvPartnerSummaryStepProduct from '@/components/FvPartnerSummaryStepProduct'
import FvPartnerForm from '@/components/FvPartnerForm'
import FvPartnerModal from '@/components/FvPartnerModal'

// Déclarations composants utilitaires
Vue.component('fv-auto-complete', FvAutoComplete)
Vue.component('fv-contract-list', FvContractList)
Vue.component('fv-contract-list-search', FvContractListSearch)
Vue.component('fv-nav', FvNav)
Vue.component('fv-contract-nav', FvContractNav)
Vue.component('fv-contract-new', FvContractNew)
Vue.component('fv-contract-step-detail', FvContractStepDetail)
Vue.component('fv-contract-step-product', FvContractStepProduct)
Vue.component('fv-contract-step-offer', FvContractStepOffer)
Vue.component('fv-contract-step-structure', FvContractStepStructure)
Vue.component('fv-contract-step-commande', FvContractStepCommande)
Vue.component('fv-contract-step-paiement', FvContractStepPaiement)
Vue.component('fv-contract-summary-step-detail', FvContractSummaryStepDetail)
Vue.component('fv-contract-summary-step-product', FvContractSummaryStepProduct)
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
Vue.component('fv-stepper', FvStepper)
Vue.component('fv-contract-stepper', FvContractStepper)
Vue.component('fv-etape', FvEtape)
Vue.component('fv-field-date', FvFieldDate)
Vue.component('fv-partner-dialog', FvPartnerDialog)
Vue.component('fv-partner-edit', FvPartnerEdit)
Vue.component('fv-partner-form', FvPartnerForm)
Vue.component('fv-partner-list', FvPartnerList)
Vue.component('fv-partner-modal', FvPartnerModal)
Vue.component('fv-partner-new', FvPartnerNew)
Vue.component('fv-partner-step-detail', FvPartnerStepDetail)
Vue.component('fv-partner-step-offer', FvPartnerStepOffer)
Vue.component('fv-partner-step-product', FvPartnerStepProduct)
Vue.component('fv-partner-summary-step-detail', FvPartnerSummaryStepDetail)
Vue.component('fv-partner-summary-step-offer', FvPartnerSummaryStepOffer)
Vue.component('fv-partner-summary-step-product', FvPartnerSummaryStepProduct)
Vue.component('fv-payment-summary-card', FvPaymentSummaryCard)
