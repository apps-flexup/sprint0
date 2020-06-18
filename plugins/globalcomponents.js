import Vue from 'vue'
// Importation des composants utilitaires
import FvAutoComplete from '@/components/FvAutoComplete'
import FvContactEdit from '~/components/FvContactEdit'
import FvContactForm from '~/components/FvContactForm'
import FvContactList from '~/components/FvContactList'
import FvContactModal from '~/components/FvContactModal'
import FvContactNew from '~/components/FvContactNew'
import FvContactStepDetail from '~/components/FvContactStepDetail'
import FvContactStepOffer from '~/components/FvContactStepOffer'
import FvContactStepProduct from '~/components/FvContactStepProduct'
import FvContactSummaryStepDetail from '~/components/FvContactSummaryStepDetail'
import FvContactSummaryStepOffer from '@/components/FvContactSummaryStepOffer'
import FvContactSummaryStepProduct from '@/components/FvContactSummaryStepProduct'
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
import FvUserAccounts from '@/components/FvUserAccounts'
import FvAccountAvatar from '@/components/FvAccountAvatar'
import FvContractSummaryVisualisation from '@/components/FvContractSummaryVisualisation'
import FvContractStepVisualisation from '@/components/FvContractStepVisualisation'

// Déclarations composants utilitaires
Vue.component('fv-auto-complete', FvAutoComplete)
Vue.component('fv-contact-edit', FvContactEdit)
Vue.component('fv-contact-form', FvContactForm)
Vue.component('fv-contact-list', FvContactList)
Vue.component('fv-contact-modal', FvContactModal)
Vue.component('fv-contact-new', FvContactNew)
Vue.component('fv-contact-step-detail', FvContactStepDetail)
Vue.component('fv-contact-step-offer', FvContactStepOffer)
Vue.component('fv-contact-step-product', FvContactStepProduct)
Vue.component('fv-contact-summary-step-detail', FvContactSummaryStepDetail)
Vue.component('fv-contact-summary-step-offer', FvContactSummaryStepOffer)
Vue.component('fv-contact-summary-step-product', FvContactSummaryStepProduct)
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
Vue.component('fv-payment-summary-card', FvPaymentSummaryCard)
Vue.component('fv-user-accounts', FvUserAccounts)
Vue.component('fv-account-avatar', FvAccountAvatar)
Vue.component(
  'fv-contract-summary-step-visualisation',
  FvContractSummaryVisualisation
)
Vue.component('fv-contract-step-visualisation', FvContractStepVisualisation)
