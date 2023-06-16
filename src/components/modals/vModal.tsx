import React from 'react';
import { Modal, Button, Row, Col } from "react-bootstrap";
import { useModalContext } from "../../hook/useModalContext";
import img_vi from '../../assets/images/v-instruction.svg';
import './vModal.css';
import logo_c from '../../assets/images/logo-colorful.svg'

const VModal:React.FC = () => {
    const {showModal, setShowModal} = useModalContext();

    return (
        <Modal
            size='lg'
            dialogClassName='hengrown-responsive-modal-dialog'
            contentClassName='hengrown-responsive-modal-content'
            animation={false}
            centered show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title className='hengrown-modal-title'></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={1} sm={1} />
                    <Col md={10} sm={10}>
                        <img src={logo_c} height={40} alt='Hengrown Colored Logo' className='hengrown-logo colored vmodal'/>
                        <img src={img_vi} className='vi' alt='vertify-check'/>
                        <p className='hengrown-modal-title'>
                            Congratulations, your account has been created.
                        </p>
                        <p className='hengrown-modal-content'>
                            You'll need to verify your email before you can start investing
                            on our platform. Please check your inbox or spam for the verification
                            link. Thank you
                        </p>
                        <Button variant='primary' className='hengrown-button vmodal'>
                            Resend Email
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export default VModal;