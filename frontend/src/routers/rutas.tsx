import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clientes from '../components/clientes'
import DashboarPrin from '../components/DashboarPrin'
import Productos from '../components/Productos'
import Factura from '../components/factura'


function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/facturas" element={<Factura />} />
                <Route path="/dashboard" element={<DashboarPrin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas