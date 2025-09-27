
function AllCards({data}){

    return (
        <div className="mt-6 flex flex-wrap gap-6 justify-flex w-[80%]" >
            {data.map(singleItem => (
                <div key={singleItem.id} className="bg-amber-700 w-[30%] max-h-[500px] p-4 rounded-xl shadow-xl">

                <img className=" aspect-square w-[100%] p-2 h-[300px] object-cover bg-blue-400 rounded-xl" src={singleItem.thumbnail} alt="" />

                <div className="flex justify-between items-center">
                    <h2 className="text-left my-5 text-lg line-clamp-1">{singleItem.title}</h2>
                    <p className="text-xl">{singleItem.price}</p>
                </div>

                <p className="text-left line-clamp-3">{singleItem.description}</p>

                </div>
            ))}
            
        </div>
    )
}

export default AllCards