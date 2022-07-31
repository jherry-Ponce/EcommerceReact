import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../../../assets/categoryitem.css" 
import CardProduct from '../Card/CardProduct';
import CardProductHorizontal from '../Card/CardProductHorizontal';
import { useState, useEffect } from 'react';
import { categoryApi } from '../../helpers/CategoryApi';
import { productApi } from '../../helpers/ProductsApi';

export const CategoriaItems=(props)=>{
    const[product,setProduct]=useState([])
    useEffect(()=>{
        productApi().then((produc)=>
        setProduct(
            produc.map((prod)=>prod)
           .filter((produccate)=>produccate.category_id==(props.id)),
           
        ))
        console.log(props.id)
    },[props.id])
    
    return(
        < >
          <Row lg={4} md={3} sm={2} xs={2}>  
          { product.map((variant,index) =>(
            props.tipo === 'grid'?
                <Col key={index} className='mb-2'>
                    <CardProduct img={variant.images[0]} name={variant.title} price={variant.price} desc={variant.descuento}/>                    
                </Col>
                :
                <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12}  className='mb-2'>
                   <CardProductHorizontal  img={variant.images[0]} name={variant.title} price={variant.price} desc={variant.descuento}/> 
                </Col>
            )) }                                 
            </Row>              
        </>
    )
}