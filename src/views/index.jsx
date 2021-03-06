import React from 'react';
import AnimatedLocations from 'react-router-component-transition'
import {Location} from 'react-router-component'
import MainPage from './MainPage'

import '../utils/animation.css'

class Index extends React.Component{
    render(){
        return (
            <AnimatedLocations hash
                    className="Main"
                    transitionName="push"
                    popStateTransitionName="pop"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={600}>

                <Location path="/" handler={MainPage} />
                <Location path="/MainPage" handler={MainPage} />

            </AnimatedLocations>
    )
    }
}

export default Index