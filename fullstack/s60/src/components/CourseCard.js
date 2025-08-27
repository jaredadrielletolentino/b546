// import useState hook from react:
import { useState } from 'react';

import { Card, Button } from 'react-bootstrap';

export default function CourseCard({coursesProp}) {

    // Use the state hook for this component to be able to store its state
    // State are used to keep track of information related to individual components:
        // Syntax:
            /*
                const [getter, setter] = useState (initialGetterValue);
            */

    // const/let variableName = initialValue;
        // The name of the state is setCount

        // The setter function will be use to change the value of the state
    const [ count, setCount ] = useState(0);

    // We are going to create a function that will be invoke when the enroll button is clicked.

    function enroll(){
        setCount(count + 1);
    }

    const { name, description, price } = coursesProp;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>

                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>{price}</Card.Text>

                <Card.Subtitle>Enrollees:</Card.Subtitle>
                <Card.Text>{count}</Card.Text>

                <Button variant="primary" onClick = {enroll}>Enroll</Button>
            </Card.Body>
        </Card>
    )
}