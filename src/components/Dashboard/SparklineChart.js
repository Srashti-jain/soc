import React from 'react';
import { ChartArea, ChartContainer, ChartGroup, ChartLabel, ChartVoronoiContainer } from '@patternfly/react-charts';

const Performance = () => (
  <div style={{ marginLeft: '20px', marginTop: '50px', height: '135px' }}>
    <div style={{ height: '100px', width: '200px' }}>
    <ChartGroup
                ariaDesc="Mock average cluster utilization"
                ariaTitle="Mock cluster sparkline chart"
                containerComponent={
                  <ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />
                }
                height={100}
                maxDomain={{ y: 9 }}
                padding={0}
                width={400}
              >
                <ChartArea
                  data={[
                    { name: 'Cluster', x: '2015', y: 7 },
                    { name: 'Cluster', x: '2016', y: 6 },
                    { name: 'Cluster', x: '2017', y: 8 },
                    { name: 'Cluster', x: '2018', y: 3 },
                    { name: 'Cluster', x: '2019', y: 4 },
                    { name: 'Cluster', x: '2020', y: 1 },
                    { name: 'Cluster', x: '2021', y: 0 }
                  ]}
                />
              </ChartGroup>
              </div>
  </div>
);
export default Performance;