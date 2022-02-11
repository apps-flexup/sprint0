import { mount } from '@vue/test-utils'
import FvAvatarWithName from './index'

const factory = (propsData) => {
  return mount(FvAvatarWithName, {
    propsData,
  })
}

describe('FvAvatarWithName', () => {
  it('should render a fv avatar with name', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="avatar"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="name"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="email"]').exists()).toBeTruthy()
  })
  it('should display name and family name', () => {
    const name = 'toto'
    const familyName = 'La Riflette'
    const wrapper = factory({ name, familyName })
    const nameField = wrapper.find('[data-testid="name"]')
    const expectedName = name + ' ' + familyName
    expect(nameField.text()).toBe(expectedName)
  })
  it('should display email', () => {
    const email = 'toto@lariflette.com'
    const wrapper = factory({ email })
    const emailField = wrapper.find('[data-testid="email"]')
    expect(emailField.text()).toBe(email)
  })
  it('should take avatar we pass one', () => {
    const avatar = 'avatar'
    const wrapper = factory({ avatar })
    const computedAvatar = wrapper.vm.computedAvatar
    expect(computedAvatar).toBe(avatar)
  })
  it('should generate an avatar based on name only if we dont pass one and if there is no family name', () => {
    const name = 'toto'
    const expectedAvatar = 'https://eu.ui-avatars.com/api/?name=' + name + '&length=1'
    const wrapper = factory({ name })
    const computedAvatar = wrapper.vm.computedAvatar
    expect(computedAvatar).toBe(expectedAvatar)
  })
  it('should generate an avatar based on name and family name if we dont pass one', () => {
    const name = 'toto'
    const familyName = 'La Riflette'
    const expectedAvatar = 'https://eu.ui-avatars.com/api/?name=' + name + '+' + familyName
    const wrapper = factory({ name, familyName })
    const computedAvatar = wrapper.vm.computedAvatar
    expect(computedAvatar).toBe(expectedAvatar)
  })
})
