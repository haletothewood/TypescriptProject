import * as React from 'react';
import { http } from './http'

import { Location } from './Location'

interface ILocation {
    properties: {
        formatted: string
    }
}

interface ILocationsResponse {
    features: ILocation[]
}

const Locations: React.FC = () => {
    const [location, setLocation] = React.useState("")
    const [fetchedLocation, setFetchedLocation] = React.useState<ILocationsResponse>()

    const getLocationInfo = async(event: React.FormEvent) => {
        event.preventDefault()
        const response = await http<ILocationsResponse>(
            `http://localhost:3000/api/v1/search?q=${location}`
        );

        setFetchedLocation(response.parsedBody)
    }

    return <React.Fragment>
        <h1>Location: {location.length !== 0 ? location : ""}</h1>
        <p>
            Type a location and click submit to get information.
        </p>
        <form onSubmit={(event) => getLocationInfo(event)}>
            <label>
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        <br/>
        {fetchedLocation != null &&
            <div>
                <div>{fetchedLocation.features.map(f => {
                    const formatted = f.properties.formatted
                    return <Location location={formatted} key={formatted}/>
                })}</div>
            </div>
        }
    </React.Fragment>
}

export default Locations