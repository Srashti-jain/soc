import React from 'react';
import { ChartDonutUtilization } from '@patternfly/react-charts';

class UtilizationChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacer: '',
    };
  }

  render() {
    const { spacer, used } = this.state;
    return (
      <div style={{ width: '250px', height: '150px' }}>
        <ChartDonutUtilization
          ariaDesc="Storage capacity"
          ariaTitle="Donut utilization chart example"
          constrainToVisibleArea
          data={{ x: 'Storage capacity', y: 70 }}
          height={175}
          labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
          legendData={[{ name: ` capacity: 100%` }, { name: 'Unused' }]}
          legendOrientation="vertical"
          name="chart1"
          padding={{
            bottom: 10,
            left: 0,
            right: 195, // Adjusted to accommodate legend
            top: 10
          }}
          subTitle="of 100 GBps"
          title={`70%`}
          thresholds={[{ value: 60 }, { value: 90 }]}
          width={350}
        />
      </div>
    );
  }
}
export default UtilizationChart;