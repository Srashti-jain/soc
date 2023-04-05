import Axios from "axios";
import {NOT_RESPOND,BAD_REQUEST} from '../constant/constants';

const API_URL = process.env.API_URL

class dbApi {
  setHeader() {
    let token = localStorage.getItem('token');
    let header = {
      headers: {
        Authorization: 'Bearer ' + token,
      }
  };
  return header;
}

 async postApi(url:any,data:any,loader:any = true)
{
        let header = this.setHeader()
        if(loader==true)
        {
          //this.showLoading(true);
        }
        let response:any = [];
        try {
          response = await Axios.post(API_URL+url,data,header);
        } catch (error:any) {
          if(loader==true)
          {
          //  this.showLoading(false);
          }
            if(error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
                //console.log(error.response.data);
                return error.response.data;
                // console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                /*
                * The request was made but no response was received, `error.request`
                * is an instance of XMLHttpRequest in the browser and an instance 
                * of http.ClientRequest in Node.js
                */
                console.log(error.request);
                response = {'error':true,'message':NOT_RESPOND};
                return response;
            } else {
                // Something happened in setting up the request and triggered an Error
                //console.log('3');
                console.log('Error', error.message);
                response = {'error':true,'message':BAD_REQUEST};
                return response;
            }
        }
        if(response.status === 200) 
        {
          if(loader==true)
          {
            //this.showLoading(false);
          }
          return response.data;
        }
  }

  async getApi(url:any,loader:any = true)
  {
    let header = this.setHeader()
    if(loader==true)
    {
      //this.showLoading(true);
    }
    let response:any = [];
    try 
    {
      response = await Axios.get(API_URL+url,header);
    }catch (error:any)
    {
      if(loader==true)
      {
      //  this.showLoading(false);
      }
        if(error.response) {
            /*
            * The request was made and the server responded with a
            * status code that falls out of the range of 2xx
            */
            //console.log(error.response.data);
            return error.response.data;
            // console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            /*
            * The request was made but no response was received, `error.request`
            * is an instance of XMLHttpRequest in the browser and an instance 
            * of http.ClientRequest in Node.js
            */
            console.log(error.request);
            response = {'error':true,'message':NOT_RESPOND};
            return response;
        } else {
            // Something happened in setting up the request and triggered an Error
            //console.log('3');
            console.log('Error', error.message);
            response = {'error':true,'message':BAD_REQUEST};
            return response;
        }

    }
    if(response.status === 200) 
    {
      if(loader==true)
      {
        //this.showLoading(false);
      }
      return response.data;
    }
  }

}
export default new dbApi();