import * as React from "react";
import Headers from "../template/Headers";
import { Apiurl } from "../network/apiUser";
import axios from "axios";

class Dashboard extends React.Component {
  state = {
    pacientes: [],
  };

  clickPaciente(id) {
    this.props.history.push("/editar/" + id);
  }

  componentDidMount() {
    let url = Apiurl + "pacientes?page=1";
    axios.get(url).then((response) => {
      this.setState({
        pacientes: response.data,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Headers></Headers>
        <div className="container">
          <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> this.props.history.push('/new')}>
            Registrar paciente
          </button>
          <br></br>
          <br />
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th scope="col" className="text-white px-6 py-3">
                  ID
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  DMI
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  NOMBRE
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  TELEFONO
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  CORREO
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {this.state.pacientes.map((value, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => this.clickPaciente(value.PacienteId)}
                  >
                    <td className="px-6 py-4">{value.PacienteId}</td>
                    <td className="px-6 py-4">{value.DNI}</td>
                    <td className="px-6 py-4">{value.Nombre}</td>
                    <td className="px-6 py-4">{value.Telefono}</td>
                    <td className="px-6 py-4">{value.Correo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
