import React from 'react';
import useStore from '../../StoreManager';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper } from "@mui/material";
import { Line,Doughnut  } from 'react-chartjs-2';
import { Chart, LineElement, BarElement, LinearScale, CategoryScale, DoughnutController, PointElement, ArcElement } from 'chart.js';

Chart.register(PointElement, ArcElement,LineElement,DoughnutController, BarElement, LinearScale, CategoryScale);

const Graphs = () => {
    const stat=useStore(state=>state.states)
    const statePercent = {
      'Andhra Pradesh': [60, 40],
      'Arunachal Pradesh': [50, 50],
      'Assam': [70, 30],
      'Bihar': [80, 20],
      'Chhattisgarh': [55, 45],
      'Goa': [65, 35],
      'Gujarat': [75, 25],
      'Haryana': [45, 55],
      'Himachal Pradesh': [35, 65],
      'Jharkhand': [85, 15],
      'Karnataka': [25, 75],
      'Kerala': [30, 70],
      'Madhya Pradesh': [40, 60],
      'Maharashtra': [20, 80],
      'Manipur': [50, 50],
      'Meghalaya': [60, 40],
      'Mizoram': [70, 30],
      'Nagaland': [80, 20],
      'Odisha': [45, 55],
      'Punjab': [55, 45],
      'Rajasthan': [65, 35],
      'Sikkim': [75, 25],
      'Tamil Nadu': [85, 15],
      'Telangana': [65, 35],
      'Tripura': [30, 70],
      'Uttar Pradesh': [40, 60],
      'Uttarakhand': [20, 80],
      'West Bengal': [50, 50],
      '':[30,70]
    };
    const statePopulation = {
        "Andhra Pradesh": [53903393, 54531349, 55149125, 55748738, 56330087],
        "Arunachal Pradesh": [157900, 160300, 162700, 165100, 167500],
        "Assam": [35607039, 36192412, 36776995, 37352743, 37913100],
        "Bihar": [124799926, 126117140, 127335218, 128466921, 129607899],
        "Chhattisgarh": [29436231, 29719500, 29994005, 30261229, 30525408],
        "Goa": [1586250, 1606800, 1627250, 1647000, 1666500],
        "Gujarat": [63872399, 64597421, 65301929, 66014729, 66729338],
        "Haryana": [28204692, 28672040, 29136714, 29599563, 30044417],
        "Himachal Pradesh": [7451955, 7511198, 7573262, 7634876, 7699967],
        "Jharkhand": [38593948, 39038389, 39472298, 39893483, 40313138],
        "Karnataka": [67562686, 68272376, 68975758, 69669709, 70339983],
        "Kerala": [35699443, 35782964, 35862788, 35938618, 36021232],
        "Madhya Pradesh": [85358965, 86425815, 87486799, 88535771, 89593357],
        "Maharashtra": [123144223, 124080635, 124943427, 125714031, 126584064],
        "Manipur": [3267800, 3298300, 3329900, 3361800, 3394000],
        "Meghalaya": [3349230, 3384940, 3420710, 3456550, 3491830],
        "Mizoram": [1239240, 1250500, 1262600, 1275700, 1289500],
        "Nagaland": [2249690, 2272500, 2295900, 2319700, 2343500],
        "Odisha": [46178169, 46797101, 47410667, 48015086, 48607707],
        "Punjab": [30141373, 30387977, 30626551, 30867389, 31105920],
        "Rajasthan": [81032689, 81996594, 82947032, 83858702, 84729924],
        "Sikkim": [673880, 678700, 683600, 688500, 693300],
        "Tamil Nadu": [75695035, 76139501, 76585049, 77022940, 77475610],
        "Telangana": [39287923, 39772159, 40253419, 40722483, 41188891],
        "Tripura": [4070880, 4102400, 4134940, 4167600, 4200400],
        "Uttar Pradesh": [237882725, 240928803, 243963948, 246944819, 249902686],
        "Uttarakhand": [11141089, 11208201, 11274213, 11334122, 11387406],
        "West Bengal": [101702624, 102741698, 103818340, 104829582, 105849303],
        "": [102741698,103818340,104829582,105849303,106949405]
      };
  const data = {
    labels: [2020,2021,2022,2023,2024],
    datasets: [
      {
        label: 'Dataset 1',
        data: statePopulation[stat],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const ratioData = {
    labels: ['Urban','Rural'],
    datasets: [
      {
        label: 'Urban',
        data: statePercent[stat],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],      },

    ],
    options:{
        plugins: {
          responsive: true,
          legend: {
            display: true, 
            position: 'bottom'
          }
        }
      },
      
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="subContainer">
      <Slider className='' {...settings}>
        <Paper elevation={0} className='chartBox'>
        <h3 className='marginAuto'>{stat !== '' ? `${stat} states population from 2020-2024 Line Representation` : 'India population from 2020-2024 Line Representation'}</h3>
          <Line className='chartLineCard marginAuto' data={data} />
        </Paper>
        <Paper elevation={0} className='chartBox'>
        <h3 className='marginAuto'>{stat !== '' ? `${stat} states region distribution from 2020-2024 Doughnut Representation` : 'India region distribution from 2020-2024 Doughnut Representation'}</h3>
          <Doughnut className='chartCard' data={ratioData} options={ratioData.options} />
        </Paper>
      </Slider>
    </div>
  );
};

export default Graphs;
