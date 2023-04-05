import React from 'react';
//import { Button } from '@patternfly/react-core';
//import brandImg from './brandImg.svg';
import { Link } from 'react-router-dom'

// export const AboutModalBasic = () => {
//   const [isModalOpen, setIsModalOpen] = React.useState(false);
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,.
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'

const Dashboard = () => {
  return <div>Dashboard
          <div className="ms-auto">
        <span className="me-1">Class Component </span>
            <Link to="/classcom">Class Component</Link>
            <br/>
                        <span className="me-1">Props Parents </span>
            <Link to="/propsparents">Props Parents</Link>
            <br/>
                        <span className="me-1">Events Parents </span>
            <Link to="/eventsparents">Events Parents</Link>
            <br/>
                        <span className="me-1">Clock </span>
            <Link to="/clock">Clock</Link>
            <br/>
                        <span className="me-1">StateListParents </span>
            <Link to="/statelistparents">StateListParents</Link>
            <br/>
                        <span className="me-1">StateUsingHookListParents </span>
            <Link to="/stateusinghooklistparents">StateUsingHookListParents</Link>
            <br/>
                        <span className="me-1">ContainmentParents </span>
            <Link to="/containmentparents">ContainmentParents</Link>
            <br/>
                        <span className="me-1">PagerParents </span>
            <Link to="/pagerparents">PagerParents</Link>
            <br/>
                        <span className="me-1">FormParents </span>
            <Link to="/formparents">FormParents</Link>
            <br/>
                        <span className="me-1">FormikParents </span>
            <Link to="/formikparents">FormikParents</Link>
      </div>
     </div>
  ;
};


export default Dashboard
