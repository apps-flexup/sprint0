import Vue from 'vue'
// Importation des composants utilitaires
import FvAccount from '@/components/FvAccount'
import FvAccountAvatar from '@/components/FvAccountAvatar'
import FvAccountInfo from '@/components/FvAccountInfo'
import FvAutocomplete from '@/components/FvAutocomplete'
import FvAvatar from '@/components/FvAvatar'
import FvAvatarWithName from '@/components/FvAvatarWithName'
import FvBreadcrumbs from '@/components/FvBreadcrumbs'
import FvCloseModalButton from '@/components/FvCloseModalButton'
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
import FvDataTableHeader from '@/components/FvDataTableHeader'
import FvDataTableSearchBar from '@/components/FvDataTableSearchBar'
import FvIcon from '@/components/FvIcon'
import FvLanguageAutocomplete from '@/components/FvLanguageAutocomplete'
import FvListAccounts from '@/components/FvListAccounts'
import FvLoginButton from '@/components/FvLoginButton'
import FvLogoutButton from '@/components/FvLogoutButton'
import FvMenu from '@/components/FvMenu'
import FvModal from '@/components/FvModal'
import FvModalActions from '@/components/FvModalActions'
import FvModalAndButton from '@/components/FvModalAndButton'
import FvNav from '@/components/FvNav'
import FvNavBar from '@/components/FvNavBar'
import FvNewPartnerForm from '@/components/FvNewPartnerForm'
import FvNumberField from '@/components/FvNumberField'
import FvPriceField from '@/components/FvPriceField'
import FvPriceToPreferredCurrency from '@/components/FvPriceToPreferredCurrency'
import FvPrimaryButton from '@/components/FvPrimaryButton'
import FvProductDataTable from '@/components/FvProductDataTable'
import FvProductForm from '@/components/FvProductForm'
import FvQuantitySelector from '@/components/FvQuantitySelector'
import FvRating from '@/components/FvRating'
import FvReview from '@/components/FvReview'
import FvSecondaryButton from '@/components/FvSecondaryButton'
import FvSettingsDefault from '@/components/FvSettingsDefault'
import FvSettingsIndex from '@/components/FvSettingsIndex'
import FvSettingsOthers from '@/components/FvSettingsOthers'
import FvShowMenu from '@/components/FvShowMenu'
import FvStepper from '@/components/FvStepper'
import FvStepForm from '@/components/FvStepForm'
import FvSubMenu from '@/components/FvSubMenu'
import FvThemeAutocomplete from '@/components/FvThemeAutocomplete'
import FvVatField from '@/components/FvVatField'
import FvDeleteAction from '@/components/FvDeleteAction'
import FvEditAction from '@/components/FvEditAction'
import FvEtape from '@/components/FvEtape'
import FvFieldDate from '@/components/FvFieldDate'
import FvUserAccounts from '@/components/FvUserAccounts'
import FvContractSummaryVisualisation from '@/components/FvContractSummaryVisualisation'
import FvContractStepVisualisation from '@/components/FvContractStepVisualisation'
import FvCountryList from '@/components/FvCountryList'
import FvProductList from '@/components/FvProductList'
import FvOfferDataTable from '@/components/FvOfferDataTable'
import FvOfferForm from '@/components/FvOfferForm'
import FvOfferIndex from '@/components/FvOfferIndex'
import FvOfferList from '@/components/FvOfferList'
import FvOfferModal from '@/components/FvOfferModal'
import FvOrderDataTable from '@/components/FvOrderDataTable'
import FvOrderDetails from '@/components/FvOrderDetails'
import FvOrderIndex from '@/components/FvOrderIndex'
import FvOrderListSearch from '@/components/FvOrderListSearch'
import FvOrderList from '@/components/FvOrderList'
import FvOrderModal from '@/components/FvOrderModal'
import FvPartnerDataTable from '@/components/FvPartnerDataTable'
import FvPartnerList from '@/components/FvPartnerList'
import FvModalSlot from '@/components/FvModalSlot'
import FvPartnerIndex from '@/components/FvPartnerIndex'
import FvPartnerModal from '@/components/FvPartnerModal'
import FvProductIndex from '~/components/FvProductIndex'
import FvProductModal from '@/components/FvProductModal'
import FvSpeedDial from '@/components/FvSpeedDial'
import FvTextField from '@/components/FvTextField'
import FvUserInfo from '@/components/FvUserInfo'
import FvOrderForm from '@/components/FvOrderForm'
import FvOrderForPartner from '@/components/FvOrderForPartner'
import FvOrderLineList from '@/components/FvOrderLineList'
import FvStructureAutocomplete from '@/components/FvStructureAutocomplete'
import FvPartnerAutocomplete from '@/components/FvPartnerAutocomplete'
import FvProductAutocomplete from '@/components/FvProductAutocomplete'
import FvCategoryAutocomplete from '@/components/FvCategoryAutocomplete'
import FvCurrencyAutocomplete from '@/components/FvCurrencyAutocomplete'
import FvUnitAutocomplete from '@/components/FvUnitAutocomplete'
import FvCountryAutocomplete from '@/components/FvCountryAutocomplete'
import FvOfferAutocomplete from '@/components/FvOfferAutocomplete'
import FvLegalStructureAutocomplete from '~/components/FvLegalStructureAutocomplete'
import FvProductItem from '@/components/FvProductItem'
import FvSaveModalButton from '@/components/FvSaveModalButton'
import FvStatusProgress from '~/components/FvStatusProgress'
import FvFrequence from '@/components/FvFrequence'
import FvPartnerItem from '@/components/FvPartnerItem'
import FvOrderStepSelectPartner from '~/components/FvOrderStepSelectPartner'
import FvOrderStepSelectOffers from '~/components/FvOrderStepSelectOffers'
import FvOrderStepResume from '~/components/FvOrderStepResume'
import FvPartnerCard from '~/components/FvPartnerCard'
import FvOrderTotals from '~/components/FvOrderTotals'

// Déclarations composants utilitaires
Vue.component('fv-account', FvAccount)
Vue.component('fv-account-avatar', FvAccountAvatar)
Vue.component('fv-account-info', FvAccountInfo)
Vue.component('fv-autocomplete', FvAutocomplete)
Vue.component('fv-avatar', FvAvatar)
Vue.component('fv-avatar-with-name', FvAvatarWithName)
Vue.component('fv-breadcrumbs', FvBreadcrumbs)
Vue.component('fv-close-modal-button', FvCloseModalButton)
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
Vue.component('fv-data-table-header', FvDataTableHeader)
Vue.component('fv-data-table-search-bar', FvDataTableSearchBar)
Vue.component('fv-icon', FvIcon)
Vue.component('fv-language-autocomplete', FvLanguageAutocomplete)
Vue.component('fv-list-accounts', FvListAccounts)
Vue.component('fv-login-button', FvLoginButton)
Vue.component('fv-logout-button', FvLogoutButton)
Vue.component('fv-menu', FvMenu)
Vue.component('fv-modal', FvModal)
Vue.component('fv-modal-actions', FvModalActions)
Vue.component('fv-modal-and-button', FvModalAndButton)
Vue.component('fv-nav', FvNav)
Vue.component('fv-nav-bar', FvNavBar)
Vue.component('fv-new-partner-form', FvNewPartnerForm)
Vue.component('fv-number-field', FvNumberField)
Vue.component('fv-price-field', FvPriceField)
Vue.component('fv-price-to-preferred-currency', FvPriceToPreferredCurrency)
Vue.component('fv-primary-button', FvPrimaryButton)
Vue.component('fv-product-data-table', FvProductDataTable)
Vue.component('fv-product-form', FvProductForm)
Vue.component('fv-product-index', FvProductIndex)
Vue.component('fv-quantity-selector', FvQuantitySelector)
Vue.component('fv-rating', FvRating)
Vue.component('fv-review', FvReview)
Vue.component('fv-secondary-button', FvSecondaryButton)
Vue.component('fv-settings-default', FvSettingsDefault)
Vue.component('fv-settings-index', FvSettingsIndex)
Vue.component('fv-settings-others', FvSettingsOthers)
Vue.component('fv-show-menu', FvShowMenu)
Vue.component('fv-stepper', FvStepper)
Vue.component('fv-step-form', FvStepForm)
Vue.component('fv-sub-menu', FvSubMenu)
Vue.component('fv-theme-autocomplete', FvThemeAutocomplete)
Vue.component('fv-vat-field', FvVatField)
Vue.component('fv-delete-action', FvDeleteAction)
Vue.component('fv-edit-action', FvEditAction)
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
Vue.component('fv-offer-data-table', FvOfferDataTable)
Vue.component('fv-offer-form', FvOfferForm)
Vue.component('fv-offer-index', FvOfferIndex)
Vue.component('fv-offer-list', FvOfferList)
Vue.component('fv-offer-modal', FvOfferModal)
Vue.component('fv-order-data-table', FvOrderDataTable)
Vue.component('fv-order-details', FvOrderDetails)
Vue.component('fv-order-index', FvOrderIndex)
Vue.component('fv-order-list-search', FvOrderListSearch)
Vue.component('fv-order-list', FvOrderList)
Vue.component('fv-order-modal', FvOrderModal)
Vue.component('fv-country-list', FvCountryList)
Vue.component('fv-partner-data-table', FvPartnerDataTable)
Vue.component('fv-partner-list', FvPartnerList)
Vue.component('fv-modal-slot', FvModalSlot)
Vue.component('fv-partner-index', FvPartnerIndex)
Vue.component('fv-partner-modal', FvPartnerModal)
Vue.component('fv-product-modal', FvProductModal)
Vue.component('fv-speed-dial', FvSpeedDial)
Vue.component('fv-text-field', FvTextField)
Vue.component('fv-user-info', FvUserInfo)
Vue.component('fv-order-form', FvOrderForm)
Vue.component('fv-order-for-partner', FvOrderForPartner)
Vue.component('fv-order-line-list', FvOrderLineList)
Vue.component('fv-structure-autocomplete', FvStructureAutocomplete)
Vue.component('fv-partner-autocomplete', FvPartnerAutocomplete)
Vue.component('fv-product-autocomplete', FvProductAutocomplete)
Vue.component('fv-category-autocomplete', FvCategoryAutocomplete)
Vue.component('fv-currency-autocomplete', FvCurrencyAutocomplete)
Vue.component('fv-country-autocomplete', FvCountryAutocomplete)
Vue.component('fv-offer-autocomplete', FvOfferAutocomplete)
Vue.component('fv-unit-autocomplete', FvUnitAutocomplete)
Vue.component('fv-legal-structure-autocomplete', FvLegalStructureAutocomplete)
Vue.component('fv-product-item', FvProductItem)
Vue.component('fv-save-modal-button', FvSaveModalButton)
Vue.component('fv-status-progress', FvStatusProgress)
Vue.component('fv-frequence', FvFrequence)
Vue.component('fv-partner-item', FvPartnerItem)
Vue.component('fv-order-step-select-partner', FvOrderStepSelectPartner)
Vue.component('fv-order-step-select-offers', FvOrderStepSelectOffers)
Vue.component('fv-order-step-resume', FvOrderStepResume)
Vue.component('fv-partner-card', FvPartnerCard)
Vue.component('fv-order-totals', FvOrderTotals)
