import React from 'react';
import ReactDOM from 'react-dom';

class MoreHouse extends React.Component {

    render() {
        return (
            <div>

                <h1>More homes you may like</h1>
                <div>footer info</div>
                <ul>
                    <li><a href='#'>Become a Host</a></li>
                    <li><a href='#'>Help</a></li>
                </ul>
                <div
                    style={{
                        width: '200px',
                        height: '80px',
                        backgroundColor: 'yellow',
                        fontSize: '24px',
                        textAlign: 'center'
                    }}
                >This is Page1!</div>

                <div className="row" >
                    <div className="column">
                        <img src='pic/00/01.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='pic/00/02.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='pic/00/03.jpg' width="316" height="210.66"></img>
                    </div>
                </div>
            </div>


        )
    }
}

export default MoreHouse;

