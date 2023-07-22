import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import styled from "styled-components"
import {sleep} from "Common"
import {
    CommonBackHeaderComponent,

    CommonLoadingComponent,
} from "Components"
import networkPng from "./static/network.png"

const NetworkTitle = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    //align-items: center;
    justify-content: center;
    //border: 1px solid red;
    padding-top: 10px;
    .innerBox{
        height: 30px;
        line-height: 30px;
        width: 94%;
        //border: 1px solid yellow;
        font-weight: 500;
        color: #636262;
        font-size: 18px;
    }
`

const NetworkInput = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .innerBox{
        height: 49px;
        width: 94%;
        border-radius: 10px 10px 10px 10px;
        border: 1px solid #EBEAEA;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .innerContent{
            height: 49px;
            width: 94%;
            //border: 1px solid red;
            display: flex;
            flex-direction: row;
            .left{
                width: 49px;
                height: 49px;
                display: flex;
                flex-direction: row;
                align-items: center;
                //justify-content: center;
            }

            .right{
                height: 49px;
                width: calc( 100% - 49px );
                //border: 1px solid blue;
                line-height: 49px;
                font-weight: 350;
                color: #626262;
                font-size: 18px;
            }
        }
    }
`

const MoneyTitle = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    //align-items: center;
    justify-content: center;
    //border: 1px solid red;
    padding-top: 10px;
    .innerBox{
        height: 30px;
        line-height: 30px;
        width: 94%;
        //border: 1px solid yellow;
        font-weight: 500;
        color: #636262;
        font-size: 18px;
    }
`

const MoneyInput = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .innerBox{
        height: 49px;
        width: 94%;
        border-radius: 10px 10px 10px 10px;
        border: 1px solid #EBEAEA;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .innerContent{
            height: 49px;
            width: 94%;
            //border: 1px solid red;
            display: flex;
            flex-direction: row;
            //width: calc( 100% - 49px );
            //border: 1px solid blue;
            line-height: 49px;
            font-weight: 350;
            color: #626262;
            font-size: 18px;
        }
    }
`

const SignContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    //border: 1px solid red;
    .innerBox{
        width: 94%;
        min-height: 50px;
        border-radius: 10px 10px 10px 10px;
        border: 1px solid #EBEAEA;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .innerContent{
            width: 94%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            //border: 1px solid blue;

            .list-account{
                width: 100%;
                height: 50px;
                border-bottom: 1px solid #ccc;
                //border:1px solid red;
                font-weight: 350;
                color: #646464;
                font-size: 18px;
                line-height: 50px;
                .mui-col-xs-4{
                    text-align: right;
                }
            }

            .handle{
                height: 85px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                //border: 1px solid red;
                .innerHandle{
                    width: 100%;
                    height: 37px;
                    //border: 1px solid blue;
                    .left{
                        height: 37px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        //justify-content: center;
                        .left-btn{
                            width: 129px;
                            height: 37px;
                            border-radius: 10px 10px 10px 10px;
                            border: 1px solid #9B9999;
                            font-weight: 400;
                            color: #3D3D3D;
                            line-height: 37px;
                            font-size: 13px;
                            text-align: center;
                        }
                    }

                    .right{
                        height: 37px;
                        display: flex;
                        flex-direction: row-reverse;
                        align-items: center;
                        //justify-content: center;
                        .right-btn{
                            width: 129px;
                            height: 37px;
                            border-radius: 10px 10px 10px 10px;
                            border: 1px solid #9B9999;
                            color: #3D3D3D;
                            line-height: 37px;
                            font-size: 13px;
                            text-align: center;
                        }
                    }
                }

            }
        }
    }
`

const SignTitle = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    //align-items: center;
    justify-content: center;
    //border: 1px solid red;
    padding-top: 10px;
    .innerBox{
        height: 30px;
        line-height: 30px;
        width: 94%;
        //border: 1px solid yellow;
        font-weight: 500;
        color: #636262;
        font-size: 18px;
    }
`

const SignTronParent = function(SonComponent:any){

    class PackageComponent extends Component<any>{

        state = {
            loading: false,
        }

        async UNSAFE_componentWillMount(){
            await sleep(1000)
            await this.setState({
                loading: true
            }) 
        }

        render(){
            return (
                <>
                    {
                        this.state.loading ? (
                            <SonComponent {...Object.assign(
                                {
                                    ...this.state
                                },
                                {
                                    ...this.props,
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

        }),{

        }
    )( withRouter<any,any>( PackageComponent ) )

}

class SignTron extends Component<any>{

    render(){
        return (
            <>
                <CommonBackHeaderComponent title="添加授權者" backUrl="/money_tron_info"></CommonBackHeaderComponent>

                <NetworkTitle className="mui-content">
                    <div className="mui-row innerBox">
                        网络名称
                    </div>
                </NetworkTitle>

                <NetworkInput className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-row innerContent">
                            <div className="mui-row left">
                                <img src={networkPng} alt="icon" style={{
                                    height: "29px",
                                    width: "34px",
                                }} />
                            </div>
                            <div className="mui-row right">
                                {this.props.defaultNetwork}主網
                            </div>
                        </div>
                    </div>
                </NetworkInput>

                <MoneyTitle className="mui-content">
                    <div className="mui-row innerBox">
                        多签钱包名称
                    </div>
                </MoneyTitle>

                <MoneyInput className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-row innerContent">
                            我是hwhjdwm
                        </div>
                    </div>
                </MoneyInput>

                <SignTitle className="mui-content">
                    <div className="mui-row innerBox">
                        管理钱包地址
                    </div>
                </SignTitle>

                <SignContent className="mui-content">
                    <div className="mui-row innerBox">
                        <div className="mui-row innerContent">

                            {
                                [1,2,3,4,5].map( (row)=>(
                                    <div className="mui-row list-account" key={row}>
                                        <div className="mui-col-xs-8">
                                            { "TPNTiRCVfkXh8oxvNZQ8WYGAQssSCk8QwZ".replace( /^(.{4})(.+)(.{7})$/, "$1......$3" ) }
                                        </div>
                                        <div className="mui-col-xs-4">
                                            已導入
                                        </div>
                                    </div>
                                ) )
                            }
                            <div className="mui-row handle">
                                <div className="innerHandle mui-row">
                                    <div className="mui-col-xs-6 left">
                                        <div className="mui-row left-btn">
                                            添加授權錢包地址
                                        </div>
                                    </div>

                                    <div className="mui-col-xs-6 right">
                                        <div className="mui-row right-btn">
                                            刪除授權錢包地址
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SignContent>
            </>
        )
    }

}

export default SignTronParent( SignTron )