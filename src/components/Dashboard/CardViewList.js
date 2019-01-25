import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardView from './CardView';
import { testData } from './store.js'

const CardViewList = () => {
    console.log(testData);
    //const data = {
    //    win: 2345,
    //        cardId: 1,
    //        cardComponent: 'INVENTORY',
     //       cardSubComponent: 'DC Inv',
     //       cardTask: 'DC Trapped Inv',
      //      cardLevel: 'Item-DC', 
      //      taskCount: 2417, 
      //      updateDate: '2019-01-14',
      //      colorCode: "#76c043",
      //      dataLoadDate: '2019-01-14',
       //     isDelete: 0,
       //     fileDocument: ''
        //};
    return(
        <div>
           <Grid container >
            {testData.map(testData => <Grid item md={3} key={testData.cardId.toString()}><CardView cData = {testData} /></Grid> )}
            </Grid>       
        </div>
    );
}
export default CardViewList;