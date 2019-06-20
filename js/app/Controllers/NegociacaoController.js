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
        let xhr = new XMLHttpRequest()

        xhr.open('GET', 'http://localhost:3000/negociacoes/semana')

        /* configuraçoes de envio */
        xhr.onreadystatechange = () => {
            /**
             * Estados de uma requisição:
             * 0: Ainda não Iniicada
             * 1: Conexão estabelida com Servidor
             * 2: Requisição Recebida
             * 3:Processando Requisição
             * 4: Requisição concluída e a resposta Pronta
             */
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {

                    JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                    .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao)); 
                    this._mensagem.texto = 'Negociação importadas com Sucesso!'   

                } else {
                    
                    console.log(xhr.responseText)
                    this._mensagem.texto = 'Não foi possivel obter as negociaçoes da semana'
                }
            }

        }
        xhr.send()

    }
    criarNegociacao() {
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

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociação apagada com sucesso';

    }
}