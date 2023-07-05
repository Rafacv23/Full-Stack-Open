import React from 'react';
import Text from '../components/text';
import StadisticsLine from '../components/stadistics-line';

const Stadistics = (props) => {
  
        const hasStadistics = props.contadorAll > 0;
      
        if (!hasStadistics) {
          return <Text text={"No feedback given"} />;
        }
      
        return (
          <table>
            <tbody>
              <tr>
                <StadisticsLine text={"Buenos"} contador={props.contadorGood} />
              </tr>
              <tr>
                <StadisticsLine text={"Neutrales"} contador={props.contadorNeutral} />
              </tr>
              <tr>
                <StadisticsLine text={"Malos"} contador={props.contadorBad} />
              </tr>
              <tr>
                <StadisticsLine text={"Total"} contador={props.contadorAll} />
              </tr>
              <tr>
                <StadisticsLine text={"Promedio"} contador={props.contadorAverage} />
              </tr>
              <tr>
                <StadisticsLine text={"Comentarios positivos"} contador={props.contadorPositive} />
              </tr>
              </tbody>
          </table>
        );
      };

export default Stadistics;
