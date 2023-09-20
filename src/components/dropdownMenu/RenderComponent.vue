<script lang="ts">
import { h } from 'vue'
import { RouterLink } from 'vue-router'
const DropdownRender = {
  name: 'Dropdown',
  props: ['menuItem', 'iconColor'],
  render(props) {
    return [
      props.menuItem.submenu
        ? h('li', { class: ['dropdown-nav-menu border-bottom', 'py-2', 'ps-3 pe-5'] }, [
            props.menuItem.iconClass
              ? h('i', { class: `${props.menuItem.iconClass} text-primary me-2` })
              : '',
            h(RouterLink, {
              class: 'text-decoration-none',
              to: props.menuItem.id == 1 ? { name: 'about' } : '#',
              innerHTML: props.menuItem.title
            }),
            h('ul', { class: 'submenu nav-menu list-unstyled' }, [
              props.menuItem.submenu.map((o) => h(DropdownRender, { menuItem: o }))
            ]),
            h('i', { class: 'ri-arrow-right-s-line text-primary' })
          ])
        : h('li', { class: ['dropdown-nav-menu border-bottom', 'py-2', 'px-3'] }, [
            props.menuItem.iconClass
              ? h('i', { class: `${props.menuItem.iconClass} text-primary me-2` })
              : '',
            h(RouterLink, {
              class: 'text-decoration-none',
              to: props.menuItem.id == 1 ? { name: 'about' } : '#',
              innerHTML: props.menuItem.title
            })
          ])
    ]
  }
}

// h('li', [
//         h(RouterLink, { to: `/${props.content.id}/contact`, innerHTML: props.content.label })
//       ]),

// props.content.children
//   ? h('ul', [
//       props.content.children.map((o) =>
//         h(ListItem, {
//           content: o
//         })
//       )
//     ])
//   : []

export default DropdownRender
</script>
