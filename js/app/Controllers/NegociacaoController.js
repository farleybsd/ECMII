class NegociacaoController{
    constructor(){
        
        // Inputs do Formulario
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data'); 
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        //Criando a View da Negociações que é a tabela
        //Chama o array que contem  as negociaçoes
        //Atualizando a view pelo Modelo
        //No java script o objeto this ele e dinamico. Se nao colocar o this na minha funcao
        //anonima na chamada da ListaNegociacao ele sempre sera listanegociação nao fazendo referencia
        //NegociacaoController.
       // this._listaNegociacoes = new ListaNegociacao(this,function(model){
        this._listaNegociacoes = new ListaNegociacao((model) =>{
            this._negociacoesView.update(model);
        });
       //Seleciona a Div negociacoesView que e passado como paramentro para 
      // o construtor da Classe NegociacoesView
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
     //Essa função update herda da classe View que é comum as todas a view
    // E dentro da funcao Update chama o template de cada view que não e comum em todas as paginas
        this._negociacoesView.update(this._listaNegociacoes);

        //Mensagem de Sucesso

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
    }

    adiciona(event)
    {
        event.preventDefault();
        // Adiciona uma negociação
         this._listaNegociacoes.adiciona(this.criarNegociacao());
      
         //Mensagem
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        //LimpaFormulario
         this._limpaFormulario();
    }
    criarNegociacao(){
        return new Negociacao(
            DateHelper.TextoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }

    apaga(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociação apagada com sucesso';
        this._mensagemView.update(this._mensagem);
    }
}