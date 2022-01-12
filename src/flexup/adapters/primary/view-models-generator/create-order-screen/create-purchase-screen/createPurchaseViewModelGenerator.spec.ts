import { FakeDateProvider } from '~/src/flexup/adapters/secondary/FakeDateProvider'
import {
  createPurchaseVM,
  PurchaseVM
} from '~/src/flexup/adapters/primary/view-models-generator/create-order-screen/create-purchase-screen/createPurchaseViewModelGenerator'

describe('Create purchase view model generator', () => {
  const today = '2022-01-04'
  const dateProvider: FakeDateProvider = new FakeDateProvider(today)
  let purchaseVM: PurchaseVM

  beforeEach(() => {
    purchaseVM = createPurchaseVM(dateProvider)
  })

  describe('Initially', () => {
    it("should set today's as default date", () => {
      expect(purchaseVM.date).toBe(today)
    })
  })

  describe('Manage inputs', () => {
    it('should allow to change third party id', () => {
      purchaseVM.thirdPartyIdChanged(1)
      expect(purchaseVM.thirdPartyId).toBe(1)
    })
    it('should allow to change date', () => {
      purchaseVM.dateChanged('2022-01-05')
      expect(purchaseVM.date).toBe('2022-01-05')
    })
    it('should allow to set a label', () => {
      purchaseVM.labelChanged('Super label')
      expect(purchaseVM.label).toBe('Super label')
    })

    describe('Manage order items', () => {
      describe('No order items', () => {
        it('should not have any order item', () => {
          expect(purchaseVM.orderItems).toEqual([])
        })
        it('should compute the total without tax', () => {
          expect(purchaseVM.totalWithoutTax).toBe(0)
        })
        it('should compute the total with tax', () => {
          expect(purchaseVM.totalWithTax).toBe(0)
        })
      })
      describe('Some order items', () => {
        const socks = {
          productName: 'Socks',
          offerName: 'Christmas Socks',
          price: { amount: 10, currency: 'EUR' },
          vat: 0.1,
          quantity: 1,
          unit: { dimension: 'unit', unit: 'dozen' }
        }
        const bag = {
          productName: 'Bag',
          price: { amount: 45, currency: 'EUR' },
          vat: 0.2,
          quantity: 0,
          unit: { dimension: 'unit', unit: 'unit' }
        }

        beforeEach(() => {
          purchaseVM.addOrderItem(socks)
          purchaseVM.addOrderItem(bag)
        })

        describe('With a quantity of 1', () => {
          it('should have some order items', () => {
            const expectedSocks = createOrderItemVM(
              'Socks',
              'Christmas Socks',
              { amount: 10, currency: 'EUR' },
              0.1,
              1,
              'dozen'
            )
            const expectedBag = createOrderItemVM(
              'Bag',
              '',
              { amount: 45, currency: 'EUR' },
              0.2,
              1,
              'unit'
            )
            expect(purchaseVM.orderItems).toEqual([expectedSocks, expectedBag])
          })

          it('should compute the value of order item without tax', () => {
            expect(purchaseVM.orderItems[0].valueWithoutTax).toBe(10)
            expect(purchaseVM.orderItems[1].valueWithoutTax).toBe(45)
          })

          it('should compute the value of order item with tax', () => {
            expect(purchaseVM.orderItems[0].valueWithTax).toBe(11)
            expect(purchaseVM.orderItems[1].valueWithTax).toBe(54)
          })

          it('should compute the total without tax', () => {
            expect(purchaseVM.totalWithoutTax).toBe(55)
          })

          it('should compute the total with tax', () => {
            expect(purchaseVM.totalWithTax).toBe(65)
          })

          it('should compute the value without tax for order item', () => {
            expect(purchaseVM.orderItems[0].valueWithoutTax).toEqual(10)
          })
          it('should compute the value with tax for order item', () => {
            expect(purchaseVM.orderItems[0].valueWithTax).toEqual(11)
          })

          it('should compute total of tax by vat', () => {
            const expectedTotalByVat = {
              '10': { total: 10, vatTotal: 1 },
              '20': { total: 45, vatTotal: 9 }
            }
            expect(purchaseVM.totalsByVat).toEqual(expectedTotalByVat)
          })
        })
        describe('Increase quantity', () => {
          beforeEach(() => {
            purchaseVM.orderItemQuantityChanged(2, 0)
          })

          it('should have some order items', () => {
            const expectedSocks = createOrderItemVM(
              'Socks',
              'Christmas Socks',
              { amount: 10, currency: 'EUR' },
              0.1,
              2,
              'dozen'
            )
            const expectedBag = createOrderItemVM(
              'Bag',
              '',
              { amount: 45, currency: 'EUR' },
              0.2,
              1,
              'unit'
            )
            expect(purchaseVM.orderItems).toEqual([expectedSocks, expectedBag])
          })

          it('should compute the value of order item without tax', () => {
            expect(purchaseVM.orderItems[0].valueWithoutTax).toBe(20)
            expect(purchaseVM.orderItems[1].valueWithoutTax).toBe(45)
          })

          it('should compute the value of order item with tax', () => {
            expect(purchaseVM.orderItems[0].valueWithTax).toBe(22)
            expect(purchaseVM.orderItems[1].valueWithTax).toBe(54)
          })

          it('should compute the total without tax', () => {
            expect(purchaseVM.totalWithoutTax).toBe(65)
          })

          it('should compute the total with tax', () => {
            expect(purchaseVM.totalWithTax).toBe(76)
          })

          it('should compute total of tax by vat', () => {
            const expectedTotalByVat = {
              '10': { total: 20, vatTotal: 2 },
              '20': { total: 45, vatTotal: 9 }
            }
            expect(purchaseVM.totalsByVat).toEqual(expectedTotalByVat)
          })
        })
        describe('Decrease quantity', () => {
          beforeEach(() => {
            purchaseVM.orderItemQuantityChanged(2, 0)
            purchaseVM.orderItemQuantityChanged(1, 0)
          })

          it('should have some order items', () => {
            const expectedSocks = createOrderItemVM(
              'Socks',
              'Christmas Socks',
              { amount: 10, currency: 'EUR' },
              0.1,
              1,
              'dozen'
            )
            const expectedBag = createOrderItemVM(
              'Bag',
              '',
              { amount: 45, currency: 'EUR' },
              0.2,
              1,
              'unit'
            )
            expect(purchaseVM.orderItems).toEqual([expectedSocks, expectedBag])
          })

          it('should compute the total without tax', () => {
            expect(purchaseVM.totalWithoutTax).toBe(55)
          })

          it('should compute the total with tax', () => {
            expect(purchaseVM.totalWithTax).toBe(65)
          })

          it('should compute total of tax by vat', () => {
            const expectedTotalByVat = {
              '10': { total: 10, vatTotal: 1 },
              '20': { total: 45, vatTotal: 9 }
            }
            expect(purchaseVM.totalsByVat).toEqual(expectedTotalByVat)
          })
        })
        describe('Changing third party', () => {
          it('should clear order items', () => {
            purchaseVM.thirdPartyIdChanged(2)
            expect(purchaseVM.orderItems).toEqual([])
            expect(purchaseVM.totalWithoutTax).toBe(0)
            expect(purchaseVM.totalWithTax).toBe(0)
          })
        })
        describe('Removing an order item', () => {
          it('should remove the order item', () => {
            purchaseVM.removeOrderItem(0)
            const expectedBag = createOrderItemVM(
              'Bag',
              '',
              { amount: 45, currency: 'EUR' },
              0.2,
              1,
              'unit'
            )
            expect(purchaseVM.orderItems).toEqual([expectedBag])
          })
        })
        describe('Trying to change values', () => {
          it('should not allow to change product name', () => {
            expect(() => {
              purchaseVM.orderItems[0].setProductName('t-shirt')
            }).toThrow()
          })
          it('should not allow to change offer name', () => {
            expect(() => {
              purchaseVM.orderItems[0].setOfferName('t-shirt')
            }).toThrow()
          })
          it('should not allow to change price', () => {
            expect(() => {
              purchaseVM.orderItems[0].setPrice(42)
            }).toThrow()
          })
          it('should not allow to change vat', () => {
            expect(() => {
              purchaseVM.orderItems[0].setVat(50)
            }).toThrow()
          })
          it('should not allow to change unit', () => {
            expect(() => {
              purchaseVM.orderItems[0].setUnit('kg')
            }).toThrow()
          })
        })
      })
      describe('Custom order items', () => {
        beforeEach(() => {
          purchaseVM.addCustomOrderItem()
        })
        it('should allow to add custom order items', () => {
          const defaultOrderItem = createCustomOrderItemVM()
          expect(purchaseVM.orderItems).toEqual([defaultOrderItem])
        })
        it('should allow to edit product name', () => {
          purchaseVM.orderItems[0].setProductName('t-shirt')
          const expectedOrderItem = createCustomOrderItemVM()
          expectedOrderItem.productName = 't-shirt'
          expect(purchaseVM.orderItems).toEqual([expectedOrderItem])
        })
        it('should allow to edit offer name', () => {
          purchaseVM.orderItems[0].setOfferName('t-shirt')
          const expectedOrderItem = createCustomOrderItemVM()
          expectedOrderItem.offerName = 't-shirt'
          expect(purchaseVM.orderItems).toEqual([expectedOrderItem])
        })
        it('should allow to edit price', () => {
          purchaseVM.orderItems[0].setPrice(42)
          const expectedOrderItem = createCustomOrderItemVM()
          expectedOrderItem.price.amount = 42
          expect(purchaseVM.orderItems).toEqual([expectedOrderItem])
        })
        it('should allow to edit vat', () => {
          purchaseVM.orderItems[0].setVat(50)
          const expectedOrderItem = createCustomOrderItemVM()
          expectedOrderItem.vat = 50
          expect(purchaseVM.orderItems).toEqual([expectedOrderItem])
        })
        it('should allow to edit unit', () => {
          purchaseVM.orderItems[0].setUnit('kg')
          const expectedOrderItem = createCustomOrderItemVM()
          expectedOrderItem.unit = 'kg'
          expect(purchaseVM.orderItems).toEqual([expectedOrderItem])
        })
      })
    })
  })

  const createOrderItemVM = (
    productName,
    offerName,
    price,
    vat,
    quantity,
    unit
  ) => {
    return {
      productName,
      offerName,
      price,
      vat,
      quantity,
      unit,
      canEditProductName: false,
      canEditOfferName: false,
      canEditPrice: false,
      canEditVat: false,
      canEditUnit: false
    }
  }

  const createCustomOrderItemVM = () => {
    return {
      productName: '',
      offerName: '',
      price: { amount: 0, currency: 'EUR' },
      vat: 0,
      quantity: 1,
      unit: '',
      canEditProductName: true,
      canEditOfferName: true,
      canEditPrice: true,
      canEditVat: true,
      canEditUnit: true
    }
  }
})
