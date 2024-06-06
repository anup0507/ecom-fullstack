// import { useEffect } from "react";

// function Categories()
// {
    // useEffect(()=>{
    //      fetch("https://run.mocky.io/v3/d292ca10-4ab9-44a3-b452-ddb4daba9975")
    //         .then(response=>{
    //             console.log(response);
    //             if(response.ok){
    //                 return response.json(); 
    //             }
    //         }).then((response)=>{
                
    //             console.log(response);
    //     }).catch(error => {
    //         console.error('Error:', error);
    //       });
    // },[]);
    // return (
    //     <div>
    //         <h1>Categories</h1>
    //     </div>
    // );
// }
// export default Categories;

import { useDispatch,useSelector } from "react-redux";
import { loadCategories } from "../../stores/Categories";

function Categories() {
  let data=[];
  let dispatch = useDispatch();
  dispatch(loadCategories());
  data=useSelector((state)=>{
    return state.categories?.items?state.categories.items:[];
    
});

    if(data.length>0)
    {
        return (
          <div>
            <h1>Categories</h1>
            <div>
            {
              data.map((item,index)=>{
                return (<div>{item.name}</div>);
              })
            }
            </div>
          </div>
        );
    }
    else{
      return (  
      <div>No catgories to show</div>
      );
      
    }
  
}
export default Categories;