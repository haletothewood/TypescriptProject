import * as React from 'react';

type FormattedLocation = {
    location: string
}

export const Location = ({location}: FormattedLocation) =>
    <div>
        {location}
    </div>
