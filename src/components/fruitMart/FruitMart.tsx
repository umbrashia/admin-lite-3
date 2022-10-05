import React, { FC, ReactElement } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { eventFruitMartSetUserSelectedItem, eventFruitMartSetDefaultSelectedItem, IFruitMartState } from "../../store/slices/fruitMartSlice";
import { RootState } from "../../store/store";





const FruitMart: FC<{ [key: keyof any]: any }> = (props: any): ReactElement => {
    const dispatch = useDispatch();
    const stateFruitMart: IFruitMartState = useSelector((state: RootState) => state.fruitMart)
    let defaultSelected: string[], userSelection: string[] = [];
    let userEmail:string="";

    const handleChangeDefaultSelection = (e: any) => {
        let value = Array.from(e.target.selectedOptions, (option: any) => option.value);
        defaultSelected = value;
    }

    const handleChangeInputEmail = (e: any) =>userEmail=e.target.value;

    const handleSubmit = (e: any) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stateFruitMart)
        };
        fetch('http://localhost:3333/bookmark/save', requestOptions)
            .then(response => response.json())
            .then(data =>{
                    alert("synced successfully...")
            });
    
    }

    const handleClickAddToSelection = (e: any) => {
        if(!defaultSelected)
            return 1;
        dispatch(eventFruitMartSetUserSelectedItem([...stateFruitMart.userSelectedItems,...defaultSelected]));
        dispatch(eventFruitMartSetDefaultSelectedItem(stateFruitMart.defaultItems.filter((item, index) => defaultSelected.includes(item) ? false : true)));
        defaultSelected = [];
    }

    const handleClickAddToMultiSelection = (e: any) => {
        dispatch(eventFruitMartSetUserSelectedItem([...stateFruitMart.userSelectedItems, ...stateFruitMart.defaultItems]));
        dispatch(eventFruitMartSetDefaultSelectedItem(stateFruitMart.defaultItems.filter((item, index) => stateFruitMart.defaultItems.includes(item) ? false : true)));
        defaultSelected = [];
    }

    const handleChangeUserSelection = (e: any) => {
        let value = Array.from(e.target.selectedOptions, (option: any) => option.value);
        userSelection = value;
        // console.log(userSelection);
        
    }

    const handleClickAddToDefaultSelection = (e: any) => {
        if(!userSelection)
            return 1;
        dispatch(eventFruitMartSetDefaultSelectedItem([...stateFruitMart.defaultItems, ...userSelection]));
        dispatch(eventFruitMartSetUserSelectedItem(stateFruitMart.userSelectedItems.filter((item, index) => userSelection.includes(item) ? false : true)));
        userSelection = [];
    }

    const handleClickAddToDefaultMultiSelection = (e: any) => {
        dispatch(eventFruitMartSetDefaultSelectedItem([...stateFruitMart.userSelectedItems, ...stateFruitMart.defaultItems]));
        dispatch(eventFruitMartSetUserSelectedItem(stateFruitMart.defaultItems.filter((item, index) => stateFruitMart.defaultItems.includes(item) ? false : true)));
        userSelection = [];
    }


    return (
        <React.Fragment><br />
            <Container fluid>
                <Row>
                    <Col md={1}></Col>
                    <Col md={3} >
                        <select multiple style={{ width: "100%", height: "100%" }} onChange={handleChangeDefaultSelection}>
                            {stateFruitMart.defaultItems.map((item, index) =>
                                <option key={index} value={item}>{item}</option>
                            )}
                        </select>
                    </Col>
                    <Col md={1} style={{ textAlign: "center" }}>

                        <ButtonGroup vertical>
                            <Button variant="primary" onClick={handleClickAddToSelection}>{'>'}</Button>
                            <Button variant="info" onClick={handleClickAddToMultiSelection}>{'>>'}</Button><br />
                            <Button variant="secondary" onClick={handleClickAddToDefaultSelection}>{'<'}</Button>
                            <Button variant="dark" onClick={handleClickAddToDefaultMultiSelection}>{'<<'}</Button>
                        </ButtonGroup>

                    </Col>
                    <Col md={3}>
                        <select multiple style={{ width: "100%", height: "100%" }} onChange={handleChangeUserSelection}>
                            {stateFruitMart.userSelectedItems.map((item, index) =>
                                <option key={index} value={item}>{item}</option>
                            )}
                        </select>

                        <br/>
                        <label><input onChange={handleChangeInputEmail} value={stateFruitMart.userEmail} placeholder={'user email'}/>
                            <Button variant="success"  onClick={handleSubmit}>{'sync with server...'}</Button>
                        </label>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );

}


export default FruitMart;