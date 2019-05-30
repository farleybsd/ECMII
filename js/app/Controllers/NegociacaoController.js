class NegociacaoController{
    constructor(){
        
        // Inputs do Formulario
        let $ = document.querySelector.bind(document);
        this._inputData = $('data');
        this._inputQuantidade = $('quantidade');
        this._inputValor = $('valor');
        
            //Criando a View da Negociações que é a tabela
           //Chama o array que contem  as negociaçoes
             this._listaNegociacoes = new ListaNegociacao();
         //Seleciona a Div negociacoesView que e passado como paramentro para 
        // o construtor da Classe NegociacoesView
             this._negociacoesView = new NegociacoesView($('#negociacoesView'));
       //Essa função update herda da classe View que é comum as todas a view
      // E dentro da funcao Update chama o template de cada view que não e comum em todas as paginas
             this._negociacoesView.update(this._listaNegociacoes);
      
    }

    adiciona(event){
    alert('Olá Sou um Controller')       
 
    }
}