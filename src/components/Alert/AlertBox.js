import React from 'react';
import { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';


const AlertBox = function AlertBox(props) {
  let alert = ''
  if(props.alertData.show==true)
  {
   alert = <Alert
   isInline
   variant={props.alertData.status}
   title={props.alertData.title}
   actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}
 />
  }

  return (
   <React.Fragment>
   {alert}
   </React.Fragment>
  );
}
export default AlertBox;