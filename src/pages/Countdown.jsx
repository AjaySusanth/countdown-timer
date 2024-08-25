import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const Countdown = ({}) => {

    const [seconds,setSeconds] = useState()
    const [countdown,setCountdown] = useState(null)
    const timerId = useRef()
    const navigate = useNavigate()

    const start = ()=>{
        if (seconds > 0) {
            setCountdown(seconds);
            setSeconds(""); 
          }
    }

    useEffect(()=>{

        if (countdown > 0)
        {
            timerId.current = setInterval(()=>{
                setCountdown(prev => prev-1)
            },1000)
            

        }
        else if(countdown === 0)
        {
            clearInterval(timerId.current)
            setTimeout(()=>{
                navigate('/congrats')
            },1000)
        }
        return () => clearInterval(timerId.current)
       
    },[countdown])

  return (
    <div className="border border-black flex flex-col items-center justify-center p-10 rounded-xl">
        <div className="mb-4 flex gap-x-3">
            <input
            className="w-48 border bg-transparent border-gray-700 outline-none rounded-lg px-3 py-1"
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            placeholder="Enter seconds"
            />
            <button className="px-3 border border-gray-700 rounded-lg" onClick={start}>Start</button>
        </div>
        {countdown !== null ?
         <h1 className="text-3xl font-bold">Countdown: {countdown}</h1>
        : <h1 className="text-3xl font-bold">Set a time</h1>
        }
    </div>
  )
}
export default Countdown