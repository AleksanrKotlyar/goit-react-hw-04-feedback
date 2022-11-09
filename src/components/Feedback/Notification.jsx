import { NotificationMsg } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <NotificationMsg> {message}</NotificationMsg>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
