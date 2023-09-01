import ReactECharts from 'echarts-for-react'
import BrazilJson from '@/data/brazil_geo.json'
import gts from '@/data/gts.json'
import * as echarts from 'echarts/core'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'

const BrazilMap = ({handleViewGroupDetails}) => {
  const [selectedState, setSelectState] = useState(undefined)
  const brJson = BrazilJson
  echarts.registerMap('BR', brJson);

  const option = {
    title: {
      text: 'Distribuição dos grupos pelo Brasil',
      subtext: 'Clique em um estado para ver detalhes',
      left: 'center',
      textStyle: {
        fontSize: '20'
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
      max: 5,
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
          { name: 'Acre', value: gts['Acre'].length },
          { name: 'Alagoas', value: gts['Alagoas'].length },
          { name: 'Amapá', value: 0 },
          { name: 'Amazonas', value: gts['Amazonas'].length  },
          { name: 'Bahia', value: gts['Bahia'].length },
          { name: 'Ceará', value: gts['Ceará'].length },
          { name: 'Espírito Santo', value: 0 },
          { name: 'Goiás', value: 0 },
          { name: 'Maranhão', value: 0 },
          { name: 'Mato Grosso', value: gts['Mato Grosso'].length },
          { name: 'Mato Grosso do Sul', value: 0 },
          { name: 'Minas Gerais', value: gts['Minas Gerais'].length },
          { name: 'Pará', value: gts['Pará'].length },
          { name: 'Paraíba', value: gts['Paraíba'].length },
          { name: 'Paraná', value: gts['Paraná'].length },
          { name: 'Pernambuco', value: gts['Pernambuco'].length },
          { name: 'Piauí', value: gts['Piauí'].length },
          { name: 'Rio de Janeiro', value: gts['Rio de Janeiro'].length },
          { name: 'Rio Grande do Norte', value: gts['Rio Grande do Norte'].length },
          { name: 'Rio Grande do Sul', value: gts['Rio Grande do Sul'].length },
          { name: 'Rondônia', value: gts['Rondônia'].length },
          { name: 'Roraima', value: 0 },
          { name: 'Santa Catarina', value: gts['Santa Catarina'].length },
          { name: 'São Paulo', value: gts['São Paulo'].length },
          { name: 'Sergipe', value: gts['Sergipe'].length },
          { name: 'Tocantins', value: gts['Tocantins'].length },
          { name: 'Distrito Federal', value: gts['Distrito Federal'].length }
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
    setSelectState(gts[e.data.name])
  }

  const onEvents = {
    click: onChartClick
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [mapHeight, setMapHeight] = useState(
    windowWidth >= 1300 ? '100vh' : windowWidth >= 1200 ? '80vh' : '70vh' 
  ) 

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
        className={`w-full lg:w-1/2`}
        style={{height: mapHeight}}
        option={option}
        onEvents={onEvents}
      />
      <div className='flex w-full lg:w-1/2 flex-col gap-y-6 px-8 z-10 sm:mt-0'>
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