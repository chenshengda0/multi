import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {debounce} from "Common/common"
import {
    CommonHeaderComponent,
} from "Components"
import styled from "styled-components"
import binnerPng from "./static/binner.png"
import eyePng from "./static/eye.png"
import closeEyePng from "./static/closeEye.png"
import moneyPng from "./static/money.png"

const TopDIV = styled.div`
    height: 208px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .box{
        width: 94%;
        height: 168px;
        background-image: url(${binnerPng});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .inner{
            height: 128px;
            width: 100%;

            .inner-one{
                
                height: 50px;
                width: 100%;
                text-align: center;
                .mui-col-xs-12{
                    height: 50px;
                    line-height: 50px;
                    font-size: 18px;
                    font-weight: 500;
                    color: #FFF;
                }
            }
            .inner-two{
                height: 70px;
                width: 100%;
                text-align: center;
                line-height: 70px;
                font-size: 25px;
                font-weight: 500;
                color: #FFF;
            }
        }
    }
`

const MoneyTitle = styled.div`
    height: 40px;
    width: 100%;
    //background: green;

    display: flex;
    flex-direction: row;
    //align-items: center;
    justify-content: center;

    .mui-row{
        width: 94%;
        height: 20px;
        //background: red;
        line-height: 20px;
        font-size: 18px;
        color: #636262;
        font-weight: 500;
    }
`

const Money = styled.div`
    width: 100%;
    height: 159px;
    border-radius: 10px;
    border: 1px solid #EBEAEA;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .inner{
        width: 94%;
        height: 150px;

        .one{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #D8D8D8;

            .left{
                font-size: 18px;
                height: 50px;
                line-height: 50px;
                color: #939393;
            }

            .right{
                font-size: 18px;
                height: 50px;
                line-height: 50px;
                color: #434242;
                text-align: right;
            }
        }

        .two{
            width: 100%;
            height: 80px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .left{
                height: 80px;
                width: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                //justify-content: center;
            }
            .right{
                height: 80px;
                width: calc( 100% - 50px );
                //background: yellow;
                .address{
                    margin-top: 10px;
                    height: 30px;
                    line-height: 30px;
                    font-weight: 350;
                    color: #939393;
                    font-size: 18px;
                    white-space:nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .amount{
                    height: 30px;
                    line-height: 30px;
                    font-size: 18px;
                    font-weight: 350;
                    color: #4C4A4A;
                }
            }
        }

        .three{
            width: 100%;
            height: 20px;
            padding-left: 50px;
            font-size: 13px;
            height: 20px;
            line-height: 20px;
            color: #FD7474;
            font-weight: 350;
        }
    }
`

const HomeParent = function(SonComponent:any){
    class PackageComponent extends Component<any>{
        
        UNSAFE_componentWillMount(){
            
        }

        render(){
            return(
                <>
                    <SonComponent {...Object.assign(
                        {
                            ...this.props,
                        },
                        {},
                        {}
                    )}></SonComponent>
                </>
            )
        }
    }
    return connect(
        (store:RootStore) => ({
            PrivateStructStore: store.PrivateStructStore,
        }),{

        }
    )( withRouter<any,any>( PackageComponent ) )
}

class Home extends Component<any>{

    state = {
        isShow: 0,
    }

    componentDidMount(){
        //初始化区域滚动
        window.mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }

    render(){
        return (
            <>
                <CommonHeaderComponent {...Object.assign(
                    {
                        title: "多签钱包"
                    },
                    {},
                    {}
                )}></CommonHeaderComponent>

                <TopDIV className="mui-content">
                    <div className="mui-row box">
                        <div className="mui-row inner">
                            <div className="mui-row inner-one">
                                <div className="mui-col-xs-12">
                                    多签钱包总资产
                                    {
                                        this.state.isShow ? (
                                            <img src={eyePng} alt="" style={{
                                                height: "13px",
                                                width: "19px",
                                                marginLeft: '10px',
                                            }} onClick = {debounce( ()=>{
                                                this.setState({
                                                    isShow: this.state.isShow ^ 1,
                                                })
                                            } )} />
                                        ) : (
                                            <img src={closeEyePng} alt="" style={{
                                                height: "13px",
                                                width: "19px",
                                                marginLeft: '10px',
                                            }} onClick = {debounce( ()=>{
                                                this.setState({
                                                    isShow: this.state.isShow ^ 1,
                                                })
                                            } )} />
                                        )
                                    }

                                </div>
                            </div>
                            <div className="mui-row inner-two">
                                <div className="mui-col-xs-12">
                                    { this.state.isShow ? "1,123,234.098" : "*********" } USDT
                                </div>
                            </div>

                        </div>
                    </div>
                </TopDIV>

                <MoneyTitle className="mui-content">
                    <div className="mui-row">
                        <div className="mui-col-xs-12">
                            我的钱包
                        </div>
                    </div>
                </MoneyTitle>

                <div className="mui-scroll-wrapper" style={{
                    top: "292px",
                    height: "calc( 100vh - 44px - 208px - 40px )",
                }}>
                    <div className="mui-scroll" style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <div className="mui-content" style={{
                            width: "94%",
                        }}>
                            {
                                this.props.PrivateStructStore.networks.map( (row:any)=>(
                                    <Money className = "mui-content" key={row.type} onClick={ async()=>this.props.history.push({pathname: row.index}) }>
                                        <div className="mui-row inner">
                                            <div className="mui-row one">
                                                <div className="mui-col-xs-6 left">
                                                    钱包主网
                                                </div>
                                                <div className="mui-col-xs-6 right">
                                                    {row.type}
                                                </div>
                                            </div>
                                            <div className="mui-row two">
                                                <div className="left">
                                                    <img src={moneyPng} alt="icon" style={{
                                                        width: "39px",
                                                        height: "32px",
                                                    }} />
                                                </div>
                                                <div className="right">
                                                    <div className="mui-row address">
                                                        {row.contract.replace( /^(.{4})(.+)(.{7})$/gi, "$1......$3" )}
                                                    </div>
                                                    <div className="mui-row amount">
                                                        资产：{this.state.isShow ? "----------" : "**********"}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mui-row three">
                                                有0笔交易需要您签名
                                            </div>
                                        </div>
                                    </Money>
                                ))
                            }

                        </div>
                    </div>
                </div>


            </>
        )
    }

}

export default HomeParent( Home )