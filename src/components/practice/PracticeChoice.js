import React from 'react';
import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./PracticeChoice.css"
// import backgroundVideo from '../images/incease_stock_2.mov';

// import CASNO from '../images/prac/sc1/CASNO.png'; import DRUNK from '../images/prac/sc1/DRUNK.png'; import MIDCLS from '../images/prac/sc1/MIDCLS.png';
// import BOAT from '../images/prac/sc2/BOAT.png'; import GRMX from '../images/prac/sc2/GRMX.png'; import MASK from '../images/prac/sc2/MASK.png';
// import BUTR from '../images/prac/sc3/BUTR.png'; import MTAL from '../images/prac/sc3/MTAL.png'; import TRSM from '../images/prac/sc3/TRSM.png';
// import MINER from '../images/prac/sc4/MINER (1).png'; import NEWS from '../images/prac/sc4/NEWS.png'; import TRAD from '../images/prac/sc4/TRAD.png';
// import CABS from '../images/prac/sc5/CABS.png'; import CWDLN from '../images/prac/sc5/CWDLN.png'; import DOMD from '../images/prac/sc5/DOMD.png';


export function DefaultChoice () {
    return(
        <>
        <div className="containVideoBackgroundPrac">
            <video autoPlay loop muted id="videoBackgroundPrac">
                <source src={"https://res.cloudinary.com/dbgv4iow6/video/upload/v1612893315/Buffetts-Summit/incease_stock_2_btbofr.mov"} type='video/mp4'/>        
            </video>
            <div className="overlay">
                <Row>
                    <Col sm>
                        <h2 className="initialPageTitle1">Investment Club: Buffett's Summit!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <h3 className="initialPageHeader1">Practice Mode</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <h3 className="initialPageHeaderDesc1">(You will get an 
                        explanation for the outcome of each company)</h3>
                    </Col>
                </Row>
            </div>
        </div>
        <Container fluid className="containInstructions">
            <Row sm>
                <Col sm>
                    <div className="styleCardHome">
                        <h5 className="initialPageDesc">About Us</h5>
                        <p className="initialPageDesc">The Stony Brook University Investment Club is a leading resource 
                        for students interested in the fields of financial services and investment management. 
                        The organization runs on three pillars to best serve the student body:</p>
                        <ul>
                            <li className="initialPageDesc">Provide the Stony Brook student body with the skillset to successfully invest their own 
                            funds through presentations and interactive activities.</li>
                            <li className="initialPageDesc">Introduce students to professionals throughout the financial services industry, 
                            providing both valuable knowledge and networking opportunities.</li>
                            <li className="initialPageDesc">Prepare students for careers within the financial services sector and arrange 
                            internship opportunities through direct relationships with various firms.</li>
                        </ul>
                        <p className="initialPageDesc">Some past events and opportunities that have been presented 
                        include Marketwatch competitions, educational lectures, case competitions, business job fairs,
                        guest speakers, market updates, and more. <br/> <br/> If you are interested and want to know more, visit www.sbuinvestmentclub.com or 
                        email us at sbuinvestmentclub@gmail.com. </p>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardHome">
                        <h5 className="initialPageDesc">Instructions/How to Play</h5>
                        <p className="initialPageDesc">This is a game that requires skill, knowledge of the market,
                        as well as a bit of luck. We have tried to emulate past stock performances as closely as 
                        possible, and some scenarios may even be modelled off of past events and corresponding 
                        stock performances. <br/> <br/> When you begin the game, you will be presented with a scenario 
                        of the current market/economy/sector or some outstanding event that just occurred. You will have a total 
                        amount of money that you can invest, which will be in the top right corner of your screen. You will also 
                        see three companies with their current stock performances (Some dates on the bottom of the charts may not 
                        be very consistent, but assume that they are. This is because we are emulating companies that performed 
                        similarily to the actual historical event) as well as a description of how investors and analysts 
                        currently predict how the company stock will perform in the short-term future. <br/> <br/> Your job will be 
                        to invest a certain amount of money in each company, or not to invest at all in certain companies, in order 
                        to receive the optimal rate of return. Your money will be updated after each scenario to reflect how much 
                        you made (or lost) in the previous scenario. <br/> <br/> The goal is to end up with the most amount of money 
                        possible. You start off with $500. Good Luck!</p>
                    </div>
                </Col>
            </Row>
            <br/> <br/>
        </Container>
        </>
    )
}

export function Choice1 () {
    return(
        <>
        <div className="backgroundPic">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Market Crash</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">After a severe slowdown in the housing markets across the nation, several large institutionalized banks have declared bankruptcy, plunging the US economy into a deep recession. Millions of Americans have found themselves both jobless and homeless as the nation’s central monetary policy showed signs of collapse. On top of the financial turmoil, the US political sphere was also rife with change, with a new presidential elect taking office, promising to create a stimulus plan to revive the nation’s broken economy. Analysts are predicting this to be one of the greatest recessions that the US economy has faced in its history. Topping it off, gas prices have reached record highs, adding to the financial burdens on consumers. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">Remember, read each stock carefully, compare their
                        performances against the current scenario, and distribute your money accordingly. 
                        You don't have to distribute all of your money, but your total amount distributed <b>MUST </b>
                        be less than the total amount money that you have right now.</p>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - MIDCLS</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893329/Buffetts-Summit/prac/sc1/MIDCLS_q5oz5y.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    Situated as a large, retail giant with a broad variety of goods aimed at the upper middle class, MIDCLS is a large cap, low volatility corporation that has experienced moderate growth over the decades. However, with the recession, MIDCLS has experienced significant declines in revenue as consumers tighten their budgets and go to cheaper, less luxurious stores. As a result, MIDCLS has had to reduce its workforce and temporarily close down certain locations to stay afloat. The stock price has tanked significantly, and worries of bankruptcy have started to spread amongst investors. Others believe that the downturn in stock price is par for the course of the recession, and that MIDCLS will bounce back in a few years time.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: MIDCLS’s decision to lay off workers and close locations has proven to reduce the negative cash outflows significantly, giving the company a better chance of weathering through this economic storm. The stock is high risk, high reward as it still has an equal chance of going bankrupt if the crash gets much worse or may eventually return to normalcy and see significant upside until it reaches its previous, pre-crash price.  
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - CASNO</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893329/Buffetts-Summit/prac/sc1/CASNO_cbh7pj.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                   A large casino located in Las Vegas, CASNO has experienced a significant drop in stock price since the onset of the recession due to a lack of clientele. Much of the casino's customer base are located outside of Las Vegas and thus tend to drive/fly in. Due to the increase in gas prices, along with the increased budget constraints of consumers, Las Vegas as a whole has seen less tourism than in previous years. Furthering this economic plight, less consumers are willing to gamble their money away during an economic recession and as a result, CASNO’s revenue is the lowest it has been in decades. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: CASNO is a very high risk, but very high reward stock. As the recession continues, the stock price will likely continue to plummet due to lack of revenue and cash flow and may eventually go bankrupt. On the other hand, if the casino can survive the recession, it would be a perfect time to buy into the company at a discount for when gambling returns to prior levels. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - DRUNK</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893329/Buffetts-Summit/prac/sc1/DRUNK_c0crjd.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    One of America’s favorite beer companies, DRUNK has been heeded as a recession-proof corporation by many analysts due its prior performances in economic recessions. Combining cheap beer and the ever-increasing need for Americans to have an outlet to step away from reality, DRUNK has performed exceptionally well during the current economic recession as well, following its typical slow rate of annual growth. Furthering this, DRUNK is currently rumored to be in talks about an acquisition with another company within the beer industry.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: Mergers and acquisitions typically reward shareholders with a premium, and many investors will eagerly push the stock price up in hopes of receiving a nice reward should the acquisition take place. However, there is risk in that the sentiment-driven price increase might result in a drop should the acquisition not occur (especially during such a recession). As such, this stock is moderately risky in the short term, but will be a good hold long term if it continues its current practices. 
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export const fSc1St1 = (amount) => { 
    const value = Math.random();
    if (value < 0.05) return amount*0;
    else if (value < 0.15) return amount*0.25;
    else if (value < 0.3) return amount*0.7;
    else if (value < 0.4) return amount*0.9;
    else if (value < 0.8) return amount*1.1;
    else return amount*1.2;
    //5% of 100% down, 10% of 75% down, 15% of 30% down, 10% of 10% down, 40% of 10% up, 20% of 20% up
}
export const fSc1St2 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0;
    else if (value < 0.3) return amount*0.4;
    else if (value < 0.5) return amount*0.7;
    else if (value > 0.8) return amount*1.25;
    else return amount*1.15;
    //10% of 100% down, 20% of 60% down, 20% of 30% down, 30% of 15% up, 20% of 25% up
}
export const fSc1St3 = (amount) => {
    const value = Math.random();
    if (value < 0.15) return amount*0.85;
    else if (value > 0.75) return amount*1.08;
    else return amount*1.05;
    //15% of 15% down, 60% of 5% up, 25% of 8% up
}


export function Choice2 () {
    return(
        <>
        <div className="backgroundPic">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Virus Pandemic</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">A recent virus outbreak from Western Europe has caused the world to go into a 6 month lockdown as this global pandemic wrecks havoc on mankind. With a high infection rate and relatively high fatality rate, governments across the world are warning that the world as we know it might never be the same, and that lockdowns will likely continue for the foreseeable future. As such, many businesses related to travel, social gatherings, and luxury have taken a drastic hit, with quarterly revenues across the board dropping to historic lows. The National Bureau of Economic Research (NBER) has determined the economy to be in a period of recession, and overall economic activity is the worst in US history. In the midst of this large economic halt, however, many companies have found a way to adapt and thrive, with some sectors seemingly less affected by the virus outbreak than others. While the length of the lockdown cannot be predetermined, it is predicted that things will eventually go back to normal, but that it could take decades for such change to occur. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">Remember, read each stock carefully, compare their
                        performances against the current scenario, and distribute your money accordingly. 
                        You don't have to distribute all of your money, but your total amount distributed <b>MUST </b>
                        be less than the total amount money that you have right now.</p>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - MASK</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893329/Buffetts-Summit/prac/sc2/MASK_jg872v.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    MASK is a company that produced N95 masks for a variety of purposes, including masks for medical workers, construction/wood-workers, building-inspectors, etc. Due to the recent events, MASK has experienced a shortage in supply due to excess demand as well as an overload on the supply chain (less workers indicating less raw materials produced). The stock price has seen strong upside due to high demand for masks, but analysts are warning that the longevity of such increases are unstable as the virus will eventually subside and market dilution may impact MASK’s profits as other companies produce similar products.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: The stock is currently being listed as high risk, high reward due to the fact that the pandemic will not last forever and the sale of masks will likely subside and return to normalcy after a couple of years, making it a temporary demand bubble. Competition from other mask producers will also take away MASK’s total market share.  As such, the current price increase is unsustainable long-term, but offers good short term potential.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - GRMX</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893329/Buffetts-Summit/prac/sc2/GRMX_oimt93.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                  GRMX is a large cap hand sanitizer company with a corner on the market that has experienced a surge in price due to high demand during the virus outbreak. However, a better infrastructure and larger market coverage has allowed the company to better deal with this increase in demand without running into too much of a supply shortage, as has been seen with MASK. As of now, it is expected that the stock will post moderate increases in the short-term and has a good outlook for positive growth in the future. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: Analysts are labeling the stock as moderate risk, moderate reward as the company’s moderate growth will translate to moderate increases in stock price. GRMX already has a well established background and has been able to deal relatively well with the sudden increase in demand. Over the long term it is less likely to deal with large fluctuations in price because of the company’s large size.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - BOAT</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893329/Buffetts-Summit/prac/sc2/BOAT_dhmrur.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    BOAT is a ship building company with a focus on the construction and design of cruise ships. Due to the pandemic, BOAT has experienced a lack of new orders for cruise ships, and has subsequently seen a drop in stock price correlating to the company’s lack of sales. Many analysts predict that this sales decrease has already been priced into the stock, but warn that there is potential for the stock to drop lower on sentiment towards the virus and the longevity of lockdowns. While they are warning that things may never quite return to previous levels, it is unlikely that the stock price will fall much further. The company will likely experience moderate growth as interest in tourism continues to return in future years.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: The stock is moderate risk, moderate reward as the company will likely experience moderate growth as interest in tourism continues to return in future years. Most of the lack of revenue has already been priced into the stock, and it is unlikely to fall much further, though the risk does still exist. Therefore, it is likely that the stock will post moderate returns over the next couple years as the stock stabilizes around its new equilibrium point and may eventually return to normal, pre-pandemic levels.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export const fSc2St1 = (amount) => {
    const value = Math.random();
    if (value < 0.3) return amount*0.9;
    else if (value < 0.5) return amount*0.98;
    else if (value > 0.8) return amount*1.1;
    else return amount*1.05;
    //30% for 10% down, 20% for 2% down, 30% for 5% up, 20% for 10% up
}
export const fSc2St2 = (amount) => {
    const value = Math.random();
    if (value < 0.05) return amount*0.95;
    else if (value > 0.2) return amount*1.05;
    else return amount*0.98;
    //5% of 5% decrease, 15% of 2% decrease, 80% of 5% increase
}
export const fSc2St3 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0.95;
    else if (value > 0.8) return amount*1.08;
    else return amount*1.05;
    //10% for 5% down, 70% for 5% up, 20% for 8% up
}


export function Choice3 () {
    return(
        <>
        <div className="backgroundPic1">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitleWhite">Frightening Times</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDescWhite">A recent slew of global terrorist attacks has struck the hearts of Americans across the nation, once again instilling fear into the public and igniting new controversy over the safety of both travelling and high-volume social spaces. With these recent events still in the forefront of many American minds, many people have begun to change their daily habits to minimize any unnecessary risks that may place them in unwanted social situations. The US economy has experienced a slight downturn, but the impacts of these events are not expected to put the country into a recession. As an investor, you are looking to maybe invest in the following companies for short term profit as you believe that the attacks will result in temporary fluctuations that you could capitalize on. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="ChoiceOverallDescWhite">Remember, read each stock carefully, compare their
                        performances against the current scenario, and distribute your money accordingly. 
                        You don't have to distribute all of your money, but your total amount distributed <b>MUST </b>
                        be less than the total amount money that you have right now.</p>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - TRSM</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893330/Buffetts-Summit/prac/sc3/TRSM_nb6wnk.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    TRSM is a company that specializes in the tourism industry. Responsible for a variety of services at tourism hotspots around the world, TRSM makes its profit by giving publication and marketing to local tourism industries to bring the attention of travelers to these specific areas. In return for the increased exposure, TRSM gets a small cut of the sales from each of its partners.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: Due to increased fears of terrorist attacks, tourism as an industry has seen a significant reduction in clientele. Since TRSM relies heavily on local tourism industries around the world, they have experienced a decline in stock price as these smaller industries have been struggling to bring in new consumers.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - MTAL</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893331/Buffetts-Summit/prac/sc3/MTAL_zj0d5k.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                  MTAL is a large cap company that specializes in producing large, security-level metal detectors for airports, military bases, governmental buildings, museums and other industries/locations where security is paramount. The company makes a profit by manufacturing and installing their metal detectors where needed, and usually operate under contract to replace/renew the metal detectors every 5-7 years to ensure that customers are always well protected. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: Due to the fear factor and constant threat of further terrorist attacks, many institutions try to up their level of security in order to ease the minds of their clientele while also lowering the probability of being attacked. As metal detectors are used to often locate potential weapons or other devices, their sales have increased and has pushed the stock price up.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - BUTR</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893330/Buffetts-Summit/prac/sc3/BUTR_wr1px0.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    BUTR is a large cap dairy producer with a specialization in the production of butter. BUTR makes a profit by contracting with local dairy farmers for their supply of dairy, which is then transported and processed at BUTR’s own facilities in order to create the butter that is then shipped to markets all over the continental United States.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: BUTR experiences a stock price increase due to increased worries around social situations. As more Americans turn away from large social gatherings, many begin to cook more and eat out less. As a result, basic/essential cooking ingredients, such as butter, tend to see significant increases in demand.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export const fSc3St1 = (amount) => {
    const value = Math.random();
    if (value < 0.4) return amount*0.9;
    else if (value > 0.9) return amount*0.85;
    else return amount*0.95;
    //40% at 10% decrease, 50% at 5% decrease, 10% at 15% decrease
}
export const fSc3St2 = (amount) => {
    const value = Math.random();
    if (value < 0.5) return amount*1.1;
    else if (value < 0.8) return amount*1.08;
    else return amount*1.04;
    //50% at 10% increase, 30% at 8% increase, 20% at 4% increase
}
export const fSc3St3 = (amount) => {
    const value = Math.random();
    if (value < 0.5) return amount*1.05;
    else return amount*1.08;
    //50% at 5% increase, 50% at 8% increase
}


export function Choice4 () {
    return(
        <>
        <div className="backgroundPic2">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Political Overturn</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">The current sitting president was recently impeached and removed from office after leaked documents exposed his plans to sell American data to foreign countries in exchange for access to oil fields within these countries. This recent event has been in light of other questionable tactics from other politicians and allegations against certain members of Congress. As a direct result, trust in the US government is at all time lows and political uncertainty is high. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">Remember, read each stock carefully, compare their
                        performances against the current scenario, and distribute your money accordingly. 
                        You don't have to distribute all of your money, but your total amount distributed <b>MUST </b>
                        be less than the total amount money that you have right now.</p>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - TRAD</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893331/Buffetts-Summit/prac/sc4/TRAD_jotzs0.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    TRAD is an international import/export company based out of the United States. Responsible for a large portion of trade deals between the US and other countries, TRAD is one of the largest suppliers of commercial goods worldwide, and oversees both the shipping, docking, and transportations of goods from one country to another.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: A fumbling government and political uncertainty impacts the view of the US economy in countries overseas. As a result of the heightened risk of trade deals falling through in the event of a US governmental breakdown, many nations have reduced their dependability on US goods and services, resulting in a global trade slowdown. As a global shipping company, TRAD has received the brunt of this shift and the stock has decreased as a result.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - NEWS</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893331/Buffetts-Summit/prac/sc4/NEWS_dl1s5g.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                  NEWS is a news broadcasting company that prides itself in being as non-partisan as possible. As one of the largest and most respected news stations in the US, many Americans have turned towards the company to find out the latest and most pressing information regarding the ongoing impeachment process. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: Increased attention from the average American citizen due to the impacts and repercussions of such a political shift has resulted in more viewers and higher demand for news services. As a result, NEWS stock price has increased.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - MINER</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893330/Buffetts-Summit/prac/sc4/MINER_1_to1bem.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    MINER is a fund that tracks/reflects the price of gold, allowing retail investors to dabble in commodities without worrying about taking orders or having to deal with the futures market. The fund accurately tracks the price of gold as an asset, and many investors use it to hedge against devaluation of currencies or market downtrends.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: As a result of political uncertainty, the price of gold has gone up as a hedge against both the US dollar and the US government (both of which are intrinsically connected). As the price of gold goes up, the stock price of MINER, a fund tracking gold’s price, also goes up.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export const fSc4St1 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0.85;
    else if (value > 0.5) return amount*0.95;
    else return amount*0.9;
    //10% at 15% decrease, 40% at 10% decrease, 50% at 5% decrease
}
export const fSc4St2 = (amount) => {
    const value = Math.random();
    if (value < 0.4) return amount*1.05;
    else if (value > 0.75) return amount*1.15;
    else return amount*1.1;
    //40% at 5% up, 35% at 10% up, 25 at 15% up
}
export const fSc4St3 = (amount) => {
    const value = Math.random();
    if (value < 0.4) return amount*1.05;
    else return amount*1.1;
    //40% at 5% up, 60% at 10% up
}


export function Choice5 () {
    return(
        <>
        <div className="backgroundPic3">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Social Shift</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">Over the past couple of years, a large social shift has been occurring away from industry-controlled services towards crowd-based alternatives (i.e. Uber, Doordash, AirBnB, etc.). As a result, many companies have begun to try to adapt to meet these changing standards and interests. </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">Remember, read each stock carefully, compare their
                        performances against the current scenario, and distribute your money accordingly. 
                        You don't have to distribute all of your money, but your total amount distributed <b>MUST </b>
                        be less than the total amount money that you have right now.</p>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - CABS</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893332/Buffetts-Summit/prac/sc5/CABS_bc9fad.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    CABS is a traditional taxi service that provides customers all over the United States with quick and efficient services to get them from one place to another. As one of the largest taxi providers in the US, they have a well-developed infrastructure as well as both fleets and drivers to cater to every major city across the 50 states. In order to compete with ride-sharing services, CABS has lowered its cost for users and minimized irrelative expenses to maximize profits.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: Despite the trend for ride-sharing services over traditional taxis, CABS remains profitable due to its large infrastructure, lowered prices, and its reorganized financial management of its company. As a result, the company is likely to experience a small increase in its stock price.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - CWDLN</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893332/Buffetts-Summit/prac/sc5/CWDLN_lahtxl.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                  CWDLN is a crowd-sourced loan service that allows for users to give other members in their communities short-term loans, allowing users to effectively bypass large institutional banks and help out other members in their communities directly. Fund suppliers are able to make significant profits through accumulated interest on their outgoing loans and fund takers are able to get money quickly when they need it without having to worry about large banks and astronomical fees. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: CWDLN’s stock price is likely to experience a large increase due to the idea behind the company as well as the cultural shift towards crowdfunded services. As money is always in demand, both the loan giver and taker are able to effectively reach their goals while helping one another out.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - DOMD</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893332/Buffetts-Summit/prac/sc5/DOMD_a088wg.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    DOMD is a video game sharing start-up that allows for users to rent out their digitally stored video games to other people. If the user enjoys the game, the service allows for them to buy the game directly from the original creator on the same platform, making the service a hybrid between large video game developers and users looking to rent their games for small amounts of money. However, many video game manufacturers have instead begun to offer short, free-run trials of their games to let users get a taste before purchasing, making DOMD a risky start-up venture.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={23}
                                readMoreText={"▼"}
                                readLessText={"▲"}>
                                    What actually happened: While the concept of DOMD is both conceptually smart and occurring during a time where crowdfunded services are in demand, the mounting pressure from institutional video game developers has strained the ability for this platform to truly take off. By offering free trials of their games, developers effectively reduce the appeal of DOMD’s service, making it unlikely to thrive in the way that other crowdfunded services have. As a result, the stock is likely to go down and is a highly risky venture for an investor.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export const fSc5St1 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0.95;
    else if (value > 0.9) return amount*1.06;
    else return amount*1.03;
    //10% at 5% down, 80% at 3% up, 10% at 6% up
}
export const fSc5St2 = (amount) => {
    const value = Math.random();
    if (value < 0.15) return amount*0.95;
    else if (value < 0.65) return amount*1.1;
    else if (value < 0.9) return amount*1.15;
    else return amount*1.2;
    //15% at 5% down, 50% at 10% up, 25% at 15% up, 10% at 20% up
}
export const fSc5St3 = (amount) => {
    const value = Math.random();
    if (value < 0.3) return amount*0.9;
    else if (value < 0.6) return amount*0.95;
    else if (value > 0.8) return amount*1.15;
    else return amount*1.05;
    //30% at 10% down, 30% at 5% down, 20% at 5% up, 20% at 15% up
}