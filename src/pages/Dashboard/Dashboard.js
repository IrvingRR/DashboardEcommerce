import React from 'react';
import {
    Container, Cards, Card, CardIcon, CardBody,
    Row, Column, ColumnHeader, ColumnBody,
    Register, RegisterImage,
    Group
} from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faImages, faClipboard, faUsers, faBox, faBoxes, faEnvelope, faCalculator} from '@fortawesome/free-solid-svg-icons';


const Dashboard = function() {
    return(
        <Container>
            <h2 className="page-title">Dashboard</h2>
            <Cards>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faUsers}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Users</h3>
                        <p className="card-number">10</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faBox}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Products</h3>
                        <p className="card-number">150</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faClipboard}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Orders</h3>
                        <p className="card-number">5</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faBoxes}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Categories</h3>
                        <p className="card-number">4</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Messages</h3>
                        <p className="card-number">2</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faImages}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Sliders</h3>
                        <p className="card-number">0</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faUserTie}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Admins</h3>
                        <p className="card-number">1</p>
                    </CardBody>
                </Card>
                <Card>
                    <CardIcon>
                        <FontAwesomeIcon icon={faCalculator}/>
                    </CardIcon>
                    <CardBody>
                        <h3 className="card-title">Expenses</h3>
                        <p className="card-number">3</p>
                    </CardBody>
                </Card>
            </Cards>
            <Row>
                <Column>
                    <ColumnHeader>
                        <h3 className="column-header-title">Last orders</h3>
                    </ColumnHeader>
                    <ColumnBody>
                        <Register to="">
                            <RegisterImage src="https://i.imgur.com/XeqUPzF.jpg" />
                            <Group>
                                <h3 className="register-title">Karen Ortega</h3>
                                <p className="register-description">Hi!, I want to order this product.</p>
                            </Group>
                            <span className="register-date">21/12/2021</span>
                        </Register>
                        <Register to="">
                            <RegisterImage src="https://i.imgur.com/XeqUPzF.jpg" />
                            <Group>
                                <h3 className="register-title">Perla Herrera</h3>
                                <p className="register-description">Hi!, I want to order this product.</p>
                            </Group>
                            <span className="register-date">21/12/2021</span>
                        </Register>
                    </ColumnBody>
                </Column>
                <Column>
                    <ColumnHeader>
                        <h3 className="column-header-title">Last messages</h3>
                    </ColumnHeader>
                    <ColumnBody>
                        <Register to="/">
                            <RegisterImage src="https://i.imgur.com/XeqUPzF.jpg" />
                            <Group>
                                <h3 className="register-title">Sandra Nuñez</h3>
                                <p className="register-description">Hi!, What is the proccedure to order one product?</p>
                            </Group>
                            <span className="register-date">20/12/2021</span>
                        </Register>
                        <Register to="/">
                            <RegisterImage src="https://i.imgur.com/XeqUPzF.jpg" />
                            <Group>
                                <h3 className="register-title">Mariana Robles</h3>
                                <p className="register-description">How I order some product?.</p>
                            </Group>
                            <span className="register-date">22/12/2021</span>
                        </Register>
                    </ColumnBody>
                </Column>
            </Row>
        </Container>
    );
}

export default Dashboard;