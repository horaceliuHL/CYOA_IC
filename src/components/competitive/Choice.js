import React from 'react';
import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Choice.css"
// import backgroundVideo from 'https://res.cloudinary.com/dbgv4iow6/video/upload/v1612893300/Buffetts-Summit/Stock_Loop_ddwt5v.mp4';

// import MSNAX from '../images/comp/sc1/MSNAX.png'; import TECC from '../images/comp/sc1/TECC.png'; import ETRON from '../images/comp/sc1/ETRON.png';
// import EMRT from '../images/comp/sc2/EMRT.png'; import GASCR from '../images/comp/sc2/GASCR.png'; import MINER from '../images/comp/sc2/MINER.png';
// import COPPR from '../images/comp/sc3/COPPR.png'; import PHONE from '../images/comp/sc3/PHONE.png'; import ROUTR from '../images/comp/sc3/ROUTR.png';
// import CRYP from '../images/comp/sc4/CRYP.png'; import PROTC from '../images/comp/sc4/PROTC.png'; import WEAPN from '../images/comp/sc4/WEAPN.png';
// import CARBEN from '../images/comp/sc5/CARBEN.png'; import GREEN from '../images/comp/sc5/GREEN.png'; import NWGAS from '../images/comp/sc5/NWGAS.png';
// import AIRLN from '../images/comp/sc6/AIRLN.png'; import CNNCT from '../images/comp/sc6/CNNCT.png'; import ONLNE from '../images/comp/sc6/ONLNE.png';
// import FLYR from '../images/comp/sc7/FLYR.png'; import HEED from '../images/comp/sc7/HEED.png'; import INSR from '../images/comp/sc7/INSR.png';
// import NILE from '../images/comp/sc8/NILE.png'; import SHRA from '../images/comp/sc8/SHRA.png'; import SUPPL from '../images/comp/sc8/SUPPL.png';
// import AVOV from '../images/comp/sc9/AVOV.png'; import CITO from '../images/comp/sc9/CITO.png'; import HUMM from '../images/comp/sc9/HUMM.png';
// import MOND from '../images/comp/sc10/MOND.png'; import NNDA from '../images/comp/sc10/NNDA.png'; import ROMP from '../images/comp/sc10/ROMP.png';

export function DefaultChoice () {
    return(
        <>
        <div className="containVideoBackgroundMain">
            <video autoPlay loop muted className="videoBackgroundMain">
                <source src={"https://res.cloudinary.com/dbgv4iow6/video/upload/v1612893300/Buffetts-Summit/Stock_Loop_ddwt5v.mp4"} type='video/mp4'/>        
            </video>
            <div className="overlay">
                <Row>
                    <Col sm>
                        <h2 className="initialPageTitle">Investment Club Presents: </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                        <h3 className="initialPageHeader">Buffett's Summit!</h3>
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
                    <h2 className="ChoiceTitle">Technology Boom</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc"> The past decade has seen strong economic growth, steady job creation, low inflation, economic boom, rising productivity, and a surge in the stock market caused by rapid technological changes and a very sound, central monetary policy. On top of the technological boom, Congress has deregulated the sale of natural gas, and set trade restrictions on agricultural and textile imports to add value to the US economy. </p>
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
                        <h5 className="StockTitle">Stock 1 - TECC</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893333/Buffetts-Summit/comp/sc1/TECC_t6rul9.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    Exclusive focus on developing and selling data storage and data management hardware and software and convincing its customers to buy its products independent of their other IT buying decisions have made TECC a strong runner in the market. As a leader in the data management industry with solid profitability due to the tech boom, many analysts see this stock as a must have in an investor’s portfolio. After a 200% year to date rally, however, many analysts remain skeptical of the company's future earnings and are cautioning many buyers about buying at all time highs. TECC remains a high risk, high reward company for those that can stomach high levels of volatility, and despite concerns for short term drops, investor sentiment remains generally bullish. 
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - ETRON</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893332/Buffetts-Summit/comp/sc1/ETRON_bnlg4a.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    As an energy trading firm, ETRON has managed to capitalize highly on the government’s decision to deregulate gas prices and ultimately holds the title for the largest seller of natural gas in the United States. However, this growth and expansion has not been without its pitfalls, and the company has started to come under scrutiny. Executive compensation packages have rewarded growth at all costs, and insiders have pursued growth aggressively, even fraudulently. In a recent breaking news event, the CEO was unable to explain why the firm would not publish a balance sheet alongside its earning releases (a feat that virtually every other company achieves), and the stock has dipped as a result on fears of possible fraudulent accounting. Despite these risks, many investors are seeing this blip as a potential buy-in opportunity to get a significant discount on the largest energy provider in the United States, as many believe that the company is simply too large to fail and energy cannot go out of demand. Regardless, analysts are heeding considerable caution.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - MSNAX</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893333/Buffetts-Summit/comp/sc1/MSNAX_xkvv8r.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    Producer of one of America’s favorite breakfast cereal bars, MSNAX remains as a large cap, low volatility corporation that has experienced relatively moderate growth over the past decade. Favored by investors for its relatively low risk profile, the company has recently taken a slight blow because of the government’s restrictions on agricultural imports, and the stock has experienced a slight dip. In a recent podcast, the CEO has come forth stating that they are actively seeking ways to make new partnerships with domestic farmers, but has evaded any questions any timeframe for how soon this change might be occurring. Despite these setbacks, the company has maintained relatively strong performance over the past 3 quarters and analysts are confident that the stock will soon recover from its initial slip, though the time frame remains slightly further out.
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
    if (value < 0.8){
        return (value < 0.5) ? amount*1.2 : amount*1.5; 
    } else {
        return amount*0.9;
    }
    //risk: overall 80% chance - (30% for +50% and 50% for +20%), overall 20% chance for -10%
}
export const fSc1St2 = (amount) => {
    const value = Math.random();
    if (value < 0.6){
        if (value < 0.15) return amount*0.1;
        else if (value > 0.45) return amount*0.5
        else return amount*0.9
    } else {
        return amount*1.15;
    }
    //risk: overall 60% chance - (15% for -90% and 15% for -50% and 30% for -10%), overall 40% gain - (100% for +15%)
}
export const fSc1St3 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0.95;
    else if (value > 0.9) return amount*1.1;
    else return amount*1.05;
    //risk: overall 80% for +5%, overall 10% for -5%, overall 10% for +10%
}


export function Choice2 () {
    return(
        <>
        <div className="backgroundPic">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Desperate Times</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc"> After a severe slowdown in the housing markets across the nation, several large institutionalized banks have declared bankruptcy, plunging the US economy into a deep recession. Millions of Americans have found themselves both jobless and homeless as the nation’s central monetary policy showed signs of collapse. On top of the financial turmoil, the US political sphere was also rife with change, with a new presidential elect taking office, promising to create a stimulus plan to revive the nation’s broken economy. Analysts are predicting this to be one of the greatest recessions that the US economy has faced in its history. Topping it off, gas prices have reached record highs, adding to the financial burdens on consumers.</p>
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
                        <h5 className="StockTitle">Stock 1 - EMRT</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893334/Buffetts-Summit/comp/sc2/EMRT_f4f1cz.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    Situated as a large, retail giant with a broad variety of goods at super competitive prices, EMRT has always been a large cap, low volatility corporation that has experienced moderate growth over the decades. However, with the advent of the economic recession, EMRT’s revenue has experienced significant growth where most companies have floundered. In a recent article, renown analysts distinguished that the key to EMRT’s growth is in providing inexpensive but reliable goods, and that in the current economy’s condition, it would be the higher-end, more luxurious products that would experience the greatest brunt of the recession. EMRT has also just announced an increase in dividend payout, leaving many investor’s puzzled as to how EMRT is managing such a feat during such an economic crisis.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - GASCR</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893334/Buffetts-Summit/comp/sc2/GASCR_yelxs8.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    One of the largest car manufacturers in the US, GASCR has come under increasing financial pressure on multiple fronts. Recessions almost always spell disaster for vehicle manufacturers, as new cars are often one of the first expenses to be cut by modern families when finances get tight. On top of the recession, gas prices have reached all time highs, making smaller, more efficient cars, as well as public transportation, more desirable than the larger, luxurious automobiles of the past. GASCR’s largest profit makers, its SUV’s and Trucks, have experienced historical lows in sales, and 2 of its 4 plants have temporarily ceased production to adjust for the change in demand. While the stock price has experienced a significant dip due to these obstacles, some investors are optimistic that Americans will return to buying automobiles once the recession is over. Some believe that the stock is currently on sale and will yield significant future profit, while others caution that it is yet to fall further and may take multiple years to see any significant upside.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - MINER</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893335/Buffetts-Summit/comp/sc2/MINER_dyuoqz.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    MINER is a fund that tracks/reflects the price of gold, allowing retail investors to dabble in commodities. Often used as a hedge to fiat currency, gold tends to experience large increases in price during recessions and periods of economic downfall. However, this recession appears to be slightly different. As banks struggled to find the dollar liquidity needed to stay afloat (as most of their assets were tied up in long term investments), banks have been borrowing gold and selling it on the market to obtain more dollar liquidity. Due to the exponential increase in supply as banks try to cover their needs, the value of gold has been dropping. Despite this, some investors believe that should the US financial system completely collapse, gold will still be a safe hedge, even if its value is temporarily dropping. Others believe that as long as banks are pumping the market, gold’s price will continue to fall. Many analysts are again heeding caution due to the nature of the recession, but many also believe gold to be a good means of diversification during these risky times. 
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
    if (value < 0.4) return amount*0.92;
    else if (value > 0.6) return amount*1.08;
    else return amount*1.02;
    // risk: overall 40% down (8%), overall 40% up (8%), overall 20% moderate growth (2%)
}
export const fSc2St2 = (amount) => {
    const value = Math.random();
    if (value < 0.5){
        if (value < 0.1) return amount*0.1;
        else if (value < 0.3) return amount*0.5;
        else return amount*0.75;
    } else {
        if (value > 0.9) return amount*1.35;
        else if (value > 0.7) return amount*1.25;
        else return amount*1.15;
    }
    // risk: overall 10% down (90%), overall 40% down (20% -50%, 20% -25%), overall 50% up (20% +15%, 20% +25%, 10% +35%)
}
export const fSc2St3 = (amount) => {
    const value = Math.random();
    if (value < 0.4) return amount*1.05;
    else if (value > 0.5) return amount*0.95;
    else return amount*1.10;
    // risk: overall 40% up (5%), overall 10% up (10%), overall 50% down (5%)
}


export function Choice3 () {
    return(
        <>
        <div className="backgroundPic">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">New Invention - Long Distance Wireless Charging</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">A recently developed technology, known as Long Distance Wireless Charging (LDWC), has taken the tech world by storm as companies all across the world have revamped their products to include LDWC compatibility. More convenient and practical than wired charging and previous gen wireless charging, this new technology allows for users to constantly use their devices without worrying about the battery dying, as long as the device is within range and connected to a WiFi signal. Most phone manufacturers have begun the transition towards this form of charging, and the technology is looking promising for future generations of electric vehicles and energy storage.</p>
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
                        <h5 className="StockTitle">Stock 1 - ROUTR</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893336/Buffetts-Summit/comp/sc3/ROUTR_mf8k3h.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    ROUTR is one of the largest providers of routers in the US, enabling millions of homes across the nation to access and utilize WiFi. Due to the large surge and increase in demand from people wanting stronger, faster, and wider-reaching WiFi connections for their homes, cars, and devices, ROUTR has experienced a product deficit/shortage due to inefficiencies in its supply chain. While ROUTR’s stock price has soared on optimism for the future LDWC technology, many analysts are labeling the company as severely overpriced/driven by sentiment, and currently incapable of increasing its deliveries to match the current demand. While ROUTR is increasing its number of factories and workers in expansionary efforts, many are worried that ROUTR may be losing its hold on the market to new and upcoming companies that may have a better time mobilizing their resources and providing for customers. While many analysts believe that the company will experience exponential growth over the next couple of years, many of them are worried that the current stock price is in a bubble and that the price is leading too far into the future for the company. While the company might have significant upside, many are worried that it is in for a large drop after its astronomical returns in the previous months.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - COPPR</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893335/Buffetts-Summit/comp/sc3/COPPR_vjz97d.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    COPPR, a company focused on the refinement, production, and sale of copper has recently taken a hit in demand due to the decrease in need for copper wiring in charging cables. As devices transition to total wireless charging, less and less copper is being ordered by major tech corporations. However, not one to give up without a fight, COPPR has invested a large portion of its funds into revamping its business model to become more efficient in its production phase. Rather than obtaining copper from mining, the company has turned its focus to developing plants to recycle existing copper, a move that analysts predict will significantly reduce the cost of production in the long run. In a recent press conference, the CEO stated that the company is hoping that the lowered cost of production will allow the company to remain profitable despite lower sales, and that copper would never go completely out of demand. The stock, after taking an initial dip on fears of copper becoming obsolete, have surged on the news of COPPR’s new approach. Analysts believe the company will be a good hedge and will likely produce modest returns once the business model transition is complete.
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - PHONE</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893335/Buffetts-Summit/comp/sc3/PHONE_g08zze.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    PHONE’s stock price surged on news that the company would be investing heavily in R&D on how to implement LDWC technology into its phones, as well as coming up with new plants and machines to assemble the new devices. However, the company warns that such development will be costly to the company, and that there will be many hidden costs in having to phase out the old wired and wireless charging technologies. Despite these concerns, PHONE has balanced these costs with consumer optimism for the new technology and their desire for PHONE’s devices. While the stock price has surged and consumer sentiment is high, many analysts warn that most of PHONE’s upcoming growth has already been priced into the stock, but others see this stock as a historically stable investment option with considerable returns for future years. 
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
    if (value < 0.3) return amount*0.55;
    else if (value < 0.5) return amount*0.9;
    else if (value > 0.8) return amount*1.15;
    else return amount*1.1;
    //30% for 45% down, 20% for 10% down, 30% for 10% up, 20% for 15% up
}
export const fSc3St2 = (amount) => {
    const value = Math.random();
    if (value < 0.4) return amount*0.95;
    else if (value > 0.6) return amount*1.05;
    else return amount*1.1;
    //40% of 5% down, 40% of 5% up, 20% of 10% up
}
export const fSc3St3 = (amount) => {
    const value = Math.random();
    if (value < 0.2) return amount*0.95;
    else if (value > 0.45) return amount*1.05;
    else return amount*1.08;
    //20% chance for 5% down. 55% chance for 5% up. 25% for 8% up
}


export function Choice4 () {
    return(
        <>
        <div className="backgroundPic1">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitleWhite">President Impeachment</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDescWhite">The current sitting president was recently impeached and removed from office after leaked documents exposed his plans to sell American data to foreign countries in exchange for access to oil fields within these countries. This recent event has been in light of other questionable tactics from other politicians and allegations against certain members of Congress. As a direct result, trust in the US government is at all time lows, and the value of the US dollar has fallen considerably. Furthermore, support and confidence for the US police force is also collapsing, with many Americans taking it upon themselves to protect themselves and their families as they no longer trust the police to do their job.</p>
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
                        <h5 className="StockTitle">Stock 1 - CRYP</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893336/Buffetts-Summit/comp/sc4/CRYP_tcl2re.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    CRYP is a fund that tracks the prices of the top cryptocurrencies on the market. Due to the recent loss of trust in the central banking system, cryptocurrencies have experienced a surge in price as investors look to hedge their funds against the loss of value of the dollar. However, most cryptocurrencies as a form of currency at this point in time are highly unreliable due to the highly volatile price movements of the coins. Therefore, cryptocurrency has been acting more as a store of value, and many analysts believe that cryptocurrencies will drop again once confidence in the US dollar regains traction. As of right now, CRYP remains as a higher risk fund with extremely volatile swings in price. 
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - PROTC</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893336/Buffetts-Summit/comp/sc4/PROTC_whmqx0.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    After news of the data leaks, stocks for PROTC and other independent data protection services have skyrocketed as Americans seek to have their private information protected and out of the hands of the government. As a forerunner in this field, PROTC utilizes top of the line encryption algorithms to ensure that user data cannot be hacked or intercepted by a third party. Analysts predict that PROTC will continue to experience high growth for the short term, but that as time goes on more and more Americans gradually begin to forget about the security breach and continue life as normal, that a stagnation in sales for PROTC will occur.  
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - WEAPN</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893337/Buffetts-Summit/comp/sc4/WEAPN_ohtw6l.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    As more and more news stories about the police failing to protect the American public from harm’s way surface, the more and more American distrust in its social protection agencies grows. As a result, companies such as WEAPN that produce personal defense devices and firearms have experienced significant growth. WEAPN, a company that specializes in a broad range of firearms, has seen a large increase in their smaller, more versatile handguns. The company has, however, come under recent scrutiny by left-wing politicians/lobbyists due to their methods of promotion and advertisement for lethal weapons, especially at younger audiences. While not necessarily beneficial, these talks have brought light again to the age-old argument of gun laws and ownership, with some protestors hosting demonstrations outside of WEAPN storefronts to advocate for safer gun laws/practices. These protests are hurting sales in the short run, but the stock may run flat or trade higher in the long term if these gun law protests can be pacified.   
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
    if (value < 0.1) return amount*0.3;
    else if (value < 0.3) return amount*0.6; //JS has short-circuit evaluation
    else if (value > 0.7) return amount*1.2;
    else if (value > 0.5) return amount*1.05;
    else return amount*0.9;
    //10% for 70% down, 20% for 40% down, 20% for 10% down, 20% for 5% up, 30% for 20% up
}
export const fSc4St2 = (amount) => {
    const value = Math.random();
    if (value < 0.5) return amount*0.95;
    else if (value > 0.8) return amount*1.08;
    else return amount*1.05;
    //50% down 5%, 30% up 5%, 20% up 8%
}
export const fSc4St3 = (amount) => {
    const value = Math.random();
    if (value < 0.3) return amount*0.9;
    else if (value < 0.35) return amount*0.95;
    else if (value > 0.55) return amount*1.08;
    else return amount;
    //30% for 10% down, 5% for 5% down, 20% for 0%, 45% for 8% up
}


export function Choice5 () {
    return(
        <>
        <div className="backgroundPic1">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitleWhite">Environmental Advocacy</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDescWhite">As global warming continues to increase global temperatures and produce more frequent natural disasters around the world, governments have begun to crack down hard on environmentally detrimental practices. In the US, environmental advocacy has taken hold and become the new wave in the business world, with companies trying their best to make their products seem as environmentally friendly and sustainable as possible in order to meet increasing consumer demands. Taxes on excessive packaging, greenhouse emissions, and toxic chemical production are a few of the many changes on the government level to try and combat this rising issue. Other changes include subsidies on green energy, public transportation, and production-level recycling.</p>
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
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - CARBEN</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893337/Buffetts-Summit/comp/sc5/CARBEN_u4rwzg.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    CARBEN is a start-up company focused on efficiently closing the carbon cycle for business purposes. By removing carbon dioxide in the air and turning it into usable products such as carbon fiber, hydrocarbons (such as gasoline), and graphene, CARBEN is on the forefront of environmental sustainability and reducing greenhouse gasses. While highly praised on both a corporate and social level, CARBEN’s current business model remains unprofitable, despite subsidies from the government for green energy and production-level recycling. Investors, believing the company will be the next big thing of the future, have boosted the stock price considerably, giving CARBEN a short term edge on funding research to streamline their business model and processes. However, due to its lack of profitability, many analysts worry that the technology is truly ahead of its time, and if unable to reduce costs may go bankrupt. On the other hand, if CARBEN manages to find profitability, it is expected to be one of the largest and most influential companies of the next decade.
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - NWGAS</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893337/Buffetts-Summit/comp/sc5/NWGAS_dqtc3d.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                   NWGAS, one of the largest natural gas providers in North America, has come under increasing pressure with the new government regulations to try to become less environmentally harmful. As both the production of gas and the utilization of it as an energy source are harmful to the environment, NWGAS has experienced an increased disapproval from Americans and governments alike. As a result of both this consumer sentiment and government regulation, NWGAS has posted a heavy decrease in quarterly sales and a decline in stock price. However, after a recent announcement that the company had plans to help society wean off of natural gas as it transitioned into a clean energy company, the stock price has been up over 30% on investor speculation. Such a stark transition from one sector to another has yet to be seen in the energy industry, leaving many analysts unsure of what the future may hold. On one hand, if the transition is successful, NWGAS would have one of the largest infrastructures to provide clean energy to North America, allowing it to dominate the market. If the transition is unsuccessful, however, it will likely spell the end of the company. 
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - GREEN</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893337/Buffetts-Summit/comp/sc5/GREEN_ry3mad.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    GREEN is a large cap energy company that specializes in the production of solar panels and battery packs for home installation and use. With recent events, GREEN has experienced increased demand for its products as consumers seek to minimize their taxes on natural gas as well as benefit from the government subsidies for green energy. However, GREEN is one of many companies in the field of solar energy and does not necessarily have a corner on the market. As a result, many analysts expect the company to grow at roughly the same rate as the rest of the energy sector. While relatively safe with low risk of potential downside, analysts are labeling GREEN as a moderate growth stock as consumers slowly begin to transition more and more to renewable energy. 
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
    if (value < 0.1) return amount*0.3;
    else if (value < 0.3) return amount*1.2;
    else if (value > 0.65) return amount*0.95;
    else return amount*1.1;
    //10% down 70%, 35% down 5%, 35% up 10%, 20% up 20%
}
export const fSc5St2 = (amount) => {
    const value = Math.random();
    if (value < 0.2) return amount*0.3;
    else if (value < 0.4) return amount*1.05;
    else if (value > 0.7) return amount*1.15;
    else return amount*1.1;
    //20% for 70% down, 20% for 5% up, 30% up 10%, 30% up 15%
}
export const fSc5St3 = (amount) => {
    const value = Math.random();
    if (value < 0.15) return amount*0.92;
    else if (value < 0.3) return amount*0.98;
    else if (value > 0.5) return amount*1.02;
    else return amount*1.06;
    //15% for 8% down, 15% for 2% down, 50% for 2% up, 20% for 6% up
}


export function Choice6 () {
    return(
        <>
        <div className="backgroundPic2">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Virus Pandemic</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">A recent virus outbreak from Western Europe has caused the world to go into a 6 month lockdown as this global pandemic wrecks havoc on mankind. With a high infection rate and relatively high fatality rate, governments across the world are warning that the world as we know it might never be the same, and that lockdowns will likely continue for the foreseeable future. As such, many businesses related to travel, social gatherings, and luxury have taken a drastic hit, with quarterly revenues across the board dropping to historic lows. The National Bureau of Economic Research (NBER) has determined the economy to be in a period of recession, and overall economic activity is the worst in US history. In the midst of this large economic halt, however, many companies have found a way to adapt and thrive, with some sectors seemingly less affected by the virus outbreak than others. The government has mandated that all restaurants, gyms, and other social hubs must remain shut down for the duration of the lockdowns. As a form of compensation, the government has offered 0% interest loans to business owners to keep their businesses running for the duration of the shutdown. Many forms of communication have moved digital, and business models that promote social distancing and healthier lifestyles have seen significant upside. While the length of the lockdown cannot be predetermined, it is predicted that things will eventually go back to normal, but that it could take decades for such change to occur.</p>
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
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - AIRLN</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893338/Buffetts-Summit/comp/sc6/AIRLN_b7hefi.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    At the beginning of the pandemic, AIRLN and many other travel oriented companies took a major hit in revenues as everyone was mandated to remain at home. AIRLN, one of the largest airlines in the US, saw of the largest drops in stock price due to the onset of the lockdown, as the government restricted all flights bar specific circumstances. AIRLN’s customer base decreased roughly 85% in this period, and many of the airline’s aircraft had to be scrapped in order to save money on maintenance and other costs. Both bullish and bearish cases exist for the company right now, with bulls believing that the stock will eventually return to pre-pandemic prices—offering possible gains of over 100%. Bears believe that airlines might go bankrupt, similar to many of the banks during the 2008 financial crisis due to questionable financial decisions pre-pandemic. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - ONLNE</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893338/Buffetts-Summit/comp/sc6/ONLNE_ij5zfj.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                   ONLNE is a start-up company that came into focus at the onset of the pandemic. Situating itself as an online digital conferencing tool, ONLNE allows for virtual meetings to take place for either professional or commercial use. After receiving much attention for becoming the platform of choice amongst major corporations and other social settings, the stock skyrocketed with large expectations for the future. However, an issue regarding user data security quickly came to light, and ONLNE is now entrapped in a series of legal battles over privacy policies and encryption/access to user data. As a result, some analysts fear that the company may get surpassed by other, less problematic platforms in the race for winning over the market. 
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - CNNCT</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893338/Buffetts-Summit/comp/sc6/CNNCT_ap6t6a.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    CNNCT is another online digital conferencing platform, and has been around for over a decade. Once hailed as the conferencing medium of choice, a lack of innovation and buggy servers have turned the company into a shell of its former self, despite still being a large market cap corporation. Now, with the pressure of newer, more refined conferencing platforms available, CNNCT has seen a significant decrease in market share and has since scrambled to revise its business model. As of a recent press release, CNNCT has stated that they are restructuring their board in hopes of getting new, creative mindsets to push the company forward. This change is expected to occur in the coming months, though analysts are worried that by then CNNCT will have lost its market influence to new competitors. 
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

export const fSc6St1 = (amount) => { 
    const value = Math.random();
    if (value < 0.1) return amount*0;
    else if (value < 0.45) return amount*0.7;
    else if (value > 0.9) return amount*2;
    else return amount*1.1;
    //10% for 100% down, 35% for 30% down, 35% for 10% up, 10% for 100% up
}
export const fSc6St2 = (amount) => {
    const value = Math.random();
    if (value < 0.5) return amount*0.95;
    else if (value > 0.8) return amount*1.05;
    else return amount*1.02;
    //50% for 5% down, 30% for 2% up, 20% for 5% up
}
export const fSc6St3 = (amount) => {
    const value = Math.random();
    if (value < 0.4) return amount*0.9;
    else if (value > 0.6) return amount*1.07;
    else return amount*0.95;
    //40% for 10% down, 20% for 5% down, 40% for 7% up
}


export function Choice7 () {
    return(
        <>
        <div className="backgroundPic2">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Terrorist Attack</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">A recent slew of global terrorist attacks has struck the hearts of Americans across the nation, once again instilling fear into the public and igniting new controversy over the safety of both travelling and high-volume social spaces. With these recent events still in the forefront of many American minds, many people have begun to change their daily habits to minimize any unnecessary risks that may place them in unwanted social situations. The US economy has experienced a slight downturn, but the impacts of these events are not expected to put the country into a recession. In response to fears of safety, the government is planning on increasing its spending on domestic defense.</p>
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
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - FLYR</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893338/Buffetts-Summit/comp/sc7/FLYR_xzokem.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    FLYR, an airline company, has experienced a dip due to concerns over plane hijackings/sabotage, airport safety, and a lessened desire to travel overall. In an effort to quell any outstanding fears regarding safety, the airline has decided to install additional safety measures such as a completely sealed off and locked cockpit (preventing unwanted entry) and emergency buttons at predetermined locations on the plane. As a result of these additions as well as other factors, flyer confidence has slowly begun to return and the company is expected to finish off the quarter strongly and make back its previous losses and will return to its normal rate of growth. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - INSR</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893339/Buffetts-Summit/comp/sc7/INSR_vqazxd.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                   After the events that unfolded, INSR and other life insurance companies began to increase premiums as actuaries started to add these new risks into their pricing. People living in high traffic areas with higher likelihood of such attacks have experienced the brunt of these increases. Insurance companies across the board have been hit hard, many losing billions of dollars in claims and legal fees. Many consumers are not happy with the price increases on premiums, claiming that companies like INSR are taking advantage of these terrible situations to increase their profits. As a result, INSR’s stock has been trading lower than normal. Recent news of a possible government aid package that would limit insurers when paying off terrorist related claims have begun circulating, but the market has yet to react.  
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - HEED</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893339/Buffetts-Summit/comp/sc7/HEED_fddr0r.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    HEED, an aerospace, arms, defense, security, and advanced technologies company is expected to see a surge in stock price due to recent news of possible increased government expenditure on military defense and security. Therefore, HEED, being in partnership with the US military, is expected to be a major supplier for this increased demand in weapons and security mechanisms. However, if this increase in government expenditure does not occur, or the contract is delegated to another corporation better suited for domestic security, investor sentiment is predicted to plunge the stock lower due to the loss of opportunity. 
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

export const fSc7St1 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0.98;
    else if (value > 0.8) return amount*1.08;
    else return amount*1.05;
    //10% for 2% down, 70% for 5% up, 20% for 8% up
}
export const fSc7St2 = (amount) => {
    const value = Math.random();
    if (value < 0.3) return amount*0.9;
    else if (value < 0.4) return amount*0.95;
    else if (value > 0.75) return amount*1.08;
    else return amount*1.05;
    //30% for 10% down, 10% for 5% down, 35% for 5% up, 25% for 8% up
}
export const fSc7St3 = (amount) => {
    const value = Math.random();
    if (value < 0.3) return amount*0.85;
    else if (value > 0.9) return amount*1.15;
    else return amount*1.1;
    //30% at 15% down, 60% at 10% up, 10% at 15% up
}


export function Choice8 () {
    return(
        <>
        <div className="backgroundPic3">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Deceased CEO</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">In a freak accident this morning, the CEO of Sahara (Ticker: SRHA) has died in a car accident on his way to work. One of your close friends, a first responder on site, has texted you about the situation and how crazy his morning has been due to the accident. The news of the accident has not yet reached its way to the media, and you plan on making an investment decision quickly before the rest of the market can react.</p>
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
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - SHRA</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893339/Buffetts-Summit/comp/sc8/SHRA_nk5xxk.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    SHRA is an online delivery service tailored towards the younger generations. After experiencing exponential growth within the previous decade due to an aggressive growth model and strong leadership, SHRA has become one of the largest corporations in the United States. The company, despite being synonymous with its CEO and his personal success, has demonstrated strong fundamentals and the ability to be self-sustaining when needed due to the many levels of strong leadership present within the company. The news of their CEO’s death could potentially make or break the company. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - NILE</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893339/Buffetts-Summit/comp/sc8/NILE_hdur3i.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                   NILE is another online delivery service platform in direct competition for market share with SHRA. While less solid in its fundamentals than SHRA, NILE has proven itself a worthy competitor and has experienced significant growth over the past decade due to a hybrid model of both online and in-person services. While market preference shows a strong correlation between younger generations and SHRA, NILE remains strong with its user base due to constant incentives and sales for frequent users, though many analysts believe that such incentives are unsustainable for the company and may result in a collapse later down the line.  
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - SUPPL</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893340/Buffetts-Summit/comp/sc8/SUPPL_uozcct.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    SUPPL is one of the largest suppliers of goods and services for corporations like NILE and SHRA and is directly responsible for many of the goods present in both market spaces. As a supplier for both sides, SUPPL does not experience much volatility in terms of orders and as a result tends to maintain a steady growth rate that is proportional to the increase in demand for online delivery services. As it is one step removed from the consumers, SUPPL is a good pick to hedge funds while simultaneously getting exposure to the entire market for online delivery services. 
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

export const fSc8St1 = (amount) => {
    const value = Math.random();
    if (value < 0.15) return amount*0.7;
    else if (value < 0.45) return amount*0.9;
    else if (value > 0.65) return amount*1.1;
    else return amount*0.95;
    //15% of 30% down, 30% of 10% down, 20% of 5% down, 35% at 10% up
}
export const fSc8St2 = (amount) => {
    const value = Math.random();
    if (value < 0.2) return amount*0.9;
    else if (value < 0.4) return amount*0.95;
    else if (value > 0.8) return amount*1.15;
    else return amount*1.1;
    //20% at 10% down, 20% at 5% down, 40% at 10% up, 20% at 15% up
}
export const fSc8St3 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0.98;
    else return amount*1.05;
    //10% at 2% down, 90% at 5% up
}


export function Choice9 () {
    return(
        <>
        <div className="backgroundPic3">
            <br/>
            <Row>
                <Col>
                    <h2 className="ChoiceTitle">Automobile Examination</h2>
                </Col>  
            </Row>
            <br/>
            <Row>
                <Col>
                    <p className="ChoiceOverallDesc">After recently buying a new car, you have become interested in possibly investing in the market for automobiles, as you have heard that the sector as a whole has done fairly well over the past decade. To assist you in your search, you have done some research on the market and have narrowed your choices down to 3 specific companies, each representing one of the major car manufacturers in the United States.</p>
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
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - CITO</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893340/Buffetts-Summit/comp/sc9/CITO_n0axm3.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    CITO is a car manufacturer with a focus on producing efficient, compact, and safe economy class cars. While profit margins are low, CITO relies heavily on large numbers of sales in order to drive revenue and profit. As a result, CITO often experiences high volatility in earnings in proportion to significant shifts in sales volume. However, due to the cheap price of their cars, CITO often meets quarterly earnings expectations unless the entire economy enters a period of recession, in which sales tend to fall drastically as lower income families can no longer afford new cars. CITO has a beta of roughly 2 and is extremely sensitive to market movements. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - AVOV</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893340/Buffetts-Summit/comp/sc9/AVOV_aevyen.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                   AVOV is another popular car manufacturer, with a primary focus on middle class, family-oriented SUVS and Trucks. AVOV relies on a moderate production volume, moderate profit margin in order to generate revenue and can thus produce less vehicles in order to balance its costs of production. AVOV often experiences minimal changes in vehicles produced, even during periods of recession, due to a roughly constant demand for middle class vehicles. AVOV has a beta of roughly 0.25 and is fairly independent of the market’s movements.  
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - HUMM</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893340/Buffetts-Summit/comp/sc9/HUMM_ohbp6d.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    HUMM is a luxury car manufacturer tailored towards the wealthiest of consumers. HUMM designs each vehicle by direct customer request and thus experiences extremely low production volume, but covers these costs with the highest profit margin per vehicle out of any manufacturer in the automotive industry. HUMM is also significantly impacted by periods of economic recession, as luxury vehicles are often one of the first things to go when finances get tight. HUMM has a beta of roughly 1 and follows the overall market closely. 
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

export const fSc9St1 = (amount) => {
    const value = Math.random();
    if (value < 0.2) return amount*0.7;
    else if (value < 0.4) return amount*0.85;
    else if (value <= 0.5) return amount;
    else if (amount < 0.7) return amount*1.1;
    else if (amount < 0.9) return amount*1.2;
    else return amount*1.3;
    //20% at 30% down, 20% at 15% down, 10% at 0, 20% at 10% up, 20% at 20% up, 10% at 30% up
}
export const fSc9St2 = (amount) => {
    const value = Math.random();
    if (value < 0.15) return amount*0.95;
    else if (value > 0.9) return amount*1.08;
    else return amount*1.04;
    //15% at 5% down, 75% at 4% up, 10% at 8% up
}
export const fSc9St3 = (amount) => {
    const value = Math.random();
    if (value < 0.25) return amount*0.9;
    else if (value < 0.5) return amount*0.95;
    else if (value > 0.75) return amount*1.1;
    else return amount*1.05;
    //25% at 10% down, 25% at 5% down, 25% at 5% up, 25% at 10% up
}


export function Choice10 () {
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
                    <p className="ChoiceOverallDesc">Over the past couple of years, a large social shift has been occurring away from console gaming systems towards mobile games and handheld, portable devices. Despite there being no significant reasons for this shift to occur other than a cultural desire for something new and different, many companies have begun to try to adapt to meet these changing standards and interests.</p>
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
            <br/>
        </div>
        <Container fluid>
            <br/>
            <br/>
            <Row sm>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 1 - ROMP</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893334/Buffetts-Summit/comp/sc10/ROMP_jetmj8.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    ROMP is a mobile app developer with a repertoire of moderately successful mobile games. Their newest title, aptly named Jumpy Dogs, has begun to gain traction and is now trending on the app stores. However, due to licensing agreements with the app stores, ROMP only sees a small portion of the money users spend to purchase the app, with most of the revenue instead going to the respective mobile companies that run the app stores. Most of ROMPs profits therefore come from in-app purchases, making ROMPS earnings entirely dependent upon the hype surrounding the game and the duration for which this hype lasts, making the stock price extremely volatile but promising. 
                                </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 2 - NNDA</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893333/Buffetts-Summit/comp/sc10/NNDA_f4udlo.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                   NNDA is a console developer that has recently released a portable, handheld console that can be played virtually anywhere, and will take its place in NNDAs lineup alongside its traditional, stationary console. This decision to bridge the gap between console and mobile gaming has come with great success for NNDA, with the stock price reacting favorably after the new release. However, this decision has lowered the sales of NNDA’s traditional console, which has proven to have the highest profit margin for the company. As a result of this shifted demand, NNDA has experienced less than optimal growth in the past quarter. Analysts are expecting future quarters to become profitable as NNDA figures out how to better balance the supply and sale of its products, and is likely to experience moderate growth levels.  
                            </ReactReadMoreReadLess>
                        </div>
                        <br/><br/>
                    </div>
                </Col>
                <Col sm>
                    <div className="styleCardBlue">
                        <h5 className="StockTitle">Stock 3 - MOND</h5>
                        <br/>
                        <Image className="StockPic" src={"https://res.cloudinary.com/dbgv4iow6/image/upload/v1612893333/Buffetts-Summit/comp/sc10/MOND_ygo2cv.png"}/>
                        <br/><br/>
                        <div className="StockDesc">
                            <ReactReadMoreReadLess
                                charLimit={200}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}>
                                    MOND is a strictly console only developer with a corner on the overall console market. The company has recently come out stating that they have no intention of releasing a portable device, as they believe that their business model is better oriented for providing better experiences to traditional console gamers. However, due to a declining interest in traditional console gaming, MOND has had to restructure and adjust to the change in demand. While unlikely that console gaming will disappear completely, MOND might experience declines in revenue if interest in console gaming continues to drop. However, In the event that console gaming does come back in style, MOND will have an even larger edge on the market as direct rival NNDA has shifted interest away from traditional console gaming. 
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

export const fSc10St1 = (amount) => {
    const value = Math.random();
    if (value < 0.4) return amount*0.9;
    else if (value > 0.6) return amount*1.15;
    else return amount*0.95;
    //40% at 10% down, 20% at 5% down, 40% at 15% up
}
export const fSc10St2 = (amount) => {
    const value = Math.random();
    if (value < 0.1) return amount*0.95;
    else if (value > 0.9) return amount*1.06;
    else return amount*1.04;
    //10% at 5% down, 80% at 4% up, 10% at 6% up
}
export const fSc10St3 = (amount) => {
    const value = Math.random();
    if (value < 0.25) return amount*0.7;
    else if (value < 0.5) return amount*0.95;
    else if (value < 0.75) return amount*1.05;
    else return amount*1.3;
    //25% at 30% down, 25% at 5% down, 25% at 5% up, 25% at 30% up
}
