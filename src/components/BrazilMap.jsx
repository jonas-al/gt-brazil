import ReactECharts from 'echarts-for-react'
import BrazilJson from '@/data/brazil_geo.json'
import * as echarts from 'echarts/core'

const BrazilMap = () => {
  const brJson = BrazilJson
  echarts.registerMap('BR', brJson);

  const option = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2
    },
    roam: false,
    series: [
      {
        name: 'Grupos de Trabalho',
        type: 'map',
        roam: false,
        map: 'BR',
        data: [
          { name: 'Acre', value: 123 },
          { name: 'Alagoas', value: 731449 },
          { name: 'Amapá', value: 6553255 },
          { name: 'Amazonas', value: 2949131 },
          { name: 'Bahia', value: 38041430 },
          { name: 'Ceará', value: 5187582 },
          { name: 'Espírito Santo', value: 3590347 },
          { name: 'Goiás', value: 917092 },
          { name: 'Maranhão', value: 632323 },
          { name: 'Mato Grosso', value: 19317568 },
          { name: 'Mato Grosso do Sul', value: 9919945 },
          { name: 'Minas Gerais', value: 1392313 },
          { name: 'Pará', value: 1595728 },
          { name: 'Paraíba', value: 12875255 },
          { name: 'Paraná', value: 6537334 },
          { name: 'Pernambuco', value: 3074186 },
          { name: 'Piauí', value: 2885905 },
          { name: 'Rio de Janeiro', value: 4380415 },
          { name: 'Rio Grande do Norte', value: 4601893 },
          { name: 'Rio Grande do Sul', value: 1329192 },
          { name: 'Rondônia', value: 5884563 },
          { name: 'Roraima', value: 6646144 },
          { name: 'Santa Catarina', value: 9883360 },
          { name: 'São Paulo', value: 5379139 },
          { name: 'Sergipe', value: 2984926 },
          { name: 'Tocantins', value: 6021988 },
          { name: 'Distrito Federal', value: 1005141 }
        ]
      }
    ],
    dataZoom: [{
      type: 'slider',
      start: 0,
      end: 100
    }]
  }

  const onChartClick = (params) => {
    console.log('Chart clicked', params);
  }

  const onEvents = {
    click: onChartClick
  }

  return (
    <ReactECharts
      style={{ height: '100vh', width: '50%' }}
      option={option}
      onEvents={onEvents}
    />
  )
}

export default BrazilMap