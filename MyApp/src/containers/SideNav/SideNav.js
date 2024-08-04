import React,{useState,useCallback} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
// import { createMap } from '../../utils';

export const SideNav = ({config}) => {

// const conroledConfig = createMap('title',config);
const addControlConfig = config.map((item)=>item?.subItems?{
    ...item,
    isOpen:false
}:item )
console.log('addControlConfig',addControlConfig); 
// const [controlMap, setControlMap] = useState(conroledConfig);
const [controlConfig,setControlConfig]= useState(addControlConfig);
const [selected, setSelected] = useState('');
// console.log('conroledConfig',conroledConfig);   

const controlSubMenu = useCallback((item)=>{
    console.log('clicked',item?.title);
    setSelected(item?.title)
    // let tempItem;
    const tempItems = controlConfig.map((f)=>((f?.title === item.title)&&f?.subItems)?{...f,isOpen:true}:{...f,isOpen:false});
    //  tempItem = tempItem.filter(f=>f?.isOpen == true);
    setControlConfig(tempItems)
},[controlConfig]);

console.log('controlConfig',controlConfig)
    
return (
    <View>
        {controlConfig.map((item,idx)=>{
            return (
                <View key={idx}>
                <TouchableOpacity onPress={()=>controlSubMenu(item)}>
                <Text style={selected === item?.title && styles.selected}  >{item?.title}</Text>
                </TouchableOpacity>    
                {item?.subItems && item?.isOpen && item.subItems.map((subItem,subIdx)=>{
                    return(<View key ={subIdx}><Text style={styles.ul}>{subItem}</Text></View>)
                })}
                </View>
            )
        })}
    </View>
)

}


const styles = StyleSheet.create({
    ul:{
        marginLeft:10,
        color:'red'
    },
    selected: {
        fontWeight:"900",
        // color:'blue'
    }
})