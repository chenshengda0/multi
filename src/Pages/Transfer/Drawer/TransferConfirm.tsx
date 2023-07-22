import {Component} from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {Drawer} from "antd"
import styled from "styled-components"

import copyPng from "../static/copy.png"

const LineList = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //background-color: red;
    //border: 1px solid yellow;
    .innerBox{
        height: 50px;
        line-height: 50px;
        width: 94%;

        font-weight: 400;
        font-size: 20px;
        color: #908F8F;
    }
` 

const LineListCopy = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //background-color: red;
    .innerBox{
        height: 50px;
        line-height: 50px;
        width: 94%;

        font-weight: 400;
        font-size: 20px;
        color: #908F8F;

        .mui-col-xs-6{
            overflow: hidden;
        }

        .mui-col-xs-2{
            height: 50px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            //justify-content: center;
        }
    }
`

const Bottom = styled.div`
    height: 80px;
    width: 100%;
    //border: 1px solid red;
    //padding-bottom: 0;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .innerBox{
        width: 94%;
        height: 80px;
        //border: 1px solid yellow;

        .left{
            height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .left-btn{
                width: 111px;
                height: 35px;
                background: #F0EFEF;
                border-radius: 10px 10px 10px 10px;
                font-weight: 400;
                color: #3D3D3D;
                font-size: 20px;
                line-height: 35px;
                text-align: center;
            }
        }

        .right{
            height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .right-btn{
                width: 111px;
                height: 35px;
                background: #19D1A1;
                border-radius: 10px 10px 10px 10px;
                font-weight: 400;
                color: #FFF;
                font-size: 20px;
                line-height: 35px;
                text-align: center;
            }
        }
    }
`
const TransferConfirmParent = function(SonComponent:any){

    class PackageComponent extends Component<any>{

        render(){
            const {
                drawerStatus = 1<<1,
                closeCall = ()=>{
                    console.log( "關閉按鈕未定義" )
                },
                toNext = (newState:number)=>{
                    console.log( "下一步" )
                }
            } = this.props;
            return (
                <Drawer 
                    placement="bottom" 
                    maskClosable = {false}

                    height={500}

                    title = "轉帳確認"

                    onClose={()=>{
                        closeCall();
                    }}


                    headerStyle = {{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        textAlign: "center",
                        background: "#FFF",
                    }}

                    bodyStyle={{
                        background: "#FFF",
                        padding: "0"
                    }}


                    maskStyle={{
                        background: "rgba(0,0,0,0.7)",
                    }}

                    open={!!(1 << 1 & drawerStatus)}
                >
                    <SonComponent {...Object.assign(
                        {
                            ...this.props,
                        },
                        {},
                        {},
                    )}></SonComponent>
                </Drawer>
            )
        }

    }

    return connect(
        ()=>({

        }),{

        }
    )( withRouter<any,any>( PackageComponent ) )

}

class TransferConfirm extends Component<any>{

    render(){
        return (
            <>
                <LineList className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-4">
                            转账金额：
                        </div>
                        <div className="mui-col-xs-8">
                            1000 TRX
                        </div>
                    </div>
                </LineList>
                <LineList className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-4">
                            转账币种：
                        </div>
                        <div className="mui-col-xs-8">
                            TRX
                        </div>
                    </div>
                </LineList>
                <LineList className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-4">
                            转账网络： 
                        </div>
                        <div className="mui-col-xs-8">
                            TRC20
                        </div>
                    </div>
                </LineList>
                <LineList className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-4">
                            转账金额：
                        </div>
                        <div className="mui-col-xs-8">
                            1000 TRX
                        </div>
                    </div>
                </LineList>

                <LineListCopy className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-4">
                            收款地址：
                        </div>
                        <div className="mui-col-xs-6">
                            0xEA...8BA10A1
                        </div>
                        <div className="mui-col-xs-2">
                            <img src={copyPng} alt="icon" style={{
                                height: "30px",
                                width: "25px",
                            }} />
                        </div>
                    </div>
                </LineListCopy>

                <LineList className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-4">
                            矿工费用：
                        </div>
                        <div className="mui-col-xs-8">
                            30TRX
                        </div>
                    </div>
                </LineList>

                <Bottom className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-6 left">
                            <div className="mui-row left-btn" onClick={ ()=> this.props.closeCall() }>
                                取消
                            </div>
                        </div>
                        <div className="mui-col-xs-6 right">
                            <div className="mui-row right-btn" onClick={ () => this.props.toNext() }>
                                確認
                            </div>
                        </div>
                    </div>
                </Bottom>

            </>
        )
    }

}

export default TransferConfirmParent( TransferConfirm )

