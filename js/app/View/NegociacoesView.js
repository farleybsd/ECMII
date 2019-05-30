class NegociacoesView extends View{
    constructor(elemento){
        super(elemento)
    }

    template(model)
    {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
    
        <tbody>
        ${model.negociacaoes.map(n => `

                    <tr>
                        <td>${DateHelper.DataparaTexto(n.Data)}</td>
                        <td>${n.Quantidade}</td>
                        <td>${n.Valor}</td>
                        <td>${n.Volume}</td>
                     </tr>
        `).join('')
         }
        </tbody>
                  
        <tfoot>
            <td colspan="3"></td>
            <td>
               ${model.negociacaoes.reduce((total,n) => total +n.Volume,0.0)}        
            </td>
        </tfoot>
        
    </table>
        `
    }
}

/**
 *  Essa classe comtem o construtor recebendo seu elemento que vem no HTML
 * E Possui o super referenciando o elemento para seu pai que no caso e VIEW.js
 * 
 * *****************************************************************************
 * 
 * Como Funcina a chamada dessa view 
 * 
 * No construtor do Controller faz refenrecia a view 
 * class NegociacaoController{
    constructor()
    {
         Seleciona a Div negociacoesView que e passado como paramentro para 
         o construtor da Classe NegociacoesView
         this._negociacoesView = new NegociacoesView($('#negociacoesView')); 
         
         Quando e Acionada a funcao Update ele passo o dado do html pelo super(elemento) para a view.js
         que possui a funcao update que ele  retorna o dado conforme o template de cada pagina
         this._negociacoesView.update(this._listaNegociacoes);
    }
 * 
 */