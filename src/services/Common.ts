import Axios from "axios";
import {NOT_RESPOND,BAD_REQUEST} from '../constant/constants';
import { useSelector, useDispatch } from 'react-redux'
import dbApi from '../services/DbApi';

// class Common extends React.Component {
//   dispatch:any
//   constructor(props){
//     super(props)
//     this.state = {
//         reduxState : {}
//     }
// }
// // constructor()
// // {



// //   this.dispatch = useDispatch()
// //   const counter = useSelector(state => state.counter);
// // }
  

const getProject =  async function getProject()
{
  const dispatch = useDispatch()
  let projectRes = await dbApi.getApi('get-projects')
  if(projectRes.error==false)
  {
    dispatch({ type: 'set', projectList: projectRes.project})
    dispatch({ type: 'set', favProject: projectRes.favproject})
  } 
}
const setName = function setName()
{
  const dispatch = useDispatch()
  let name = localStorage.getItem('name');
  dispatch({ type: 'set', name: name})
}


export {getProject,setName}