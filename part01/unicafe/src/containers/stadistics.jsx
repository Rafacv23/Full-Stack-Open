import React from 'react';
import Text from '../components/text';
import StadisticsLine from '../components/stadistics-line';

const Stadistics = (props) => {
  
        const hasStadistics = props.contadorAll > 0;
      
        if (!hasStadistics) {
          return <Text text={"No feedback given"} />;
        }
      
        return (
          <div>
            <StadisticsLine text={"Buenos"} contador={props.contadorGood} />
            <StadisticsLine text={"Neutrales"} contador={props.contadorNeutral} />
            <StadisticsLine text={"Malos"} contador={props.contadorBad} />
            <StadisticsLine text={"Total"} contador={props.contadorAll} />
            <StadisticsLine text={"Promedio"} contador={props.contadorAverage} />
            <StadisticsLine text={"Comentarios positivos"} contador={props.contadorPositive} />
          </div>
        );
      };

export default Stadistics;
