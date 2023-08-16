'use client'

import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const mapStyles = {
    width: '100%',
    height: '100%',
};

export const GoogleMap = (props: any) => {
    return (
        //The <Map></Map> need the following props
        //initialCenter={} will be the center on the Map
        <div className="h-96 relative w-full">
        <Map
            google={props.google}
            style={mapStyles}
            initialCenter={{
                lat: 32.38473908598577,
                lng: -110.96240974778372
            }}
            zoom={16}
        >
            <Marker
                mapCenter={{
                    lat: 32.38473908598577,
                    lng: -110.96240974778372
                }}
            />
        </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAadcWPN0brBtDCEfQW2GxttecDtEOZl7A"
})(GoogleMap);
