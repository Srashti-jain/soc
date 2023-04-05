import React from 'react';
import BarChart from './BarChart';
import Table from './Table';
import Selector from './Selector';
import {
  Popover, Button, TextInput, Text, Sidebar, Switch, SidebarContent, SidebarPanel, Form, FormGroup, Badge, Title, TextVariants,
  GridItem, Grid, SearchInput, List, Select, SelectOption, SelectVariant, ListItem, InputGroup, Divider, PageSection, ToggleGroup,
  ToggleGroupItem, PageToggleButton, PageSidebar, ActionList, ActionListItem, DescriptionList, DescriptionListTerm, DescriptionListGroup,
  DescriptionListDescription, InputGroupText, Page,
} from '@patternfly/react-core';
import { BarsIcon, SaveIcon, CheckIcon, RedoIcon, PlusIcon, AngleDownIcon, FilterAltIcon, OutlinedCalendarAltIcon, PlayIcon } from '@patternfly/react-icons/dist/esm/icons';
import { Flex, FlexItem } from '@patternfly/react-core/dist/esm/layouts';
import { AngleLeftIcon } from '@patternfly/react-icons';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { right } from '@patternfly/react-core/dist/esm/helpers/Popper/thirdparty/popper-core';
class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      selected: null,
      isDisabled: true,

    };

    this.dcoptions = [
      <SelectOption key={0} value="Skyvirt-dc" isOpen="false" />,
      <SelectOption key={1} value="test-dc1" isOpen="false" />,
      <SelectOption key={2} value="test-dc2" isOpen="false" />,
    ];
    this.timeoptions = [
      <SelectOption key={0} value="seconds" isOpen="false" />,
      <SelectOption key={1} value="minutes" isOpen="false" />,
      <SelectOption key={2} value="hours" isOpen="false" />,
    ];
    this.time1options = [
      <SelectOption key={0} value="seconds" isOpen="false" />,
      <SelectOption key={1} value="minutes" isOpen="false" />,
      <SelectOption key={2} value="hours" isOpen="false" />,
      <SelectOption key={3} value="days" isOpen="false" />,
      <SelectOption key={4} value="weeks" isOpen="false" />,
      <SelectOption key={5} value="months" isOpen="false" />,
      <SelectOption key={6} value="years" isOpen="false" />,
    ];
    this.time2options = [
      <SelectOption key={0} value="Last" isOpen="false" />,
      <SelectOption key={1} value="Next" isOpen="false" />,
    ];

    this.onToggle = (isOpen) => {
      this.setState({
        isOpen
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isOpen: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isOpen: false
      });
    };
  }


  render() {
    const { isOpen, selected, isDisabled } = this.state;

    const Sidebarin =
      <PageSection variant='light'>
        <b>Soc alerts-*</b>
        <Popover
          aria-label="Basic popover"
          showClose={false}
          headerContent={<div>CHANGE INDEX PATTERN <Divider /></div>}
          bodyContent={<div><TextInput
            value={this.state.search}
            type="text"
            placeholder="search"
            iconVariant="search"
            onChange={value => setSearch(value)}
          /><Divider /></div>}
          footerContent={<div><CheckIcon /> <Button variant='link'>Soc alerts-*</Button> </div>}
        >
          <AngleDownIcon />
        </Popover>
        <br />
        <SearchInput placeholder="Search field names" />
        <Popover
          showClose={false}
          hasAutoWidth
          headerContent={<div>FILTER BY TYPE</div>}
          bodyContent={
            <div>
              <Form isHorizontal>
                <FormGroup label="Aggregatable" >
                  <ToggleGroup aria-label="Default with single selectable">
                    <ToggleGroupItem text="Any" buttonId="toggle-group-single-1" />
                    <ToggleGroupItem text="Yes" buttonId="toggle-group-single-2" />
                    <ToggleGroupItem text="No" buttonId="toggle-group-single-3" />
                  </ToggleGroup>
                </FormGroup>
                <FormGroup label="Searchable"  >
                  <ToggleGroup aria-label="Default with single selectable">
                    <ToggleGroupItem text="Any" buttonId="toggle-group-single-4" />
                    <ToggleGroupItem text="Yes" buttonId="toggle-group-single-5" />
                    <ToggleGroupItem text="No" buttonId="toggle-group-single-6" />
                  </ToggleGroup>
                </FormGroup>
                <FormGroup label="Type"  >
                  <ToggleGroup aria-label="Default with single selectable">
                    <ToggleGroupItem text="Any" buttonId="toggle-group-single-7" />
                    <ToggleGroupItem text="Yes" buttonId="toggle-group-single-8" />
                    <ToggleGroupItem text="No" buttonId="toggle-group-single-9" />
                  </ToggleGroup>
                </FormGroup>
              </Form>
            </div>}
          footerContent={<Switch
            id="simple-switch"
            label="Hide missing fields"
            // isChecked={isChecked}
            // onChange={this.handleChange}
            hasCheckIcon
          />}
        >
          <Button variant="link" icon={<FilterAltIcon isSmall />}
            isSmall> Filter by type
            {/* <Badge key={1} isRead align="right" > 0</Badge> */}
          </Button>
        </Popover>
        <List isPlain>  <b>Selected fields</b>
          <ListItem>agent.name</ListItem>
          <ListItem>rule.description</ListItem>
          <ListItem>rule.level</ListItem>
          <ListItem>rule.id</ListItem>
        </List>
        <List isPlain> <b> available fields</b>
          <ListItem>agent.name</ListItem>
          <ListItem>rule.description</ListItem>
          <ListItem>rule.level</ListItem>
          <ListItem>agent.ip</ListItem>
          <ListItem>rule.id</ListItem>
          <ListItem>data.protocol</ListItem>
          <ListItem>data.id</ListItem>
          <ListItem>data.scrip</ListItem>
        </List>
      </PageSection>

    const Addfilterform = <div>
      <Form>
        <Grid hasGutter >
          <GridItem span={8}>
            <FormGroup label="Field" isRequired fieldId="simple-form-name">
              <Select
                id='simple-form-name'
                variant={SelectVariant.single}
                onToggle={this.onToggle}
                onSelect={this.onSelect}
                onClear={this.clearSelection}
                selections={selected}
                isOpen={isOpen}
                placeholderText="Select a fields first"
                aria-label="Select Input">
                {this.dcoptions}
              </Select>
            </FormGroup>
          </GridItem>
          <GridItem span={4}>
            <FormGroup label="Operator" isRequired fieldId="simple-form-name2">
              <Select
                id='simple-form-name2'
                variant={SelectVariant.single}
                // onToggle={this.onToggle}
                onSelect={this.onSelect}
                onClear={this.clearSelection}
                selections={selected}
                isOpen={isOpen}
                isDisabled={isDisabled}
                placeholderText="Waiting"
                aria-label="Select Input">
                {/* {this.dcoptions} */}
              </Select>
            </FormGroup>
          </GridItem>
        </Grid>
      </Form>
    </div>

    return (<div>
     <PageSection >
        <Grid hasGutter >
          <GridItem span={6}>
            <InputGroup>
              <InputGroupText>
                <Button variant="Link" icon={<SaveIcon isSmall />}>
                  <Popover
                    aria-label="Basic popover"
                    showClose={false}
                    headerContent={<div>SAVED QUERIES <Divider /></div>}
                    bodyContent={<div><Text>There are no saved queries. Save query text and filters that you want to use again. </Text><Divider /></div>}
                    footerContent={<div><Button isSmall>Save current query</Button> </div>}
                  >
                    <AngleDownIcon isSmall />
                  </Popover>
                </Button>
              </InputGroupText>
              <TextInput name="text1" id="text1" aria-label="text with buttons" placeholder='Search' />
            </InputGroup>
          </GridItem>
          <GridItem span={5}>
            <InputGroup>
              <InputGroupText>
                <Button variant="Link" icon={<OutlinedCalendarAltIcon isSmall />}>
                  <Popover
                    aria-label="Basic popover"
                    showClose={false}
                    hasAutoWidth
                    headerContent={<div>
                      <Flex direction={{ default: 'row' }}>
                        <FlexItem>
                          <Text component={TextVariants.small}>Quick Select</Text>
                        </FlexItem>
                        <FlexItem align={{ default: 'alignRight' }}>
                          <AngleLeftIcon />
                        </FlexItem>
                        <FlexItem >
                          <AngleRightIcon isSmall />
                        </FlexItem>
                      </Flex>
                      <Form>
                        <Flex hasGutter>
                          <FlexItem span={3}>
                            <FormGroup>
                              <Select
                                id='simple-form-name'
                                variant={SelectVariant.single}
                                onToggle={this.onToggle}
                                // onSelect={this.onSelect}
                                // onClear={this.clearSelection}
                                // selections={selected}
                                // isOpen={isOpen}
                                placeholderText="Last"
                                aria-label="Select Input">
                                {this.time2options}
                              </Select>
                            </FormGroup>
                          </FlexItem>
                          <FlexItem span={3}>
                            <FormGroup>
                              <TextInput type="number" />
                            </FormGroup>
                          </FlexItem>
                          <FlexItem span={3}>
                            <FormGroup>
                              <Select
                                id='simple-form-name'
                                variant={SelectVariant.single}
                                onToggle={this.onToggle}
                                // onSelect={this.onSelect}
                                // onClear={this.clearSelection}
                                // selections={selected}
                                // isOpen={isOpen}
                                placeholderText="minutes"
                                aria-label="Select Input">
                                {this.time1options}
                              </Select>
                            </FormGroup>
                          </FlexItem>
                          <FlexItem span={3}>
                            <FormGroup>
                              <Button isSmall isPlain variant='secondary' > Apply </Button>
                            </FormGroup>
                          </FlexItem>
                        </Flex>
                      </Form>
                      <br />
                      <Divider />
                    </div>}
                    bodyContent={<div>
                      <Text component={TextVariants.h6} >Commonly Used </Text>
                      <DescriptionList isHorizontal>
                        <DescriptionListGroup>
                          <DescriptionListTerm><Button variant="link" isInline>
                            Today
                          </Button>
                          </DescriptionListTerm>
                          <DescriptionListDescription> <Button variant="link" isInline>
                            Last 24 hours
                          </Button></DescriptionListDescription>
                          <DescriptionListTerm><Button variant="link" isInline>
                            This week
                          </Button></DescriptionListTerm>
                          <DescriptionListDescription>
                            <Button variant="link" isInline>
                              Last 7 days
                            </Button>
                          </DescriptionListDescription>
                          <DescriptionListTerm> <Button variant="link" isInline>
                            Last 15 minutes
                          </Button></DescriptionListTerm>
                          <DescriptionListDescription><Button variant="link" isInline>
                            Last 30 days
                          </Button></DescriptionListDescription>
                          <DescriptionListTerm><Button variant="link" isInline>
                            Last 30 minutes
                          </Button></DescriptionListTerm>
                          <DescriptionListDescription>
                            <Button variant="link" isInline>
                              Last 90 days
                            </Button>
                          </DescriptionListDescription>
                          <DescriptionListTerm> <Button variant="link" isInline>
                            Last 1 hour
                          </Button></DescriptionListTerm>
                          <DescriptionListDescription><Button variant="link" isInline>
                            Last 1 year
                          </Button></DescriptionListDescription>
                        </DescriptionListGroup>
                      </DescriptionList>
                      <br />
                      <Divider />
                      <br />
                      <Text component={TextVariants.h6} >Recently used date ranges </Text>
                      <br />
                      <Button variant="link" isInline> Last 24 hours </Button>
                      <br />
                      <Button variant="link" isInline> Today </Button>
                      <br />
                      <Divider />
                    </div>}
                    footerContent={<div>
                      <Text component={TextVariants.h6} >Refresh every</Text>
                      <Form>
                        <Grid hasGutter>
                          <GridItem span={5}>
                            <FormGroup>
                              <TextInput type="number" />
                            </FormGroup>
                          </GridItem>
                          <GridItem span={5}>
                            <FormGroup>
                              <Select
                                id='simple-form-name'
                                variant={SelectVariant.single}
                                onToggle={this.onToggle}
                                // onSelect={this.onSelect}
                                // onClear={this.clearSelection}
                                // selections={selected}
                                // isOpen={isOpen}
                                placeholderText="seconds"
                                aria-label="Select Input">
                                {this.timeoptions}
                              </Select>
                            </FormGroup>
                          </GridItem>
                          <GridItem span={2}>
                            <FormGroup>
                              <Button isDisabled isSmall isPlain
                                icon={<PlayIcon />} > Start </Button>
                            </FormGroup>
                          </GridItem>
                        </Grid>
                      </Form></div>}>
                    <AngleDownIcon />
                  </Popover>
                </Button>
              </InputGroupText>
              <TextInput name="text2" id="text2" aria-label="text with buttons" placeholder='Last 24 hours' />
            </InputGroup>
          </GridItem>
          <GridItem span={1} >
            <Button align="right" icon={<RedoIcon />}>Refresh</Button>
          </GridItem>
        </Grid>
        <Grid  >
          <GridItem span={2}>
            {/* <Button variant="link" icon={<PlusIcon isSmall />} isSmall> Add Filter </Button> */}
            <Popover
              aria-label="Basic popover"
              showClose={false}
              hasAutoWidth
              headerContent={<div>
                <Flex direction={{ default: 'row' }}>
                  <FlexItem>
                    <Text component={TextVariants.small}>Edit Filter</Text>
                  </FlexItem>
                  <FlexItem align={{ default: 'alignRight' }}>
                    <Button variant="link" isSmall>Edit As Query DSL </Button>
                  </FlexItem>
                </Flex> <Divider /></div>}
              bodyContent={<React.Fragment>
                {Addfilterform}
                <br />
                <Switch id="uncontrolled-switch-with-label" label="Create Custom Label?" defaultChecked={false} />
                <br />
                <Divider />
              </React.Fragment>}
              footerContent={<div>
                <ActionList>
                  <ActionListItem>
                    <Button variant="link" id="with-cancel-cancel-button">
                      Cancel
                    </Button>
                  </ActionListItem>
                  <ActionListItem>
                    <Button variant="primary" id="with-cancel-save-button" isDisabled>
                      Save
                    </Button>
                  </ActionListItem>
                </ActionList></div>}
            >
              <Button variant="link" icon={<PlusIcon isSmall />} isSmall> Add Filter </Button>
            </Popover>
          </GridItem>
        </Grid>

        <Grid hasGutter>
          <GridItem>
            <Sidebar >
              <PageSidebar nav={Sidebarin} theme='light' />
              <PageToggleButton variant="plain" >
                <BarsIcon />
              </PageToggleButton>
              {/* <BarsIcon /> */}
              <SidebarContent >
                <Text align="center" ><b>51,230</b>hits</Text>

                <div style={{ margin: 'auto' }}> <Selector /></div>
                <BarChart />
                <br />
                <Table />

              </SidebarContent>
            </Sidebar>
          </GridItem>
        </Grid>
      </PageSection>
     
    </div>


    )
  }
}
export default Events;