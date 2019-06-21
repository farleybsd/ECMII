class NegociacaoController {
    constructor() {

        // Inputs do Formulario
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');



        this._listaNegociacoes = new Bind(
            new ListaNegociacao(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia'

        )




        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        )


    }

    adiciona(event) {
        event.preventDefault();
        // Adiciona uma negociação
        this._listaNegociacoes.adiciona(this.criarNegociacao());
        //Mensagem
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        // this._mensagemView.update(this._mensagem);
        //LimpaFormulario
        this._limpaFormulario();
    }
    importaNegociacoes() {

        let service = new NegociacosServices()

        service.obtemNegociacoesdaSemana()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao);
                });
                this._mensagem.texto = 'Negociações da semana obtidas com sucesso'
            })
            .catch(erro => this._mensagem.texto = erro);


        service.obtemNegociacoesdaSemanaAnterior()
            .then(negociacaoes => {
                negociacaoes.forEach(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao)
                });
                this._mensagem.texto = 'Negociações da semana obtidas com sucesso'
            })
            .catch(erro => this._mensagem.texto = erro)


        service.obtemNegociacoesdaSemanaRetrasada()
        .then(negociacaoes => {
            negociacaoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao)
            })
            this._mensagem.texto = 'Negociações da semana obtidas com sucesso'
        })
            .catch(erro => this._mensagem.texto = erro)
    
}
criarNegociacao() {
    return new Negociacao(
        DateHelper.TextoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    )
}

_limpaFormulario() {

    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
}

apaga() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = 'Negociação apagada com sucesso';

}
}