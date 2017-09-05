import {Incident} from "../incidents/incident.model";

const incidents: Incident[] = [
    {
        title: 'my first incident',
        description: 'this is a description',
        id: '1',
        folder: 'active'
    }, {
        title: 'another incident',
        description: 'this is a description',
        id: '2',
        folder: 'snoozed'
    }, {
        title: 'my third incident',
        description: 'this is a description',
        id: '3',
        folder: 'active'
    }, {
        title: 'new incident',
        description: 'this is a description',
        id: '4',
        folder: 'snoozed'
    }
];

export default incidents;