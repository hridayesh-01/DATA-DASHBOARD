import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Modal = ({ item, isOpen, onClose }) => (
  <ReactModal isOpen={isOpen} onRequestClose={onClose}>
    <h2>{item.name}</h2>
    <p>Category: {item.category}</p>
    <p>Location: {item.location}</p>
    <p>Likes: {item.likes}</p>
    <p>Shares: {item.shares}</p>
    <p>Comments: {item.comments}</p>
    <button onClick={onClose}>Close</button>
  </ReactModal>
);

export default Modal;
