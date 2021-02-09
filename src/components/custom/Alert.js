import React from 'react';
import {Alert} from 'react-bootstrap';

export default function AlertWarning () {
    return (
        <Alert variant={'warning'}>Your total amount 
            investing must be less than the total amount that you have right now!</Alert>
    )
}