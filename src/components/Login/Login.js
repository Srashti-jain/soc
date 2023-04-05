import React from 'react';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import {LoginFooterItem, LoginForm, LoginMainFooterBandItem, LoginMainFooterLinksItem, LoginPage, ListItem, ListVariant} from '@patternfly/react-core';
import AlertBox from '../Alert/AlertBox';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import dbApi from '@app/services/DbApi';


const brandImg2 = "https://www.patternfly.org/v4/images/brandImgColor2.e2aeff4b068c7bc6bdef555bbda8effb.svg";
import pfbg1200 from '@assets/images/pfbg_1200.jpg';
import pfbg768 from '@assets/images/pfbg_768.jpg';
import pfbg7682 from '@assets/images/pfbg_768@2x.jpg';
import pfbg576 from '@assets/images/pfbg_576.jpg';
import pfbg5762 from '@assets/images/pfbg_576@2x.jpg';
//import brandImg2 from '@assets/images/brandImgColor2.svg'; 
const SimpleLoginPage = () => {
  const [showHelperText, setShowHelperText] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [isValidUsername, setIsValidUsername] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);

  const [alertStatus, setAlert] = React.useState({show:false,status:'success',title:''});
  const dispatch = useDispatch()

  const handleUsernameChange = value => {
    setUsername(value);
  };
  const handlePasswordChange = value => {
    setPassword(value);
  };
  const onRememberMeClick = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  // const onLoginButtonClick = async(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   event.preventDefault();
  //   setIsValidUsername(!!username);
  //   setIsValidPassword(!!password);
  //   setShowHelperText(!username || !password);
  //   if(username && password)
  //   {
  //     let data = {
  //       username: username,
  //       password: password,
  //   }
  //     let res = await dbApi.postApi('login',data)
  //     console.log(res)

  //     //history.push("/dashboard")
  //   }
  // };
  const navigate = useNavigate()

  const onLoginButtonClick = async(event) => {
    event.preventDefault();
    setIsValidUsername(!!username);
    setIsValidPassword(!!password);
    setShowHelperText(!username || !password);

    if(username && password)
    {
      let data = {
        username: username,
        password: password,
    }
      let res = await dbApi.postApi('login',data)
      if(res.error==false)
      {
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', res.name);
        localStorage.setItem('role', res.role);
        localStorage.setItem('id', res.userId);
        
        let projectRes = await dbApi.getApi('get-projects')
        if(projectRes.error==false)
        {
          dispatch({ type: 'set', projectList: projectRes.project})
          dispatch({ type: 'set', favProject: projectRes.favproject})
        }
        dispatch({ type: 'set', name: res.name})
        setAlert({show:true, status:'success', title:res.message})
        navigate("/dashboard")
      }else
      {
        setAlert({show:true, status:'danger', title:res.message})
      }    


    }

  };

  const forgotCredentials = <LoginMainFooterBandItem>
      <a href="#">Forgot username or password?</a>
    </LoginMainFooterBandItem>;
  const listItem = <React.Fragment>
      <ListItem>
        <LoginFooterItem href="#">Terms of Use </LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="#">Help</LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="#">Privacy Policy</LoginFooterItem>
      </ListItem>
    </React.Fragment>;
  const loginForm = <LoginForm showHelperText={showHelperText} helperText="Invalid login credentials." helperTextIcon={<ExclamationCircleIcon />} usernameLabel="Username" usernameValue={username} onChangeUsername={handleUsernameChange} isValidUsername={isValidUsername} passwordLabel="Password" passwordValue={password} onChangePassword={handlePasswordChange} isValidPassword={isValidPassword} rememberMeLabel="Keep me logged in for 30 days." isRememberMeChecked={isRememberMeChecked} onChangeRememberMe={onRememberMeClick} onLoginButtonClick={onLoginButtonClick} loginButtonLabel="Log in" />;
  const images = {
    lg: pfbg1200,//'/assets/images/pfbg_1200.jpg',
    sm: pfbg768,
    sm2x: pfbg7682,
    xs: pfbg576,
    xs2x: pfbg5762
  };
  return <LoginPage footerListVariants={ListVariant.inline} brandImgSrc={brandImg2} brandImgAlt="PatternFly logo" backgroundImgSrc={images} footerListItems={listItem} textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users." loginTitle="Log in to your account" loginSubtitle="Enter your single sign-on LDAP credentials." forgotCredentials={forgotCredentials}>
      {<AlertBox alertData={alertStatus} ></AlertBox>}
      {loginForm}
    </LoginPage>;
};

export default SimpleLoginPage

// import React from 'react';
// import {ApplicationLauncher, ApplicationLauncherItem, Avatar, Brand, Breadcrumb, BreadcrumbItem, Button, ButtonVariant, Card, CardBody, Divider, Dropdown, DropdownGroup, DropdownItem, DropdownToggle, Gallery, GalleryItem, KebabToggle, Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle, Nav, NavItem, NavList, Page, PageSection, PageSectionVariants, PageSidebar, PageToggleButton, SkipToContent, Text, TextContent, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem} from '@patternfly/react-core';
// import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
// import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
// import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
// import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
// import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
// import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
// //import logo from '@app/bgimages/Patternfly-Logo.svg';




// export const SimpleLoginPage = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
//   const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
//   const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
//   const [isAppLauncherOpen, setIsAppLauncherOpen] = React.useState(false);
//   const [activeItem, setActiveItem] = React.useState(1);
//   const onNavSelect = selectedItem => {
//     typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
//   };
//   const onDropdownToggle = isOpen => {
//     setIsDropdownOpen(isOpen);
//   };
//   const onDropdownSelect = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
//   const onKebabDropdownToggle = isOpen => {
//     setIsKebabDropdownOpen(isOpen);
//   };
//   const onKebabDropdownSelect = () => {
//     setIsKebabDropdownOpen(!isKebabDropdownOpen);
//   };
//   const onFullKebabDropdownToggle = isOpen => {
//     setIsFullKebabDropdownOpen(isOpen);
//   };
//   const onFullKebabDropdownSelect = () => {
//     setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
//   };
//   const onAppLauncherToggle = isOpen => {
//     setIsAppLauncherOpen(isOpen);
//   };
//   const onAppLauncherSelect = () => {
//     setIsAppLauncherOpen(!isAppLauncherOpen);
//   };
//   const dashboardBreadcrumb = <Breadcrumb>
//       <BreadcrumbItem>Section home</BreadcrumbItem>
//       <BreadcrumbItem to="#">Section title</BreadcrumbItem>
//       <BreadcrumbItem to="#">Section title</BreadcrumbItem>
//       <BreadcrumbItem to="#" isActive>
//         Section landing
//       </BreadcrumbItem>
//     </Breadcrumb>;
//   const kebabDropdownItems = [<DropdownItem key="settings">
//       <CogIcon /> Settings
//     </DropdownItem>, <DropdownItem key="help">
//       <HelpIcon /> Help
//     </DropdownItem>];
//   const fullKebabDropdownItems = [<DropdownGroup key="group 2">
//       <DropdownItem key="group 2 profile">My profile</DropdownItem>
//       <DropdownItem key="group 2 user" component="button">
//         User management
//       </DropdownItem>
//       <DropdownItem key="group 2 logout">Logout</DropdownItem>
//     </DropdownGroup>, <Divider key="divider" />, <DropdownItem key="settings">
//       <CogIcon /> Settings
//     </DropdownItem>, <DropdownItem key="help">
//       <HelpIcon /> Help
//     </DropdownItem>];
//   const userDropdownItems = [<DropdownGroup key="group 2">
//       <DropdownItem key="group 2 profile">My profile</DropdownItem>
//       <DropdownItem key="group 2 user" component="button">
//         User management
//       </DropdownItem>
//       <DropdownItem key="group 2 logout">Logout</DropdownItem>
//     </DropdownGroup>];
//   const appLauncherItems = [<ApplicationLauncherItem key="application_1a" href="#">
//       Application 1 (anchor link)
//     </ApplicationLauncherItem>, <ApplicationLauncherItem key="application_2a" component="button" onClick={() => alert('Clicked item 2')}>
//       Application 2 (button with onClick)
//     </ApplicationLauncherItem>];
//   const headerToolbar = <Toolbar id="toolbar" isFullHeight isStatic>
//       <ToolbarContent>
//         <ToolbarGroup variant="icon-button-group" alignment={{
//     default: 'alignRight'
//   }} spacer={{
//     default: 'spacerNone',
//     md: 'spacerMd'
//   }}>
//           <ToolbarItem>
//             <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
//           </ToolbarItem>
//           <ToolbarGroup variant="icon-button-group" visibility={{
//     default: 'hidden',
//     lg: 'visible'
//   }}>
//             <ToolbarItem visibility={{
//     default: 'hidden',
//     md: 'hidden',
//     lg: 'visible'
//   }}>
//               <ApplicationLauncher onSelect={onAppLauncherSelect} onToggle={onAppLauncherToggle} isOpen={isAppLauncherOpen} items={appLauncherItems} />
//             </ToolbarItem>
//             <ToolbarItem>
//               <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
//             </ToolbarItem>
//             <ToolbarItem>
//               <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
//             </ToolbarItem>
//           </ToolbarGroup>
//           <ToolbarItem visibility={{
//     default: 'hidden',
//     md: 'visible',
//     lg: 'hidden'
//   }}>
//             <Dropdown isPlain position="right" onSelect={onKebabDropdownSelect} toggle={<KebabToggle onToggle={onKebabDropdownToggle} />} isOpen={isKebabDropdownOpen} dropdownItems={kebabDropdownItems} />
//           </ToolbarItem>
//           <ToolbarItem visibility={{
//     md: 'hidden'
//   }}>
//             <Dropdown isPlain position="right" onSelect={onFullKebabDropdownSelect} toggle={<KebabToggle onToggle={onFullKebabDropdownToggle} />} isOpen={isFullKebabDropdownOpen} dropdownItems={fullKebabDropdownItems} />
//           </ToolbarItem>
//         </ToolbarGroup>
//         <ToolbarItem visibility={{
//     default: 'hidden',
//     md: 'visible'
//   }}>
//           <Dropdown isFullHeight onSelect={onDropdownSelect} isOpen={isDropdownOpen} toggle={<DropdownToggle  onToggle={onDropdownToggle}>
//                 Ned Username
//               </DropdownToggle>} dropdownItems={userDropdownItems} />
//         </ToolbarItem>
//       </ToolbarContent>
//     </Toolbar>;
//   const masthead = <Masthead>
//       <MastheadToggle>
//         <PageToggleButton variant="plain" aria-label="Global navigation">
//           <BarsIcon />
//         </PageToggleButton>
//       </MastheadToggle>
//       <MastheadMain>
//         <MastheadBrand>
//           <Brand widths={{
//     default: '180px',
//     md: '180px',
//     '2xl': '220px'
//   }} src={require('@app/bgimages/Patternfly-Logo.svg')} alt="Fallback patternFly default logo">
//             <source media="(min-width: 768px)" srcSet={require('@app/assest/images/logo__pf--reverse-on-md.svg')} />
//             <source srcSet={require('@app/assest/images/logo__pf--reverse--base.svg')} />
//           </Brand>
//         </MastheadBrand>
//       </MastheadMain>
//       <MastheadContent>{headerToolbar}</MastheadContent>
//     </Masthead>;
//   const pageNav = <Nav onSelect={onNavSelect}>
//       <NavList>
//         <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
//           System panel
//         </NavItem>
//         <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
//           Policy
//         </NavItem>
//         <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
//           Authentication
//         </NavItem>
//         <NavItem itemId={3} isActive={activeItem === 3} to="#network">
//           Network services
//         </NavItem>
//         <NavItem itemId={4} isActive={activeItem === 4} to="#server">
//           Server
//         </NavItem>
//       </NavList>
//     </Nav>;
//   const sidebar = <PageSidebar nav={pageNav} />;
//   const mainContainerId = 'main-content';
//   const pageSkipToContent = <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>;
//   return <Page header={masthead} sidebar={sidebar} isManagedSidebar skipToContent={pageSkipToContent} breadcrumb={dashboardBreadcrumb} mainContainerId={mainContainerId} isBreadcrumbWidthLimited isBreadcrumbGrouped additionalGroupedContent={<PageSection variant={PageSectionVariants.light} isWidthLimited>
//           <TextContent>
//             <Text component="h1">Main title</Text>
//             <Text component="p">This is a full page demo.</Text>
//           </TextContent>
//         </PageSection>} groupProps={{
//     stickyOnBreakpoint: {
//       default: 'top'
//     }
//   }}>
//       <PageSection>
//         <Gallery hasGutter>
//           {Array.apply(0, Array(50)).map((x, i) => <GalleryItem key={i}>
//               <Card>
//                 <CardBody>This is a card</CardBody>
//               </Card>
//             </GalleryItem>)}
//         </Gallery>
//       </PageSection>
//     </Page>;
// };
//  export default SimpleLoginPage