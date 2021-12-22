import React from 'react';
import {
    Container,
    Card, CardHeader, CardImage, CardBody, CardInformation,
    BackgroundImage
} from './Styles';

const Profile = function() {
    return (
        <Container>
            <h2 className="page-title">Profile</h2>
            <div className="container-flex-center">
                <Card>
                    <BackgroundImage src="https://i.imgur.com/XeqUPzF.jpg" alt="Andrea Romero" />
                    <CardInformation>
                        <CardHeader>
                            <CardImage src="https://i.imgur.com/XeqUPzF.jpg" alt="Andrea Romero" />
                        </CardHeader>
                        <CardBody>
                            <h3>Hola Mundo!</h3>
                        </CardBody>
                    </CardInformation>
                </Card>
            </div>
        </Container>
    );
}

export default Profile;