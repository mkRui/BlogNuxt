import Vue from 'vue'
import * as filter from '@/utils/filter'

Object.keys(filter).forEach(item => Vue.filter(item, filter[item]))
