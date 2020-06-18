import Vue from 'vue'
// Importation des composants utilitaires
import FvAutoComplete from '@/components/FvAutoComplete'
import FvContactEdit from '~/components/FvContactEdit'
import FvContactForm from '~/components/FvContactForm'
import FvContactList from '~/components/FvContactList'
import FvContractList from '@/components/FvContractList'
import FvContractListSearch from '@/components/FvContractListSearch'
import FvContractNew from '@/components/FvContractNew'
import FvContractStepCommande from '@/components/FvContractStepCommande'
import FvContractStepDetail from '@/components/FvContractStepDetail'
import FvContractStepOffer from '@/components/FvContractStepOffer'
import FvContractStepPaiement from '@/components/FvContractStepPaiement'
import FvContractStepStructure from '@/components/FvContractStepStructure'
import FvContractSummaryStepCommande from '@/components/FvContractSummaryStepCommande'
import FvContractSummaryStepDetail from '@/components/FvContractSummaryStepDetail'
import FvContractSummaryStepOffer from '@/components/FvContractSummaryStepOffer'
import FvContractSummaryStepPaiement from '@/components/FvContractSummaryStepPaiement'
import FvContractSummaryStepStructure from '@/components/FvContractSummaryStepStructure'
import FvNav from '@/components/FvNav'
import FvStepper from '@/components/FvStepper'
import FvEtape from '@/components/FvEtape'
import FvFieldDate from '@/components/FvFieldDate'
import FvOfferList from '@/components/FvOfferList'
import FvPartnerDialog from '@/components/FvPartnerDialog'
import FvPaymentSummaryCard from '@/components/FvPaymentSummaryCard'
import FvPartnerNew from '@/components/FvPartnerNew'
import FvPartnerStepDetail from '@/components/FvPartnerStepDetail'
import FvPartnerStepOffer from '@/components/FvPartnerStepOffer'
import FvPartnerStepProduct from '@/components/FvPartnerStepProduct'
import FvPartnerSummaryStepDetail from '@/components/FvPartnerSummaryStepDetail'
import FvPartnerSummaryStepOffer from '@/components/FvPartnerSummaryStepOffer'
import FvPartnerModal from '@/components/FvPartnerModal'
import FvUserAccounts from '@/components/FvUserAccounts'
import FvAccountAvatar from '@/components/FvAccountAvatar'
import FvContractSummaryVisualisation from '@/components/FvContractSummaryVisualisation'
import FvContractStepVisualisation from '@/components/FvContractStepVisualisation'

// Déclarations composants utilitaires
Vue.component('fv-auto-complete', FvAutoComplete)
Vue.component('fv-contact-edit', FvContactEdit)
Vue.component('fv-contact-form', FvContactForm)
Vue.component('fv-contact-list', FvContactList)
Vue.component('fv-contract-list', FvContractList)
Vue.component('fv-contract-list-search', FvContractListSearch)
Vue.component('fv-contract-new', FvContractNew)
Vue.component('fv-contract-step-detail', FvContractStepDetail)
Vue.component('fv-contract-step-offer', FvContractStepOffer)
Vue.component('fv-contract-step-structure', FvContractStepStructure)
Vue.component('fv-contract-step-commande', FvContractStepCommande)
Vue.component('fv-contract-step-paiement', FvContractStepPaiement)
Vue.component('fv-contract-summary-step-detail', FvContractSummaryStepDetail)
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
Vue.component('fv-nav', FvNav)
Vue.component('fv-stepper', FvStepper)
Vue.component('fv-etape', FvEtape)
Vue.component('fv-field-date', FvFieldDate)
Vue.component('fv-offer-list', FvOfferList)
Vue.component('fv-partner-dialog', FvPartnerDialog)
Vue.component('fv-partner-modal', FvPartnerModal)
Vue.component('fv-partner-new', FvPartnerNew)
Vue.component('fv-partner-step-detail', FvPartnerStepDetail)
Vue.component('fv-partner-step-offer', FvPartnerStepOffer)
Vue.component('fv-partner-step-product', FvPartnerStepProduct)
Vue.component('fv-partner-summary-step-detail', FvPartnerSummaryStepDetail)
Vue.component('fv-partner-summary-step-offer', FvPartnerSummaryStepOffer)
Vue.component('fv-payment-summary-card', FvPaymentSummaryCard)
Vue.component('fv-user-accounts', FvUserAccounts)
Vue.component('fv-account-avatar', FvAccountAvatar)
Vue.component(
  'fv-contract-summary-step-visualisation',
  FvContractSummaryVisualisation
)
Vue.component('fv-contract-step-visualisation', FvContractStepVisualisation)
