class ListaNegociacao{
    constructor(){
        this._negociacaoes = [];
    }

    adiciona(negociacao){
        this._negociacaoes.push(negociacao);
    }

    get negociacaoes(){
        return [].concat(this._negociacaoes);
    }
}