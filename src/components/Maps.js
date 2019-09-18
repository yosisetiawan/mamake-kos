import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMarkerShow: false
		}
	}

	onMapsShow = () => {
		this.setState({
			isMarkerShow: true
		});
	}

	render() {
		return (
			<View style={{display: this.props.display}}>
				<MapView 
					style={{height: this.props.height}}
					provider="google"
          mapType="standard"
          showsScale
          showsCompass
          showsPointsOfInterest
          showsBuildings
          region={this.props.region}
          onRegionChangeComplete={this.props.changeRegion}
          onLayout={this.onMapsShow}
				>
					{this.state.isMarkerShow && (
						<MapView.Marker
              title={this.props.title}
              
							coordinate={{
								latitude: this.props.region.latitude,
								longitude: this.props.region.longitude
							}}
						/>
					)}
				</MapView>
			</View>
		)
	}
}
