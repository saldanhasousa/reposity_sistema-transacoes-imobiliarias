import pesquisa from './../assets/image/img_header/icons8-pesquisar-24.png'
import home_img from './../assets/image/img_header/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import close_img from './../assets/image/img_header/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import menu_img from './../assets/image/img_header/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'



function Header(){
    const img_log = "https://instic.uniluanda.ao/wp-content/uploads/2024/09/favicon-png.png"
    
    return(
        <header className=" p-5 text-black flex justify-between items-center bg-blue-500 absolute top-0 w-full row-end-2 row-start-1 text-[1.2em]">
            
            <div id="logo" className='w-[60px] h-20'>

                <img src={img_log} alt="" />
            </div>

            <menu className=''>
                <ul className="flex flex-nowrap *:p-[5px]  gap-12 max-sm:hidden font-bold *:rounded-[10px] *:hover:bg-blue-400 *:hover:duration-600 *:hover:transition-colors">                        
                        <li>
                            <a href="">
                                <img src={home_img} alt="" className=''/>
                            </a>
                        </li>

                        <li>
                            <a href="">Imóveis</a>
                        </li>

                        <li>
                            <a href="">Aprenda</a>
                        </li>
                        
                        <li>
                            <a href="">Sobre</a>
                        </li>

                        <li>
                            <a href="">Contactos</a>
                        </li>
                        
                </ul>

                <div className='sm:hidden bg-blue-400 p-1 rounded-[5px] shadow-2xs'>
                    <img src={menu_img} alt="" />
                </div>
            </menu>

            <div id="img_pesquisa">
                <img src={pesquisa} alt="" />
            </div>
        </header>
    )
}

export default Header