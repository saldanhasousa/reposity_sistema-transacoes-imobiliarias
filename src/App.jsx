import { useState } from 'react'

import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import bgimg_section from './assets/image/img_header/condominio.jpg'

function App() {
  const quebra = '\n'
  const bg_section3 = 'https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg'
  return (
   <div id='main' className='grid grid-cols-1 grid-rows-[100px_1fr_200px] min-h-screen relative @7xl:max-w-7xl @7xl:my-auto'>
     
      <Header/>

        <main className='mb-5 mt-5 row-start-2 row-end-3 grid-cols-1 grid-rows-[500px_1fr_1fr] '>
          <section className="gap-5 bg-cover bg-center w-full h-[500px] text-center flex flex-col flex-nowrap justify-center" style={{ backgroundImage: `url(${bgimg_section})`}}>
            <div className='text-white font-bold text-[3em] *:text-nowrap max-sm:text-[1.5em]'>
               <p>VAMOS ENCOTRAR O TEU </p>
                <p>KUBICO DOS SONHOS!</p>
               </div>

            <a href="#" className='text-white font-bold bg-amber-400 w-[200px]  self-center p-0.5 rounded-4xl hover:bg-amber-300 animate-minha'>A tua casa em um click</a>
            
          </section>



          <section className="secao p-2.5">
            <h2 className='bg-amber-400 w-20 my-4'>Destaque</h2>

           <div id="min_sectio2 " className='flex w-full *:w-3xs *:h-50 *:bg-amber-100 gap-5 justify-center'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
           </div> 

          </section>

          <section className="p-3.5 h-[500px] bg-cover bg-left relative" style={{ backgroundImage: `url(${bg_section3})` }}>


            <div id="text_section3" className='flex flex-col absolute w-[300px] h-[80%] top-20  right-[10%] bg-white/40 py-3.5 text-center gap-5 rounded-4xl max-sm:w-[55%] max-sm:h-[70%] justify-center'>

              <p className='text-[1.5rem]'>
                Se está a procura de um cubico para arrendar, este artigo é para si. Antes de assinar contrato deve ter alguns cuidados.
              </p>

              <button type="button" className='font-bold bg-amber-400 w-[200px]  self-center p-0.5 rounded-lg hover:bg-amber-300'>
                Fale conossco
              </button>
            </div>

          </section>
        </main>

        <Footer/>
     
   </div>
  )
}

export default App
