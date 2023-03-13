import {useToast} from "vue-toastification";
const toast = useToast()
const errorModels ={
    first_name: 'نام',
    last_name: ' نام خانوادگی',
    coordinate_mobile: 'شماره موبایل',
    coordinate_phone_number: 'شماره تلفن ثابت',
    address: 'آدرس',
}
export default (content)=>{
    Object.values(content).forEach((item)=>{
   let invalidProp =  Object.keys(content).find((item)=>{return errorModels[item]})
       toast.error(`${errorModels[invalidProp]},${item[0]} `)
    })
}
