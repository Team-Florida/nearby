import React from 'react';

class Gallery extends React.Component {
    render() {
        // if (this.props.data.length > 0) {
        //     var image1 = this.props.data[0].Picture[0]; //works
        //     var price1 = this.props.data[0].Price;
        // };
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
                    <h1>From From local</h1>
                    <div className="column">
                        <img src='pic/00/01.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='pic/00/02.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='pic/00/03.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='pic/00/09.jpg' width="316" height="210.66"></img>
                    </div>
                </div>



                <div className="row" >
                    <h1>From S3 database</h1>
                    <div className="column">
                        <img src='https://team-florida.s3-us-west-1.amazonaws.com/00/01.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='https://team-florida.s3-us-west-1.amazonaws.com/00/02.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='https://team-florida.s3-us-west-1.amazonaws.com/00/03.jpg' width="316" height="210.66"></img>
                    </div>
                    <div className="column">
                        <img src='https://team-florida.s3-us-west-1.amazonaws.com/00/09.jpg' width="316" height="210.66"></img>
                    </div>
                </div>




                <h1>From Local DataBase</h1>
                <p>                    </p>
                <h2 style={{
                    overflow_wrap: 'break_word',
                    font_family: 'Circular',
                    font_size: '24px',
                    font_weight: '800',
                    line_height: '1.25em',
                    color: 'rgb(72, 72, 72)',
                    margin: '0px',
                }}>More homes you may like</h2>
                <p>                    </p>





            </div>
        )
    }
}



export default Gallery;
// <div>{console.log(this.props.data.Price)}</div>



// <div style = {{
//     overflow_wrap: 'break_word',
//     font_family: 'Circular',
//     font_size: '24px',
//     font_weight: '800',
//     line_height: '1.25em',
//     color: 'rgb(72, 72, 72)',
//     margin: '0px',
// }}
// >More homes you may like</div>


// <img src={image1} width="316" height="210.66"/>
// <div>{price1}</div>
