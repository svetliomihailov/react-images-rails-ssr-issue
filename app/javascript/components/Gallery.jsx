import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images';

const images = [
  { source: 'https://images.unsplash.com/photo-1588910441757-9deb5c627a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
  { source: 'https://images.unsplash.com/photo-1589892889837-e0236f8dd22e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80' }
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={_ => setModalIsOpen(!modalIsOpen)}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>

      <button onClick={_ => setModalIsOpen(!modalIsOpen)}>Open gallery</button>
    </div>
  );
}

export default Gallery;
