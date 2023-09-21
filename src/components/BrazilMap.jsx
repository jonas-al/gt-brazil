import ReactECharts from 'echarts-for-react'
import BrazilJson from '@/data/brazil_geo.json'
import gts from '@/data/gts.json'
import * as echarts from 'echarts/core'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'

const BrazilMap = ({handleViewGroupDetails}) => {
  const [selectedState, setSelectState] = useState(undefined)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [mapHeight, setMapHeight] = useState(
    windowWidth >= 1300 ? '100vh' : windowWidth >= 1200 ? '80vh' : '70vh' 
  ) 
  const brJson = BrazilJson

  echarts.registerMap('BR', brJson);

  const option = {
    title: {
      text: 'Distribuição dos grupos de pesquisa pelo Brasil',
      subtext: 'Clique em um estado para ver detalhes',
      left: 'center',
      textStyle: {
        fontSize: '20',
        width: windowWidth,
        overflow: 'break'
      },
      subtextStyle: {
        fontSize: '18'
      }
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2
    },
    visualMap: {
      left: 'left',
      bottom: '20%',
      min: 0,
      max: 6,
      inRange: {
        color: [
          '#F8F9FB',
          '#C4594B',
          '#75233D',
          '#4B1623'
        ]
      },
      text: ['High', 'Low'],
      calculable: true
    },
    roam: false,
    series: [
      {
        name: 'Grupos de Trabalho',
        type: 'map',
        roam: false,
        map: 'BR',
        data: [
          { name: 'Acre', abbr:'AC', value: gts['AC'].length },
          { name: 'Alagoas', abbr:'AL', value: gts['AL'].length },
          { name: 'Amapá', abbr:'AP', value: 0 },
          { name: 'Amazonas', abbr:'AM', value: gts['AM'].length  },
          { name: 'Bahia', abbr:'BA', value: gts['BA'].length },
          { name: 'Ceará', abbr:'CE', value: gts['CE'].length },
          { name: 'Espírito Santo', abbr:'ES', value: 0 },
          { name: 'Goiás', abbr:'GO', value: 0 },
          { name: 'Maranhão', abbr:'MA', value: 0 },
          { name: 'Mato Grosso', abbr:'MT', value: gts['MT'].length },
          { name: 'Mato Grosso do Sul', abbr:'MS', value: 0 },
          { name: 'Minas Gerais', abbr:'MG', value: gts['MG'].length },
          { name: 'Pará', abbr:'PA', value: gts['PA'].length },
          { name: 'Paraíba', abbr:'PB', value: gts['PB'].length },
          { name: 'Paraná', abbr:'PR', value: gts['PR'].length },
          { name: 'Pernambuco', abbr:'PE', value: gts['PE'].length },
          { name: 'Piauí', abbr:'PI', value: gts['PI'].length },
          { name: 'Rio de Janeiro', abbr:'RJ', value: gts['RJ'].length },
          { name: 'Rio Grande do Norte', abbr:'RN', value: gts['RN'].length },
          { name: 'Rio Grande do Sul', abbr:'RS', value: gts['RS'].length },
          { name: 'Rondônia', abbr:'RO', value: gts['RO'].length },
          { name: 'Roraima', abbr:'RR', value: 0 },
          { name: 'Santa Catarina', abbr:'SC', value: gts['SC'].length },
          { name: 'São Paulo', abbr:'SP', value: gts['SP'].length },
          { name: 'Sergipe', abbr:'SE', value: gts['SE'].length },
          { name: 'Tocantins', abbr:'TO', value: gts['TO'].length },
          { name: 'Distrito Federal', abbr:'DF', value: gts['DF'].length }
        ]
      }
    ],
    dataZoom: [{
      type: 'slider',
      start: 0,
      end: 100
    }]
  }

  const onChartClick = (e) => {
    setSelectState(gts[e.data.abbr])
  }

  const onEvents = {
    click: onChartClick
  }

  
  const onResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    if (windowWidth >= 1300) setMapHeight('100vh')
    else if (windowWidth >= 1200) setMapHeight('80vh')
    else if (windowWidth >= 1000) setMapHeight('70vh')
    else setMapHeight('70vh')
  }, [])

  return (
    <div className='flex w-screen items-center flex-col lg:flex-row' id='mapa'>
      <ReactECharts
        className={`w-full lg:w-[55vw]`}
        style={{height: mapHeight}}
        option={option}
        onEvents={onEvents}
      />
      <div className='flex flex-col w-full max-h-[300px] lg:max-h-[500px] px-2 overflow-y-scroll lg:w-[43vw] gap-y-6 z-10 sm:mt-0'>
        {selectedState? selectedState.map((elem, index) => (
        <Card
          key={index}
          group={elem}
          handleViewGroupDetails={handleViewGroupDetails}
        />
        )) : null}
      </div>
    </div>
  )
}

export default BrazilMap