import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';



interface Clientes {
    id: number;
    identificacion: number;
    names: string;
}

export default function Clientes() {
    const [clientes, setClientes] = useState<Clientes[]>([]);


    useEffect(() => {
        axios.get('http://localhost:3000/api/clientes').then(res => {
            setClientes(Array.isArray(res.data.docs) ? res.data.docs : []);
        }).catch(err => {
            console.error("Error al obtener clientes:", err);
            setClientes([]);
        });
    }, []);



    return (
        <>
            <div className="container mt-5">
                <h1>clientes</h1>

                {/* Card para mostrar la lista de clientes */}
                {/*<!-- Button trigger modal -->*/}

                {/*!-- Modal -->*/}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Nuevo cliente</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="tipo de documento" style={{ marginBottom: '6px' }}>Tipo de Documento</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Seleccion uno de la lista </option>
                                            <option value="1">11- Registro civil</option>
                                            <option value="2">12 - Tarjeta de identidad</option>
                                            <option value="3">13 - Cédula de ciudadanía</option>
                                            <option value="4">14 - Cédula de extranjería</option>
                                            <option value="5">15 - NIT</option>
                                            <option value="6">16 - Permiso especial de permanencia</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="razon_social" style={{ marginBottom: '6px' }}>Razón Social</label>
                                        <input type="text" className="form-control" aria-label="Last name" />
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="numero_de_documento" style={{ marginBottom: '6px', marginTop: '7px' }}>Número de Documento</label>
                                        <div className="col">
                                            <input type="text" className="form-control" aria-label="Número de documento" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="direccion" style={{ marginBottom: '6px', marginTop: '7px' }}>Dirección</label>
                                        <input type="text" className="form-control" placeholder="Dirección" aria-label="Dirección" />
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="tipoDePersona" style={{ marginBottom: '6px', marginTop: '7px' }}>Tipo de Contribuyente</label>
                                        <select className="form-select" aria-label="Default select example" required>
                                            <option selected>[No especificado]</option>
                                            <option value="1">1 - Persona Juridica y asimiladas</option>
                                            <option value="2">2 - Persona natural</option>
                                            <option value="3">3 - Entidad sin animo de lucro</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="pais" style={{ marginBottom: '6px', marginTop: '7px' }}>País</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>[No especificado] </option>
                                            <option value="1">1 - Persona Juridica y asimiladas</option>
                                            <option value="2">2 - Persona natural</option>
                                            <option value="3">3 - Entidad sin animo de lucro</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="tipoDeResponsabilidad" style={{ marginBottom: '6px', marginTop: '7px' }}>Tipo de Responsabilidad</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>[No especificado]</option>
                                            <option value="1">0-13 Gran Contribuyente</option>
                                            <option value="2">0-15 Autoretenedor</option>
                                            <option value="3">0-23 Agente de retención de IVA</option>
                                            <option value="4">R-99-PN No Responsable</option>

                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="municipio" style={{ marginBottom: '6px', marginTop: '7px' }}>Municipio</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>[No especificado]</option>
                                            <option value="1">R99-PN - Responsable</option>
                                            <option value="2">2 - Persona natural</option>
                                            <option value="3">3 - Entidad sin animo de lucro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="nombreComercial" style={{ marginBottom: '6px', marginTop: '7px' }}>Nombre Comercial</label>
                                        <input type="text" className="form-control" id="nombreComercial" placeholder="Ingrese el nombre comercial" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="responsableTributario" style={{ marginBottom: '6px', marginTop: '7px' }}>Responsabilidad Tributaria</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>[No especificado]</option>
                                            <option value="1">ZZ - No aplica</option>
                                            <option value="2">49 - Responsable de iva</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="correoDistribucion" style={{ marginBottom: '6px', marginTop: '7px' }}>Correo de Distribución</label>
                                        <input type="text" className="form-control" id="correoDistribucion" placeholder="Ingrese el correo de distribución" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="telefono" style={{ marginBottom: '6px', marginTop: '7px' }}>Teléfono</label>
                                        <input type="text" className="form-control" id="telefono" placeholder="Ingrese el teléfono" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-outline-primary">Guardar</button>
                            </div>
                        </div>
                    </div>
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex={0}>
                        mod
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-header">Lista de Clientes</h5>
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            style={{ float: 'right', marginTop: '-40px', marginLeft: '-5px', marginRight: '10px' }}>
                            Nuevo
                        </button>
                        <table className="table table-striped mt-5">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Identificación</th>
                                    <th>Nombres</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map(cliente => (
                                    <tr key={cliente.id}>
                                        <td>{cliente.id}</td>
                                        <td>{cliente.identificacion}</td>
                                        <td>{cliente.names}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>Bienvenidos a la lista de clientes</tfoot>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}
