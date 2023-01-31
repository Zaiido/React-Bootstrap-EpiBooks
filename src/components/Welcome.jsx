import { Container } from "react-bootstrap"

const Welcome = () => {
    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center text-white text-center">
            <Container>
                <h1 className="display-4">EpiBooks</h1>
                <p className="lead">
                    Reading gives us some place to go, when we have to stay, where we are.
                </p>
            </Container>
        </div>
    );
};

export default Welcome
