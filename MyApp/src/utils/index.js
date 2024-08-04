export const createMap = (key,arr) => arr.reduce((result,item)=>{
    // const addIsOpenControl = item?.subItems && {isOpen:false}; 
    result.set(item[key],{...item,
        // ...addIsOpenControl
    })
return result}, new Map())