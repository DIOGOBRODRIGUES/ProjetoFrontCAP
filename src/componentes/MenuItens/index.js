import './MenuItens.css'

const menuItens = ['ACHAR VAGAS', 'AVALIAÇÕES DAS EMPRESAS', 'SALÁRIOS', 'BLOG']

const MenuItens = function(){
  return(  
    <ul className='opcoes'>
    {/* criar mecanismo para gerar itens de menu dinamicamente */}
    {
    menuItens.map(function(texto){
    return <li className='opcao'><p>{texto}</p></li>
     })
    }
</ul>    
  )
}

export default MenuItens;