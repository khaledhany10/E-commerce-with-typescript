import { useEffect } from "react"
import getCategoriesFunction from "../../Redux/Categories/act/CategoriesAct"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"

export default function CategoriesComp() {

    const {categories,error,loading} = useAppSelector((state) => state.Categories)
    const dispatch = useAppDispatch()
        useEffect(() => {
            dispatch(getCategoriesFunction())
        }, [dispatch])



        if (loading === "pending"){
            return <div className="text-center text-red-900">
                <h1>Loading Data</h1>
            </div>
        }
        if (error || loading === "failed"){
            return <div className="text-center text-red-900">
                <h1>Data Fetching Error</h1>
            </div>
        }



  return (
    <div>
        <div className="container">
            <div className="row grid md:grid-cols-3 md:flex-row items-baseline sm:grid-cols-2 sm:flex-row sm:gap-8 lg:grid-cols-4 lg:flex-row lg:gap-8">
                {categories.map((cate) => <div key={cate._id} className="font-extrabold leading-8 col mb-10 relative rounded-lg shadow-2xl shadow-blue-800 flex flex-col items-baseline text-black p-3">
                    <img src={cate.image} className="w-[100%]" alt="" />
                    <p className="bg-gradient-to-l from-[#020024] to-[#007991] w-[100%] pt-1 mt-5 pb-1 rounded-2xl ps-4 text-white">Title:{cate.name}</p>
                </div>)}
            </div>
        </div>
    </div>
  )
}
