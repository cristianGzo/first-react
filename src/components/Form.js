import * as React from "react";
import {Apiurl} from '../network/apiUser'
import axios from "axios";


class Form extends React.Component {
 
  constructor(props){
    super(props)
  }


  state = {
    form: {
      usuario: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };

 



  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    //console.log(this.state.form);
  };


  manejadorBoton =()=>{
    let url=Apiurl+"auth";
    axios.post(url, this.state.form)
    .then( response => {
      
      if(response.data.status === "ok"){
        localStorage.setItem("token",response.data.result.token);
        this.props.history.push("/dashboard")
        console.log(this.state.form.usuario)
      }else{
        this.setState({
          error : true,
          errorMsg : response.data.result.error_msg
        })
      }
    }).catch( error =>{
      console.log(error);
      this.setState({
        error : true,
        errorMsg : "Sin conexion al API"
      })
      
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Welcome To Do</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your details
          </p>
          <div className="mt-8">
            <form>
              <label className="text-lg font-medium">Email</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                name="usuario"
                onChange={this.manejadorChange}
              />
            
              <label className="text-lg font-medium">password</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your Password"
                name="password"
                type="password"
                onChange={this.manejadorChange}
              />
            </form>

            {this.state.error=== true &&
              <div className="mt-8 flex justify-center items-center">
              
              <div className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                {this.state.errorMsg}
              </div>
            </div>
            }
            
            <div className="mt-8 flex flex-col">
              <input type="submit" className="active:scale-[.98] active:duration-75 py-3 rounded-xl bg-violet-500 text-white text-lg font-bold" value="Log in" onClick={this.manejadorBoton}/>
               
              
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  /*
    state={
        form:{
            "usuario":"",
            "password":""
        },
        error:false,
        errorMsg:""
    
    }
    
    
    manejadorSubmit=e=>{
        e.preventDefault();
    }
    
    manejadorChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
        
    }



 */
}

export default Form;
