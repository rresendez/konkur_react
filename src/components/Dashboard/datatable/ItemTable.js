import React, { Component } from 'react'
import MaterialTable from 'material-table'

const ItemTable = (props) => {

  const CustomFields = [
  { title: 'DEPT', field: 'DEPT', 
  headerStyle: { 
      backgroundColor: '#ffc220', 
      fontWeight: 'bold', 
      fontSize: 14 }},
  { title: 'ITEM_NBR', field: 'ITEM_NBR',  
  headerStyle: { 
    backgroundColor: '#ffc220', 
    fontWeight: 'bold', 
    fontSize: 14 } },
  { title: 'ITEM1_DESC', field: 'ITEM1_DESC', 
  headerStyle: { 
    backgroundColor: '#ffc220', 
    fontWeight: 'bold', 
    fontSize: 14 }  },
  { title: 'LOCATION', field: 'LOCATION', 
  headerStyle: { 
    backgroundColor: '#ffc220', 
    fontWeight: 'bold', 
    fontSize: 14 }  },
  { title: 'MAXSS', field: 'MAXSS', type: 'numeric', 
  headerStyle: { 
    backgroundColor: '#ffc220', 
    fontWeight: 'bold', 
    fontSize: 14 }  },
]; 

const CustomData = [
  { DEPT: '10', 
    ITEM_NBR: '1005079', 
    ITEM1_DESC: 'METAL Y HOSE VALVE', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  },
  { DEPT: '10', 
    ITEM_NBR: '1005093', 
    ITEM1_DESC: 'AWNING LEISURE MAT', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  }, 
  { DEPT: '10', 
    ITEM_NBR: '1011081', 
    ITEM1_DESC: 'RHINOFLEX SEWER KIT', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  }, 
  { 
    DEPT: '11', 
    ITEM_NBR: '30522643', 
    ITEM1_DESC: '2PK-11" FLUSHMOUN', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  }, 
  {
    DEPT: '11', 
    ITEM_NBR: '31158540', 
    ITEM1_DESC: 'PENDULUM', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  }, 
  {
    DEPT: '11', 
    ITEM_NBR: '31161591', 
    ITEM1_DESC: '11" FLUSH MOUNTBRST', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  }, 
  {
    DEPT: '15', 
    ITEM_NBR: '30546256', 
    ITEM1_DESC: 'MS 2PK 11X16 ROLLS', 
    LOCATION: 'CA_WMT_STORE_01167', 
    MAXSS: 0
  }, 
  {
    DEPT: '15',
    ITEM_NBR: '30586532', 
    ITEM1_DESC: 'MS 2PK 8X20 ROLLS', 
    LOCATION: 'CA_WMT_STORE_01167', 
    MAXSS: 0
  }, 
  {
    DEPT: '27', 
    ITEM_NBR: '30185994', 
    ITEM1_DESC: 'GEORGE KNIT PANT', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  }, 
  {
    DEPT: '27', 
    ITEM_NBR: '30185995', 
    ITEM1_DESC: 'GEORGE KNIT PANT', 
    LOCATION: 'CA_WMT_STORE_01167', 
    MAXSS: 0
  }, 
  {
    DEPT: '27', 
    ITEM_NBR: '30186121', 
    ITEM1_DESC: 'GEORGE KNIT PANT', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  }, 
  {
    DEPT: '27', 
    ITEM_NBR: '30188258', 
    ITEM1_DESC: 'GEORGE KNIT PANT', 
    LOCATION: 'CA_WMT_STORE_03157', 
    MAXSS: 0
  },
  {
    DEPT: '27', 
    ITEM_NBR: '30189002', 
    ITEM1_DESC: 'GEORGE KNIT PANT', 
    LOCATION: 'CA_WMT_STORE_01167', 
    MAXSS: 0
  }
]
    return (
      <div style={{padding:'3%'}}>
      <MaterialTable
  columns={CustomFields}
  data={CustomData}
  title="MAXSS=0"
  options={{
   // toolbar: false,
    paging: false, 
    filtering: true, 
    exportButton: true
  }} 
/>
    </div>
    );
}


export default ItemTable;
