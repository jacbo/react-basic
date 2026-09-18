import { useNavigate } from "react-router-dom"
import { useRef,memo, useEffect } from "react"
function Article() { 
    
    
    const navigate = useNavigate()
   
    return (
        <div> 
            this is Article page
            <button onClick={() => {
                navigate('/')
            }}>首页</button>
        </div>
    )
}

export default memo(Article)