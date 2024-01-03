import { useState, useEffect } from 'react'
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import BrazilMap from '@/components/BrazilMap'
import logo from '@/assets/logo.svg'
import logo_white from '@/assets/logo_white.svg'
import shape from '@/assets/shape.svg'
import Icon from '@mdi/react';
import { mdiMenu, mdiChevronTripleDown } from '@mdi/js';


function Home() {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false)

  const history = window.history
  useEffect(() => {
    const mapa = document.getElementById('mapa')
    if (mapa && history.state?.usr?.from === '/detalhes') {
      mapa.scrollIntoView()
      history.replaceState(null, '')
    }
  }, [])

  const toggleDropDownMenu = () => {
    setShowDropDownMenu(false)
  }

  return (
    <div className='bg-gray-100 overflow-hidden'>
      <div className='flex flex-col w-full'>
        <div className='flex flex-col min-h-screen pb-20'>
          <Element name='home' />
          <img src={shape} alt="Shape" className='absolute w-[65%] sm:w-[55%] right-0'/>
          <header className='flex w-full justify-between pr-6 pl-6 pt-4 sm:pl-14 md:pr-28 lg:pr-36'>
            <div className='flex flex-col items-center justify-center gap-x-4 sm:flex-row'>
              <img src={logo} alt="Logo" className='w-14'/>
              <h1 className='text-2xl text-[#75233D] font-bold sm:text-3xl text-center w-32 lg:w-full'>Grupos de Trabalho</h1>
            </div>
            <nav className='gap-x-4 z-10 text-xl text-white items-center justify-center hidden sm:flex'>
              <Link
                to='home'
                smooth = {true}
                duration={500}
                className='rounded p-1 hover:bg-white hover:text-[#4B1623] cursor-pointer'
              >
                Home
              </Link>
              <p>|</p>
              <Link
                to='mapa'
                smooth={true}
                duration={500}
                offset={-30}
                className='rounded p-1 hover:bg-white hover:text-[#4B1623] cursor-pointer'
              >
                Mapa
              </Link>
              <p>|</p>
              <Link
                to='contatos'
                smooth={true}
                duration={500}
                className='rounded p-1 hover:bg-white hover:text-[#4B1623] cursor-pointer'
              >
                Contatos
              </Link>
            </nav>
            <div className='z-10 block sm:hidden'>
              <button
                onClick={() => setShowDropDownMenu(!showDropDownMenu)}
                className='h-fit hover:bg-slate-600 hover:bg-opacity-50 rounded sm:hidden'
              >
                <Icon
                  className='text-white'
                  path={mdiMenu}
                  size={2}
                />
              </button>
              {showDropDownMenu && <nav className='absolute flex flex-col text-xl text-gray-500 font-medium bg-white rounded p-2 right-8 shadow-md'>
                <button
                  onClick={() => {scroll.scrollToTop({duration: 100, smooth: true}), setTimeout(toggleDropDownMenu, 100)}}
                  className='rounded p-1 hover:bg-gray-200 hover:text-[#4B1623] cursor-pointer text-left'
                >
                  Home
                </button>
                <Link
                  onClick={() => setTimeout(toggleDropDownMenu, 500)}
                  to='mapa'
                  smooth={true}
                  duration={500}
                  offset={-10}
                  className='rounded p-1 hover:bg-gray-200 hover:text-[#4B1623] cursor-pointer'
                >
                  Mapa
                </Link>
                <button
                  onClick={() => {scroll.scrollToBottom({duration: 500, smooth: true}), setTimeout(toggleDropDownMenu, 500)}}
                  className='rounded p-1 hover:bg-gray-200 hover:text-[#4B1623] cursor-pointer'
                >
                  Contatos
                </button>
              </nav>}
            </div>
          </header>
          <section className='sm:w-[555px] h-full font-montserrat text-lg sm:text-xl text-gray-700 px-8 sm:pl-20 flex flex-col gap-y-3 pt-40'>
            <p>Grupos de</p>
            <h1 className='font-berkshire-swash text-4xl sm:text-6xl text-[#272727]'>Estudos e Pesquisas</h1>
            <p className='container text-justify leading-normal'>
              Integrantes do GT09 - Trabalho e Educação - da ANPEd - Associação Nacional de Pós-Graduação e Pesquisa em Educação
            </p>
          </section>
          <Link
            to='sobre'
            smooth={true}
            duration={500}
            className='flex justify-center bg-gray-2 sm:hidden hover:cursor-pointer animate-pulse'
          >
            <Icon
              path={mdiChevronTripleDown}
              size={2}
              className='absolute top-[90%] animate-bounce rounded-full bg-white shadow-md p-2 text-[#4B1623] self-end'
            />
          </Link>
        </div>
        <section className='flex flex-col w-full xl:w-2/3 h-full justify-between font-montserrat text-xl px-8 sm:px-20 gap-y-10'>
          <Element name='sobre' />
          <div className='h-fit text-gray-700 text-xl text-justify'>
            <p className='leading-normal'>
              Neste site, estão reunidos os Grupos de Estudos e Pesquisas integrantes do GT 09 - Trabalho e Educação - ANPEd - da Associação Nacional de Pós-Graduação e Pesquisa em Educação - Anped, presentes em diversas regiões do país. Com base nele, tem-se o registro de diferentes Grupos de Estudos e Pesquisas que tomam a unidade Trabalho e Educação para analisar, com base no materialismo histórico-dialético, processos formativos da classe trabalhadora, a partir de temáticas como:
            </p>
          </div>
          <div className='w-full gap-4 text-gray-700 text-justify'>
            <div className='bg-gray-200 p-4 rounded outline-dashed flex flex-col gap-3 outline-[#75233D] row-span-2 shadow-xl'>
              <ul className='list-disc px-4'>
                <li>Trabalho e escolaridade</li>
                <li>Trabalho e educação básica</li>
                <li>Trabalho e educação nos movimentos sociais</li>
                <li>Trabalho docente</li>
                <li>Formação profissional</li>
                <li>Formação sindical</li>
                <li>Reestruturação produtiva</li>
                <li>Organização e gestão do trabalho</li>
                <li>Trabalho e produção de saberes</li>
                <li>Trabalho na sua dimensão ontológica e nas suas formas históricas de trabalho escravo e trabalho alienado sob o capitalismo</li>
              </ul>
              <p>Dentre outras que tomam a relação entre o trabalho e a educação como eixo de análise.</p>
            </div>
          </div>
        </section>
      </div>
      <div className='overflow-hidden mt-20'>
        <Element name='mapa'/>
        <BrazilMap />
      </div>
      <footer className='flex justify-between sm:justify-between h:52 sm:h-44 w-full bg-[#75233D] mt-10 py-2 px-6 sm:px-24 gap-x-0 sm:gap-x-10'>
        <Element name='contatos' className='hidden'/>
        <div className='flex flex-col items-center justify-center gap-y-2 text-center'>
          <img src={logo_white} alt="Logo" className='w-10'/>
          <h1 className='text-lg sm:text-xl text-white font-bold'>Grupos de <br /> Trabalho</h1>
        </div>
        <div className='flex flex-col text-lg sm:text-xl text-white font-bold gap-y-2'>
          <Element name='contatos'/>
          Contatos
          <p className='text-md font-normal'>
            Prof. Doriedson Rodrigues<br />
            <a
              href='mailto:doriedson@ufpa.br'
              className='font-light'
            >
              doriedson@ufpa.br
            </a>
          </p>
          <p className='text-md font-normal'>
            Prof. Lucas Pelissari<br />
            <a
              href='mailto:lucasbp@unicamp.br'
              className='font-light'
            >
              lucasbp@unicamp.br
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
