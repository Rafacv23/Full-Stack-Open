import React from 'react';
import Text from '../components/text';

const Statistics = (props) => {
  
        const hasStatistics = props.contadorAll > 0;
      
        if (!hasStatistics) {
          return <Text text={"No feedback given"} />;
        }
      
        return (
          <div>
            <Text text={"Buenos"} contador={props.contadorGood} />
            <Text text={"Neutrales"} contador={props.contadorNeutral} />
            <Text text={"Malos"} contador={props.contadorBad} />
            <Text text={"Total"} contador={props.contadorAll} />
            <Text text={"Promedio"} contador={props.contadorAverage} />
            <Text text={"Comentarios positivos"} contador={props.contadorPositive} />
          </div>
        );
      };

export default Statistics;
