class ListaNegociacao{
   // constructor(contexto,armadilha){
    constructor(){
        this._negociacaoes = [];
        
        //this._contexto = contexto;
    }

    adiciona(negociacao){

         this._negociacaoes.push(negociacao);
        //Troca o this da função pelo contextopara poder inspecionar e manipular propriedades de objetos em tempo de execução.
       // Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get negociacaoes(){
        return [].concat(this._negociacaoes);
    }
    esvazia(){
        this._negociacaoes = [];
        
       // Reflect.apply(this._armadilha,this._contexto,[this]);
    }
}