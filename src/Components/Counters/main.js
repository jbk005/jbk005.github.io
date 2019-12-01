import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import config from "../../Configs/config.json";
import moment from "moment";
import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCalendar, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import Particles from "react-particles-js";
import { useCountUp } from 'react-countup';
import { withIsVisible } from "react-is-visible/lib/withIsVisible";

let counters = new Map();

class Counters extends Component {

    state = {
        particlesHeight: 0
    }

    containerRef = React.createRef();

    componentDidMount() {
        this.setState({ particlesHeight: this.getContainerHeight() })
    }

    getContainerHeight() {
        return this.containerRef.current.clientHeight;
    }

    getLayout(icon, counter, title, id) {
        return <CounterEntry icon={icon} counter={counter} title={title} id={id} />
    }

    getProjectsCount() {
        if (config.projects.length > 0) {
            return this.getLayout(faCheck, config.projects.length, "Projects", "projects")
        }
    }

    getExperienceTime() {
        const timeDiffirence = moment(config.startTime, "YYYY-MM-DD").fromNow();

        return this.getLayout(faCalendar, timeDiffirence.replace(/\D/g, ""), timeDiffirence.replace(/\d/g, "").replace("ago", "of experience").substring(1), "experience");
    }

    getClientsCount() {
        if (config.clientsCount > 0) {
            return this.getLayout(faAward, config.clientsCount, "Total clients", "clients");
        }
    }

    getAwardsCount() {
        if (config.awardsCount > 0) {
            return this.getLayout(faUsers, config.clientsCount, "Total awards", "awards");
        }
    }

    render() {
        const { isVisible } = this.props;

        if (isVisible) {
            for (const entry of counters.entries()) {
                const func = entry[1];
                func();
            }
        }

        return (
            <div id="ExperienceCounters">
                <Particles className="Background" height={this.state.particlesHeight} />

                <Container ref={this.containerRef}>
                    <Row>
                        {this.getProjectsCount()}
                        {this.getExperienceTime()}
                        {this.getClientsCount()}
                        {this.getAwardsCount()}
                    </Row>
                </Container>
            </div>
        )
    }
}

const CounterEntry = (props) => {
    const { countUp, start } = useCountUp({ start: 0, end: props.counter });
    counters.set(props.id, start);

    return (
        <Col>
            <div className="counterIcon">
                <FontAwesomeIcon icon={props.icon} size="2x" />
            </div>

            <h4 className="counter">{countUp}</h4>
            <p className="title">{props.title}</p>
        </Col>
    )
}

export default withIsVisible(Counters);