import {GetterTree, MutationTree, ActionTree} from "vuex"
import {ITodo} from "~/types/todos"
import {Route} from "vue-router"

export interface State {
    todos,
    houses:any,
    rootNum:number
}

export interface VueWithRoute{
  $route: Route
}

export type Getters = GetterTree<State, any>
export type Mutations = MutationTree<State>
export type Actions = ActionTree<State, any>
