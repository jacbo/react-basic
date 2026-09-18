import { useState } from 'react'
import { Link,useRoutes } from 'react-router-dom'

export default function App() { 

    return (
        <div> 
            <Link to="/article">文章</Link>
            <span className="foo">this is class foo</span>
        </div>
    )
}