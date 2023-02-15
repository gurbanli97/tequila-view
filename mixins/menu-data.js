export const MenuMixin = {
  computed: {
    navItems() {
      return [
        { id: 0, title: 'My company', route: '/company', icon: 'grid-7' },
        { id: 1, title: 'My solutions', route: '/solutions', icon: 'menu-board' },
        { id: 2, title: 'Deeplinks', route: '/deeplinks', icon: 'linkex' },
        { id: 3, title: 'Widgets', route: '/widgets', icon: 'element-1ex' },
        { id: 4, title: 'Payouts', route: '/payouts', icon: 'document-text' },
        { id: 5, title: 'Q&A', route: '/', icon: 'document-text' },
      ]
    },
  },
}
