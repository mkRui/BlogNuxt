import Vue from 'vue'
import * as fixed from '@/utils/fixed'

Object.keys(fixed).forEach(item => Vue.directive(item, fixed[item]))