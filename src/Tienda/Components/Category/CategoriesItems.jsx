import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../../../assets/categoryitem.css" 
import CardProduct from '../Card/CardProduct';
import CardProductHorizontal from '../Card/CardProductHorizontal';

export const CategoriaItems=(props)=>{
    return(
        < >
          <Row lg={4} md={3} sm={2} xs={2}>  
          { [0,1,2,3,4,5,6,7,8,9,10,11].map((variant) =>(
            props.tipo === 'grid'?
                <Col  className='mb-2'>
                    <CardProduct/>                    
                </Col>
                :
                <Col xs={12} sm={12} md={12} lg={12} xl={12}  className='mb-2'>
                   <CardProductHorizontal/> 
                </Col>
            )) }                                 
            </Row>              
        </>
    )
}