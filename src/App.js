import { useState } from 'react'


function useToggle(){
    const [toggle,setToggle] = useState(false)

    const handleToggle = () => { 
        setToggle(!toggle)
    }
    return [toggle,handleToggle]
}

export default function App() { 
    const [toggle,handleToggle] = useToggle()

    return (
        <div className="App"> 
            {toggle && <div>this is div</div>}
            <button onClick={handleToggle}>Toggle</button>
        </div>
    )
}