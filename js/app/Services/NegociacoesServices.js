class NegociacosServices {

    constructor() {
        this._http = new HttpService();
    }

    obtemNegociacoesdaSemana() {

        return new Promise((resolve, reject) => {
            this._http
                .get('http://localhost:3000/negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro)
                    reject('Não foi possivél obter as negoçiaçoes da semana')
                })
        });

    }
    obtemNegociacoesdaSemanaRetrasada(resolve, reject) {

        return new Promise((resolve, reject) => {
            this._http
                .get('http://localhost:3000/negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro)
                    reject('Não foi possivél obter as negoçiaçoes da semana Retrasada')
                })
        });
    }


    obtemNegociacoesdaSemanaAnterior(resolve, reject) {
        return new Promise((resolve, reject) => {
            this._http
                .get('http://localhost:3000/negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro)
                    reject('Não foi possivél obter as negoçiaçoes da semana Anterior')
                })
        });

    }
}