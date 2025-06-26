import React from 'react'
import Acordeon from './Acordeon'
import AccordionItem from './Acordeon'

function Factura() {
    return (
        <>


            <div className="container mt-5 mb-5" style={{ maxWidth: '900px' }}>
                <h1>Factura de venta</h1>
                <div className="accordion accordion-flush" id="accordionExample">
                    <AccordionItem
                        headerId="headingOne"
                        collapseId="collapseOne"
                        title="Datos de la Factura"
                        parentId="accordionExample">
                        {/* Aquí pones tus campos del formulario o cualquier contenido */}
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="fecha">Fecha emision</label>
                                    <input type="date" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <label htmlFor="TipoOperacion">Tipo de Operación</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>[No especificado]</option>
                                        <option value="1">10 - Estandar</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row" style={{ display: 'flex', marginTop: '20px' }}>
                                <div className="col" >
                                    <label htmlFor="fecha">Fecha de Vencimiento</label>
                                    <input type="date" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col" >
                                    <label htmlFor="prefijo">Prefijo</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>[No especificado]</option>
                                        <option value="1">10 - Estandar</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row" style={{ display: 'flex', marginTop: '20px' }}>
                                <div className="col" >
                                    <label htmlFor="ordenCompra">Orden de compra</label>
                                    <input type="text" className="form-control" aria-label="Orden de compra" />
                                </div>
                                <div className="col" >
                                    <label htmlFor="medioPago">Medio de Pago</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>[No especificado]</option>
                                        <option value="1">1 - Instrumento no definido</option>
                                        <option value="2">2 - Tarjeta de crédito</option>
                                        <option value="3">3 - Transferencia bancaria</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row" style={{ display: 'flex', marginTop: '20px' }}>
                                <div className="col" >
                                    <label htmlFor="fechaOrdenCompra">Fecha de Orden de compra</label>
                                    <input type="date" className="form-control" aria-label="Fecha de Orden de compra" />
                                </div>
                                <div className="col" >
                                    <label htmlFor="tipoNegociacion">Tipo de Negociación</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>[No especificado]</option>
                                        <option value="1">1 - Contado</option>
                                        <option value="2">2 - Crédito</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row" style={{ display: 'flex', marginTop: '20px', marginInlineStart: '400px' }}>
                                <div className="col " >
                                    <label htmlFor="plazo">Plazo</label>
                                    <input type="text" className="form-control" aria-label="Plazo" />
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        headerId="headingTwo"
                        collapseId="collapseTwo"
                        title="Más información"
                        parentId="accordionExample"
                    >
                        <p>Contenido del acordeón 2</p>
                    </AccordionItem>
                </div>

            </div >
        </>
    )
}

export default Factura