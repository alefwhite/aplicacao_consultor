import React, { useState, useEffect } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Form, 
    Input, 
    Card, 
    CardBody, 
    Button, 
    CardTitle, 
    CardText, 
    Label,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    FormGroup 
} from 'reactstrap';
import Header from '../../assets/components/Header';
import api from '../../service/api';
import toastr from 'toastr';
import retornaUsuarioLogado from '../../service/nome';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

 const MinhasMensagens = () => {  
    const [modal, setModal] = useState(false);
    const [mensagens, setMensagens] = useState([]);
    const [editarMsg, setEditarMsg] = useState("");
    
    const tipoUsuario = JSON.parse(localStorage.getItem("usuario"));
    const [idMsg, setIdMsg] = useState("");
    const toggle = () => setModal(!modal);
    
    useEffect(() => {
        api.get(`/mensagemUsuario/${tipoUsuario.id}`)
        .then(response => {
            setMensagens(response.data);
            console.log(response.data)
        });

    }, [tipoUsuario.id]);

    function ListarMensagens() {
        api.get(`/mensagemUsuario/${tipoUsuario.id}`)
        .then(response => {
            setMensagens(response.data);
            console.log(response.data)
        });
    }

    async function handleDeleteMensagem(id) {
        try {
            await api.delete(`/mensagem/${id}`)
            .then(response => {
                console.log(response)
                if(response.status === 200) toastr.success("Sua mensagem foi deletada com sucesso!");
                setMensagens(mensagens.filter(msg => msg.id !== id));
            });

       } catch(erro) {
           alert('Erro ao deletar caso, tente novamente.')
       }
    }

   
    async function handleUpdateMensagem(id) {
        setIdMsg(id);
        toggle();       
    }

    async function handleEditarMensagem(e) {
        e.preventDefault();

        const data = {
            msg: editarMsg
        };

        try {
            await api.put(`/mensagem/${idMsg}`, data)
            .then(response => {
                console.log("edit",response)
                if(response.status === 200) toastr.success("Sua mensagem foi editada com sucesso!");
                ListarMensagens();
                toggle(); 
            });

       } catch(erro) {
           alert('Erro ao deletar caso, tente novamente.')
       }
    }

    function FormatarData(data) {
        let options = {
            year: 'numeric', month: 'numeric', day: 'numeric',         
            hour: 'numeric',
            minute: 'numeric',
            timeZone: 'America/Sao_Paulo' 
        };

        const dataFormatada = new Intl.DateTimeFormat('pt-BR', options).format(Date.parse(data));

        return dataFormatada;
    }

    return (
        <>
            <div className="">
                <Header/>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="12">
                            <Card>
                                <CardBody className="p-4">
                                    <h1>Bem vindo! - <span style={{fontSize: "0.8em"}}>{retornaUsuarioLogado().toUpperCase()}</span> </h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>    
                                    </p>
                                   
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12" className="mt-5 p-4">
                            <Card>
                                <CardBody>                                  
                                    <h1 className="mb-4 d-flex justify-content-center">Suas Mensagens</h1> 

                                    <Col md="12" className="mt-2">
                                        <Row>
                                            {      
                                                
                                                mensagens.length > 0 ?
                                                mensagens.map(msg => (
                                                    <Col sm="4" className="mb-4" key={msg.id}>
                                                        <Card body>
                                                            <CardTitle style={{fontSize:"1.2em"}}>Mensagem de: {msg.nome.toUpperCase()}</CardTitle>
                                                            <CardText>{msg.msg}</CardText>
                                                            <CardText>Data: {FormatarData(msg.updated_at)}</CardText>
                                                            <Button className="mb-3" outline color="primary" onClick={() => handleUpdateMensagem(msg.id)}>Editar</Button>
                                                            <Button outline color="danger" onClick={() => handleDeleteMensagem(msg.id)}>Apagar</Button>
                                                        </Card>
                                                    </Col>                                                                                  
                                                
                                                ))
                                                : <Col className="p-1 ml-5 d-flex justify-content-center"><h1>Não foi possível encontrar as mensagens :(</h1></Col>
                                            } 
                                        </Row>                        
                                    </Col>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>                    
                </Container>
            </div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Editar Mensagem</ModalHeader>
                <Form onSubmit={handleEditarMensagem}>
                    <ModalBody>
                        <FormGroup  className="p-1">
                            <Col sm="12">
                                <Label for="msg" style={{fontSize:"1.2em"}}>Escreva aqui sua mensagem!</Label>
                                <Input 
                                    required type="textarea" 
                                    name="text" id="msg" 
                                    size="lg" 
                                    style={{height:"150px"}}
                                    value={editarMsg}
                                    onChange={e => setEditarMsg(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="info" type="submit">Editar</Button>{' '}
                        <Button outline color="secondary" onClick={toggle}>Sair</Button>
                    </ModalFooter>
                </Form>
            </Modal>           
        </>
    );
 }

export default MinhasMensagens;