import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';



interface Productos {
    id: number;
    identificacion: number;
    names: string;
}

export default function Productos() {
    const [productos, setProductos] = useState<Productos[]>([]);


    useEffect(() => {
        axios.get('http://localhost:3000/api/productos').then(res => {
            setProductos(Array.isArray(res.data.docs) ? res.data.docs : []);
        }).catch(err => {
            console.error("Error al obtener productos:", err);
            setProductos([]);
        });
    }, []);



    return (
        <>
            <div className="container mt-5">
                <h1>Productos</h1>

                {/* Card para mostrar la lista de productos */}
                {/*<!-- Button trigger modal -->*/}

                {/*!-- Modal -->*/}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Nuevo producto</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>[No especificado]</option>
                                            <option value="1">001 - UNSPSC</option>
                                            <option value="2">010 - GTIN</option>
                                            <option value="3">020 - Partida arancelaria</option>
                                            <option value="4">999 - Estandar de adopción del contribuyente</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" aria-label="nombre producto" />
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="descripcion" style={{ marginBottom: '6px', marginTop: '7px' }}>Descripción</label>
                                        <div className="col">
                                            <input type="text" className="form-control" aria-label="descripcion" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="precioVenta" style={{ marginBottom: '6px', marginTop: '7px' }}>Precio Unitario de Venta</label>
                                        <input type="text" className="form-control" value={0} aria-label="Precio de Venta"  required/>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label htmlFor="unidadMedida" style={{ marginBottom: '6px', marginTop: '7px' }}>Unidad de Medida</label>
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
                                {productos.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.id}</td>
                                        <td>{producto.identificacion}</td>
                                        <td>{producto.names}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>Bienvenidos a la lista de productos</tfoot>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}
