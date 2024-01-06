import {makeAutoObservable} from "mobx";
import {ITodo} from "../interface/ITodo";

const init:ITodo[] = [
    {
        id: 1,
        body: 'Lorem ipsum dolor sit amet.',
        checked: false
    },
    {
        id: 2,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        checked: false
    },
    {
        id: 3,
        body: 'Lorem ipsum.',
        checked: false
    },
    {
        id: 4,
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate dolorum earum iure nemo nulla perferendis placeat, similique? Adipisci beatae inventore ipsum laudantium, perferendis quam quisquam repellendus suscipit unde vero!`,
        checked: false
    },
    {
        id: 5,
        body: 'Lorem ipsum dolor.',
        checked: false
    },
    {
        id: 6,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae!',
        checked: false
    },
    {
        id: 7,
        body: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
        checked: false
    },
]
class Store{
    todos:ITodo[] = init
    constructor() {
        makeAutoObservable(this)
    }
    createTodo(str:string){
        const id = Date.now()
        const body = str
        const newTodo = {
            id,body,checked: false
        }
        this.todos.push(newTodo)
    }
    deleteTodo(index: number){
        this.todos.splice(index, 1)
    }
    toggleCheck(id:number){
        this.todos.forEach(item => {
            if (item.id === id) {
                item.checked = !item.checked
            }
        })
    }

}

export default new Store()
