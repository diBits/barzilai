import notificationButton from '../../assets/img/notification-icon.svg';

import './styles.css';

function NotificationButton() {
    return (
        <div className="barzilai-red-btn">
            <img src={notificationButton} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
