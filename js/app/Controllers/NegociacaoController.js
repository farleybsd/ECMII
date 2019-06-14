class NegociacaoController{
    constructor(){
        
        // Inputs do Formulario
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data'); 
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
         
        
        
        this._listaNegociacoes = new  Bind(
            new ListaNegociacao(),
            new NegociacoesView($('#negociacoesView')) ,
            'adiciona','esvazia'  
        
        )
        
        
        // ProxyFactory.create(
        //     new ListaNegociacao,
        //     ['adiciona','esvazia'],(model) =>{
        //         this._negociacoesView.update(model)
        //     }
    //)
       /* this._listaNegociacoes = new ListaNegociacao((model) =>{
            this._negociacoesView.update(model);
        });*/

       
       
     
       // this._negociacoesView.update(this._listaNegociacoes);

        //Mensagem de Sucesso
        
        this._mensagem = new Bind(
          new Mensagem(),
          new MensagemView($('#mensagemView')),
            'texto'
        )
        
    //     ProxyFactory.create(new Mensagem(),
    //             ['texto'],(model)=>{
    //                 this._mensagemView.update(model);  
    //             }    
    // );
        
       // this._mensagemView.update(this._mensagem);
    }

    adiciona(event)
    {
        event.preventDefault();
        // Adiciona uma negociação
         this._listaNegociacoes.adiciona(this.criarNegociacao());
         //Mensagem
        this._mensagem.texto = 'Negociação adicionada com sucesso';
       // this._mensagemView.update(this._mensagem);
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
        //this._mensagemView.update(this._mensagem);
    }
}