import Vue from 'vue'

import './forms'

import BsCarousel from './BsCarousel.vue'
import OwlCarousel from './OwlCarousel.vue'
import Paginacao from './Paginacao.vue'
import PageItem from './PageItem.vue'
import MenuItem from './MenuItem.vue'
import LazyImage from './LazyImage.vue'
import MsgCookies from './MsgCookies.vue'

// COMPONENTES====================================

Vue.component('msg-cookies', MsgCookies)
Vue.component('lazy-image', LazyImage)
Vue.component('lazyimage', LazyImage)
Vue.component('bs-carousel', BsCarousel)
Vue.component('owl-carousel', OwlCarousel)
Vue.component('menu-item', MenuItem)
Vue.component('paginacao', Paginacao)
Vue.component('page-item', PageItem)
