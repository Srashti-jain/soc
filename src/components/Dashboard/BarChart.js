import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartGroup, ChartVoronoiContainer,getResizeObserver } from '@patternfly/react-charts';

class BarChart extends React.Component {
  constructor(){
    super();
    this.containerRef = React.createRef();
    this.observer = () => {};
    this.state = {
      width: 0
    };
    this.handleResize = () => {
      if(this.containerRef.current && this.containerRef.current.clientWidth){
        this.setState({ width: this.containerRef.current.clientWidth });
      }
    };
  }
  componentDidMount() {
    this.observer = getResizeObserver(this.containerRef.current, this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.observer();
  }
  render(){
    const { width } = this.state;
    return(
      <div ref={this.containerRef}>
  <div style={{ height: '250px' }}>
    <Chart
      ariaDesc="timestamp after 30 sec"
      ariaTitle="Bar chart example"
      containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
      domain={{y: [0,20]}}
      domainPadding={{ x: [30, 25] }}
      height={250}
      name="chart1"
      padding={{
        bottom: 75,
        left: 50,
        right: 50, // Adjusted to accommodate legend
        top: 50
      }}
      width={width}
    >
      <ChartAxis label="timestamp per 30 minutes" />
      <ChartAxis dependentAxis showGrid />
      <ChartGroup offset={11}>
        <ChartBar data={[{ name: 'Count', x: '7:30:00', y: 8 }, { name: 'Count', x: '7:35:00', y: 9 }, { name: 'Count', x: '7:40:00', y: 15 }, { name: 'Count', x: '7:45:00', y: 6 }, { name: 'Count', x: '7:50:00', y: 11},{ name: 'Count', x: '7:55:00', y: 12 }]} />
        <ChartBar data={[{ name: 'Count', x: '7:30:00', y:15 }, { name: 'Count', x: '7:35:00', y: 11 }, { name: 'Count', x: '7:40:00', y:13 }, { name: 'Count', x: '7:45:00', y: 14 }, { name: 'Count', x: '7:50:00', y: 15 },{ name: 'Count', x: '7:55:00', y: 9 }]} />
        <ChartBar data={[{ name: 'Count', x: '7:30:00', y: 4 }, { name: 'Count', x: '7:35:00', y: 4 }, { name: 'Count', x: '7:40:00', y: 9 }, { name: 'Count', x: '7:45:00', y: 7 }, { name: 'Count', x: '7:50:00', y: 8 },{ name: 'Count', x: '7:55:00', y: 13 }]} />
        <ChartBar data={[{ name: 'Count', x: '7:30:00', y: 3 }, { name: 'Count', x: '7:35:00', y: 9 }, { name: 'Count', x: '7:40:00', y: 18 }, { name: 'Count', x: '7:45:00', y: 15 }, { name: 'Count', x: '7:50:00', y: 10 },{ name: 'Count', x: '7:55:00', y: 10 }]} />
        <ChartBar data={[{ name: 'Count', x: '7:30:00', y: 5 }, { name: 'Count', x: '7:35:00', y: 4}, { name: 'Count', x: '7:40:00', y: 8 }, { name: 'Count', x: '7:45:00', y: 4 }, { name: 'Count', x: '7:50:00', y: 3 },{ name: 'Count', x: '7:55:00', y: 15 }]} />
        <ChartBar data={[{ name: 'Count', x: '7:30:00', y: 6 }, { name: 'Count', x: '7:35:00', y: 17 }, { name: 'Count', x: '7:40:00', y: 17 }, { name: 'Count', x: '7:45:00', y: 7 }, { name: 'Count', x: '7:50:00', y: 9 },{ name: 'Count', x: '7:55:00', y: 8 }]} />
        
      </ChartGroup>
    </Chart>
  </div>
  </div>
  )

  }
}
export default BarChart;