import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppContent } from '../components/index'

import {ApplicationLauncher, 
  ApplicationLauncherItem, 
  Avatar, Brand, Breadcrumb, 
  BreadcrumbItem, Button,
   ButtonVariant, Card, CardBody, 
   Divider, Dropdown, DropdownGroup, 
   DropdownItem, DropdownToggle, 
   Gallery, GalleryItem, KebabToggle,
   Masthead, MastheadBrand, MastheadContent,
    MastheadMain, MastheadToggle, Nav, NavItem, NavList, 
    Page, PageSection, PageSectionVariants, PageSidebar, 
    PageToggleButton, SkipToContent, Text, TextContent, 
    Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem
    ,DropdownSeparator,toggleVariant,Icon
  } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';


import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
//import logo from '@app/bgimages/Patternfly-Logo.svg';
import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import dbApi from '../services/DbApi'

export const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [isAppLauncherOpen, setIsAppLauncherOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(1);

  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = isOpen => {
    setIsOpen(isOpen);
  };
  const onFocus = () => {
    const element = document.getElementById('toggle-basic');
    element.focus();
  };
  const onSelect = () => {
    setIsOpen(false);
    onFocus();
  };

  var name = useSelector((state) => state.name)
  var favProject = useSelector((state) => state.favProject)
  var projectList = useSelector((state) => state.projectList)

  if(typeof name == 'undefined')
  {
    name = localStorage.getItem('name');
    dispatch({ type: 'set', name: name })
  }

  async function loadProject()
  {
    let projectRes = await dbApi.getApi('get-projects')
    if(projectRes.error==false)
    {
      dispatch({ type: 'set', projectList: projectRes.project})
      dispatch({ type: 'set', favProject: projectRes.favproject})
      return { projectList:projectRes.project,favProject: projectRes.favproject }
    }else
    {
      return { projectList:[],favProject: [] }
    }
  }

  useEffect(() => {
    (async () => {
     //const users = await fetchUsers();


      if(typeof favProject == 'undefined')
      {
        await loadProject()
      }
    })();
  
    return () => {

        
      // this now gets called when the component unmounts
    };
  }, []);

  favProject = useSelector((state) => state.favProject)
  projectList = useSelector((state) => state.projectList)


  const onNavSelect = selectedItem => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };
  const onDropdownToggle = isOpen => {
    setIsDropdownOpen(isOpen);
  };
  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const onKebabDropdownToggle = isOpen => {
    setIsKebabDropdownOpen(isOpen);
  };
  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };
  const onFullKebabDropdownToggle = isOpen => {
    setIsFullKebabDropdownOpen(isOpen);
  };
  const onFullKebabDropdownSelect = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };
  const onAppLauncherToggle = isOpen => {
    setIsAppLauncherOpen(isOpen);
  };
  const onAppLauncherSelect = () => {
    setIsAppLauncherOpen(!isAppLauncherOpen);
  };

  const logOutUser = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    navigate("/login")
  }
  const dashboardBreadcrumb = <Breadcrumb>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Breadcrumb>;


const updateProject = async(id) => {
  alert(id)

//  dispatch({ type: 'set', projectList: []})

}

var projectDropdownItems = []
if(typeof projectList != "undefined")
{

  console.log(favProject)
  var proId = ''
  if(typeof favProject != "undefined")
  {
    proId = favProject['pro_id']
  }
  for(let index in projectList)
  {
      let item = projectList[index]

      let icon = ''
      if(proId==item.pro_id)
      {
        icon = <Icon alignment='left' status="success"><CheckCircleIcon /></Icon>
      }

      projectDropdownItems[index] = 
      <DropdownItem key={'pro_'+index} icon={ icon } onClick={() =>  updateProject(item.pro_id)} >
      {item.project}
      </DropdownItem> 
  }
} 

// const projectDropdownItems = [<DropdownItem key="link" description="This is a description" icon={<CubesIcon />}>
// Link
// </DropdownItem>, <DropdownItem key="action" component="button" icon={<BellIcon />} description="This is a very long description that describes the menu item">
// Action
// </DropdownItem>, <DropdownItem key="disabled link" isDisabled description="Disabled link description">
// Disabled link
// </DropdownItem>, <DropdownItem key="disabled action" isDisabled component="button" description="This is a description">
// Disabled action
// </DropdownItem>];

const projectDropDown = <Dropdown onSelect={onSelect}  toggle={<DropdownToggle toggleVariant="secondary" id="toggle-descriptions" onToggle={onToggle}>
Project
</DropdownToggle>} isOpen={isOpen} dropdownItems={projectDropdownItems} />;

  const kebabDropdownItems = [<DropdownItem key="settings">
      <CogIcon /> Settings
    </DropdownItem>, <DropdownItem key="help">
      <HelpIcon /> Help
    </DropdownItem>];
  const fullKebabDropdownItems = [<DropdownGroup key="group 2">
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </DropdownGroup>, <Divider key="divider" />, <DropdownItem key="settings">
      <CogIcon /> Settings
    </DropdownItem>, <DropdownItem key="help">
      <HelpIcon /> Help
    </DropdownItem>];
  const userDropdownItems = [<DropdownGroup key="group 2">
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>
      <DropdownItem key="group 2 logout" onClick={ logOutUser } >Logout</DropdownItem>
    </DropdownGroup>];
  const appLauncherItems = [<ApplicationLauncherItem key="application_1a" href="#">
      Application 1 (anchor link)
    </ApplicationLauncherItem>, <ApplicationLauncherItem key="application_2a" component="button" onClick={() => alert('Clicked item 2')}>
      Application 2 (button with onClick)
    </ApplicationLauncherItem>];
  const headerToolbar = <Toolbar id="toolbar" isFullHeight isStatic>
      <ToolbarContent>
        <ToolbarGroup variant="icon-button-group" alignment={{
    default: 'alignRight'
  }} spacer={{
    default: 'spacerNone',
    md: 'spacerMd'
  }}>
          <ToolbarItem>
            {projectDropDown}
          </ToolbarItem>



          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
          </ToolbarItem>
          <ToolbarGroup variant="icon-button-group" visibility={{
    default: 'hidden',
    lg: 'visible'
  }}>
            <ToolbarItem visibility={{
    default: 'hidden',
    md: 'hidden',
    lg: 'visible'
  }}>
              <ApplicationLauncher onSelect={onAppLauncherSelect} onToggle={onAppLauncherToggle} isOpen={isAppLauncherOpen} items={appLauncherItems} />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{
    default: 'hidden',
    md: 'visible',
    lg: 'hidden'
  }}>
            <Dropdown isPlain position="right" onSelect={onKebabDropdownSelect} toggle={<KebabToggle onToggle={onKebabDropdownToggle} />} isOpen={isKebabDropdownOpen} dropdownItems={kebabDropdownItems} />
          </ToolbarItem>
          <ToolbarItem visibility={{
    md: 'hidden'
  }}>
            <Dropdown isPlain position="right" onSelect={onFullKebabDropdownSelect} toggle={<KebabToggle onToggle={onFullKebabDropdownToggle} />} isOpen={isFullKebabDropdownOpen} dropdownItems={fullKebabDropdownItems} />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem visibility={{
    default: 'hidden',
    md: 'visible'
  }}>
          <Dropdown isFullHeight onSelect={onDropdownSelect} isOpen={isDropdownOpen} toggle={<DropdownToggle  onToggle={onDropdownToggle}>
                {name}
              </DropdownToggle>} dropdownItems={userDropdownItems} />
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>;
  const masthead = <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand widths={{
    default: '180px',
    md: '180px',
    '2xl': '220px'
  }} src={require('@app/bgimages/Patternfly-Logo.svg')} alt="Fallback patternFly default logo">
            <source media="(min-width: 768px)" srcSet={require('@app/assest/images/logo__pf--reverse-on-md.svg')} />
            <source srcSet={require('@app/assest/images/logo__pf--reverse--base.svg')} />
          </Brand>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>;
  const pageNav = <Nav onSelect={onNavSelect}>
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#/dashboard">
          Dashboard
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#network">
          Network services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>;
  const sidebar = <PageSidebar nav={pageNav} />;
  const mainContainerId = 'main-content';
  const pageSkipToContent = <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>;
  return <Page header={masthead} sidebar={sidebar} isManagedSidebar skipToContent={pageSkipToContent} breadcrumb={dashboardBreadcrumb} mainContainerId={mainContainerId} isBreadcrumbWidthLimited isBreadcrumbGrouped additionalGroupedContent={<PageSection variant={PageSectionVariants.light} isWidthLimited>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">This is a full page demo.</Text>
          </TextContent>
        </PageSection>} groupProps={{
    stickyOnBreakpoint: {
      default: 'top'
    }
  }}>
      <PageSection>
         <AppContent></AppContent>
      </PageSection>
    </Page>;
};
 export default AppLayout