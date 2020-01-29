import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './Gallery.jsx'
// import data from '../../../seed_data.js'
// const data = require('../../../controller.js')
// const getData = require('../../../controller.js')

class MoreHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        $.ajax({
          methods: "GET",
          url: '/houseDB',
        //   datas : data,
          success: (houseDB) => {
            this.setState ({
              data : houseDB
            })
          },
        });
      }

    render() {
        // if (this.state.data.length > 0) {
        //     var image = this.state.data[0].Picture[0] //works
        // }
     
        return (
            <div>
                <Gallery data={this.state.data}/>
            
         
            </div>
        
        )
    }
}

export default MoreHouse;

