import * as React from 'react';
// import {Icon } from '@patternfly/react-core';
import { PageSection, Title } from '@patternfly/react-core';
import { ChartDonutThreshold, ChartDonutUtilization } from '@patternfly/react-charts';
import VirtualMachineIcon from '@patternfly/react-icons/dist/esm/icons/virtual-machine-icon';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import LongArrowAltUpIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-up-icon'
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Gallery, GalleryItem } from '@patternfly/react-core';
import { Divider ,Flex, FlexItem } from '@patternfly/react-core';

const Dashboard2 = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Global</Title>
  <Gallery hasGutter >
      <Card>
      <CardTitle>Data centers</CardTitle>
      <CardBody>
        <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1 total</FlexItem>
          <FlexItem>6
             <LongArrowAltUpIcon  />
          </FlexItem>

          <FlexItem>3
          <LongArrowAltDownIcon />
          </FlexItem>
        </Flex>
       </CardBody>
       </Card>
      <Card>
      <CardTitle>Clusters</CardTitle>
      <CardBody>
      <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          <FlexItem>2 <LongArrowAltUpIcon  /></FlexItem>
          <FlexItem>3 <LongArrowAltDownIcon  /></FlexItem>
        </Flex>
      </CardBody>
      </Card>
      <Card>
      <CardTitle>Hosts</CardTitle>
      <CardBody>
        <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          <FlexItem>2 <LongArrowAltUpIcon  /></FlexItem>
          <FlexItem>3 <LongArrowAltDownIcon  /></FlexItem>
        </Flex>
      </CardBody>
      </Card>
      <Card>
      <CardTitle>Data Stores</CardTitle>
      <CardBody>
      <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          <FlexItem>2</FlexItem>
          <FlexItem>3</FlexItem>
        </Flex>
      </CardBody>
      </Card>
      <Card>
      <CardTitle>SDS Health</CardTitle>
      <CardBody>
      <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          <FlexItem>2</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
          <FlexItem>5</FlexItem>
        </Flex>
      </CardBody>
      </Card>
  </Gallery>


<br/>
<Title headingLevel="h1" size="lg">Workloads</Title>
  <Gallery  hasGutter >
      <Card>
        <CardHeader>
        <VirtualMachineIcon />
      <CardTitle>VM</CardTitle>
      </CardHeader>
      <CardBody>
        <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          {/* <Divider Deprecated={{ default: 'vertical'}}/> */}
          <FlexItem>2 <LongArrowAltUpIcon  /></FlexItem>
          <FlexItem>3 <LongArrowAltDownIcon  /></FlexItem>
          <FlexItem>4</FlexItem>
        </Flex>
      </CardBody>
      </Card>
      <Card>
      <CardTitle>Template</CardTitle>
      <CardBody>
      <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1 total</FlexItem>
        </Flex>
      </CardBody>
      </Card>
      <Card>
      <CardTitle>LXD</CardTitle>
      <CardBody>
        <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          <FlexItem>2 <LongArrowAltUpIcon  /></FlexItem>
          <FlexItem>3 <LongArrowAltDownIcon  /></FlexItem>
          <FlexItem>4</FlexItem>
        </Flex>
      </CardBody>
      </Card>
      <Card>
      <CardTitle>Docker</CardTitle>
      <CardBody>
      <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          <FlexItem>2</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
        </Flex>
      </CardBody>
      </Card>
      <Card>
      <CardTitle>kubernetes</CardTitle>
      <CardBody>
      <Flex spaceItems={{ default: 'spaceItemsXl' }}>
          <FlexItem>1</FlexItem>
          <FlexItem>2</FlexItem>
          <FlexItem>3</FlexItem>
          <FlexItem>4</FlexItem>
        </Flex>
      </CardBody>
      </Card>
  </Gallery>
<br/>
<Gallery hasGutter minWidths={{ default: '360px' }}>
    <GalleryItem>
<Card id="utilization-card-4-card" component="div">
        <CardTitle>
          <Title headingLevel="h4" size="lg">
            CPU Usage
          </Title>
        </CardTitle>
        <CardBody>
          <ChartDonutThreshold
            ariaDesc="Mock storage capacity"
            ariaTitle="Mock donut utilization chart"
            constrainToVisibleArea={true}
            data={[
              { x: 'Warning at 60%', y: 60 },
              { x: 'Danger at 90%', y: 90 }
            ]}
            height={200}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            padding={{
              bottom: 0,
              left: 10,
              right: 150,
              top: 0
            }}
            width={300}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 80 }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
              legendOrientation="vertical"
              title="80%"
              subTitle="of 100 GBps"
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>{' '}
        </CardBody>
        <CardFooter>
          <a href="#">See details</a>
        </CardFooter>
      </Card>
      </GalleryItem>
    <GalleryItem>
    <Card id="utilization-card-4-card" component="div">
        <CardTitle>
          <Title headingLevel="h4" size="lg">
            Memory Usage
          </Title>
        </CardTitle>
        <CardBody>
          <ChartDonutThreshold
            ariaDesc="Mock storage capacity"
            ariaTitle="Mock donut utilization chart"
            constrainToVisibleArea={true}
            data={[
              { x: 'Warning at 60%', y: 60 },
              { x: 'Danger at 90%', y: 90 }
            ]}
            height={200}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            padding={{
              bottom: 0,
              left: 10,
              right: 150,
              top: 0
            }}
            width={300}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 80 }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
              legendOrientation="vertical"
              title="80%"
              subTitle="of 100 GBps"
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>{' '}
        </CardBody>
        <CardFooter>
          <a href="#">See details</a>
        </CardFooter>
      </Card>
      </GalleryItem>
      <GalleryItem>
    <Card id="utilization-card-4-card" component="div">
        <CardTitle>
          <Title headingLevel="h4" size="lg">
            Storage Usage
          </Title>
        </CardTitle>
        <CardBody>
          <ChartDonutThreshold
            ariaDesc="Mock storage capacity"
            ariaTitle="Mock donut utilization chart"
            constrainToVisibleArea={true}
            data={[
              { x: 'Warning at 60%', y: 60 },
              { x: 'Danger at 90%', y: 90 }
            ]}
            height={200}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            padding={{
              bottom: 0,
              left: 10,
              right: 150,
              top: 0
            }}
            width={300}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 80 }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
              legendOrientation="vertical"
              title="60%"
              subTitle="of 100 GBps"
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>{' '}
        </CardBody>
        <CardFooter>
          <a href="#">See details</a>
        </CardFooter>
      </Card>
      </GalleryItem>
      <GalleryItem>
    <Card id="utilization-card-4-card" component="div">
        <CardTitle>
          <Title headingLevel="h4" size="lg">
            Network Usage
          </Title>
        </CardTitle>
        <CardBody>
          <ChartDonutThreshold
            ariaDesc="Mock storage capacity"
            ariaTitle="Mock donut utilization chart"
            constrainToVisibleArea={true}
            data={[
              { x: 'Warning at 60%', y: 60 },
              { x: 'Danger at 90%', y: 90 }
            ]}
            height={200}
            labels={({ datum }) => (datum.x ? datum.x : null)}
            padding={{
              bottom: 0,
              left: 10,
              right: 150,
              top: 0
            }}
            width={300}
          >
            <ChartDonutUtilization
              data={{ x: 'Storage capacity', y: 80 }}
              labels={({ datum }) => (datum.x ? `${datum.x}: ${datum.y}%` : null)}
              legendData={[{ name: `Capacity: 80%` }, { name: 'Warning at 60%' }, { name: 'Danger at 90%' }]}
              legendOrientation="vertical"
              title="80%"
              subTitle="of 100 GBps"
              thresholds={[{ value: 60 }, { value: 90 }]}
            />
          </ChartDonutThreshold>{' '}
        </CardBody>
        <CardFooter>
          <a href="#">See details</a>
        </CardFooter>
      </Card>
      </GalleryItem>
      </Gallery>

  </PageSection>


)

export { Dashboard2 };
