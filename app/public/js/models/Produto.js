class Produto{

    constructor(idProduto, nome, quantidade, preco){
        this.idProduto = idProduto
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
        Object.freeze(this)
    }

    get idProduto(){
        return this.idProduto
    }

    get nome(){
        return this.nome
    }

    get quantidade(){
        return this.quantidade
    }

    get preco(){
        return this.preco
    }

}