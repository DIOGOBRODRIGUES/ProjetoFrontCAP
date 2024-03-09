import logo from '../../imagens/estudante.jpg'
import './Logo.css'
function Logo (){
    return(
        <div className ='logo'>
         <img src ={logo} alt = 'logo' className='logo-image'/>
         <p><strong>EmpregaEu</strong>Vagas</p>
         </div>
    )

}

export default Logo;