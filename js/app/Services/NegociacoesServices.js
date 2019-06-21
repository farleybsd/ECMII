class NegociacosServices {

    obtemNegociacoesdaSemana() {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/negociacoes/semana');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana');

                    }
                }
            };
            xhr.send();

        });

    }
    obtemNegociacoesdaSemanaRetrasada(resolve, reject) {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'http://localhost:3000/negociacoes/retrasada');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana retrasada');
                    }
                }
            }
            xhr.send();
        });
    }


    obtemNegociacoesdaSemanaAnterior(resolve,reject) {
        return new Promise((resolve,reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('Get','http://localhost:3000/negociacoes/anterior')
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)))
                    } else{
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana anterior');
                    }
                }
            }
            xhr.send();
        });


    }
}