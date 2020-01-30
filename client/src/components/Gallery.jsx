import React from 'react';

class Gallery extends React.Component {
    render() {
        if (this.props.data.length > 0) {
            var i = Math.floor(Math.random() * 10) //ramdon pic from 0-9
            var j = Math.floor(Math.random() * 10)
            var k = Math.floor(Math.random() * 10)
            var image1 = this.props.data[0].Picture[i]; //works //image array
            var image2 = this.props.data[1].Picture[j]
            var image3 = this.props.data[2].Picture[k]
            var price1 = this.props.data[0].Price;
            var price2 = this.props.data[1].Price;
            var price3 = this.props.data[2].Price;
            var name1 = this.props.data[0].Name;
            var name2 = this.props.data[1].Name
            var name3 = this.props.data[2].Name
            var NumRate1 = this.props.data[0].NumOfRate;
            var NumRate2 = this.props.data[1].NumOfRate;
            var NumRate3 = this.props.data[2].NumOfRate;
            var rate1 = this.props.data[0].Rating;
            var rate2 = this.props.data[1].Rating;
            var rate3 = this.props.data[2].Rating;
            var bed1 = this.props.data[0].NumOfBed
            var bed2 = this.props.data[1].NumOfBed
            var bed3 = this.props.data[2].NumOfBed
            var type1 = this.props.data[0].Type
            var type2 = this.props.data[1].Type
            var type3 = this.props.data[2].Type
            var favorite1 = this.props.data[0].Favorite;
            var favorite2 = this.props.data[0].Favorite;
            var favorite3 = this.props.data[0].Favorite;
            console.log(type3)



            // for (i = 0; i < image1.length; i += 1) {

            // }

        };
        if (this.props.data.length > 0) { // testing del later
            console.log(image1.length)
        }


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




                ////////////////////////////////////////////////////////////////////////////////




                <h1>Build Gallery</h1>

                <div >
                    <button>Slice more </button>
                    <div className="row" >

                        <div className="column">
                            <img src={image1} className="ds-div" />

                            <div aria-live="polite" className="firstRowinBox" style={{ margin_top: '14px', margin_bottom: '4px' }}>
                                <div className="typebedStyle">{type1} · {bed1} beds</div>
                                <span className="rateStyle1">
                                    <span className="rateStyle2">

                                        <img className="smallStar" src="https://team-florida.s3-us-west-1.amazonaws.com/Screen+Shot+2020-01-29+at+6.48.57+PM.png" />
                                        <span className="rateStyle" aria-hidden="true">{rate1}</span>
                                        <span className="numrateStyle" aria-hidden="true">({NumRate1})</span>
                                    </span>
                                </span>
                            </div>

                            <div className="nameStyle">{name1}</div>

                            <div style={{ margin_top: '4px', margin_bottom: '0px' }}>
                                <div className="priceStyle0">
                                    <span>
                                        <span className="priceStyle1">
                                            <span className="priceStyle2"></span>${price1}</span> / night</span>
                                </div>
                            </div>
                        </div>












                        <div className="column">
                            <img src={image2} className="ds-div" />

                            <div aria-live="polite" className="firstRowinBox" style={{ margin_top: '14px', margin_bottom: '4px' }}>
                                <div className="typebedStyle">{type2} · {bed2} beds</div>
                                <span className="rateStyle1">
                                    <span className="rateStyle2">

                                        <img className="smallStar" src="https://team-florida.s3-us-west-1.amazonaws.com/Screen+Shot+2020-01-29+at+6.48.57+PM.png" />
                                        <span className="rateStyle" aria-hidden="true">{rate2}</span>
                                        <span className="numrateStyle" aria-hidden="true">({NumRate2})</span>
                                    </span>
                                </span>
                            </div>

                            <div className="nameStyle">{name2}</div>

                            <div style={{ margin_top: '4px', margin_bottom: '0px' }}>
                                <div className="priceStyle0">
                                    <span>
                                        <span className="priceStyle1">
                                            <span className="priceStyle2"></span>${price2}</span> / night</span>
                                </div>
                            </div>
                        </div>











                        <div className="column">
                            <img src={image3} className="ds-div" />

                            <div aria-live="polite" className="firstRowinBox" style={{ margin_top: '14px', margin_bottom: '4px' }}>
                                <div className="typebedStyle">{type3} · {bed3} beds</div>
                                <span className="rateStyle1">
                                    <span className="rateStyle2">

                                        <img className="smallStar" src="https://team-florida.s3-us-west-1.amazonaws.com/Screen+Shot+2020-01-29+at+6.48.57+PM.png" />
                                        <span className="rateStyle" aria-hidden="true">{rate3}</span>
                                        <span className="numrateStyle" aria-hidden="true">({NumRate3})</span>
                                    </span>
                                </span>
                            </div>

                            <div className="nameStyle">{name3}</div>

                            <div style={{ margin_top: '4px', margin_bottom: '0px' }}>
                                <div className="priceStyle0">
                                    <span>
                                        <span className="priceStyle1">
                                            <span className="priceStyle2"></span>${price3}</span> / night</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




                <button>Slice next</button>





            </div>
        )
    }
}



export default Gallery;

