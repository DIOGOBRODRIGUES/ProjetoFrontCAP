import './CaixaDeBusca.css'

const CaixaDeBusca = function(){
    return(
        <div className='caixa-busca'>
          <p>O site de Busca de Emprego mais usado do Brasil</p>
          <div className='caixa-busca-procurar'>
          <input type ='seach' placeholder='Cargo ou palavra chave'></input>
          <button>Achar Vagas</button>
          </div>
        </div>
    )
}

export default CaixaDeBusca;