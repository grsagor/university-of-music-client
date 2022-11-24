import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - University Of Music`;
    },[title])
}

export default useTitle;