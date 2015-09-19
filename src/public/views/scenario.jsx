'use strict';

import Layout from './layout.jsx';
import React from 'react';
import { Grid, Row, Col, Input, Button, Panel, Jumbotron } from 'react-bootstrap';
import serialize from 'form-serialize';

export default class Sceneario extends React.Component {

    constructor() {
        super();        
        this.state = { serialization: "" }
        this._onSubmit = this. _onSubmit.bind(this);
        this._save = this._save.bind(this);
    }


    _onSubmit(event) {         
        event.preventDefault();        
        this._save();
        this.props.nextStep();
    }

    _save(event){
        var form = this.refs.myForm.getDOMNode();             
        var data = serialize(form, { hash: true });  
        this.setState({serialization: data});
        this.props.saveValues('scenario',data) 
    }



    render() {
        var serialization = JSON.stringify(this.state.serialization, null, 2);
        return (
            <form ref='myForm' onSubmit={ false}>
            <Grid>
                <Jumbotron bsStyle="info">
                    <h1>3 Easy Steps</h1>
                    <p>Give a Scenario, State a Process, List your Elements...</p>
                </Jumbotron>
                    <Panel header='Create a Scenario' bsStyle="info"> 
                        <Row className="show-grid">
                            <Col xs={1} md={3}></Col>
                            <Col xs={10} md={6}>
                                <Input onChange={this._save} type="text" id='scenarioName' name="scenarioName" placeholder='Scenario Name' value={this.props.data.scenarioName} />
                            </Col>
                            <Col xs={1} md={3}></Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={1} md={3}></Col>
                            <Col xs={10} md={6}>
                                <Input onChange={this._save}type="textarea" name="scenarioDescription" placeholder='Scenario Description' value={this.props.data.scenarioDescription}/>
                            </Col>
                            <Col xs={1} md={3}></Col>
                        </Row>
                         <Row className="show-grid">
                            <Col xs={1} md={3}></Col>
                            <Col xs={10} md={6}>
                                <Button onClick={this._onSubmit} bsStyle="primary" bsSize="large" block>Next</Button>
                            </Col>
                            <Col xs={1} md={3}></Col>
                        </Row>  
                    </Panel>
                
            </Grid>
            </form>
        );
    }
}