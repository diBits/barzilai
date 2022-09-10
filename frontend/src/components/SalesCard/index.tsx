
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {
    /*Funçao para monstar uma data de 10 dias atras */
    const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 10)));
    const [maxDate, setMaxDate] = useState(new Date());


    useEffect(() => {

        axios.get("http://localhost:8080/sales")
            .then(response => {
                console.log(response.data)
            })

    }, [])

    return (
        <div className="barzilai-card">
            <h2 className="barzilai-sales-title">Vendas</h2>
            <div>
                <div className="barzilai-form-control-container">
                    <DatePicker
                    /*busca a const data e troca pela data selecionada */
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="barzilai-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="barzilai-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="barzilai-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
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

export default SalesCard;
