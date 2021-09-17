import React from 'react';
import OurCompany from './OurCompany';
import OurTeam from './OurTeam';

import { Route,Link, Switch } from 'react-router-dom';


const About = () => {
    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-4">
                    <ul className="m-2">
                        <li>
                            <Link to="/about/team">Our Team</Link>
                        </li>
                        <li>
                            <Link to="/about/company">Our Company</Link>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <Switch>
                        <Route path="/about/team" component={OurTeam}/>
                        <Route path="/about/company" component={OurCompany}/>
                    </Switch>
                    
                </div>
            </div>
            
        </React.Fragment>
     );
}
 
export default About;