import React,{ Component } from 'react';
import { View,Text,StyleSheet, Button } from 'react-native';
import MapView,{Marker,PROVIDER_GOOGLE,Polygon} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {locations} from '../data/data'
import axios from 'axios';

interface Props{};

interface State{
    latitude:number,
    longitude:number,
    usersPlaces:string[]
}

class Map extends Component<Props,State>{
    constructor(props:Props){
        super(props)
        this.state={
            latitude:0,
            longitude:0,
            usersPlaces:[]
        }
    }

    componentDidMount(){
        Geolocation.getCurrentPosition(
            (position) =>{
                this.setState({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                })
            }
        );
    }
    // getusers = this.state.usersPlaces===[]?null:this.state.usersPlaces.map((item:any)=><Marker coordinate={item} key={item.id} />)

    render(){
        //console.log(this.state)
        return(
            <View>
                <MapView 
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyles}
                    region={{
                        latitude:this.state.latitude,
                        longitude:this.state.longitude,
                        latitudeDelta:0.035,
                        longitudeDelta:0.035
                    }}
                >
                        <Polygon 
                            coordinates={locations}
                            fillColor='#fff'
                            //strokeColor='#0e5fe3'
                        />
                    <Marker 
                        coordinate={
                            this.state
                        }
                    />
                    {/* {this.getusers} */}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapStyles:{
        height:'100%'
    }
})

export default Map