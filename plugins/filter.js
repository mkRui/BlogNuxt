import Vue from 'vue'
import * as filters from  '~/filter'

Object.keys(filters).forEach((item) => Vue.filter(item, filters[item]))
