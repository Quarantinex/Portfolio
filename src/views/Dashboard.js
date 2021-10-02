/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React , { useState, Component, useEffect }from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import { stockData } from "./Data.js";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
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
  ListGroupItem} from "reactstrap";

  import ReactDOM from "react-dom";
  import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link,
    Route
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
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    const [lastClicked, setLastClicked] = useState(null);
  
    const [stock, setStock] = useState();
    const [quant, setQuant] = useState();
  
    const stockarr=[{stockName: null, stockQuant: null}];
    const [stockList, setStockList] = useState(stockarr);
  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
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
        )
    }, [])
  
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
  
                <Col lg="3" md="12"></Col>
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
                          {stockData.map(el => {
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
                <Col lg="3" md="12"></Col>
              </Row>
              <Row style={{ justifyContent: "right", marginRight: "250px" }}>
                <div>
                  <Link to="/Invest"><Button color="info">
                    Invest More
                  </Button>
                  </Link>
                </div>
              </Row>
            </div>
          </Route>
  
          <Route path="/Invest">
            <div className="content">
              <Row>
  
                <Col lg="6" md="12">
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
                          {items.map(el => {
                            return (
                              <tr key={el}>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.phone}</td>
                                <td>{el.website}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
  
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" md="12">
                  <Row>
                    <Col lg="4" md="12">
                      <Input type="select" onChange={(e) => (setStock(e.target.value))}>
                        {items.map(el => {
                          return (
                            <option>{el.name}</option>
                          );
                        })}
                      </Input>
                    </Col>
                    <Col lg="4" md="12">
                      <Input type="number" placeholder="Quantity" onChange={(e) => (setQuant(e.target.value))}></Input>
                    </Col>
                    <Col lg="4" md="12">
                      <Button color="info" onClick={() => setStockList([...stockList, {stockName: stock, stockQuant: quant}])}>Select</Button>
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
                          if (stock.stockName != null)
                          {
                            return (                              
                              <tr>
                                <td>{stock.stockName}</td>
                                <td>{stock.stockQuant}</td>
                              </tr>
                             
                            );
                          }
                        }
                        )}
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
                <Row>
  
                </Row>
              </Row>
  
              <Row style={{ justifyContent: "right", marginRight: "250px" }}>
                <Link to="/admin/dashboard">
                  <Button color="info">
                    Invest
                  </Button>
                </Link>
  
              </Row>
              <Row>
  
              </Row>
  
            </div>
  
          </Route>
  
        </Router>
      </>
    );
  }}
  
  export default Dashboard;
  