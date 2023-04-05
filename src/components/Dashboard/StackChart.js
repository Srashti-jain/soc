import React from 'react';
import { Chart, ChartAxis, ChartBar, ChartStack, ChartTooltip, getResizeObserver } from '@patternfly/react-charts';

class StackChart extends React.Component {
  constructor(props) {
    super(props);
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

    this.bars = [];
    for(let i = 1; i < 32; i++){
      this.bars.push({ x: `Aug. ${i}`, y: Math.floor(Math.random() * 6) + 1 });
    };

    this.renderSocketBars = () => {
      let socketBars = this.bars.map((tick, index) => {
        return {
          x: tick.x,
          y: tick.y,
          name: 'Sockets',
          label: `${tick.x} Sockets: ${tick.y}`
        };
      });
      return <ChartBar data={socketBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;
    }

    this.renderCoresBars = () => {
      let coresBars = this.bars.map((tick, index) => {
        return {
          x: tick.x,
          y: tick.y,
          name: 'Cores',
          label: `${tick.x} Cores: ${tick.y}`
        };
      });
      return <ChartBar data={coresBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;
    }

    this.renderNodesBars = () => {
      let nodesBars = this.bars.map((tick, index) => {
        return {
          key: index,
          x: tick.x,
          y: tick.y,
          name: 'Nodes',
          label: `${tick.x} Nodes: ${tick.y}`
        };
      });
      return <ChartBar data={nodesBars} labelComponent={<ChartTooltip constrainToVisibleArea />} />;
    }

    this.getTickValues = (offset = 2) => {
      let tickValues = [];
      for(let i = 1; i < 32; i++){
        if (i % offset == 0){
          tickValues.push(`Aug. ${i}`);
        }
      }
      return tickValues;
    }
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
    return (
      <div ref={this.containerRef}>
        <div style={{ height: '225px' }}>
          <Chart
            ariaDesc="Stack Chart with monthly metric data"
            ariaTitle="Monthly Stack Chart"
            domainPadding={{ x: [30, 25] }}
            legendData={[{ name: 'Sockets' }, { name: 'Cores' }, { name: 'Nodes' }]}
            legendPosition="bottom"
            height={225}
            name="chart4"
            padding={{
              bottom: 75, // Adjusted to accommodate legend
              left: 50,
              right: 50, 
              top: 50
            }}
            width={width}
          >
            <ChartAxis tickValues = {this.getTickValues()} fixLabelOverlap />
            <ChartAxis dependentAxis showGrid />
            <ChartStack domainPadding={{x: [10, 2]}}>
              { this.renderSocketBars() }
              { this.renderCoresBars() }
              { this.renderNodesBars() }
            </ChartStack>
          </Chart>
        </div>
      </div>
    )
  }
}
export default StackChart;