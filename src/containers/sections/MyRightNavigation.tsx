import { faTachometerAlt, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement, useEffect } from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import profileDummyImg from '../../assets/dist/img/user4-128x128.jpg';
import { setMobileMenuDisplay } from "../../store/slices/commonDashboardSlice";

export interface IMyNav {
    menuHeadTitle: string;
    menueIcon: any;
    subMenuItems: { title?: string, to?: any }[];
}

const MyRightNavigation: FC<{ [key: keyof any]: any }> = (props: any): ReactElement => {

    const myNav: IMyNav[] = [
        {
            menuHeadTitle: "Dashboard",
            menueIcon: (<FontAwesomeIcon icon={faTachometerAlt} />),
            subMenuItems: [{ title: "Home", to: "/" }, { title: "Friut Mart", to: "/fruit-mart" },]
        },
        {
            menuHeadTitle: "User Management",
            menueIcon: (<FontAwesomeIcon icon={faUserAstronaut} />),
            subMenuItems: [{ title: "User List", to: "/users-list" }, { title: "Manage User", to: "/jhon" }]
        }
    ];
    const infoNav = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    const superMenuActive: string = myNav.findIndex(
        sub => sub.subMenuItems.map(to => to.to).indexOf(infoNav.pathname) !== -1
    ).toString();

    useEffect(() => {
        history.listen((obj) => {
            if (window.innerWidth <= 576)
                // alert("check");
                dispatch(setMobileMenuDisplay(false));
        })
    }, [dispatch, history]);

    return (<React.Fragment>
        <Card >
            <Card.Img variant="top" src={profileDummyImg} />
            <Card.Body>
                <Accordion defaultActiveKey={superMenuActive} >
                    {myNav.map((menu, index) =>
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>
                                {menu.menueIcon} {menu.menuHeadTitle}
                            </Accordion.Header>
                            <Accordion.Body className="p-0">
                                <ListGroup >
                                    {menu.subMenuItems.map((subMenu, subIndex) =>
                                        <NavLink key={subIndex} to={subMenu.to} className={isActive => (!isActive ? " unselected" : "")} exact>
                                            <ListGroup.Item>
                                                {subMenu.title}
                                            </ListGroup.Item>
                                        </NavLink>
                                    )}
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Card.Body>
        </Card>
    </React.Fragment>);
}

export default MyRightNavigation;