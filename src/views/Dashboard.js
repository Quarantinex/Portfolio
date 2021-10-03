import React, { useState, Component, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import { stockData } from "./Data.js";
import "./profile.css";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  ListGroup,
  ListGroupItem,
  UncontrolledCarousel,
  CarouselItem,
  CarouselCaption,
  Carousel,
  CarouselIndicators,
  CarouselControl,
} from "reactstrap";

import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Link,
  Route,
} from "react-router-dom";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  const fs = require("fs");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [lastClicked, setLastClicked] = useState(null);

  const [stock, setStock] = useState();
  const [quant, setQuant] = useState();

  const stockarr = [{ stockName: null, stockQuant: null }];
  const [stockList, setStockList] = useState(stockarr);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Router>
          <Route exact path="/admin/dashboard">
            <div className="content">
              <Row>
                <Col lg="6" md="12">
                  <div class="card-container">
                    <img
                      class="round"
                      src="https://randomuser.me/api/portraits/women/79.jpg"
                      alt="user"
                    />
                    <h3>Shanaya Oberoi</h3>
                    <h6>New York</h6>
                    <h6> shanaya.oberoi@testmail.com</h6>
                    <br />
                  </div>
                </Col>
                <Col lg="6" md="12">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Investment Portfolio</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table className="tablesorter" responsive>
                        <thead>
                          <tr>
                            <th>Company</th>
                            <th>Ticker</th>
                            <th>Stock Price</th>
                            <th>time Elapsed</th>
                          </tr>
                        </thead>

                        <tbody>
                          {stockData.map((el) => {
                            return (
                              <tr key={el}>
                                <td>{el.company}</td>
                                <td>{el.ticker}</td>
                                <td>{el.stockPrice}</td>
                                <td>{el.timeElapsed}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                {/* <Col lg="3" md="12"></Col> */}
              </Row>
              <Row style={{ justifyContent: "right", paddingRight: "20px" }}>
                <div>
                  <Link to="/Invest">
                    <Button color="info">Invest More</Button>
                  </Link>
                </div>
              </Row>
              <br />
              <div style={{display: "flex"}}>
              <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Available Rewards: </CardTitle>
                    </CardHeader>
                    <CardBody style={{display: "flex"}}>
              <Card style={{padding: "15px"}}>
                <CardImg
                  top
                  width="100%"
                  height= "270px"
                  src="https://www.incimages.com/uploaded_files/image/1920x1080/GiftCard_Pan_6077.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Gift Cards</CardTitle>
                </CardBody>
              </Card>
              <Card style={{padding: "15px"}}>
                <CardImg
                  top
                  width="100%"
                  height= "270px"
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Gift Cards</CardTitle>
                </CardBody>
              </Card>
              <Card style={{padding: "15px"}}>
                <CardImg
                  top
                  width="100%"
                  height= "270px"
                  src="https://images.template.net/wp-content/uploads/2018/10/Event-Ticket.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">Gift Cards</CardTitle>
                </CardBody>
              </Card>
              </CardBody>
              </Card>
              </div>
            </div>
          </Route>

          <Route path="/Invest">
            <div className="content">
              <Row>
                <Col lg="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Investment Options</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table className="tablesorter" responsive>
                        <thead>
                          <tr>
                            <th>Company</th>
                            <th>Ticker</th>
                            <th>Stock Price</th>
                            <th>time Elapsed</th>
                          </tr>
                        </thead>

                        <tbody>
                          {stockData.map((el) => {
                            return (
                              <tr key={el}>
                                <td>{el.company}</td>
                                <td>{el.ticker}</td>
                                <td>{el.stockPrice}</td>
                                <td>{el.timeElapsed}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6">
                  <Row>
                    <Col lg="4" md="12">
                      <Input
                        type="select"
                        onChange={(e) => setStock(e.target.value)}
                      >
                        {stockData.map((el) => {
                          return <option>{el.company}</option>;
                        })}
                      </Input>
                    </Col>
                    <Col lg="4" md="12">
                      <Input
                        type="number"
                        placeholder="Quantity"
                        onChange={(e) => setQuant(e.target.value)}
                      ></Input>
                    </Col>
                    <Col lg="4" md="12">
                      <Button
                        color="info"
                        onClick={() =>
                          setStockList([
                            ...stockList,
                            { stockName: stock, stockQuant: quant },
                          ])
                        }
                      >
                        Select
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Card>
                      <CardHeader>
                        <CardTitle tag="h4">Selected Options</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Table className="tablesorter" responsive>
                          <thead>
                            <tr>
                              <th>Company</th>
                              <th>Stocks</th>
                            </tr>
                          </thead>

                          <tbody>
                            {stockList.map((stock) => {
                              if (stock.stockName != null) {
                                return (
                                  <tr>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.stockQuant}</td>
                                  </tr>
                                );
                              }
                            })}
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    {/* <ul>
                  {stockList.map((stock) => {
                    return(
                            <li>{stock.stockName} {" "} {stock.stockQuant}</li>);
                    })}                         
                    </ul> */}

                    {/* {stockList.map(id => {
                      return (
                        {
                          JSON.stringify(stockList)
                      );
                    })} */}
                  </Row>
                </Col>
                <Row></Row>
              </Row>

              <Row style={{ justifyContent: "right", marginRight: "160px" }}>
                <Link to="/admin/dashboard">
                  <Button color="info">Invest</Button>
                </Link>
              </Row>
              <Row></Row>
            </div>
          </Route>
        </Router>
      </>
    );
  }
}
export default Dashboard;
