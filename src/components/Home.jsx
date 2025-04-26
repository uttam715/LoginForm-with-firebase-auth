import { useSelector } from "react-redux"

export default function Home(){
    const user = useSelector((state)=> state.User.user);
    console.log(user,"data")

    return (
        <div>data</div>
    )
}