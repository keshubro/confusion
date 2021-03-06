import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardGroup, CardColumns, Row, Col,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

  function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }



	const Menu = (props) => {

		const menu = props.dishes.map((dish) => {
			return(
				<div className = "col-6 mt-5">
					<RenderMenuItem dish = {dish} onClick = {props.onClick} />
				</div>
				);
		});

		return(
			<div className = "container">

          <div className = "row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to = "/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-12">
                           <h3>Menu</h3>
                           <hr />
          </div>
				<div className = "row">

						{menu}

				</div>

			</div>

		);
	}


export default Menu;
