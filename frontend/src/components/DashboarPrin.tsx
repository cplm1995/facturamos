import React from 'react'
import Navbar from './layouts/Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

function DashboarPrin() {
    return (
        <>

            <div className="container-sm mt-5">
                <Navbar />
                <br />
                <div className='d-flex flex-column align-items-start flex-md-row' style={{ gap: '20px' }}>
                    <div className="callout col-sm-2 col-md-3">
                        <div className="callout-color"></div>
                        <div className="callout-content">
                            <h5>Facturas</h5>
                            <p>Hola Todas las Facturas</p>
                        </div>
                    </div>
                    <div className="callout col-sm-2 col-md-3">
                        <div className="callout-color-s"></div>
                        <div className="callout-content">
                            <h5>Clientes</h5>
                            <p>Hola Todos los Clientes</p>
                        </div>
                    </div>
                    <div className="callout col-sm-2 col-md-3">
                        <div className="callout-color-d"></div>
                        <div className="callout-content">
                            <h5>Productos</h5>
                            <p>Hola Todos los Clientes</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashboarPrin