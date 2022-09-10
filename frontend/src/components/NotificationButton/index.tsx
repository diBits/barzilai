import axios from 'axios';
import { toast } from 'react-toastify';
import notificationButton from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';


type Props = {

    saleId : number;
}

function handleClick(id : number) {

    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            /*console.log("SUCESSO");*/
            toast.info("SMS enviado com sucesso");
        })
    
}

function NotificationButton({saleId} : Props) {
    return (
        <div className="barzilai-red-btn" onClick={() => handleClick(saleId)}>
            <img src={notificationButton} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
