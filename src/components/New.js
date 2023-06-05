import * as React from "react";
import { Apiurl } from "../network/apiUser";
import axios from "axios";
import Headers from "../template/Headers";

class New extends React.Component{
    
  state = {
    form: {
      "nombre": "",
      "direccion": "",
      "dni": "",
      "correo": "",
      "codigoPostal": "",
      "genero": "",
      "telefono": "",
      "fechaNacimiento": "",
      "token": "",
      
    },
    error:false,
    errorMsg:""
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
  manejadorSubmi=e=>{
    e.preventDefault();
  }
  post =()=>{
    let url =Apiurl + 'pacientes';
    this.state.form.token= localStorage.getItem('token');
    axios.post(url, this.state.form)
    .then(response =>{
        console.log(response)
    })
    
  }
      

  render() {
    const form= this.state.form
    return (
      <React.Fragment>
        <>
          <Headers />
          <div className="container">
            <h3>Nuevo paciente</h3>
          </div>
          <div className="container">
            <br />
            <form className="form-horizontal" onSubmit={this.manejadorSubmi}>
              <div className="flex">
                <div className="w-full">
                  <label className="col-md-2 control-label">Nombre</label>
                  <div className="col-md-10">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="nombre"
                      placeholder="Nombre"
                      type="text"
                      value={form.nombre}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <label className="col-md-2 control-label">Direccion</label>
                  <div className="col-md-10">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="direccion"
                      placeholder="Direccion"
                      type="text"
                      value={form.direccion}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <label className="col-md-2 control-label">DNI</label>
                  <div className="col-md-8">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="dni"
                      placeholder="DNI"
                      type="text"
                      value={form.dni}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="col-md-2 control-label">Telefono</label>
                  <div className="col-md-8">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="telefono"
                      placeholder="Telefono"
                      type="text"
                      value={form.telefono}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <label className="col-md-2 control-label">
                    Codigo postal
                  </label>
                  <div className="col-md-8">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="codigoPostal"
                      placeholder="Codigo Postal"
                      type="text"
                      value={form.codigoPostal}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="col-md-2 control-label">
                    Fecha nacimiento
                  </label>
                  <div className="col-md-8">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="fechaNacimiento"
                      placeholder="Fecha nacimiento"
                      type="text"
                      value={form.fechaNacimiento}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <label className="col-md-2 control-label">Genero</label>
                  <div className="col-md-8">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="genero"
                      placeholder="Genero"
                      type="text"
                      value={form.genero}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="col-md-2 control-label">Correo</label>
                  <div className="col-md-8">
                    <input
                      className="w-full px-3 py-2 border rounded-md"
                      name="correo"
                      placeholder="Correo"
                      type="text"
                      value={form.correo}
                      onChange={this.manejadorChange}
                    />
                  </div>
                </div>
              </div>
              <br />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
                style={{ marginRight: "10px" }}
                onClick={()=> this.post()}
              >
                Guardar
              </button>
              
              <a
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                href="/dashboard"
              >
                Salir
              </a>
            </form>
          </div>
        </>
      </React.Fragment>
    );
  }

    
}

export default New;