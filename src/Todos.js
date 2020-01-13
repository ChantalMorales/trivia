import React, {Component} from 'react'  
import firebaseConf from './firebase/firebase'

export default class Todos extends Component{
   
    state = {
        items:[]
    }


    componentDidMount(){
        firebaseConf.collection('preguntas').get().then((snapshots) => {
            this.setState({
                items: snapshots.docs.map(doc=> {
                    console.log(doc.data());
                })
            })
        })
    }
   
   
    render(){
        return(
            <div>
            
            </div>
        )
    }
}