import React from 'react';
import './index.css';
import Details from './components/Details';
import {Grid} from '@material-ui/core';
const  App=()=> {
  return (
    <div>
      <Grid container spacing={0} alignItems="center" style={{height:'100vh'}}>
          <Grid item xs={12} sm={4} >
             <Details title="Income"/>
          </Grid>
          <Grid item xs={12} sm={4}>
             main
          </Grid>
          <Grid item xs={12} sm={4}>
             <Details title="expense"/>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
