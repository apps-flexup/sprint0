import Vue from 'vue'
// Importation des composants utilitaires
import FvAccountCard from '@/components/FvAccountCard'
import FvAccountInfo from '@/components/FvAccountInfo'
import FvAccountList from '@/components/FvAccountList'
import FvAccountMedias from '@/components/FvAccountMedias'
import FvAccountMediasReadonly from '@/components/FvAccountMediasReadonly'
import FvAccountOwners from '@/components/FvAccountOwners'
import FvAccountOwnersReadonly from '@/components/FvAccountOwnersReadonly'
import FvAccountReadonly from '@/components/FvAccountReadonly'
import FvAccountsIndex from '@/components/FvAccountsIndex'
import FvAddressField from '@/components/FvAddressField'
import FvAddressModal from '@/components/FvAddressModal'
import FvAutocomplete from '@/components/FvAutocomplete'
import FvAvailableThirdPartyAccountList from '@/components/FvAvailableThirdPartyAccountList'
import FvAvatar from '@/components/FvAvatar'
import FvAvatarWithName from '@/components/FvAvatarWithName'
import FvBreadcrumbs from '@/components/FvBreadcrumbs'
import FvCategoryAutocomplete from '@/components/FvCategoryAutocomplete'
import FvCivilityField from '@/components/FvCivilityField'
import FvContactCard from '@/components/FvContactCard'
import FvContactDialog from '@/components/FvContactDialog'
import FvContactForm from '~/components/FvContactForm'
import FvContactList from '~/components/FvContactList'
import FvContactModal from '~/components/FvContactModal'
import FvContactNew from '~/components/FvContactNew'
import FvContactStepDetail from '~/components/FvContactStepDetail'
import FvContactStepOffer from '~/components/FvContactStepOffer'
import FvContactSummaryStepDetail from '~/components/FvContactSummaryStepDetail'
import FvContactSummaryStepOffer from '@/components/FvContactSummaryStepOffer'
import FvContractList from '@/components/FvContractList'
import FvContractListSearch from '@/components/FvContractListSearch'
import FvContractNew from '@/components/FvContractNew'
import FvContractStepDetail from '@/components/FvContractStepDetail'
import FvContractStepOffer from '@/components/FvContractStepOffer'
import FvContractStepPaiement from '@/components/FvContractStepPaiement'
import FvContractStepVisualisation from '@/components/FvContractStepVisualisation'
import FvContractSummaryStepCommande from '@/components/FvContractSummaryStepCommande'
import FvContractSummaryStepDetail from '@/components/FvContractSummaryStepDetail'
import FvContractSummaryStepOffer from '@/components/FvContractSummaryStepOffer'
import FvContractSummaryStepPaiement from '@/components/FvContractSummaryStepPaiement'
import FvContractSummaryStepStructure from '@/components/FvContractSummaryStepStructure'
import FvContractSummaryVisualisation from '@/components/FvContractSummaryVisualisation'
import FvCountryAutocomplete from '@/components/FvCountryAutocomplete'
import FvCountryReadonly from '@/components/FvCountryReadonly'
import FvCreatePurchase from '~/src/flexup/adapters/primary/nuxt-components/FvCreatePurchase.component'
import FvCurrencyAutocomplete from '@/components/FvCurrencyAutocomplete'
import FvDataTable from '@/components/FvDataTable'
import FvDataTableHeader from '@/components/FvDataTableHeader'
import FvDataTableSearchBar from '@/components/FvDataTableSearchBar'
import FvDeleteAction from '@/components/FvDeleteAction'
import FvDirectory from '@/components/FvDirectory'
import FvDirectoryEntry from '@/components/FvDirectoryEntry'
import FvEditAction from '@/components/FvEditAction'
import FvEtape from '@/components/FvEtape'
import FvFieldDate from '@/components/FvFieldDate'
import FvFlexItems from '@/components/FvFlexItems'
import FvForm from '@/components/FvForm'
import FvFrequence from '@/components/FvFrequence'
import FvGetIdThirdPartyAutocomplete from '@/components/FvGetIdThirdPartyAutocomplete'
import FvHeaderIndex from '@/components/FvHeaderIndex'
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
import FvMemberNameDisplay from '@/components/FvMemberNameDisplay'
import FvMenu from '@/components/FvMenu'
import FvMessagesDataTable from '~/components/FvMessageDataTable';
import FvMessageIndex from '~/components/FvMessageIndex';
import FvMessageList from '~/components/FvMessageList';
import FvModalActions from '@/components/FvModalActions'
import FvModalButton from '@/components/FvModalButton'
import FvModalHeader from '@/components/FvModalHeader'
import FvModalSlot from '@/components/FvModalSlot'
import FvMyOrdersListing from '~/src/flexup/adapters/primary/nuxt-components/FvMyOrdersListing.component'
import FvNav from '@/components/FvNav'
import FvNavBar from '@/components/FvNavBar'
import FvNavBarBuyer from '@/components/FvNavBarBuyer'
import FvNavBarManage from '@/components/FvNavBarManage'
import FvNumberField from '@/components/FvNumberField'
import FvOrderDataTable from '@/components/FvOrderDataTable'
import FvOrderDetails from '@/components/FvOrderDetails'
import FvOrderForThirdPartyAccount from '@/components/FvOrderForThirdPartyAccount'
import FvOrderForm from '@/components/FvOrderForm'
import FvOrderIndex from '@/components/FvOrderIndex'
import FvOrderItemsSelector from '@/components/FvOrderItemsSelector'
import FvOrderLineList from '@/components/FvOrderLineList'
import FvOrderList from '@/components/FvOrderList'
import FvOrderListSearch from '@/components/FvOrderListSearch'
import FvOrderModal from '@/components/FvOrderModal'
import FvOrderStepResume from '~/components/FvOrderStepResume'
import FvOrderStepSelectOffers from '~/components/FvOrderStepSelectOffers'
import FvOrderStepSelectPartner from '~/components/FvOrderStepSelectPartner'
import FvOrderTotals from '~/components/FvOrderTotals'
import FvOwnerDataTable from '@/components/FvOwnerDataTable'
import FvPartnerItem from '@/components/FvPartnerItem'
import FvPartnerModal from '@/components/FvPartnerModal'
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
import FvPriceFieldReadonly from '@/components/FvPriceFieldReadonly'
import FvPriceToPreferredCurrency from '@/components/FvPriceToPreferredCurrency'
import FvPriceWithUnit from '@/components/FvPriceWithUnit'
import FvPrimaryButton from '@/components/FvPrimaryButton'
import FvProductAutocomplete from '@/components/FvProductAutocomplete'
import FvProductDataTable from '@/components/FvProductDataTable'
import FvProductIndex from '~/components/FvProductIndex'
import FvProductItem from '@/components/FvProductItem'
import FvProductList from '@/components/FvProductList'
import FvProductModal from '@/components/FvProductModal'
import FvProductFormModal from '@/components/FvProductFormModal'
import FvProductReadonly from '@/components/FvProductReadonly'
import FvProductStatusSelect from '@/components/FvProductStatusSelect'
import FvProductUnitAutocomplete from '~/components/FvProductUnitAutocomplete'
import FvProductVisibilitySwitch from '@/components/FvProductVisibilitySwitch'
import FvQuantitySelector from '@/components/FvQuantitySelector'
import FvRadioGroup from '@/components/FvRadioGroup'
import FvRating from '@/components/FvRating'
import FvReadonlyField from '@/components/FvReadonlyField'
import FvRecursiveDataTable from '@/components/FvRecursiveDataTable'
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
import FvSpeedDial from '@/components/FvSpeedDial'
import FvStatus from '@/components/FvStatus'
import FvStatusFilter from '@/components/FvStatusFilter'
import FvStatusReadonly from '@/components/FvStatusReadonly'
import FvStatusSelect from '~/components/FvStatusSelect'
import FvStatusSwitch from '@/components/FvStatusSwitch'
import FvStatusSwitchReadonly from '@/components/FvStatusSwitchReadonly'
import FvStepForm from '@/components/FvStepForm'
import FvStepper from '@/components/FvStepper'
import FvStructureAutocomplete from '@/components/FvStructureAutocomplete'
import FvSubMenu from '@/components/FvSubMenu'
import FvTextButton from '@/components/FvTextButton'
import FvTextField from '@/components/FvTextField'
import FvTh from '@/components/FvTh'
import FvThemeAutocomplete from '@/components/FvThemeAutocomplete'
import FvThirdPartyAccountAutocomplete from '@/components/FvThirdPartyAccountAutocomplete'
import FvThirdPartyAccountCard from '~/components/FvThirdPartyAccountCard'
import FvThirdPartyAccountDataTable from '@/components/FvThirdPartyAccountDataTable'
import FvThirdPartyAccountIndex from '@/components/FvThirdPartyAccountIndex'
import FvThirdPartyAccountList from '@/components/FvThirdPartyAccountList'
import FvThirdPartyStatusSelect from '@/components/FvThirdPartyStatusSelect'
import FvUnitAutocomplete from '@/components/FvUnitAutocomplete'
import FvUnitAutocompleteForOffer from '@/components/FvUnitAutocompleteForOffer'
import FvUnitReadonly from '@/components/FvUnitReadonly'
import FvUserAccounts from '@/components/FvUserAccounts'
import FvUserInfo from '@/components/FvUserInfo'
import FvVatField from '@/components/FvVatField'
import FvVatFieldReadonly from '@/components/FvVatFieldReadonly'
import FvVisibilitySwitch from '@/components/FvVisibilitySwitch'
import FvVisibilitySwitchReadonly from '@/components/FvVisibilitySwitchReadonly'
import FvYieldRateParams from '@/components/FvYieldRateParams'

// Déclarations composants utilitaires
Vue.component('FvAccountCard', FvAccountCard)
Vue.component('FvAccountMedias', FvAccountMedias)
Vue.component('FvAccountMediasReadonly', FvAccountMediasReadonly)
Vue.component('FvAccountInfo', FvAccountInfo)
Vue.component('FvAccountList', FvAccountList)
Vue.component('FvAccountOwners', FvAccountOwners)
Vue.component('FvAccountOwnersReadonly', FvAccountOwnersReadonly)
Vue.component('FvAccountReadonly', FvAccountReadonly)
Vue.component('FvAccountsIndex', FvAccountsIndex)
Vue.component('FvAddressField', FvAddressField)
Vue.component('FvAddressModal', FvAddressModal)
Vue.component('FvAutocomplete', FvAutocomplete)
Vue.component('FvAvatar', FvAvatar)
Vue.component('FvAvailableThirdPartyAccountList', FvAvailableThirdPartyAccountList)
Vue.component('FvAvatarWithName', FvAvatarWithName)
Vue.component('FvBreadcrumbs', FvBreadcrumbs)
Vue.component('FvCivilityField', FvCivilityField)
Vue.component('FvContactDialog', FvContactDialog)
Vue.component('FvContactCard', FvContactCard)
Vue.component('FvContactForm', FvContactForm)
Vue.component('FvContactList', FvContactList)
Vue.component('FvContactModal', FvContactModal)
Vue.component('FvContactNew', FvContactNew)
Vue.component('FvContactStepDetail', FvContactStepDetail)
Vue.component('FvContactStepOffer', FvContactStepOffer)
Vue.component('FvContactSummaryStepDetail', FvContactSummaryStepDetail)
Vue.component('FvContactSummaryStepOffer', FvContactSummaryStepOffer)
Vue.component('FvContractList', FvContractList)
Vue.component('FvContractListSearch', FvContractListSearch)
Vue.component('FvContractNew', FvContractNew)
Vue.component('FvContractStepDetail', FvContractStepDetail)
Vue.component('FvContractStepOffer', FvContractStepOffer)
Vue.component('FvContractStepPaiement', FvContractStepPaiement)
Vue.component('FvContractSummaryStepDetail', FvContractSummaryStepDetail)
Vue.component('FvContractSummaryStepOffer', FvContractSummaryStepOffer)
Vue.component('FvContractSummaryStepStructure', FvContractSummaryStepStructure)
Vue.component('FvContractSummaryStepCommande', FvContractSummaryStepCommande)
Vue.component('FvContractSummaryStepPaiement', FvContractSummaryStepPaiement)
Vue.component('FvCountryAutocomplete', FvCountryAutocomplete)
Vue.component('FvCountryReadonly', FvCountryReadonly)
Vue.component('FvCreatePurchase', FvCreatePurchase)
Vue.component('FvDataTable', FvDataTable)
Vue.component('FvDataTableHeader', FvDataTableHeader)
Vue.component('FvDataTableSearchBar', FvDataTableSearchBar)
Vue.component('FvDirectoryEntry', FvDirectoryEntry)
Vue.component('FvFlexItems', FvFlexItems)
Vue.component('FvGetIdThirdPartyAutocomplete', FvGetIdThirdPartyAutocomplete)
Vue.component('FvHeaderIndex', FvHeaderIndex)
Vue.component('FvIcon', FvIcon)
Vue.component('FvIndexTable', FvIndexTable)
Vue.component('FvLanguageAutocomplete', FvLanguageAutocomplete)
Vue.component('FvLegalStructureAutocomplete', FvLegalStructureAutocomplete)
Vue.component('FvLegalStructureReadonly', FvLegalStructureReadonly)
Vue.component('FvListAccounts', FvListAccounts)
Vue.component('FvLoginButton', FvLoginButton)
Vue.component('FvLogoutButton', FvLogoutButton)
Vue.component('FvMailField', FvMailField)
Vue.component('FvMediaField', FvMediaField)
Vue.component('FvMemberDataTable', FvMemberDataTable)
Vue.component('FvMemberIndex', FvMemberIndex)
Vue.component('FvMemberList', FvMemberList)
Vue.component('FvMemberNameDisplay', FvMemberNameDisplay)
Vue.component('FvMenu', FvMenu)
Vue.component('FvMessagesDataTable', FvMessagesDataTable)
Vue.component('FvMessageList', FvMessageList)
Vue.component('FvMessageIndex', FvMessageIndex)
Vue.component('FvModalActions', FvModalActions)
Vue.component('FvModalButton', FvModalButton)
Vue.component('FvModalHeader', FvModalHeader)
Vue.component('FvMyOrdersListing', FvMyOrdersListing)
Vue.component('FvRecursiveDataTable', FvRecursiveDataTable)
Vue.component('FvNav', FvNav)
Vue.component('FvNavBar', FvNavBar)
Vue.component('FvNavBarBuyer', FvNavBarBuyer)
Vue.component('FvNavBarManage', FvNavBarManage)
Vue.component('FvNumberField', FvNumberField)
Vue.component('FvOrderItemsSelector', FvOrderItemsSelector)
Vue.component('FvPaymentConditionAutocomplete', FvPaymentConditionAutocomplete)
Vue.component('FvPaymentConditionDataTable', FvPaymentConditionDataTable)
Vue.component('FvPaymentConditionIndex', FvPaymentConditionIndex)
Vue.component('FvPaymentConditionList', FvPaymentConditionList)
Vue.component('FvPaymentConditionReferences', FvPaymentConditionReferences)
Vue.component('FvPaymentConditionRisk', FvPaymentConditionRisk)
Vue.component('FvPaymentConditionSelection', FvPaymentConditionSelection)
Vue.component('FvPaymentStructureDataTable', FvPaymentStructureDataTable)
Vue.component('FvPaymentStructureIndex', FvPaymentStructureIndex)
Vue.component('FvPaymentStructureList', FvPaymentStructureList)
Vue.component('FvPaymentTermParams', FvPaymentTermParams)
Vue.component('FvPhoneField', FvPhoneField)
Vue.component('FvPriceField', FvPriceField)
Vue.component('FvPriceFieldReadonly', FvPriceFieldReadonly)
Vue.component('FvPriceToPreferredCurrency', FvPriceToPreferredCurrency)
Vue.component('FvPriceWithUnit', FvPriceWithUnit)
Vue.component('FvPrimaryButton', FvPrimaryButton)
Vue.component('FvProductDataTable', FvProductDataTable)
Vue.component('FvProductFormModal', FvProductFormModal)
Vue.component('FvProductReadonly', FvProductReadonly)
Vue.component('FvProductStatusSelect', FvProductStatusSelect)
Vue.component('FvProductUnitAutocomplete', FvProductUnitAutocomplete)
Vue.component('FvProductVisibilitySwitch', FvProductVisibilitySwitch)
Vue.component('FvForm', FvForm)
Vue.component('FvProductIndex', FvProductIndex)
Vue.component('FvQuantitySelector', FvQuantitySelector)
Vue.component('FvYieldRateParams', FvYieldRateParams)
Vue.component('FvRating', FvRating)
Vue.component('FvRadioGroup', FvRadioGroup)
Vue.component('FvReadonlyField', FvReadonlyField)
Vue.component('FvReferenceAutocomplete', FvReferenceAutocomplete)
Vue.component('FvReview', FvReview)
Vue.component('FvRoleAutocomplete', FvRoleAutocomplete)
Vue.component('FvSearchAutocomplete', FvSearchAutocomplete)
Vue.component('FvSecondaryButton', FvSecondaryButton)
Vue.component('FvSelectHeaders', FvSelectHeaders)
Vue.component('FvSettingsDefault', FvSettingsDefault)
Vue.component('FvSettingsIndex', FvSettingsIndex)
Vue.component('FvSettingsOthers', FvSettingsOthers)
Vue.component('FvShowMenu', FvShowMenu)
Vue.component('FvSlotItemCard', FvSlotItemCard)
Vue.component('FvStatus', FvStatus)
Vue.component('FvStatusReadonly', FvStatusReadonly)
Vue.component('FvStatusFilter', FvStatusFilter)
Vue.component('FvStatusSwitch', FvStatusSwitch)
Vue.component('FvStatusSwitchReadonly', FvStatusSwitchReadonly)
Vue.component('FvStepper', FvStepper)
Vue.component('FvStepForm', FvStepForm)
Vue.component('FvSubMenu', FvSubMenu)
Vue.component('FvTextButton', FvTextButton)
Vue.component('FvTh', FvTh)
Vue.component('FvThemeAutocomplete', FvThemeAutocomplete)
Vue.component('FvVatField', FvVatField)
Vue.component('FvVatFieldReadonly', FvVatFieldReadonly)
Vue.component('FvVisibilitySwitch', FvVisibilitySwitch)
Vue.component('FvVisibilitySwitchReadonly', FvVisibilitySwitchReadonly)
Vue.component('FvDeleteAction', FvDeleteAction)
Vue.component('FvEditAction', FvEditAction)
Vue.component('FvEtape', FvEtape)
Vue.component('FvFieldDate', FvFieldDate)
Vue.component('FvUserAccounts', FvUserAccounts)
Vue.component('FvDirectory', FvDirectory)
Vue.component('FvContractSummaryVisualisation', FvContractSummaryVisualisation)
Vue.component('FvContractStepVisualisation', FvContractStepVisualisation)
Vue.component('FvProductList', FvProductList)
Vue.component('FvOrderDataTable', FvOrderDataTable)
Vue.component('FvOrderDetails', FvOrderDetails)
Vue.component('FvOrderIndex', FvOrderIndex)
Vue.component('FvOrderListSearch', FvOrderListSearch)
Vue.component('FvOrderList', FvOrderList)
Vue.component('FvOrderModal', FvOrderModal)
Vue.component('FvOwnerDataTable', FvOwnerDataTable)
Vue.component('FvThirdPartyAccountDataTable', FvThirdPartyAccountDataTable)
Vue.component('FvThirdPartyAccountList', FvThirdPartyAccountList)
Vue.component('FvThirdPartyStatusSelect', FvThirdPartyStatusSelect)
Vue.component('FvModalSlot', FvModalSlot)
Vue.component('FvThirdPartyAccountIndex', FvThirdPartyAccountIndex)
Vue.component('FvPartnerModal', FvPartnerModal)
Vue.component('FvProductModal', FvProductModal)
Vue.component('FvSpeedDial', FvSpeedDial)
Vue.component('FvTextField', FvTextField)
Vue.component('FvUserInfo', FvUserInfo)
Vue.component('FvOrderForm', FvOrderForm)
Vue.component('FvOrderForThirdPartyAccount', FvOrderForThirdPartyAccount)
Vue.component('FvOrderLineList', FvOrderLineList)
Vue.component('FvStructureAutocomplete', FvStructureAutocomplete)
Vue.component('FvThirdPartyAccountAutocomplete', FvThirdPartyAccountAutocomplete)
Vue.component('FvProductAutocomplete', FvProductAutocomplete)
Vue.component('FvCategoryAutocomplete', FvCategoryAutocomplete)
Vue.component('FvCurrencyAutocomplete', FvCurrencyAutocomplete)
Vue.component('FvUnitAutocomplete', FvUnitAutocomplete)
Vue.component('FvUnitAutocompleteForOffer', FvUnitAutocompleteForOffer)
Vue.component('FvUnitReadonly', FvUnitReadonly)
Vue.component('FvProductItem', FvProductItem)
Vue.component('FvStatusSelect', FvStatusSelect)
Vue.component('FvFrequence', FvFrequence)
Vue.component('FvPartnerItem', FvPartnerItem)
Vue.component('FvOrderStepSelectPartner', FvOrderStepSelectPartner)
Vue.component('FvOrderStepSelectOffers', FvOrderStepSelectOffers)
Vue.component('FvOrderStepResume', FvOrderStepResume)
Vue.component('FvThirdPartyAccountCard', FvThirdPartyAccountCard)
Vue.component('FvOrderTotals', FvOrderTotals)
