import React from 'react';
import { Container, Cards, Card, CardHeader, CardBody } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLaptop, faClipboard, faUsers, faEnvelope, faPlus, faSearch, faMobileAlt, faTabletAlt} from '@fortawesome/free-solid-svg-icons';

const Home = function() {
    return(
        <Container>
            <h2 className="page-title">Home</h2>
           <Cards>
                <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faDesktop} />
                </CardHeader>
                <CardBody>
                    <h3>Manage your resources</h3>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faLaptop} />
                </CardHeader>
                <CardBody>
                    <h3>Setup your web</h3>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faClipboard} />
                </CardHeader>
                <CardBody>
                    <h3>Controll your orders</h3>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faUsers} />
                </CardHeader>
                <CardBody>
                    <h3>Manage your users</h3>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faEnvelope} />
                </CardHeader>
                <CardBody>
                    <h3>Show your messages</h3>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faPlus} />
                </CardHeader>
                <CardBody>
                    <h3>Create your own categories</h3>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faSearch} />
                </CardHeader>
                <CardBody>
                    <h3>Search and filter data</h3>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <FontAwesomeIcon icon={faTabletAlt} />
                </CardHeader>
                <CardBody>
                    <h3>Use in any dispositive</h3>
                </CardBody>
            </Card>
           </Cards>
        </Container>
    );
}

export default Home;