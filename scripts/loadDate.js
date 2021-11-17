export function loadDate(array,action,boxPrint){
    array.forEach((e)=>action(boxPrint,e));
}