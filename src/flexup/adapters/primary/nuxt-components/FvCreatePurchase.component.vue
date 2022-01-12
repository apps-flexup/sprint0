<template lang="pug">
.fv-create-purchase
  v-row.head
    fv-icon.mr-11(
      data-testid="icon"
      color="inherit"
      size="xLarge"
      icon="mdi-chevron-left"
      @icon:clicked="cancel"
    )
    h1(data-testid="pageTitle") {{ $t('forms.purchases.new.title') }}
  v-list.mt-10(
  )
    fv-step-form(
      data-testid="stepForm"
      :formId="1"
      :title="$t('forms.purchases.step.0')"
    )
      template(slot="form")
        v-row
          v-col(cols="12")
            fv-get-id-third-party-autocomplete(
              :label="$t('forms.purchases.new.thirdParty')"
              @payload:changed="thirdPartyIdChanged"
            )
          v-col(cols="12")
            fv-text-field(
              :label="$t('forms.purchases.new.label')"
              @payload:changed="labelChanged"
            )
          v-col(cols="12")
            fv-field-date(
              :label="$t('forms.purchases.new.date')"
              :date-ref="purchaseVM.date"
              @date:changed="dateChanged"
            )
  v-list.mt-10(
  )
    fv-step-form(
      data-testid="stepForm"
      :formId="2"
      :title="$t('forms.purchases.step.1')"
    )
      template(slot="form")
        v-row
          v-col(cols="12")
            fv-order-items-selector(
              :value="purchaseVM.orderItems"
              @orderItem:quantityChanged='quantityChanged'
              @orderItem:delete='deleteOrderItem'
            )
        v-row
          v-col(cols="12")
            fv-offer-autocomplete(
              :thirdPartyAccountId="purchaseVM.thirdPartyId"
              :return-object="true"
              @offers:selected="orderItemSelected"
            )
        v-row
          v-col(cols="12")
            fv-text-button(
              @button:click="purchaseVM.addCustomOrderItem()"
            )
              template(v-slot:icon)
                fv-icon(
                  size="small"
                  icon="mdi-plus"
                  color="#1976d2"
                  @icon:clicked="purchaseVM.addCustomOrderItem()"
                )
              template(v-slot:text)
                | {{ $t('forms.purchases.new.newCustomOrderItem') }}
  v-row()
    v-spacer
    v-col(cols="5")
      fv-order-totals(
        :totalWithoutTax="purchaseVM.totalWithoutTax"
        :totalWithTax="purchaseVM.totalWithTax"
        :totalsByVat="purchaseVM.totalsByVat"
      )

</template>
<script>
import { createPurchaseVM } from '~/src/flexup/adapters/primary/view-models-generator/create-order-screen/create-purchase-screen/createPurchaseViewModelGenerator'
import { dateProvider } from '~/container'
export default {
  name: 'FvCreatePurchase',
  data() {
    return {
      purchaseVM: createPurchaseVM(dateProvider)
    }
  },
  methods: {
    cancel() {
      this.$router.go(-1)
    },
    thirdPartyIdChanged(id) {
      this.purchaseVM.thirdPartyIdChanged(id)
    },
    labelChanged(label) {
      this.purchaseVM.labelChanged(label)
    },
    dateChanged(date) {
      this.purchaseVM.dateChanged(date)
    },
    orderItemSelected(orderItem) {
      this.purchaseVM.addOrderItem({
        productName: orderItem.productName,
        offerName: orderItem.offerName,
        price: orderItem.price,
        vat: orderItem.vat / 100,
        unit: orderItem.unit
      })
    },
    quantityChanged(payload) {
      this.purchaseVM.orderItemQuantityChanged(payload.quantity, payload.index)
    },
    deleteOrderItem(index) {
      this.purchaseVM.removeOrderItem(index)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-sheet {
  border-radius: 15px;
}
::v-deep .v-list.mt-10.v-sheet.theme--light {
  background-color: rgb(241, 241, 241);
}
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
  margin-bottom: initial;
}
::v-deep .v-text-field__details {
  display: none;
}
.fv-status-select {
  max-width: $status-btn-width;
}
.btn {
  display: flex;
  justify-content: space-between;
}
.head {
  align-items: center;
}
</style>
