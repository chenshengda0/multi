import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    CommonLoadingComponent,
    CommonBackHeaderComponent,
} from "Components"
import styled from "styled-components"
import networkPng from "./static/network.png"
import {Input} from "antd"
import {
    createAesEnPrivateKey,
    createAesDePrivateKey,
} from "Common"

const {TextArea} = Input;

const Title = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        width: 94%;
        height: 30px;
        //background: red;
        margin-top: 20px;
        line-height: 30px;
        font-size: 18px;
        font-weight: 500;
        color: #636262;
    }
`

const NetWork = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        width: 94%;
        height: 50px;
        //background: red;
        border-radius: 10px 10px 10px 10px;
        border: 1px solid #EBEAEA;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .left{
            width: 83px;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .right{
            width: calc( 100% - 83px );
            height: 50px;
            line-height: 50px;
            color: #626262;
            font-size: 18px;
            font-weight: 350;
        }
    }
`

const PrivateKey = styled.div`
    height: 205px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        height: 159px;
        width: 94%;
        //background: red;
        border-radius: 10px 10px 10px 10px;
    }
`

const MoneyName = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .mui-row{
        width: 94%;
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        color: #636262;
    }
`

const MoneyInput = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .mui-row{
        height: 70px;
        width: 94%;
        position: relative;
    }
`

const Bottom = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    .mui-row{
        width: 208px;
        height: 50px;
        background: #19D1A1;
        border-radius: 12px 12px 12px 12px;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        color: #FFF;
        font-weight: 500;
    }
`

const ImportBscPrivateParent = function(SonComponent:any){
    class PackageComponent extends Component<any>{

        state = {
            network: "BSC",
        }

        UNSAFE_componentWillMount(){

        }

        render(){
            const chainData = this.props.PrivateStructStore.networks.find( (row:any)=>row.type.toLocaleUpperCase() === this.state.network.toLocaleUpperCase() ) || false;
            return(
                <>
                {
                    chainData ? (
                        <SonComponent {...Object.assign(
                            {
                                ...this.props,
                            },
                            {
                                network: this.state.network, 
                            },
                            {
                                chainData,
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

class ImportBscPrivate extends Component<any>{

    state = {
        privateKey: "",
        keyName: "",
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
                <CommonBackHeaderComponent backUrl = "/" title = "多签钱包导入"></CommonBackHeaderComponent>
                <div className="mui-scroll-wrapper" style={{
                    top: "44px",
                    height: "calc( 100vh - 44px - 80px )",
                }}>
                    <div className="mui-scroll">
                        <Title className="mui-content">
                            <div className="mui-row">
                                多签网络
                            </div>
                        </Title>

                        <NetWork className="mui-content">
                            <div className="mui-row">
                                <div className="left">
                                    <img src={networkPng} style={{ height: "31px", width: "39px" }} alt="icon" />
                                </div>
                                <div className="right">
                                    {this.props.network}主网
                                </div>
                            </div>
                        </NetWork>

                        <PrivateKey className="mui-content">
                            <div className="mui-row">
                                <TextArea
                                    showCount
                                    maxLength={240}
                                    style={{
                                        height: "159px",
                                        resize: 'none',
                                        color: "#626262",
                                    }}
                                    value={this.state.privateKey}
                                    onChange={ (e)=>
                                        this.setState( {
                                            privateKey: e.target.value
                                        } )
                                    }
                                    placeholder="导入你在其它钱包创建的私钥或助记词"
                                />
                            </div>
                        </PrivateKey>

                        <MoneyName className="mui-content">
                            <div className="mui-row">
                                多签钱包名称
                            </div>
                        </MoneyName>

                        <MoneyInput className="mui-content">
                            <div className="mui-row">
                                <Input style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)",
                                }} size = "large" placeholder="设置你的多签钱包名称" value={this.state.keyName} onChange={ (e)=>
                                    this.setState( {
                                        keyName: e.target.value
                                    } )
                                }></Input>
                            </div>
                        </MoneyInput>
                    </div>
                </div>

                <Bottom className="mui-content">
                    <div className="mui-row" onClick={()=>this.props.history.push({
                        pathname: "/money_bsc_info"
                    })}>
                        确认导入
                    </div>
                </Bottom>
            </>
        )
    }

}

export default ImportBscPrivateParent( ImportBscPrivate )