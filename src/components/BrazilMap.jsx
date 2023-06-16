import ReactECharts from 'echarts-for-react'
import BrazilJson from '@/data/brazil_geo.json'
import gts from '@/data/gts.json'
import * as echarts from 'echarts/core'
import Card from '@/components/Card'
import { useState } from 'react'

const BrazilMap = ({handleViewGroupDetails}) => {
  const [selectedState, setSelectState] = useState(undefined)
  const brJson = BrazilJson
  echarts.registerMap('BR', brJson);

  const option = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2
    },
    visualMap: {
      left: 'left',
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

  return (
    <div className='flex w-screen items-center'>
      <ReactECharts
        style={{ height: '100vh', width: '50%' }}
        option={option}
        onEvents={onEvents}
      />
      <div className='flex flex-col gap-y-6'>
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