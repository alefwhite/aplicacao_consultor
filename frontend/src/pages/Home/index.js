import React, { useState, useLayoutEffect } from 'react';
import  './style.css';
import { 
    Container, 
    Row, 
    Col, 
    Form, 
    Input, 
    InputGroup, 
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

 const Home = () => {  
    const [modal, setModal] = useState(false);
    const [mensagens, setMensagens] = useState([]);
    const [novaMensagem, setNovaMensagem] = useState("");

    const [userName, setUserName] = useState("");
    const [data, setData] = useState("");
    const [ordenar, setOrdenar] = useState(1);

    const tipoUsuario = JSON.parse(localStorage.getItem("usuario"));
   
    const toggle = () => setModal(!modal);

    useLayoutEffect( () => {
        async function fetchMsg() {
            await api.get('/mensagem')
            .then(response => {
                setMensagens(response.data);
                console.log(response.data)
            });

        }

       fetchMsg();
    }, [mensagens.id]);

    function ListarMensagens() {
        api.get('/mensagem')
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

    async function handleNovaMensagem(e) {
        e.preventDefault();
        
        const data = {
            msg: novaMensagem
        };

        try {
            const response = await api.post('/mensagem', data);

            if(response.status === 200) {
                toastr.info(response.data.message);
                setNovaMensagem("");
                ListarMensagens();
                toggle();
                                
            }
            console.log(response);
            

        } catch(erro) {
            toastr.error("Falha ao cadastrar mensagem, tente novamente");
        }
    }

    async function filtrarMsgs(e) {
        e.preventDefault();

        await api.get(`/mensagem?nome=${userName}&&updated_at=${data}&&order=${ordenar}`)
        .then(response => {                      
            setMensagens(response.data);            
            
            console.log(response.data)
        });

        console.log(userName)
        console.log(data)
        console.log(ordenar)

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
                                    <h1>Bem vindo! - <span style={{fontSize: "0.8em"}}>{retornaUsuarioLogado().toUpperCase()}</span></h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                                    </p>
                                    <Row>
                                        <Col md="12" className="mt-5">
                                            <Button outline color="primary" size="lg" block onClick={toggle}>Nova Mensagem?</Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="12" className="mt-5 p-4">
                            <Card>
                                <CardBody>
                                    <Form onSubmit={filtrarMsgs}>
                                        <h1 className=" d-flex justify-content-center">Mensagens</h1>                                      
                                        
                                        <InputGroup className="mt-3 p-5">
                                            <Label for="exampleDate">Username</Label>
                                            <Input 
                                                type="text" 
                                                className="ml-2 mr-3"
                                                placeholder="Digite o username desejado"
                                                value={userName}
                                                onChange={e => setUserName(e.target.value)}
                                            />

                                            <Label for="exampleDate">Data</Label>
                                            <Input 
                                                className="ml-2 mr-3"
                                                type="date"
                                                name="date"
                                                id="exampleDate"
                                                value={data}
                                                onChange={e => setData(e.target.value)}
                                            />

                                            <Label for="exampleDate">Ordenar</Label>
                                            <Input type="select" className="ml-2" value={ordenar} onChange={e => setOrdenar(e.target.value)}>
                                                <option value={1}>Mais recentes</option>
                                                <option value={2}>Mais antigas</option>
                                            </Input>
                                            <Button className="ml-3" color="success" type="submit">Filtrar</Button>
                                        </InputGroup>
                                        
                                        
                                    </Form>

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
                                                            {tipoUsuario.tipo_usuario === 1 ? 
                                                                <Button outline color="danger" onClick={() => handleDeleteMensagem(msg.id)}>Apagar</Button> : ""
                                                            }
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
                <ModalHeader toggle={toggle}>Inserir Nova Mensagem</ModalHeader>
                <Form onSubmit={handleNovaMensagem}>
                    <ModalBody>
                        <FormGroup  className="p-1">
                            <Col sm="12">
                                <Label for="msg" style={{fontSize:"1.2em"}}>Escreva aqui sua mensagem!</Label>
                                <Input 
                                    required type="textarea" 
                                    name="text" id="msg" 
                                    size="lg" 
                                    style={{height:"150px"}}
                                    value={novaMensagem}
                                    onChange={e => setNovaMensagem(e.target.value)}
                                />
                            </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="info" type="submit">Salvar</Button>{' '}
                        <Button outline color="secondary" onClick={toggle}>Sair</Button>
                    </ModalFooter>
                </Form>
            </Modal>           
        </>
    );
 }

export default Home;