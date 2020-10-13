import React from 'react'
import {useLocation} from 'react-router-dom'
import {locationScore} from './Types/types'
import {Link} from 'react-router-dom'
function Result() {
    const location: locationScore = useLocation();  
    const { state } = location;
    const {amount, score} = state;
 

    return (
        <div className='Result'>
            <div className='ResultBox'>
                <span>Obtained Marks:{score} </span>
                <span>Total Marks: {amount}</span>
                <span>Percentage: {((score/amount) * 100).toFixed(2) + '%'}</span>
                <span>Status: {((+score/+amount) * 100 > 50) ? 'Passed': 'Failed'}</span>
            </div>
            <div className='GoBack'>
                <Link to ='/'>
                <button type="submit" className='submit_Button'>Start Again</button>
                </Link>
            </div>
        </div>
    )  
}

export default Result;
