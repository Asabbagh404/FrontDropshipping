import React from "react";

// Image
import DropImg from '../../assets/image/drop.jpg';

// UI Field
import {Button, Typography, TextField} from '@material-ui/core';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <Typography color='primary' component='h1' variant='h3' className="text-center mb-3">Is it a
                                dropshipping website ?</Typography>
                            <h2 className="text-center text-black-50 mb-5">See if this product is a dropshipped item and
                                get the link to the same item with a lower price</h2>
                        </div>
                    </div>
                </section>

                <div>
                    <div className="container">
                        <div className="row">
                            <form className="col-lg-12 d-flex justify-content-center">
                                <TextField id="outlined-basic" className="col-lg-8"
                                           label="Website URL" variant="outlined"/>
                                <Button variant="contained" color="secondary" className="col-lg-2 ml-3">
                                    Test your product
                                </Button>
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">

                            </div>
                        </div>
                    </div>
                    <section className="container-fluid" id="ourScope">
                        <div className="row">
                            <div className="col-lg-6 overflow-hidden dropImg">

                            </div>
                            <div className="col-lg-6 rightSection text-white text-center pl-5 pr-5 d-flex justify-content-center flex-column">
                                <Typography component='h2' variant='h4'>We search dropshipping items <br/> from our database of 50+ websites</Typography>
                                <p className="mt-4">Our goal is to give you the tools to save money when you buy something on internet.
                                    A lot of influencer propose to buy things from ephemerical website that try to sell
                                you things that they don"t have at a higher price than their value.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}