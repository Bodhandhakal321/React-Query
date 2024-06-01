
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";




const Product = () => {
    const params = useParams();
    // console.log(params);

    //usemutatio to use muttationm

    const mutation = useMutation({
        mutationFn: (newTodo) => {
          return axios.post('/todos', newTodo)
        },
      })



    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
    
        const data = await response.json();
        return data;
     
      
      };



    const{
        isLoading,
        error,
        data:product,
    } = useQuery({
        queryKey:['product', params.productId],
         queryFn:fetchProduct,
        // staleTime:10000
        });

        if (isLoading) {
            return <h3>Loading...</h3>;
          }
          if(error){
            return  <h3> Error: :{error.message} </h3>;
          }

        //   mutation is to store on server to update delete 
    return  (  
        <> 
    <div>Product: {product.title}</div>;
    <button
            onClick={() => {
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
          >
            Create Todo
          </button>
    </>
    );
    
};



export default Product;