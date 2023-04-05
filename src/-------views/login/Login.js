// import React from 'react';
// //import brandImg2 from './brandImgColor2.svg';
// import {LoginFooterItem, LoginForm, LoginMainFooterBandItem, LoginMainFooterLinksItem, LoginPage, ListItem, ListVariant} from '@patternfly/react-core';
// const brandImg2 = "https://www.patternfly.org/v4/images/brandImgColor2.e2aeff4b068c7bc6bdef555bbda8effb.svg";
// // import pfbg1200 from '@assets/images/pfbg_1200.jpg';
// // import pfbg768 from '@assets/images/pfbg_768.jpg';
// // import pfbg7682 from '@assets/images/pfbg_768@2x.jpg';
// // import pfbg576 from '@assets/images/pfbg_576.jpg';
// // import pfbg5762 from '@assets/images/pfbg_576@2x.jpg';

// import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
//  const SimpleLoginPage = () => {
//   const [showHelperText, setShowHelperText] = React.useState(false);
//   const [username, setUsername] = React.useState('');
//   const [isValidUsername, setIsValidUsername] = React.useState(true);
//   const [password, setPassword] = React.useState('');
//   const [isValidPassword, setIsValidPassword] = React.useState(true);
//   const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);
//   const handleUsernameChange = value => {
//     setUsername(value);
//   };
//   const handlePasswordChange = value => {
//     setPassword(value);
//   };
//   const onRememberMeClick = () => {
//     setIsRememberMeChecked(!isRememberMeChecked);
//   };
//   const onLoginButtonClick = event => {
//     event.preventDefault();
//     setIsValidUsername(!!username);
//     setIsValidPassword(!!password);
//     setShowHelperText(!username || !password);
//   };
//   const socialMediaLoginContent = <React.Fragment>
//       <LoginMainFooterLinksItem href="#" linkComponentProps={{
//     'aria-label': 'Login with Google'
//   }}>
//         <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
//           <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
//         </svg>
//       </LoginMainFooterLinksItem>
//       <LoginMainFooterLinksItem href="#" linkComponentProps={{
//     'aria-label': 'Login with Github'
//   }}>
//         <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
//           <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
//         </svg>
//       </LoginMainFooterLinksItem>
//       <LoginMainFooterLinksItem href="#" linkComponentProps={{
//     'aria-label': 'Login with Dropbox'
//   }}>
//         <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528 512">
//           <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z" />
//         </svg>
//       </LoginMainFooterLinksItem>
//       <LoginMainFooterLinksItem href="#" linkComponentProps={{
//     'aria-label': 'Login with Facebook'
//   }}>
//         <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//           <path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" />
//         </svg>
//       </LoginMainFooterLinksItem>
//       <LoginMainFooterLinksItem href="#" linkComponentProps={{
//     'aria-label': 'Login with Gitlab'
//   }}>
//         <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//           <path d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z" />
//         </svg>
//       </LoginMainFooterLinksItem>
//     </React.Fragment>;
//   const signUpForAccountMessage = <LoginMainFooterBandItem>
//       Need an account? <a href="#">Sign up.</a>
//     </LoginMainFooterBandItem>;
//   const forgotCredentials = <LoginMainFooterBandItem>
//       <a href="#">Forgot username or password?</a>
//     </LoginMainFooterBandItem>;
//   const listItem = <React.Fragment>
//       <ListItem>
//         <LoginFooterItem href="#">Terms of Use </LoginFooterItem>
//       </ListItem>
//       <ListItem>
//         <LoginFooterItem href="#">Help</LoginFooterItem>
//       </ListItem>
//       <ListItem>
//         <LoginFooterItem href="#">Privacy Policy</LoginFooterItem>
//       </ListItem>
//     </React.Fragment>;
//   const loginForm = <LoginForm showHelperText={showHelperText} helperText="Invalid login credentials." helperTextIcon={<ExclamationCircleIcon />} usernameLabel="Username" usernameValue={username} onChangeUsername={handleUsernameChange} isValidUsername={isValidUsername} passwordLabel="Password" passwordValue={password} onChangePassword={handlePasswordChange} isValidPassword={isValidPassword} rememberMeLabel="Keep me logged in for 30 days." isRememberMeChecked={isRememberMeChecked} onChangeRememberMe={onRememberMeClick} onLoginButtonClick={onLoginButtonClick} loginButtonLabel="Log in" />;
//   // const images = {
//   //   lg: pfbg1200,//'/assets/images/pfbg_1200.jpg',
//   //   sm: pfbg768,
//   //   sm2x: pfbg7682,
//   //   xs: pfbg576,
//   //   xs2x: pfbg5762
//   // };

//   const images = {}
//   return <LoginPage footerListVariants={ListVariant.inline} brandImgSrc={brandImg2} brandImgAlt="PatternFly logo" backgroundImgSrc={images} footerListItems={listItem} textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users." loginTitle="Log in to your account" loginSubtitle="Enter your single sign-on LDAP credentials." socialMediaLoginContent={socialMediaLoginContent} signUpForAccountMessage={signUpForAccountMessage} forgotCredentials={forgotCredentials}>
//       {loginForm}
//     </LoginPage>;
// };

// export default SimpleLoginPage

import React from 'react';
import {ApplicationLauncher, ApplicationLauncherItem, Avatar, Brand, Breadcrumb, BreadcrumbItem, Button, ButtonVariant, Card, CardBody, Divider, Dropdown, DropdownGroup, DropdownItem, DropdownToggle, Gallery, GalleryItem, KebabToggle, Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle, Nav, NavItem, NavList, Page, PageSection, PageSectionVariants, PageSidebar, PageToggleButton, SkipToContent, Text, TextContent, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
//import logo from '@app/bgimages/Patternfly-Logo.svg';




export const SimpleLoginPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [isAppLauncherOpen, setIsAppLauncherOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(1);
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
  const dashboardBreadcrumb = <Breadcrumb>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Breadcrumb>;
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
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
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
                Ned Username
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
        <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
          System panel
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
        <Gallery hasGutter>
          {Array.apply(0, Array(50)).map((x, i) => <GalleryItem key={i}>
              <Card>
                <CardBody>This is a card</CardBody>
              </Card>
            </GalleryItem>)}
        </Gallery>
      </PageSection>
    </Page>;
};
 export default SimpleLoginPage