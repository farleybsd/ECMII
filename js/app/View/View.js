class View {
    constructor(elemento)
    {
        this._elemento = elemento;
    }

    template()
    {
        throw new Error('O método template deve ser implementado');
    }
    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}

/**
 *  Essa Classe View Comtem duas Funções Básicas Quem e update Atualizar a pagina apos alteração de algum Dado
 *  E a função Templante desenha o HTML conforme de cada Pagina.


*************************************************************************************************************************
 Quando as View Filhas herda da classe View todo elemento que e passando em seu construtor e referenciado 
 para a view pai atraves do super.
 Quando no controller e chamada a funcao update da View Pai.passado sua posicao no HTML como paramento. Ele Seleciona
 Esste Elemento do html e adiciona a propiedade innerHTML retornando o template correto de cada view Filha


 constructor()
    {
         Seleciona a Div negociacoesView que e passado como paramentro para 
         o construtor da Classe NegociacoesView
         this._negociacoesView = new NegociacoesView($('#negociacoesView')); 
         
         Quando e Acionada a funcao Update ele passo o dado do html pelo super(elemento) para a view.js
         que possui a funcao update que ele  retorna o dado conforme o template de cada pagina
         this._negociacoesView.update(this._listaNegociacoes);
    }
***********************************************************************************************************************

    */