class ListaNegociacao{
   // constructor(contexto,armadilha){
    constructor(armadilha){
        this._negociacaoes = [];
        this._armadilha = armadilha;
        //this._contexto = contexto;
    }

    adiciona(negociacao){
        this._negociacaoes.push(negociacao);
        this._armadilha(this);
        //Troca o this da função pelo contextopara poder inspecionar e manipular propriedades de objetos em tempo de execução.
       // Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get negociacaoes(){
        return [].concat(this._negociacaoes);
    }
    esvazia(){
        this._negociacaoes = [];
        this._armadilha(this);
       // Reflect.apply(this._armadilha,this._contexto,[this]);
    }
}