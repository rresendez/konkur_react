import React from 'react'
//import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
//import CardActions from '@material-ui/core/CardActions'
//import CardActionsArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

const CustomHeader = withStyles({
            title:{
                color:'white'
                ,fontSize:14 
                ,fontWeight: 'bold'            
            },
            action:{
                flex: '0 0 auto'
                ,alignSelf: 'flex-start'
                ,marginTop: -25
                //,marginRight: -8
            }
        }    
        )(CardHeader)

const CardView = (props) => {
        const data = props.cData;
        const cardStyle = {
            card:{
               // maxWidth: 275, 
                marginLeft: 10, 
                border: 'none',
                marginRight: 5,
                textalign: 'center',
                fontSize: 12
            },
            cardHeader:{
                backgroundColor: props.cData.colorCode,
                height: 3
            }
        }

        return(
            <div style={{paddingTop:'5%'}}>
            <Card style={cardStyle.card}>   
                
                <CustomHeader style= {cardStyle.cardHeader}                  
                     title = {data.cardComponent}   
                     action={
                        <IconButton aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                        }                               
                   />
                <CardContent>
                    <Typography style= {cardStyle.card}>
                    {data.cardSubComponent}
                    </Typography>
                    <Typography style= {{fontSize:12, fontWeight:'bold'}}>
                        {data.cardTask}
                    </Typography> 
                    <Typography style= {cardStyle.card}>
                        {data.taskCount}
                    </Typography>
                    <Typography style= {cardStyle.card}>
                        {data.cardLevel}
                    </Typography>  
                </CardContent>
                
                
            </Card>
            </div>
            

        );
}

export default CardView;