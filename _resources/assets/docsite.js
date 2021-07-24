// Theme
const currentThemePreference = () => localStorage.getItem('theme-preference') || 'auto'
const themePreferenceButtons = () => document.querySelectorAll('body > #sidebar #theme button[data-theme-preference]')
const currentTheme = (pref=currentThemePreference()) => pref === 'auto' ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : pref
const applyThemePreference = (pref) => {
  localStorage.setItem('theme-preference', pref)
  applyTheme()
}
const applyTheme = () => {
  const pref = currentThemePreference()
  for (const button of themePreferenceButtons()) {
    button.classList.toggle('active', button.dataset.themePreference === pref)
  }

  const theme = currentTheme(pref)
  document.body.classList.toggle('theme-light', theme === 'light')
  document.body.classList.toggle('theme-dark', theme === 'dark')
}
document.addEventListener('DOMContentLoaded', () => {
  window.matchMedia('(prefers-color-scheme: dark)').addListener(e => applyTheme())
  applyTheme()
  for (const button of themePreferenceButtons()) {
    button.addEventListener('click', e => {
      applyThemePreference(e.currentTarget.dataset.themePreference)
    });
  }
  // Toggle theme on Option+T/Alt+T/Meta+T
  document.body.addEventListener('keydown', e => {
    if ((e.metaKey || e.altKey) && e.key === 't') {
      const theme = currentTheme();
      applyThemePreference(theme === 'light' ? 'dark' : 'light')
    }
  })
})

// Sidebar
const pagePath = location.pathname
const quote = str => JSON.stringify(str.replace(/[^a-zA-Z0-9._\/-]/g, ''))
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style')
  for (const link of document.querySelectorAll('body > #sidebar .nav-section.tree a')) {
    const current = link.pathname === pagePath

    const item = link.parentNode
    item.classList.toggle('current', current)
  }
})
