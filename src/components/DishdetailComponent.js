import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


	

	


	function RenderDish({dish})
	{
		if(dish != null)
		{
			console.log(dish);

			return(
			<Card>
				<CardImg top src = {dish.image} alt = {dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
			);
		}
		else
		{
			return(
			<div></div>
			);
		}
			
	}

	const DishDetail = (props) => {
		return(
					
			
				<div className = "col-6 mt-5">		
					<RenderDish dish = {props.dish}/>
				</div>
				
		);
	}


export default DishDetail;



				