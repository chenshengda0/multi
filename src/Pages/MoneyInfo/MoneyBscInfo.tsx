import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    CommonHeaderComponent,
    CommonLoadingComponent,
} from "Components"
import styled from "styled-components"
import bannerPng from "./static/banner.png"
import copyPng from "./static/copy.png"
import acceptPng from "./static/accept.png"
import transferPng from "./static/transfer.png"
import mulPng from "./static/mul.png"
import usdtPng from "./static/usdt.png"
import {sleep} from "Common"


const Header = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .box{
        height: 167px;
        width: 94%;
        background: url(${bannerPng});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .innerBox{
            height: 147px;
            width: 90%;

            .row-one{
                height: 42px;
                background-repeat: no-repeat;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .left{
                    height: 30px;
                    background: rgba(255,255,255,0.36);
                    border-radius: 5px 5px 5px 5px;
                    border: 1px solid rgba(255,255,255,0.58);
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    
                    .left-inner{
                        width: 90%;
                        line-height: 30px;
                        height: 30px;
                        color: #FFF;
                        font-size: 15px;
                        font-weight: 500;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                .right{
                    height: 42px;
                    line-height : 42px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #FFF;
                    text-align: right;
                }
            }

            .row-two{
                height: 35px;
                width: 100%; 
                //background: green;
                .left{
                    height: 35px;
                    line-height: 35px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #FFF;
                }

                .right{
                    height: 35px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    //justify-content: center;
                }
            }

            .row-three{
                height: 35px;
                width: 100%; 
                //background: blue;
                font-size: 15px;
                font-weight: 500;
                color: #FFF;
                .left{
                    height: 35px;
                    line-height: 35px;
                }
                .right{
                    height:35px;
                    line-height: 35px;
                }
            }

            .row-four{
                height: 35px;
                width: 100%; 
                //background: yellow;
                font-size: 15px;
                font-weight: 500;
                color: #FFF;
                .left{
                    height: 35px;
                    line-height: 35px;
                }

                .right{
                    height: 35px;
                    line-height: 35px;
                }
            }
        }
    }
`

const Handle = styled.div`
    height: 50px;
    width: 100%;
    //background: yellow;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .innerBox{
        height: 30px;
        //background: green;
        width: 94%;
        .col-one{
            display: flex;
            flex-direction: row;
            //align-items: center;
            //justify-content: center;
            height:30px;
            //background: blue;
            .mui-row{
                height: 30px;
                width: 92px;
                border-radius: 5px;
                border: 1px solid #737272;
                .mui-col-xs-4{
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .mui-col-xs-8{
                    font-weight: 400;
                    color: #3D3D3D;
                    font-size: 15px;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }

        .col-two{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            //background: green;
            height: 30px;
            .mui-row{
                height: 100%;
                width: 92px;
                border-radius: 5px;
                border: 1px solid #737272;
                .mui-col-xs-4{
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .mui-col-xs-8{
                    font-weight: 400;
                    color: #3D3D3D;
                    font-size: 15px;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }

        .col-three{
            display: flex;
            flex-direction: row-reverse;
            //align-items: center;
            //justify-content: center;
            height: 30px;
            //background: red;
            .mui-row{
                width: 92px;
                height: 100%;
                border-radius: 5px;
                border: 1px solid #737272;
                .mui-col-xs-4{
                    height: 30px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                .mui-col-xs-8{
                    font-weight: 400;
                    color: #3D3D3D;
                    font-size: 15px;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }
    }
`

const Title = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //background: red;
    .innerBox{
        width: 94%;
        height: 100%;
        //background: yellow;
        .left{
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            font-weight: 500;
            color: #636262;
        }

        .right{
            height: 40px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            //justify-content: center;
            .mui-row{
                height: 23px;
                width: 79px;
                background: rgba(255,255,255,0.01);
                border-radius: 7px 7px 7px 7px;
                border: 1px solid #737272;
                font-weight: 350;
                color: #424242;
                font-size: 13px;
                line-height: 23px;
                text-align: center;
            }
        }
    }
`

const TokenList = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    //background: yellow;
    .innerBox{
        width: 94%;
        height: 50px;
        //background: red;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px dashed #F6F6F6;

        .one{
            height: 50px;
            width: 60px;
            //background: green;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .two{
            width: calc(100vw - 60px);
            height: 50px;
            //background: blue;
            .row-one{
                height: 26px;
                line-height: 26px;
                font-size: 18px;
                font-weight: 350;
                color: #3D3D3D;
                //background: green;
                .right{
                    text-align: right;
                }
            }
            .row-two{
                height: 24px;
                //background: blue;
                line-height: 24px;
                font-size: 15px;
                font-weight: 350;
                color: #3D3D3D;
                .right{
                    text-align: right;
                }
            }   
        }
    }
`

const Bottom = styled.div`
    height: 80px;
    position: fixed;
    bottom: 0;
    width: 100%;
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
        line-height: 49px;
        font-size: 20px;
        text-align: center;
    }
`

const MoneyBscInfoParent = function(SonComponent:any){
    class PackageComponent extends Component<any>{

        state = {
            loading: false,
        }

        async UNSAFE_componentWillMount(){
            await sleep( 3000 )
            await this.setState( {
                loading: true
            } )
        }

        render(){
            return(
                <>
                    {
                        this.state.loading ? (
                            <SonComponent {...Object.assign(
                                {
                                    ...this.props,
                                },
                                {

                                },
                                {

                                }
                            )}></SonComponent>
                        ) : (
                            <CommonLoadingComponent></CommonLoadingComponent>
                        )
                    }

                </>
            )
        }
    }
    return connect(
        (store:RootStore) => ({
            RandomKeyStore: store.RandomKeyStore,
            PrivateStructStore: store.PrivateStructStore,
        }),{

        }
    )( withRouter<any,any>( PackageComponent ) )
}

class MoneyBscInfo extends Component<any>{

    componentDidMount(){
        //初始化区域滚动
        window.mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }

    render(){
        return (
            <>
                <CommonHeaderComponent title="錢包"></CommonHeaderComponent>

                <Header className="mui-content">
                    <div className="mui-row box">
                        <div className="mui-row innerBox">
                            <div className="mui-row row-one">
                                <div className="mui-col-xs-6 left">
                                    <div className="mui-row left-inner">
                                        HelloHelloHelloHelloHelloHello
                                    </div>
                                </div>
                                <div className="mui-col-xs-6 right">
                                    { this.props.network }
                                </div>
                            </div>
                            <div className="mui-row row-two">
                                <div className="mui-col-xs-6 left">
                                    {"TPNTiRCVfkXh8oxvNZQ8WYGAQssSCk8QwZ".replace( /^(.{4})(.+)(.{7})$/gi, "$1......$3" )}
                                </div>
                                <div className="mui-col-xs-6 right">
                                    <img src={copyPng} alt="icon" style={{
                                        width: "14px",
                                        height: "16px",
                                    }} />
                                </div>
                            </div>
                            <div className="mui-row row-three">
                                <div className="mui-col-xs-6 left">
                                    合约钱包资产(USDT):
                                </div>
                                <div className="mui-col-xs-6 right">
                                    12345.6789
                                </div>
                            </div>
                            <div className="mui-row row-four">
                                <div className="mui-col-xs-4 left">
                                    合約地址:
                                </div>
                                <div className="mui-col-xs-8 right">
                                    {"TPNTiRCVfkXh8oxvNZQ8WYGAQssSCk8QwZ".replace( /^(.{4})(.+)(.{10})$/gi, "$1......$3" )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Header>

                <Handle className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-4 col-one">
                            <div className="mui-row">
                                <div className="mui-col-xs-4">
                                    <img src={acceptPng} alt="icon" style={{
                                        height: "21px",
                                        width: "22px",
                                    }} />
                                </div>
                                <div className="mui-col-xs-8">收款</div>
                            </div>
                        </div>
                        <div className="mui-col-xs-4 col-two">
                            <div className="mui-row" onClick={ ()=>this.props.history.push({
                                pathname: "/transfer_tron"
                            }) }>
                                <div className="mui-col-xs-4">
                                    <img src={transferPng} alt="icon" style={{
                                        height: "21px",
                                        width: "22px",
                                    }} />
                                </div>
                                <div className="mui-col-xs-8">轉帳</div>
                            </div>
                        </div>
                        <div className="mui-col-xs-4 col-three">
                            <div className="mui-row">
                                <div className="mui-col-xs-4">
                                    <img src={mulPng} alt="icon" style={{
                                        height: "21px",
                                        width: "22px",
                                    }} />
                                </div>
                                <div className="mui-col-xs-8">多簽</div>
                            </div>
                        </div>
                    </div>
                </Handle>

                <Title className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-col-xs-6 left">
                            代幣列表
                        </div>
                        <div className="mui-col-xs-6 right">
                            <div className="mui-row">
                                多簽記錄
                            </div>
                        </div>
                    </div>
                </Title>

                {/*滾動框*/}
                <div className="mui-scroll-wrapper" style={{
                    top: "334px",
                    height: "calc( 100vh - 414px )",
                    //background: "red",
                }}>
                    <div className="mui-scroll">
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map( (row)=>(
                                <TokenList className="mui-content" key = {row}>
                                    <div className="innerBox">
                                        <div className="one">
                                            <img src={usdtPng} alt="icon" style={{
                                                height: "44px",
                                                width: "44px",
                                            }} />
                                        </div>
                                        <div className="mui-row two">
                                            <div className="mui-row row-one">
                                                <div className="mui-col-xs-6 left">
                                                    USDT
                                                </div>
                                                <div className="mui-col-xs-6 right">
                                                    1000.123456
                                                </div>
                                            </div>
                                            <div className="mui-row row-two">
                                                <div className="mui-col-xs-6 left">
                                                    $1.0000
                                                </div>
                                                <div className="mui-col-xs-6 right">
                                                    $1000.123456
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TokenList>
                            ) )
                        }
                    </div>
                </div>

                <Bottom className="mui-content">
                    <div className="mui-row">
                        添加代幣
                    </div>
                </Bottom>
            </>
        )
    }

}

export default MoneyBscInfoParent( MoneyBscInfo )