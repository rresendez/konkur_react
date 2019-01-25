import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardView from './CardView';
import { testData } from './store.js'

const CardViewList = () => {
    
    return(
        <div>
           <Grid container >
            {testData.map(testData => <Grid item md={3} key={testData.cardId.toString()}><CardView cData = {testData} /></Grid> )}
            </Grid>       
        </div>
    );
}
export default CardViewList;