class DateHelper{
    constructor(){
        throw new Error('Esta Classe Não Pode Ser Instanciada')
    }
    static DataparaTexto(data)
    {
        return `${data.getDate()}/${data.getMonth()+1}/ ${data.getFullYear()}`;
    }
    static TextoParaData(texto)
    {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
        throw new Error('Deve estar no formato aaaa-mm-dd');
         
         return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); 
    }
}


/**
 * 
 *  Fala Dev Tudo bem espero que esteje tendo um bom dia.
 *  Se essa classe ta te fazando alguma raiva fica apenas um lembrete
 *  Como ela e statica não pode ser instanciada 
 *  Se poder melhorar para ajudar sera muito bem vindo ´D. Abrasss 
 */