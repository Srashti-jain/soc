import * as React from 'react';
import StackChart from './StackChart';
import UtilizationChart from './DonutChart';
import Performance from './SparklineChart';
// import Progress from './ProgressStep';
import { Accordion, PageSection, Stack, StackItem, Title } from '@patternfly/react-core';
import VirtualMachineIcon from '@patternfly/react-icons/dist/esm/icons/virtual-machine-icon';
import ArrowCircleDownIcon from '@patternfly/react-icons/dist/esm/icons/arrow-circle-down-icon';
import ArrowCircleUpIcon from '@patternfly/react-icons/dist/esm/icons/arrow-circle-up-icon';
import ClusterIcon from '@patternfly/react-icons/dist/esm/icons/cluster-icon';
import EnterpriseIcon from '@patternfly/react-icons/dist/esm/icons/enterprise-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import DesktopIcon from '@patternfly/react-icons/dist/esm/icons/desktop-icon';
// import HeartBrokenIcon from '@patternfly/react-icons/dist/esm/icons/heart-broken-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import ResourcePoolIcon from '@patternfly/react-icons/dist/esm/icons/resource-pool-icon';
import PowerOffIcon from '@patternfly/react-icons/dist/esm/icons/power-off-icon';
import OffIcon from '@patternfly/react-icons/dist/esm/icons/off-icon';
import PauseCircleIcon from '@patternfly/react-icons/dist/esm/icons/pause-circle-icon';
import HeartbeatIcon from '@patternfly/react-icons/dist/esm/icons/heartbeat-icon'
import PficonTemplateIcon from '@patternfly/react-icons/dist/esm/icons/pficon-template-icon';
import { Card, CardHeader, CardTitle, CardActions, CardBody, CardFooter, Gallery, GalleryItem } from '@patternfly/react-core';
import { Divider, Flex, FlexItem, Select, Button, SelectOption, Grid, GridItem } from '@patternfly/react-core';
import { auto } from '@patternfly/react-core/dist/esm/helpers/Popper/thirdparty/popper-core';
// import { HeartbeatIcon } from '@patternfly/react-icons';
class Dashboard2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <PageSection >
      <Stack hasGutter>
        <Title headingLevel="h1" size="lg">Global</Title>
        <StackItem>
          <Gallery hasGutter>
            <GalleryItem>
              <Card className="pf-c-card pf-m-selectable pf-m-selected"  >
                <CardTitle> <EnterpriseIcon /> Data centers</CardTitle>
                <CardBody >
                  <Flex spaceItems={{ default: 'spaceItemslg' }}  >
                    <FlexItem >9 Total
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >6 <ArrowCircleUpIcon color="var(--pf-global--success-color--100)" />
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3 <ArrowCircleDownIcon color="var(--pf-global--danger-color--100)" />
                    </FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>

            <GalleryItem>
              <Card className="pf-c-card pf-m-selectable pf-m-selected">
                <CardTitle> <ClusterIcon /> Clusters   </CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >5 Total
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2 <ArrowCircleUpIcon color="var(--pf-global--success-color--100)" /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem>3 <ArrowCircleDownIcon color="var(--pf-global--danger-color--100)" /></FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card className="pf-c-card pf-m-selectable pf-m-selected">
                <CardTitle><DesktopIcon /> Hosts</CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >5 Total
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2 <ArrowCircleUpIcon color="var(--pf-global--success-color--100)" /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3 <ArrowCircleDownIcon color="var(--pf-global--danger-color--100)" /></FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card className="pf-c-card pf-m-selectable pf-m-selected">
                <CardTitle> <StorageDomainIcon /> Data Stores</CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >5 Total
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2 <ArrowCircleUpIcon color="var(--pf-global--success-color--100)" />
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3 <ArrowCircleDownIcon color="var(--pf-global--danger-color--100)" />
                    </FlexItem>
                  </Flex>
                </CardBody>
              </Card >
            </GalleryItem>
            <GalleryItem>
              <Card className="pf-c-card pf-m-selectable pf-m-selected">
                <CardTitle>SDS Health <HeartbeatIcon />
                </CardTitle>
                <CardBody>
                  <Flex display={{ default: 'inlineFlex' }} spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem > <DesktopIcon /> 1
                      {/* <p>Hosts</p> */}
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2
                      {/* <p>Disks</p> */}
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3
                      {/* <p>Objects</p> */}
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >4
                      {/* <p>Raw Capacity</p> */}
                    </FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem><ResourcePoolIcon /> 5
                      {/* <p>Pool</p> */}
                    </FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
          </Gallery>
        </StackItem>
        <Title headingLevel="h1" size="lg">Workloads</Title>
        <StackItem>
          <Gallery hasGutter>
            <GalleryItem>
              <Card>
                <CardTitle> <VirtualMachineIcon /> VM</CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >1 Total</FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2 <PowerOffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3 <OffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >4 <PauseCircleIcon /></FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card>
                <CardTitle> <PficonTemplateIcon /> Template</CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >1 total</FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card>
                <CardTitle><CubeIcon /> LXD</CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >1 Total</FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2 <PowerOffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3 <OffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >4 <PauseCircleIcon /></FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card>
                <CardTitle><CubeIcon IsIn />  Docker</CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >1 Total</FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2 <PowerOffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3 <OffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >4 <PauseCircleIcon /></FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
            <GalleryItem>
              <Card>
                <CardTitle> <CubesIcon /> kubernetes</CardTitle>
                <CardBody>
                  <Flex spaceItems={{ default: 'spaceItemslg' }}>
                    <FlexItem >1 Total</FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >2 <PowerOffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >3 <OffIcon /></FlexItem>
                    <Divider orientation={{
                      default: 'vertical'
                    }} />
                    <FlexItem >4 <PauseCircleIcon /></FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </GalleryItem>
          </Gallery>
        </StackItem>

        <Title headingLevel="h1" size="lg">Capacity & Utilization</Title>
        <StackItem>
          <Gallery hasGutter>
            <GalleryItem  >
              <Card id="utilization-card-4-card" component="div">
                <CardTitle>
                  CPU Usage
                </CardTitle>
                <CardBody>
                  <UtilizationChart />
                </CardBody>
                <CardFooter>
                  <a href="#">See details</a>
                </CardFooter>
              </Card>
            </GalleryItem>
            <GalleryItem >
              <Card id="utilization-card-4-card" component="div">
                <CardTitle>
                  Memory Usage
                </CardTitle>
                <CardBody>
                  <UtilizationChart />
                </CardBody>
                <CardFooter>
                  <a href="#">See details</a>
                </CardFooter>
              </Card>
            </GalleryItem>
            <GalleryItem >
              <Card id="utilization-card-4-card" component="div">
                <CardTitle>
                  Storage Usage
                </CardTitle>
                <CardBody>
                  <UtilizationChart />
                </CardBody>
                <CardFooter>
                  <a href="#">See details</a>
                </CardFooter>
              </Card>
            </GalleryItem>
            <GalleryItem >
              <Card id="utilization-card-4-card" component="div">
                <CardTitle>
                  Network Usage
                </CardTitle>
                <CardBody>
                  <UtilizationChart />
                </CardBody>
                <CardFooter>
                  <a href="#">See details</a>
                </CardFooter>
              </Card>
            </GalleryItem>
          </Gallery>
        </StackItem>

        <StackItem>
          <Card>
            <CardHeader>
              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
                <FlexItem>
                  <CardTitle>
                    <Title headingLevel="h4" size="lg">Performance</Title>
                  </CardTitle>
                </FlexItem>
              </Flex>
              <CardActions hasNoOffset style={{ paddingTop: '1px' }}>
                <Select
                  placeholderText="Filter"
                  position="right"
                  isPlain>
                </Select>
              </CardActions>
            </CardHeader>
            <Gallery>
              <GalleryItem>
                <Card isPlain >
                  <CardTitle>
                    CPU
                  </CardTitle>
                  <CardBody>
                    <Performance />
                  </CardBody>
                </Card>
              </GalleryItem>
              <GalleryItem>
                <Card isPlain >
                  <CardTitle>
                    Memory
                  </CardTitle>
                  <CardBody>
                    <Performance />
                  </CardBody>
                </Card>
              </GalleryItem>
              <GalleryItem>
                <Card isPlain>
                  <CardTitle>
                    Storage
                  </CardTitle>
                  <CardBody>
                    <Performance />
                  </CardBody>
                </Card>
              </GalleryItem>
              <GalleryItem>
                <Card isPlain >
                  <CardTitle>
                    Network
                  </CardTitle>
                  <CardBody>
                    <Performance />
                  </CardBody>
                </Card>
              </GalleryItem>
            </Gallery>
          </Card>
        </StackItem>
        <StackItem>
          <Card>
            <CardTitle> Events</CardTitle>
            <StackChart />
          </Card>
        </StackItem>

        {/* <Progress /> */}

      </Stack>
    </PageSection>

  }
}
export default Dashboard2