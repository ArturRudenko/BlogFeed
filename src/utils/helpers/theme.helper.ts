export const getDefaultColorTheme = (): string => {
  const isLightTheme = window?.matchMedia('(prefers-color-scheme: light)').matches

  return isLightTheme ? 'light' : 'dark'
}