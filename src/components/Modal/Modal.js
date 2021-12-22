import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { Container, Card, Header, ButtonClose } from './Styles';

const Modal = function ({children, title, showModal, closeFunction}) {
    return (
        <Container showModal={showModal}>
            <Card showModal={showModal}>
                <Header>
                    <h3>{title}</h3>
                    <ButtonClose onClick={closeFunction}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </ButtonClose>
                </Header>
                {children}
            </Card>
        </Container>
    );
}

export default Modal;