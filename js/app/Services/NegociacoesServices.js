class NegociacosServices{
    
    obtemNegociacoesdaSemana(cb){
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

                    cb(null,JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))

                } else {
                    
                    console.log(xhr.responseText)
                    cb('Não foi possivel obter as negociaçoes',null)
                }
            }

        }
        xhr.send()
    }
}