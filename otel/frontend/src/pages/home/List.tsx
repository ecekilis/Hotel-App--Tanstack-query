import { useQuery } from "@tanstack/react-query"
import { getPlaces } from "../../api"


const List = () => {


    const state = useQuery(
        {
            queryKey: ["places"],
            queryFn: getPlaces,
        }
    )
    console.log(state)

    return (
        <div className="bg-green-700">List</div>
    )
}

export default List