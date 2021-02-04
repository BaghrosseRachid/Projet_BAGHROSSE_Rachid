import React from 'react'
import {Link} from 'react-router-dom'
export default function () {
    return (
        <div>
            <h2> Page not found 404</h2>
            <Link className="nav-link" to="/"> Back to the home <span class="sr-only">(current)</span></Link>
             
              
        </div>
    )
}
