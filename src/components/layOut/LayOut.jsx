import { Outlet } from "react-router-dom"
import { Side } from "../ath/Side"
export function LayOut(){
    return(
        <div className="flex m-auto max-w-[1440px] min-h-screen p-8">
            <Outlet/>
            <Side/>
        </div>
    )
}