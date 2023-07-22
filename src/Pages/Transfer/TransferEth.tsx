import {Component} from "react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import styled from "styled-components"
import {
    CommonHeaderComponent,
    CommonBackHeaderComponent,

    CommonRejectComponent,
    CommonResolveComponent,
    CommonPendingComponent,
} from "Components"
import { Input } from 'antd';
import selectPng from "./static/select.png"
import {
    SelectCoinDrawer,
    TransferConfirmDrawer,
} from "./Drawer"
import {
    sleep,
    debounce,
} from "Common"


const { TextArea } = Input;
const ToAddress = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        width: 94%;
        margin-top: 10px;
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
        color: #636262;
    }
`

const ToAddressInput = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .innerBox{
        width: 94%;
        height: 89px;
        //background: red;
        border-radius: 10px 10px 10px 10px;
        border: 1px solid #EBEAEA;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .contentBox{
            width: 90%;
            height: 52px;
            line-height: 26px;
            //background: blue;
            font-size: 18px;
            font-weight: 350;
            color: #626262;
            word-wrap:break-word;
        }
    }
`

const CoinType = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        width: 94%;
        margin-top: 10px;
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
        color: #636262;
    }
`

const CoinTypeInput = styled.div`
    width: 100%;
    height: 41px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .innerBox{
        width: 94%;
        height: 41px;
        border-radius: 10px 10px 10px 10px;
        border: 1px solid #EBEAEA;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .contentBox{
            width: 90%;
            height: 41px;
            //background: green;

            .left{
                height: 41px;
                line-height: 41px;
                font-size: 20px;
                font-weight: 350;
                color: #636262;
            }

            .right{
                height: 41px;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                //justify-content: center;
            }
        }
    }
`


const CoinAmount = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        width: 94%;
        margin-top: 10px;
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
        color: #636262;
    }
`

const CoinAmountInput = styled.div`
    height: 41px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .innerBox{
        width: 94%;
        height: 41px;
        //background: red;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 10px 10px 10px 10px;
        //border: 1px solid #EBEAEA;
    }
`

const AmountBox = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //background: green;
    .InnerBox{
        height: 29px;
        width: 94%;
        //background: red;
        font-size: 18px;
        color: #676565;
        line-height: 29px;
    }
`
const AmountFee = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //background: green;
    .InnerBox{
        height: 29px;
        width: 94%;
        //background: red;
        font-size: 18px;
        color: #676565;
        line-height: 29px;
    }
`

const Bottom = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        width: 208px;
        height: 49px;
        background: #19D1A1;
        border-radius: 12px 12px 12px 12px;
        font-weight: 500;
        color: #FFFFFF;
        font-size: 20px;
        line-height: 49px;
        text-align: center;
    }
`

const TransferEthParent = function(SonComponent:any){
    class PackageComponent extends Component{

        state = {

        }

        UNSAFE_componentWillMount(){
            
        }

        render(){
            return (
                <>
                    {

                    }
                    <SonComponent {...Object.assign(
                        {
                            ...this.props,
                        },
                        {

                        },
                        {

                        }
                    )}></SonComponent>
                </>
            )
        }

    }

    return connect(
        (store:RootStore) => ({

        }),{

        }
    )( withRouter<any,any>( PackageComponent ) )
}

class TransferEth extends Component<any>{

    state = {
        drawerStatus: 0,
        current: 3,
    }

    render(){
        return (
            <>
                <CommonBackHeaderComponent title="轉帳" backUrl="/money_eth_info"></CommonBackHeaderComponent>

                <ToAddress className="mui-content">
                    <div className="mui-row">
                        收款地址
                    </div>
                </ToAddress>

                <ToAddressInput className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-row contentBox">
                            0xEA143d623217252675842fA40A0Bc37406CB8BA1
                        </div>
                    </div>
                </ToAddressInput>

                <CoinType className="mui-content">
                    <div className="mui-row">
                        轉帳幣種
                    </div>
                </CoinType>

                <CoinTypeInput className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-row contentBox">
                            <div className="mui-col-xs-6 left">
                                BNB
                            </div>
                            <div className="mui-col-xs-6 right">
                                <img src={selectPng} style={{
                                    width: "26px",
                                    height: "16px",
                                }} alt="" onClick={()=>{
                                    this.setState( {drawerStatus: this.state.drawerStatus | (1<<0)} )
                                }} />
                            </div>
                        </div>
                    </div>
                </CoinTypeInput>

                <CoinAmount className="mui-content">
                    <div className="mui-row">
                        轉帳金額
                    </div>
                </CoinAmount>

                <CoinAmountInput className="mui-content">
                    <div className="mui-row innerBox">
                        <Input addonAfter={"BNB"} defaultValue="1000.00" />
                    </div>
                </CoinAmountInput>

                <AmountBox className="mui-content">
                    <div className="mui-row InnerBox">
                        币种可用余额：123,987.09 TRX
                    </div>
                </AmountBox>

                <AmountFee className="mui-content">
                    <div className="mui-row InnerBox">
                        手续费限額：30 TRX
                    </div>
                </AmountFee>

                <Bottom className="mui-content">
                    <div className="mui-row" onClick={ ()=>{
                        this.setState({
                            drawerStatus: 0 & this.state.drawerStatus | (1<<1),
                        })
                    } }>
                        確認轉帳
                    </div>
                </Bottom>

                <SelectCoinDrawer {...Object.assign(
                    {
                        ...this.state,
                    },
                    {
                        
                    },
                    {
                        closeCall : ()=>{
                            this.setState({
                                drawerStatus: this.state.drawerStatus & 0,
                            })
                        }
                    }
                )}></SelectCoinDrawer>

                <TransferConfirmDrawer {...Object.assign(
                    {
                        ...this.state,
                    },
                    {
                        
                    },
                    {
                        closeCall : ()=>{
                            this.setState({
                                drawerStatus: this.state.drawerStatus & 0,
                            })
                        },
                        toNext: debounce( async()=>{
                            await this.setState({
                                drawerStatus: 0 & this.state.drawerStatus | (1 << 20),
                            })
                            await sleep( 8000 )
                            await this.setState({drawerStatus: 0 & this.state.drawerStatus | (1 << 29),})
                            await sleep( 3000 )
                            await this.setState({drawerStatus: 0 & this.state.drawerStatus | (1 << 30),})
                            await sleep( 4000 )
                            await this.setState({drawerStatus: 0 & this.state.drawerStatus, })
                        } ),
                    }
                )}></TransferConfirmDrawer>

                <CommonRejectComponent {...Object.assign({
                    ...this.state,
                },{

                },{
                    closeCall: ()=>{
                        this.setState({
                            drawerStatus: this.state.drawerStatus & 0,
                        })
                    }
                })}></CommonRejectComponent>

                <CommonResolveComponent {...Object.assign({
                    ...this.state,
                },{},{
                    closeCall: ()=>{
                        this.setState({
                            drawerStatus: this.state.drawerStatus & 0,
                        })
                    },
                })}></CommonResolveComponent>

                <CommonPendingComponent {...Object.assign({
                    ...this.state,
                },{},{
                    closeCall: ()=>{
                        this.setState({
                            drawerStatus: this.state.drawerStatus & 0,
                        })
                    },
                })}></CommonPendingComponent>
            </>
        )
    }

}

export default TransferEthParent( TransferEth );