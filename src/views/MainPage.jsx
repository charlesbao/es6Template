import React from 'react';
import GlobalActions from '../actions/GlobalActions'
import GlobalStores,{ActionEvents} from '../stores/GlobalStores'

class MainPage extends React.Component{
    constructor(props){
        super(props);
        GlobalStores.addChangeListener(ActionEvents.ACTION_EVENT,this.actionChange)
    }
    actionChange(){
        console.log('ok')
    }
    componentDidMount(){
        GlobalActions.actions('')
    }
    componentWillUnMount(){
        GlobalStores.removeWholeListeners()
    }
    render(){
        return <div>OK</div>
    }
}

export default MainPage
