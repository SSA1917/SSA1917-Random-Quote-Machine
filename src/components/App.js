import React from 'react';
import { connect } from 'react-redux';
import { Container,Card,Col,Row,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RequestDates } from '../redux/Datos.js';
import '../index.css';

//<div className='Texto'><p>{dates[indice]}</p></div>
class Datos extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            index: 0
        }
    }

    componentDidMount(){
        this.props.dispatch(RequestDates());
    }
    handleClick(){
        let indice = this.state.index;
        this.setState({
            index: indice+=1
        })
    }
    render(){    
        var indice = this.state.index;
        var {dates} = this.props;
        var {authors} = this.props;
        return(
            <Container fluid className="d-flex vh-100 justify-content-center align-items-center bg-success">
                <Card id="quote-box" className="card-menu bg-dark text-white">
                    <Card.Body>
                        <Card.Text id="text" className="text-center fs-2">{dates[indice]}</Card.Text>
                        <cite id="author">{SelectAuthors(authors[indice])}</cite>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col>
                                <Button id="tweet-quote" variant="link" href="#">Twiter</Button>{' '}
                                <Button id="tweet-quote" variant="link" href="#">Facebook</Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button id="new-quote" variant="primary" onClick={()=> this.handleClick()}>New Quote</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>    
            </Container>
        );
    }
}
const mapStateToProps = (state) =>{//escuchador de acciones 
    return {
        dates: state.dates,
        authors: state.authors
    }
}

export default connect(mapStateToProps)(Datos);

function SelectAuthors(index){
    switch(index){
        case 1: 
            return 'Leanne Graham';
        case 2:
            return 'Ervin Howell';
        case 3:
            return 'Clementine Bauch';
        case 4:
            return 'Patricia Lebsack';
        case 5:
            return 'Chelsey Dietrich';
        case 6: 
            return 'Mrs. Dennis Schulist';
        case 7: 
            return 'Kurtis Weissnat';
        case 8: 
            return 'Nicholas Runolfsdottir V';
        case 9:
            return 'Glenna Reichert';
        case 10: 
            return 'Clementina DuBuque';
        default: 
            return null
    }
}