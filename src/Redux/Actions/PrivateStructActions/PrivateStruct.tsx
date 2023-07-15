import * as types from "Redux/Constants"
import {Dispatch} from "redux"

/*
    export const IMPORT_PRIVATEKEY = "IMPORT_PRIVATEKEY";
    export const REMOVE_PRIVATEKEY = "REMOVE_PRIVATEKEY";
*/

export const ImportPrivateKey = function(){
    return async(dispatch:Dispatch)=>{
        try{
            dispatch({
                type: types.IMPORT_PRIVATEKEY,
                data: {}
            })
            return true;
        }catch(err){
            console.error( err )
            return false;
        }finally{
            console.error( "导入私钥" )
        }
    }
}

export const RemovePrivateKey = function(){
    return async(dispatch:Dispatch)=>{
        try{
            dispatch({
                type: types.REMOVE_PRIVATEKEY,
                data: {}
            })
            return true;
        }catch(err){
            console.error( err )
            return false;
        }finally{
            console.log( "移除私钥" )
        }
    }
}



