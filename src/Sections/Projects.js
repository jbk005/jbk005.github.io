import React, { Component } from "react";
import "./Projects.css";
import { Container, CardColumns, Card, Button, Modal } from "react-bootstrap";
import config from "../Configs/config.json";
import ImgSuspense from "img-suspense";
import MDSpinner from "react-md-spinner";
import { withIsVisible } from "react-is-visible/lib/withIsVisible";

class Projects extends Component {

    state = {
        activeModal: -1
    }

    showProject(id) {
        this.setState({ activeModal: id })
    }

    hideProject() {
        this.setState({ activeModal: -1 })
    }

    getProjects() {
        return config.projects.map((entry, index) => {
            const isActive = this.state.activeModal === index;

            const show = this.showProject.bind(this);
            const hide = this.hideProject.bind(this);

            const modalButtons = entry.links.map(entry => (
                <Button key={entry.title} href={entry.link}>{entry.title}</Button>
            ))

            return (<Card key={entry.title}>
                {entry.logoUrl ? <Card.Img variant="top" src={entry.logoUrl} /> : null}

                <Card.Body>
                    <Card.Title>{entry.title}</Card.Title>
                    <Card.Text>{entry.shortDescription}</Card.Text>
                    <Button variant="primary" onClick={() => { show(index) }}>View more</Button>
                </Card.Body>

                <Modal show={isActive} onHide={() => { hide() }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{entry.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {entry.logoUrl
                        ? <ImgSuspense
                            className="ModalLogo"
                            src={entry.logoUrl}
                            fallback={<MDSpinner size={64} />} />
                        : null}
                        {entry.description}
                    </Modal.Body>
                    <Modal.Footer>
                        {modalButtons}
                        <Button variant="secondary" onClick={() => { hide() }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Card>)
        })
    }

    render() {
        const { isVisible } = this.props;

        return (
            <section id="Projects">
                <Container className={isVisible ? "Visible" : ""}>
                    <h1 className="sectionTitle">Projects</h1>
                    <p className="sectionDesc">Click on "view more" to get more detailed description and links</p>
                    <hr/>

                    {config.projects.length === 0
                        ? (
                            <div className="noProjects">
                                <h1>No Projects!</h1>
                                <p>Please check that later, maybe there will be something new <span role="img" aria-label="wink">&#128521;</span></p>
                            </div>)
                        : (
                            <CardColumns>
                                {this.getProjects()}
                            </CardColumns>)
                    }
                </Container>
            </section>
        )
    }
}

export default withIsVisible(Projects);