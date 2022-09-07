

import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="barzilai-card">
            <h2 className="barzilai-sales-title">Vendas</h2>
            <div>
                <div className="barzilai-form-control-container">
                    <input className="barzilai-form-control" type="text" />
                </div>
                <div className="barzilai-form-control-container">
                    <input className="barzilai-form-control" type="text" />
                </div>
            </div>
            <div>
                <table className="barzilai-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="show992">#341</th>
                            <td className="show576">13/08/1986</td>
                            <td>Anakin</td>
                            <th className="show992">15</th>
                            <th className="show992">11</th>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="barzilai-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="show992">#341</th>
                            <td className="show576">13/08/1986</td>
                            <td>Anakin</td>
                            <th className="show992">15</th>
                            <th className="show992">11</th>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="barzilai-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className="show992">#341</th>
                            <td className="show576">13/08/1986</td>
                            <td>Anakin</td>
                            <th className="show992">15</th>
                            <th className="show992">11</th>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="barzilai-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard
