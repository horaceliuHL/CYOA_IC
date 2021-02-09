import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Navbar,
} from 'react-bootstrap';
import './PracticePage.css'
import {Input, Slider} from '@material-ui/core';
import {
    DefaultChoice, 
    Choice1, fSc1St1, fSc1St2, fSc1St3, 
    Choice2, fSc2St1, fSc2St2, fSc2St3,
    Choice3, fSc3St1, fSc3St2, fSc3St3,
    Choice4, fSc4St1, fSc4St2, fSc4St3,
    Choice5, fSc5St1, fSc5St2, fSc5St3, //change this if adding more choices
} from './PracticeChoice';
import AlertWarning from '../custom/Alert';
import CustomNavbar from '../custom/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PracticePage () {
    const formulasForScenarios = [
        fSc1St1, fSc1St2, fSc1St3, 
        fSc2St1, fSc2St2, fSc2St3, 
        fSc3St1, fSc3St2, fSc3St3,
        fSc4St1, fSc4St2, fSc4St3,
        fSc5St1, fSc5St2, fSc5St3 //change this if adding more choices
    ];
    const listOfScenarios = [Choice1, Choice2, Choice3, Choice4, Choice5]; //change this if adding more choices
    const [scenario, setScenario] = useState([Choice1, Choice2, Choice3, Choice4, Choice5]); //change this if adding more choices
    const [state, setState] = useState(); //the actual scenario used in state
    const [counter, setCounter] = useState(6); //change this if adding more choices
    const [whichScenario, setWhichScenario] = useState(); //keeping track of scenario index of current scenario in list
    const [totalMoney, setTotalMoney] = useState(500);
    const [slider1, setSlider1] = useState(0);
    const [slider2, setSlider2] = useState(0);
    const [slider3, setSlider3] = useState(0);
    const [alert, setAlert] = useState();

    const handleClick = () => {
        console.log(slider1);
        console.log(slider2);
        console.log(slider3);
        if (slider1 + slider2 + slider3 > totalMoney){
            setAlert(AlertWarning);
        } else {
            if (whichScenario !== undefined){
                const leftoverMoney = totalMoney - slider1 - slider2 - slider3;
                const stock1 = formulasForScenarios[(whichScenario*3)];
                const stock1Money = stock1(slider1);
                const stock2 = formulasForScenarios[(whichScenario*3) + 1]
                const stock2Money = stock2(slider2);
                const stock3 = formulasForScenarios[(whichScenario*3) + 2]
                const stock3Money = stock3(slider3);
                setTotalMoney(Math.round(((stock1Money + stock2Money + stock3Money + leftoverMoney)*100 + Number.EPSILON))/100);
            }
            const keys = Object.keys(scenario);
            const uniqueScenario = scenario[keys[ keys.length * Math.random() << 0]];
            const scenarioTemp = scenario.filter(function(returnableObjects){
                return returnableObjects !== uniqueScenario;
            })
            const tempIndex = listOfScenarios.indexOf(uniqueScenario);
            setWhichScenario(tempIndex);
            setState(uniqueScenario);
            console.log(scenario);
            setScenario(scenarioTemp);
            setCounter(counter - 1);
            setAlert(null);
            setSlider1(0);
            setSlider2(0);
            setSlider3(0);
            window.scrollTo(0, 0);
        }
    }

    const handleBlur1 = () => {
        if (slider1 < 0) {
          setSlider1(0);
        } else if (slider1 > totalMoney) {
          setSlider1(totalMoney);
        }
    };

    const handleBlur2 = () => {
        if (slider2 < 0) {
          setSlider2(0);
        } else if (slider2 > totalMoney) {
          setSlider2(totalMoney);
        }
    };

    const handleBlur3 = () => {
        if (slider3 < 0) {
          setSlider3(0);
        } else if (slider3 > totalMoney) {
          setSlider3(totalMoney);
        }
    };

    return( counter === 0 ?
        <>
        <CustomNavbar/>
        <br/>
        <Container fluid>
            <Row>
                <Col>
                    <h3 className="EndPageDesc">You ended up with ${totalMoney}</h3>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h5 className="EndPageDesc">End of Practice.</h5>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h5 className="EndPageDesc">If you want to play again, head back to the Practice Page!</h5>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col sm>
                    <div className="EndPageStyleCard">
                        <h5 className="EndPageBox">More on the Investment Club</h5>
                        <p className="EndPageBox">We typically have weekly meetings every semester, and if you 
                        want to sign up for our email list, <a href="https://forms.gle/vSr1pcq3t6osyV5X8">click here</a>. 
                        <br/><br/>Again, if you are interested in knowing more about us, all of our links are down below. 
                        Feel free to follow or contact us on: </p>
                        <table className="EndPageBox">
                            <tr>
                                <td>Website: </td>
                                <td>Email: </td>
                                <td>Facebook: </td>
                                <td>LinkedIn: </td>
                                <td>Instagram: </td>
                            </tr>
                            <tr>
                                <td><a href="https://www.sbuinvestmentclub.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['far', 'window-maximize']} /></a></td>
                                <td><a href="mailto:sbuinvestmentclub@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['far', 'envelope']}/></a></td>
                                <td><a href="https://www.facebook.com/groups/sbuinvestmentclub/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']}/></a></td>
                                <td><a href="https://www.linkedin.com/company/investment-club-of-stony-brook-university/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></td>
                                <td><a href="https://www.instagram.com/sbu_investment_club/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></td>
                            </tr>
                        </table>
                        <br/>
                        <p className="EndPageBox"> You will receive updates on when our meetings and events will be held. 
                        <br/><br/>Hope to see you at our meetings!</p>  
                    </div>
                </Col>
                <Col sm>
                    <div className="EndPageStyleCard">
                        <h5 className="EndPageBox">Submit your score here!</h5>
                        <p className="EndPageBox">Because this is practice mode, you are able to see the explanation 
                        and the outcome of the performance of each company. You are allowed to modify your allocations 
                        in regards to how the company actually performed, so we will not accept a high score on here. 
                         <br/><br/>If you want to submit a high score, head to the home page and try out our 
                        competitive mode, where no explanations are given for the future performances of each company 
                        and you will have to allocate your money based on your own predictions of the outcomes.  
                        The submission instructions for a high score will be at the end of the competitive version.
                         <br/><br/>Good Luck!!</p>
                    </div>
                </Col>
                <Col sm>
                    <div className="EndPageStyleCard">
                        <h5 className="EndPageBox">Creators/Updates</h5>
                        <p className="EndPageBox">We are steadily adding more and more scenarios each day. 
                        Each of the scenarios and company descriptions were written by ourselves, so they 
                        take a while to be able to produce. We are also steadily improving on the aesthetics of 
                        the website, feel free to give us tips! <br/> <br/>
                        If you have any suggestions, ideas, and updates to the website, 
                        contact Horace. Contact Chris if you have any suggestions or ideas for the 
                        descriptions of each scenario or company. Feel free to connect with both of us as well as 
                        the Stony Brook Investment Club on LinkedIn!</p>
                        <table className="EndPageBox">
                            <tr>
                                <td className="EndPageBox"><u>Horace Liu</u></td>
                                <td className="EndPageBox"><u>Chris Slover</u></td>
                            </tr>
                            <tr>
                                <td className="EndPageBox">Email: <a href="mailto:horace.liu@stonybrook.edu"><FontAwesomeIcon icon={['far', 'envelope']}/></a></td>
                                <td className="EndPageBox">Email: <a href="mailto:christopher.slover@stonybrook.edu"><FontAwesomeIcon icon={['far', 'envelope']}/></a></td>
                            </tr>
                            <tr>
                                <td className="EndPageBox">LinkedIn: <a href="https://www.linkedin.com/in/horaceliu/"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></td>
                                <td className="EndPageBox">LinkedIn: <a href="https://www.linkedin.com/in/christopherslover/"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></td>
                            </tr>
                        </table>
                    </div>
                </Col>
            </Row>
            <br/>
        </Container>
        </>: (state === undefined ?
        <>
        <CustomNavbar/>
        <DefaultChoice/>
        <Container fluid className="initialPageStartButton">
            <Button
            className="initialPageStart"
            variant="dark"
            size="lg"
            onClick={handleClick}>Start Practice</Button> 
            <br/>
            <br/>
        </Container>
        </> :
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand >Stony Brook Investment Club</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>You currently have ${totalMoney}</Navbar.Text>
            </Navbar.Collapse>  
        </Navbar>
        <Container fluid>
            <Row>
                {state}
            </Row>
            <br/>
            <br/>
            <Row>
                <Col>
                    <p className="MainStockDesc">How much would you like to invest in Stock 1?</p>
                    <Slider
                        value={slider1}
                        onChange={(e, value) => {setSlider1(value)}}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={totalMoney}/>
                    <Input
                        value={slider1}
                        margin="dense"
                        onChange={(e) => {setSlider1(e.target.value === '' || isNaN(e.target.value) ? 0 : Number(e.target.value));}}
                        onBlur={handleBlur1}
                        
                    />
                </Col>
                <Col>
                    <p className="MainStockDesc">How much would you like to invest in Stock 2?</p>
                    <Slider
                            value={slider2}
                            onChange={(e, value) => {setSlider2(value)}}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={0}
                            max={totalMoney}/>
                        <Input
                            value={slider2}
                            margin="dense"
                            onChange={(e) => {setSlider2(e.target.value === '' || isNaN(e.target.value) ? 0 : Number(e.target.value));}}
                            onBlur={handleBlur2}
                        />
                </Col>
                <Col>
                    <p className="MainStockDesc">How much would you like to invest in Stock 3?</p>
                    <Slider
                        value={slider3}
                        onChange={(e, value) => {setSlider3(value)}}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={totalMoney}/>
                    <Input
                        value={slider3}
                        margin="dense"
                        onChange={(e) => {setSlider3(e.target.value === '' || isNaN(e.target.value) ? 0 : Number(e.target.value));}}
                        onBlur={handleBlur3}
                    />
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col>
                    <p className="ReminderDesc">Remember, your total <b>must</b> be less than the total amount of money that you have right now</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="MainWarningAlert">{alert}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="nextScenarioButton"><Button variant="dark" onClick={handleClick}>Next Scenario</Button></p>
                </Col>
            </Row>
            <br/>
        </Container>
        </>)
    )
}