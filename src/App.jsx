import BrazilMap from '@/components/BrazilMap'
import GroupDatails from 'components/GroupDatails'
import { useState } from 'react'
import logo from '@/assets/logo.svg'
import logo_white from '@/assets/logo_white.svg'
import shape from '@/assets/shape.svg'


function App() {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [showGroupDetails, setShowGroupDetails] = useState(false)

  const handleViewGroupDetails = (group) => {
    setSelectedGroup(group)
    setShowGroupDetails(true)
  }

  const hideGroupDetails = () => {
    setShowGroupDetails(false)
  }

  return (
    <div className="bg-gray-50">
      <div className='flex flex-col w-full h-screen gap-y-48'>
        <img src={shape} alt="Shape" className='absolute w-[55%] right-1'/>
        <header className='flex w-full justify-between pr-36 pt-4 pl-14'>
          <div className='flex items-center justify-center gap-x-4'>
            <img src={logo} alt="Logo" className='w-14'/>
            <h1 className='text-3xl text-[#75233D] font-bold'>Grupos de Trabalho</h1>
          </div>
          <nav className='flex gap-x-4 z-10 text-xl text-white items-center justify-center'>
            <button className='rounded p-1 hover:bg-white hover:text-[#4B1623]'>Home</button>
            <p>|</p>
            <button className='rounded p-1 hover:bg-white hover:text-[#4B1623]'>Mapa</button>
            <p>|</p>
            <button className='rounded p-1 hover:bg-white hover:text-[#4B1623]'>Contatos</button>
          </nav>
        </header>
        <section className='w-[555px] h-full font-montserrat text-xl text-[#A8A8A8] pl-20 flex flex-col gap-y-1'>
          <p>Grupos de</p>
          <h1 className='font-berkshire-swash text-6xl text-[#272727]'>Estudos e Pesquisas</h1>
          <p className='text-justify'>
            Ligados ao GT09 - Trabalho e Educação - da ANPEd - Associação Nacional de Pós-Graduação e Pesquisa em Educação
          </p>
        </section>
        <section className='flex flex-col w-2/3 h-full justify-between font-montserrat text-xl px-20 gap-y-10 mt-40'>
          <div className='h-fit text-[#A8A8A8] text-xl text-justify'>
            <p>
              Neste site, estão reunidos os Grupos de Estudos e Pesquisas integrantes do GT 09 - Trabalho e Educação - ANPEd - da Associação Nacional de Pós-Graduação e Pesquisa em Educação - Anped, presentes em diversas regiões do país. Com base nele, tem-se o registro de diferentes Grupos de Estudos e Pesquisas que tomam a unidade Trabalho e Educação para analisar, com base no materialismo histórico-dialético, processos formativos da classe trabalhadora, a partir de temáticas como:
            </p>
          </div>
          <div className='w-2/3 grid grid-cols-2 grid-row-2 gap-4 text-gray-600 text-justify'>
            <div className='bg-gray-200 p-4 rounded outline-dashed flex flex-col gap-3 outline-[#75233D] row-span-2'>
              <ul className='list-disc px-4'>
                <li>Trabalho e escolaridade</li>
                <li>Trabalho e educação básica</li>
                <li>Trabalho e educação nos movimentos sociais</li>
                <li>Trabalho docente</li>
              </ul>
              Dentre outras que tomam a relação entre o trabalho e a educação como eixo de análise
            </div>
            <div className='bg-gray-200 p-4 rounded outline-dashed outline-[#75233D] h-fit'>
              Trabalho na sua dimensão ontológica e nas suas formas históricas de trabalho escravo e trabalho alienado sob o capitalismo
            </div>
            <div className='bg-gray-200 p-4 rounded outline-dashed outline-[#75233D] h-fit'>
              <ul className='list-disc px-4'>
                <li>Formação profissional</li>
                <li>Formação sindical</li>
                <li>Reestruturação produtiva</li>
                <li>Organização e gestão do trabalho</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className='flex mt-[900px]'>
        {showGroupDetails ? 
        <GroupDatails
          group={selectedGroup} hideGroupDetails={hideGroupDetails} 
        /> : 
        <BrazilMap
          handleViewGroupDetails={handleViewGroupDetails} 
        />}
      </div>
      <footer className='flex h-44 w-full bg-[#75233D] mt-10 p-4'>
        <div className='flex flex-col items-center justify-center gap-y-2 text-center'>
          <img src={logo_white} alt="Logo" className='w-10'/>
          <h1 className='text-xl text-white font-bold'>Grupos de Trabalho</h1>
        </div>
      </footer>
    </div>
  )
}

export default App
