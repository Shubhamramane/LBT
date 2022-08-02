import Button from '@restart/ui/esm/Button';
import {Row,Col} from 'react-bootstrap';
import React from 'react';
import './App.css';
import leave from './Documents/leave.docx';
import Memorandum from './Documents/Memorandum.docx';
import PowerAttorney from './Documents/PowerAttorney.doc';
import SelfDeclaration from './Documents/SelfDeclaration.docx';
import GeneralPowerAttorney from './Documents/GeneralPowerAttorney.doc';
import DeedGift from './Documents/DeedGift.doc';
import SaleFlat from './Documents/SaleFlat.docx';
import Mortgage from './Documents/Mortgage.doc';
import AgricultureLand from './Documents/AgricultureLand.docx';
import SellingHouse from './Documents/SellingHouse.doc';
import BuilderBroker from './Documents/BuilderBroker.doc';
import GiftDeedSon from './Documents/GiftDeedSon.doc';
import GeneralPower from './Documents/GeneralPower.doc';
import DeedGiftImmovableProperty from './Documents/DeedGiftImmovableProperty.doc';
import BuildingLease from './Documents/BuildingLease.doc';
import SaleHouse from './Documents/SaleHouse.doc';

function Documents(){
return(
<React.Fragment>
<Row className="justify-content-center mt-5">
    <Col lg={2}>
        <Button className="legal"><a href={leave} download className="uline legal">Agreement for Leave & licence</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={Memorandum} download className="uline legal">Memorandum of Understanding</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={PowerAttorney} download className="uline legal">Irrevocable Power of Attorney</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={SelfDeclaration} download className="uline legal">Self Declaration</a></Button>
    </Col>
</Row>

<Row className="justify-content-center mt-5">
    <Col lg={2}>
        <Button className="uline legal"><a href={GeneralPowerAttorney} download className="uline legal">Detailed General Power of Attorney</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={DeedGift} download className="uline legal">Deed Of Gift of Moveable Property</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={SaleFlat} download className="uline legal">Areement for Sale of Flat</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={Mortgage} download className="uline legal">Agreement to Mortgage</a></Button>
    </Col>
</Row>

<Row className="justify-content-center mt-5">
    <Col lg={2}>
        <Button className="uline legal"><a href={AgricultureLand} download className="uline legal">Agreement for Sale of Agriculture Land</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={SellingHouse} download className="uline legal">Agreement for Appointment of a Broker for Selling House</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={BuilderBroker} download className="uline legal">Agreement Between Builder and Broker</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={GiftDeedSon} download className="uline legal">Gift Deed of Son</a></Button>
    </Col>
</Row>

<Row className="justify-content-center mt-5">
    <Col lg={2}>
        <Button className="uline legal"><a href={GeneralPower} download className="uline legal">General Power of Attorney</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={DeedGiftImmovableProperty} download className="uline legal">Deed Of Gift of Immovable Property</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={BuildingLease} download className="uline legal">Agreement For Building Lease</a></Button>
    </Col>
    <Col lg={2}>
        <Button className="uline legal"><a href={SaleHouse} download className="uline legal">Agreement for Sale of a House</a></Button>
    </Col>
</Row>
</React.Fragment>
)
}

export default Documents;
