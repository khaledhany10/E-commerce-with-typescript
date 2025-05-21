
import {useAppDispatch , useAppSelector} from "../../Redux/hooks"
import getAllProductsFunction from "../../Redux/AllProducts/act/AllProductsAct"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import type { IProductState } from "../../Types/sharedTypes"
export default function AllProductsCopm() {
  const dispatch = useAppDispatch()
  const {products,error,loading} = useAppSelector((state => state.products))



  type TDisplay = IProductState

  useEffect(() => {
    dispatch(getAllProductsFunction())
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


  return <>
    <div>
          <div className="container">
              <div className=" row grid md:grid-cols-3 md:flex-row items-baseline sm:grid-cols-2 sm:flex-row sm:gap-8 lg:grid-cols-4 lg:flex-row lg:gap-8">
                {products.map((prod :TDisplay) => <div key={prod.id} className="leading-8 text-black mb-10 relative rounded-3xl shadow-2xl shadow-blue-800 flex flex-col items-baseline font-bold p-3">
                  <Link to = {`../ProductDetails/${prod.id}`}>
                    <img src={prod.imageCover} alt={prod.title} />
                    <p className="mt-3 mb-3">Title:{prod.title.split(" ", 3).slice(0,4)}</p>
                    <div className="bg-gradient-to-l from-[#020024] to-[#007991] text-white  rounded-md cursor-pointer flex justify-around">
                    <p>Price:{prod.price}</p>
                    <button >Buy</button>
                    </div>
                    </Link></div>)}
              </div>
        </div>
    </div>
    </>
}
