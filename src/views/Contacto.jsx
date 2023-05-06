import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
    return (

        <Form className='text-center m-5'>

            <Form.Text className='fs-3 text-dark fw-bold'>
                Cuéntanos ¿En qué te podemos ayudar?
            </Form.Text>

            <Form.Group className="m-3 fs-5" controlId="formBasicEmail">

                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" />

                <Form.Text className="text-muted fst-italic fs-6">
                    Nunca compartiremos tu correo con terceros.
                </Form.Text>

            </Form.Group>

            <Form.Group className="mb-3 fs-5" type='text'>
                
                <Form.Label>Descripción</Form.Label>
                <textarea class="form-control " id="exampleFormControlTextarea1" rows="6"></textarea>
            </Form.Group>

            <button type="button" class="btn btn-danger btn-lg">Enviar</button>

        </Form>
    );
}

export default Contacto;