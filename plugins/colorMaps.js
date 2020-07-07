import colors from 'vuetify/es5/util/colors'

export const statusProgress = (vuetify, status) => {
  const themeColors = vuetify.theme.currentTheme
  const styleMap = {
    active: {
      color: themeColors.success,
      value: 100,
      striped: true
    },
    archived: {
      color: colors.grey.darken1,
      value: 100,
      striped: true
    },
    draft: {
      color: themeColors.info,
      value: 10,
      striped: true
    },
    inactive: {
      color: colors.blueGrey.lighten1,
      value: 50,
      striped: true
    },
    reserved: {
      color: themeColors.warning,
      value: 50,
      striped: true
    },
    suspended: {
      color: themeColors.error,
      value: 100,
      striped: true
    }
  }
  const res = styleMap[status]
  return res
}
