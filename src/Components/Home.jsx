import React from 'react';
import qs from "query-string";

const Home = (props) => {
    const res = qs.parse(props.location.search);
    console.log(res);
    return ( 
        <h1>Home</h1>
     );
}
 
export default Home;