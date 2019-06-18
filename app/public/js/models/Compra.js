class Compra{

    constructor(listaProdutos, dataLista, idLista){
        this.listaProdutos = listaProdutos
        this.dataLista = dataLista
        this.idLista = idLista
        Object.freeze(this)
    }

    get listaProdutos(){
        return this.listaProdutos
    }

    get dataLista(){
       return this.dataLista
    }

    get idLista(){
        return this.idLista
    }
}