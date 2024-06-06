export function loadCategories()
{
    return function(dispatch)
    {
        fetch("https://run.mocky.io/v3/d292ca10-4ab9-44a3-b452-ddb4daba9975")
        .then(response=>{
            console.log(response);
            if(response.ok){
                return response.json(); 
            }
        }).then((response)=>{
            dispatch({type:"LOAD_CATEGORIES",payload:response})
        //    console.log(response);
    }).catch(error => {
        console.error('Error:', error);
      });
    }
}

function CategoriesReducer(state={items:{}},action)
{
    switch(action.type)
    {
        case "LOAD_CATEGORIES" :{
            console.log("LOAD_CATEGORIES payload:",action.payload);
            return {
                ...state,
                items: action.payload,
              };
        }
        default:return state;
    }
}

export default CategoriesReducer;