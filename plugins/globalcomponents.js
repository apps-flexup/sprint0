import Vue from 'vue'
// Importation des composants utilitaires
import FvAccount from '@/components/FvAccount'
import FvAccountCard from '@/components/FvAccountCard'
import FvAccountMedias from '@/components/FvAccountMedias'
import FvAccountMediasReadonly from '@/components/FvAccountMediasReadonly'
import FvAccountInfo from '@/components/FvAccountInfo'
import FvAccountsIndex from '@/components/FvAccountsIndex'
import FvAddressField from '@/components/FvAddressField'
import FvAddressModal from '@/components/FvAddressModal'
import FvAutocomplete from '@/components/FvAutocomplete'
import FvAvatar from '@/components/FvAvatar'
import FvAvatarWithName from '@/components/FvAvatarWithName'
import FvBreadcrumbs from '@/components/FvBreadcrumbs'
import FvCivilityField from '@/components/FvCivilityField'
import FvContactCard from '@/components/FvContactCard'
import FvContactDialog from '@/components/FvContactDialog'
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
import FvCountryAutocomplete from '@/components/FvCountryAutocomplete'
import FvCountryReadonly from '@/components/FvCountryReadonly'
import FvDataTable from '@/components/FvDataTable'
import FvDataTableHeader from '@/components/FvDataTableHeader'
import FvDataTableSearchBar from '@/components/FvDataTableSearchBar'
import FvFlexItems from '@/components/FvFlexItems'
import FvIcon from '@/components/FvIcon'
import FvIndexTable from '@/components/FvIndexTable'
import FvLanguageAutocomplete from '@/components/FvLanguageAutocomplete'
import FvLegalStructureAutocomplete from '~/components/FvLegalStructureAutocomplete'
import FvLegalStructureReadonly from '~/components/FvLegalStructureReadonly'
import FvListAccounts from '@/components/FvListAccounts'
import FvLoginButton from '@/components/FvLoginButton'
import FvLogoutButton from '@/components/FvLogoutButton'
import FvMailField from '@/components/FvMailField'
import FvMediaField from '@/components/FvMediaField'
import FvMemberDataTable from '@/components/FvMemberDataTable'
import FvMemberIndex from '@/components/FvMemberIndex'
import FvMemberList from '@/components/FvMemberList'
import FvMenu from '@/components/FvMenu'
import FvModalActions from '@/components/FvModalActions'
import FvModalButton from '@/components/FvModalButton'
import FvModalHeader from '@/components/FvModalHeader'
import FvRecursiveDataTable from '@/components/FvRecursiveDataTable'
import FvNav from '@/components/FvNav'
import FvNavBar from '@/components/FvNavBar'
import FvNavBarBuyer from '@/components/FvNavBarBuyer'
import FvNavBarManage from '@/components/FvNavBarManage'
import FvNumberField from '@/components/FvNumberField'
import FvPaymentConditionAutocomplete from '@/components/FvPaymentConditionAutocomplete'
import FvPaymentConditionDataTable from '@/components/FvPaymentConditionDataTable'
import FvPaymentConditionIndex from '@/components/FvPaymentConditionIndex'
import FvPaymentConditionList from '@/components/FvPaymentConditionList'
import FvPaymentConditionReferences from '@/components/FvPaymentConditionReferences'
import FvPaymentConditionRisk from '@/components/FvPaymentConditionRisk'
import FvPaymentConditionSelection from '@/components/FvPaymentConditionSelection'
import FvPaymentStructureDataTable from '@/components/FvPaymentStructureDataTable'
import FvPaymentStructureIndex from '@/components/FvPaymentStructureIndex'
import FvPaymentStructureList from '@/components/FvPaymentStructureList'
import FvPaymentTermParams from '@/components/FvPaymentTermParams'
import FvPhoneField from '@/components/FvPhoneField'
import FvPriceField from '@/components/FvPriceField'
import FvPriceToPreferredCurrency from '@/components/FvPriceToPreferredCurrency'
import FvPriceWithUnit from '@/components/FvPriceWithUnit'
import FvPrimaryButton from '@/components/FvPrimaryButton'
import FvProductDataTable from '@/components/FvProductDataTable'
import FvForm from '@/components/FvForm'
import FvQuantitySelector from '@/components/FvQuantitySelector'
import FvYieldRateParams from '@/components/FvYieldRateParams'
import FvRating from '@/components/FvRating'
import FvReadonlyField from '@/components/FvReadonlyField'
import FvReferenceAutocomplete from '@/components/FvReferenceAutocomplete'
import FvReview from '@/components/FvReview'
import FvRoleAutocomplete from '@/components/FvRoleAutocomplete'
import FvSearchAutocomplete from '@/components/FvSearchAutocomplete'
import FvSecondaryButton from '@/components/FvSecondaryButton'
import FvSelectHeaders from '@/components/FvSelectHeaders'
import FvSettingsDefault from '@/components/FvSettingsDefault'
import FvSettingsIndex from '@/components/FvSettingsIndex'
import FvSettingsOthers from '@/components/FvSettingsOthers'
import FvShowMenu from '@/components/FvShowMenu'
import FvSlotItemCard from '@/components/FvSlotItemCard'
import FvStepper from '@/components/FvStepper'
import FvStepForm from '@/components/FvStepForm'
import FvSubMenu from '@/components/FvSubMenu'
import FvTextButton from '@/components/FvTextButton'
import FvTh from '@/components/FvTh'
import FvThemeAutocomplete from '@/components/FvThemeAutocomplete'
import FvVatField from '@/components/FvVatField'
import FvDeleteAction from '@/components/FvDeleteAction'
import FvEditAction from '@/components/FvEditAction'
import FvEtape from '@/components/FvEtape'
import FvFieldDate from '@/components/FvFieldDate'
import FvUserAccounts from '@/components/FvUserAccounts'
import FvDirectory from '@/components/FvDirectory'
import FvContractSummaryVisualisation from '@/components/FvContractSummaryVisualisation'
import FvContractStepVisualisation from '@/components/FvContractStepVisualisation'
import FvProductList from '@/components/FvProductList'
import FvOfferDataTable from '@/components/FvOfferDataTable'
import FvOfferIndex from '@/components/FvOfferIndex'
import FvOfferList from '@/components/FvOfferList'
import FvOfferModal from '@/components/FvOfferModal'
import FvOrderDataTable from '@/components/FvOrderDataTable'
import FvOrderDetails from '@/components/FvOrderDetails'
import FvOrderIndex from '@/components/FvOrderIndex'
import FvOrderListSearch from '@/components/FvOrderListSearch'
import FvOrderList from '@/components/FvOrderList'
import FvOrderModal from '@/components/FvOrderModal'
import FvThirdPartyAccountDataTable from '@/components/FvThirdPartyAccountDataTable'
import FvThirdPartyAccountList from '@/components/FvThirdPartyAccountList'
import FvModalSlot from '@/components/FvModalSlot'
import FvThirdPartyAccountIndex from '@/components/FvThirdPartyAccountIndex'
import FvPartnerModal from '@/components/FvPartnerModal'
import FvProductIndex from '~/components/FvProductIndex'
import FvProductModal from '@/components/FvProductModal'
import FvSpeedDial from '@/components/FvSpeedDial'
import FvTextField from '@/components/FvTextField'
import FvUserInfo from '@/components/FvUserInfo'
import FvOrderForm from '@/components/FvOrderForm'
import FvOrderForThirdPartyAccount from '@/components/FvOrderForThirdPartyAccount'
import FvOrderLineList from '@/components/FvOrderLineList'
import FvStructureAutocomplete from '@/components/FvStructureAutocomplete'
import FvThirdPartyAccountAutocomplete from '@/components/FvThirdPartyAccountAutocomplete'
import FvProductAutocomplete from '@/components/FvProductAutocomplete'
import FvCategoryAutocomplete from '@/components/FvCategoryAutocomplete'
import FvCurrencyAutocomplete from '@/components/FvCurrencyAutocomplete'
import FvUnitAutocomplete from '@/components/FvUnitAutocomplete'
import FvUnitAutocompleteForOffer from '@/components/FvUnitAutocompleteForOffer'
import FvOfferAutocomplete from '@/components/FvOfferAutocomplete'
import FvProductItem from '@/components/FvProductItem'
import FvStatusProgress from '~/components/FvStatusProgress'
import FvFrequence from '@/components/FvFrequence'
import FvPartnerItem from '@/components/FvPartnerItem'
import FvOrderStepSelectPartner from '~/components/FvOrderStepSelectPartner'
import FvOrderStepSelectOffers from '~/components/FvOrderStepSelectOffers'
import FvOrderStepResume from '~/components/FvOrderStepResume'
import FvThirdPartyAccountCard from '~/components/FvThirdPartyAccountCard'
import FvOrderTotals from '~/components/FvOrderTotals'

// Déclarations composants utilitaires
Vue.component('fv-account', FvAccount)
Vue.component('fv-account-card', FvAccountCard)
Vue.component('fv-account-medias', FvAccountMedias)
Vue.component('fv-account-medias-readonly', FvAccountMediasReadonly)
Vue.component('fv-account-info', FvAccountInfo)
Vue.component('fv-accounts-index', FvAccountsIndex)
Vue.component('fv-address-field', FvAddressField)
Vue.component('fv-address-modal', FvAddressModal)
Vue.component('fv-autocomplete', FvAutocomplete)
Vue.component('fv-avatar', FvAvatar)
Vue.component('fv-avatar-with-name', FvAvatarWithName)
Vue.component('fv-breadcrumbs', FvBreadcrumbs)
Vue.component('fv-civility-field', FvCivilityField)
Vue.component('fv-contact-dialog', FvContactDialog)
Vue.component('fv-contact-card', FvContactCard)
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
Vue.component('fv-country-autocomplete', FvCountryAutocomplete)
Vue.component('fv-country-readonly', FvCountryReadonly)
Vue.component('fv-data-table', FvDataTable)
Vue.component('fv-data-table-header', FvDataTableHeader)
Vue.component('fv-data-table-search-bar', FvDataTableSearchBar)
Vue.component('fv-flex-items', FvFlexItems)
Vue.component('fv-icon', FvIcon)
Vue.component('fv-index-table', FvIndexTable)
Vue.component('fv-language-autocomplete', FvLanguageAutocomplete)
Vue.component('fv-legal-structure-autocomplete', FvLegalStructureAutocomplete)
Vue.component('fv-legal-structure-readonly', FvLegalStructureReadonly)
Vue.component('fv-list-accounts', FvListAccounts)
Vue.component('fv-login-button', FvLoginButton)
Vue.component('fv-logout-button', FvLogoutButton)
Vue.component('fv-mail-field', FvMailField)
Vue.component('fv-media-field', FvMediaField)
Vue.component('fv-member-data-table', FvMemberDataTable)
Vue.component('fv-member-index', FvMemberIndex)
Vue.component('fv-member-list', FvMemberList)
Vue.component('fv-menu', FvMenu)
Vue.component('fv-modal-actions', FvModalActions)
Vue.component('fv-modal-button', FvModalButton)
Vue.component('fv-modal-header', FvModalHeader)
Vue.component('fv-recursive-data-table', FvRecursiveDataTable)
Vue.component('fv-nav', FvNav)
Vue.component('fv-nav-bar', FvNavBar)
Vue.component('fv-nav-bar-buyer', FvNavBarBuyer)
Vue.component('fv-nav-bar-manage', FvNavBarManage)
Vue.component('fv-number-field', FvNumberField)
Vue.component(
  'fv-payment-condition-autocomplete',
  FvPaymentConditionAutocomplete
)
Vue.component('fv-payment-condition-data-table', FvPaymentConditionDataTable)
Vue.component('fv-payment-condition-index', FvPaymentConditionIndex)
Vue.component('fv-payment-condition-list', FvPaymentConditionList)
Vue.component('fv-payment-condition-references', FvPaymentConditionReferences)
Vue.component('fv-payment-condition-risk', FvPaymentConditionRisk)
Vue.component('fv-payment-condition-selection', FvPaymentConditionSelection)
Vue.component('fv-payment-structure-data-table', FvPaymentStructureDataTable)
Vue.component('fv-payment-structure-index', FvPaymentStructureIndex)
Vue.component('fv-payment-structure-list', FvPaymentStructureList)
Vue.component('fv-payment-term-params', FvPaymentTermParams)
Vue.component('fv-phone-field', FvPhoneField)
Vue.component('fv-price-field', FvPriceField)
Vue.component('fv-price-to-preferred-currency', FvPriceToPreferredCurrency)
Vue.component('fv-price-with-unit', FvPriceWithUnit)
Vue.component('fv-primary-button', FvPrimaryButton)
Vue.component('fv-product-data-table', FvProductDataTable)
Vue.component('fv-form', FvForm)
Vue.component('fv-product-index', FvProductIndex)
Vue.component('fv-quantity-selector', FvQuantitySelector)
Vue.component('fv-yield-rate-params', FvYieldRateParams)
Vue.component('fv-rating', FvRating)
Vue.component('fv-readonly-field', FvReadonlyField)
Vue.component('fv-reference-autocomplete', FvReferenceAutocomplete)
Vue.component('fv-review', FvReview)
Vue.component('fv-role-autocomplete', FvRoleAutocomplete)
Vue.component('fv-search-autocomplete', FvSearchAutocomplete)
Vue.component('fv-secondary-button', FvSecondaryButton)
Vue.component('fv-select-headers', FvSelectHeaders)
Vue.component('fv-settings-default', FvSettingsDefault)
Vue.component('fv-settings-index', FvSettingsIndex)
Vue.component('fv-settings-others', FvSettingsOthers)
Vue.component('fv-show-menu', FvShowMenu)
Vue.component('fv-slot-item-card', FvSlotItemCard)
Vue.component('fv-stepper', FvStepper)
Vue.component('fv-step-form', FvStepForm)
Vue.component('fv-sub-menu', FvSubMenu)
Vue.component('fv-text-button', FvTextButton)
Vue.component('fv-th', FvTh)
Vue.component('fv-theme-autocomplete', FvThemeAutocomplete)
Vue.component('fv-vat-field', FvVatField)
Vue.component('fv-delete-action', FvDeleteAction)
Vue.component('fv-edit-action', FvEditAction)
Vue.component('fv-etape', FvEtape)
Vue.component('fv-field-date', FvFieldDate)
Vue.component('fv-user-accounts', FvUserAccounts)
Vue.component('fv-directory', FvDirectory)
Vue.component(
  'fv-contract-summary-visualisation',
  FvContractSummaryVisualisation
)
Vue.component('fv-contract-step-visualisation', FvContractStepVisualisation)
Vue.component('fv-product-list', FvProductList)
Vue.component('fv-offer-data-table', FvOfferDataTable)
Vue.component('fv-offer-index', FvOfferIndex)
Vue.component('fv-offer-list', FvOfferList)
Vue.component('fv-offer-modal', FvOfferModal)
Vue.component('fv-order-data-table', FvOrderDataTable)
Vue.component('fv-order-details', FvOrderDetails)
Vue.component('fv-order-index', FvOrderIndex)
Vue.component('fv-order-list-search', FvOrderListSearch)
Vue.component('fv-order-list', FvOrderList)
Vue.component('fv-order-modal', FvOrderModal)
Vue.component('fv-third-party-account-data-table', FvThirdPartyAccountDataTable)
Vue.component('fv-third-party-account-list', FvThirdPartyAccountList)
Vue.component('fv-modal-slot', FvModalSlot)
Vue.component('fv-third-party-account-index', FvThirdPartyAccountIndex)
Vue.component('fv-partner-modal', FvPartnerModal)
Vue.component('fv-product-modal', FvProductModal)
Vue.component('fv-speed-dial', FvSpeedDial)
Vue.component('fv-text-field', FvTextField)
Vue.component('fv-user-info', FvUserInfo)
Vue.component('fv-order-form', FvOrderForm)
Vue.component('fv-order-for-third-party-account', FvOrderForThirdPartyAccount)
Vue.component('fv-order-line-list', FvOrderLineList)
Vue.component('fv-structure-autocomplete', FvStructureAutocomplete)
Vue.component(
  'fv-third-party-account-autocomplete',
  FvThirdPartyAccountAutocomplete
)
Vue.component('fv-product-autocomplete', FvProductAutocomplete)
Vue.component('fv-category-autocomplete', FvCategoryAutocomplete)
Vue.component('fv-currency-autocomplete', FvCurrencyAutocomplete)
Vue.component('fv-offer-autocomplete', FvOfferAutocomplete)
Vue.component('fv-unit-autocomplete', FvUnitAutocomplete)
Vue.component('fv-unit-autocomplete-for-offer', FvUnitAutocompleteForOffer)
Vue.component('fv-product-item', FvProductItem)
Vue.component('fv-status-progress', FvStatusProgress)
Vue.component('fv-frequence', FvFrequence)
Vue.component('fv-partner-item', FvPartnerItem)
Vue.component('fv-order-step-select-partner', FvOrderStepSelectPartner)
Vue.component('fv-order-step-select-offers', FvOrderStepSelectOffers)
Vue.component('fv-order-step-resume', FvOrderStepResume)
Vue.component('fv-third-party-account-card', FvThirdPartyAccountCard)
Vue.component('fv-order-totals', FvOrderTotals)
