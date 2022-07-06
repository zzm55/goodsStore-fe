import Taro from "@tarojs/taro";

export default{
    baseOptions(params,method){
        let {url,data}=params;
        let contentType='application/json'
        contentType=params.contentType||contentType
   
    type OptionType={
        url:string,
        data?:object|string,
        method?:any,
        header:object,
        success:any,
        // error:any,
    }
    data={
        ...data
    }
    const option:OptionType={
        url: url.indexOf('https')!==-1?url:"https"+url,
        data:data,
        method:method,
        header:{
            'content-type':contentType,
        },
        success(res){
            console.log("res=>",res)
            if(res.statusCode===200){
                return res.data
            }else{
                Taro.showToast({
                    title:'请求失败',
                    icon: "none",
                    duration:2000,
                })
            }
        }
    }
    return Taro.request(option)
},
 get(url,data?:object){
    let option={url,data}
    return this.baseOptions(option)
 }
}