import Vue from 'vue'
// Importation des composants utilitaires
import FvAutocomplete from '@/components/FvAutocomplete'
import FvMenuList from '@/components/FvMenuList'
import FvAccountAvatar from '@/components/FvAccountAvatar'
import FvContactCard from '@/components/FvContactCard'
import FvContactDialog from '@/components/FvContactDialog'
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
import FvCreateButton from '@/components/FvCreateButton'
import FvModal from '@/components/FvModal'
import FvModalAndButton from '@/components/FvModalAndButton'
import FvNav from '@/components/FvNav'
import FvNewPartnerForm from '@/components/FvNewPartnerForm'
import FvProductForm from '@/components/FvProductForm'
import FvStepper from '@/components/FvStepper'
import FvEtape from '@/components/FvEtape'
import FvFieldDate from '@/components/FvFieldDate'
import FvUserAccounts from '@/components/FvUserAccounts'
import FvContractSummaryVisualisation from '@/components/FvContractSummaryVisualisation'
import FvContractStepVisualisation from '@/components/FvContractStepVisualisation'
import FvCountryList from '@/components/FvCountryList'
import FvProductList from '@/components/FvProductList'
import FvOfferListSearch from '@/components/FvOfferListSearch'
import FvOfferList from '@/components/FvOfferList'
import FvOrderListSearch from '@/components/FvOrderListSearch'
import FvOrderList from '@/components/FvOrderList'
import FvPartnerList from '@/components/FvPartnerList'
import FvModalSlot from '@/components/FvModalSlot'
import FvPartnerModal from '@/components/FvPartnerModal'
import FvProductModal from '@/components/FvProductModal'
import FvSpeedDial from '@/components/FvSpeedDial'
import FvUserInfo from '@/components/FvUserInfo'
import FvOrderForm from '@/components/FvOrderForm'
import FvOrderForPartner from '@/components/FvOrderForPartner'
import FvOrderItemList from '@/components/FvOrderItemList'
import FvStructureAutocomplete from '@/components/FvStructureAutocomplete'
import FvPartnerAutocomplete from '@/components/FvPartnerAutocomplete'
import FvProductAutocomplete from '@/components/FvProductAutocomplete'
import FvCategoryAutocomplete from '@/components/FvCategoryAutocomplete'
import FvCurrencyAutocomplete from '@/components/FvCurrencyAutocomplete'
import FvUnitAutocomplete from '@/components/FvUnitAutocomplete'
import FvCountryAutocomplete from '@/components/FvCountryAutocomplete'
import FvOfferAutocomplete from '@/components/FvOfferAutocomplete'
import FvFormeJuridiqueAutocomplete from '@/components/FvFormeJuridiqueAutocomplete'
import FvProductItem from '@/components/FvProductItem'
import FvStatusProgressAtom from '@/components/FvStatusProgressAtom'
import FvFrequence from '@/components/FvFrequence'
import FvPartnerItem from '@/components/FvPartnerItem'
import FvOrderStepSelectPartner from '~/components/FvOrderStepSelectPartner'
import FvOrderStepSelectOffers from '~/components/FvOrderStepSelectOffers'
import FvOrderStepResume from '~/components/FvOrderStepResume'
import FvPartnerCard from '~/components/FvPartnerCard'

// Déclarations composants utilitaires
Vue.component('fv-autocomplete', FvAutocomplete)
Vue.component('fv-menu-list', FvMenuList)
Vue.component('fv-account-avatar', FvAccountAvatar)
Vue.component('fv-contact-dialog', FvContactDialog)
Vue.component('fv-contact-card', FvContactCard)
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
Vue.component('fv-create-button', FvCreateButton)
Vue.component('fv-modal', FvModal)
Vue.component('fv-modal-and-button', FvModalAndButton)
Vue.component('fv-nav', FvNav)
Vue.component('fv-new-partner-form', FvNewPartnerForm)
Vue.component('fv-product-form', FvProductForm)
Vue.component('fv-stepper', FvStepper)
Vue.component('fv-etape', FvEtape)
Vue.component('fv-field-date', FvFieldDate)
Vue.component('fv-user-accounts', FvUserAccounts)
Vue.component(
  'fv-contract-summary-visualisation',
  FvContractSummaryVisualisation
)
Vue.component('fv-contract-step-visualisation', FvContractStepVisualisation)
Vue.component('fv-country-list', FvCountryList)
Vue.component('fv-product-list', FvProductList)
Vue.component('fv-offer-list-search', FvOfferListSearch)
Vue.component('fv-offer-list', FvOfferList)
Vue.component('fv-order-list-search', FvOrderListSearch)
Vue.component('fv-order-list', FvOrderList)
Vue.component('fv-country-list', FvCountryList)
Vue.component('fv-partner-list', FvPartnerList)
Vue.component('fv-modal-slot', FvModalSlot)
Vue.component('fv-partner-modal', FvPartnerModal)
Vue.component('fv-product-modal', FvProductModal)
Vue.component('fv-speed-dial', FvSpeedDial)
Vue.component('fv-user-info', FvUserInfo)
Vue.component('fv-order-form', FvOrderForm)
Vue.component('fv-order-for-partner', FvOrderForPartner)
Vue.component('fv-order-item-list', FvOrderItemList)
Vue.component('fv-structure-autocomplete', FvStructureAutocomplete)
Vue.component('fv-partner-autocomplete', FvPartnerAutocomplete)
Vue.component('fv-product-autocomplete', FvProductAutocomplete)
Vue.component('fv-category-autocomplete', FvCategoryAutocomplete)
Vue.component('fv-currency-autocomplete', FvCurrencyAutocomplete)
Vue.component('fv-country-autocomplete', FvCountryAutocomplete)
Vue.component('fv-offer-autocomplete', FvOfferAutocomplete)
Vue.component('fv-unit-autocomplete', FvUnitAutocomplete)
Vue.component('fv-forme-juridique-autocomplete', FvFormeJuridiqueAutocomplete)
Vue.component('fv-product-item', FvProductItem)
Vue.component('fv-status-progress-atom', FvStatusProgressAtom)
Vue.component('fv-frequence', FvFrequence)
Vue.component('fv-partner-item', FvPartnerItem)
Vue.component('fv-order-step-select-partner', FvOrderStepSelectPartner)
Vue.component('fv-order-step-select-offers', FvOrderStepSelectOffers)
Vue.component('fv-order-step-resume', FvOrderStepResume)
Vue.component('fv-partner-card', FvPartnerCard)
