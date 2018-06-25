import {GetterTree, MutationTree, ActionTree} from "vuex"

export interface State {
    todos:ITodo[],
    numClicked:number,
    people:number
}

export interface ITodo {
    id?: number,
    task: string,
    complete?: boolean
}

export type TodoGetters = GetterTree<State, any>
export type TodoMutations = MutationTree<State>
export type TodoActions = ActionTree<State, any>