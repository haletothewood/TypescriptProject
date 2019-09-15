import * as React from 'react';

const Location: React.FC = () => {
    const [location, setLocation] = React.useState("")

    const getLocationInfo = (event: React.FormEvent) => {
        console.log("Api will be called here")
        event.preventDefault()
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
    </React.Fragment>
}

export default Location