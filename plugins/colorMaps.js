export const statusProgress = (vuetify, status) => {
  const themeColors = vuetify.theme.currentTheme
  const styleMap = {
    active: {
      color: '#9FE4A6',
      value: 100,
      striped: true
    },
    archived: {
      color: '#EDEDED',
      value: 100,
      striped: true
    },
    draft: {
      color: themeColors.info,
      value: 10,
      striped: true
    },
    inactive: {
      color: '#FFCD92',
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
