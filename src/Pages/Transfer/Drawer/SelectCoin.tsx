import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {
    Drawer,
} from "antd"
import styled from "styled-components"
//import closePng from "../static/close.png"
import usdtPng from "../static/usdt.png"
import chenkPng from "../static/check.png"
import noChenkPng from "../static/noCheck.png"

const TokenList = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .innerBox{
        height: 50px;
        width: 94%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #E8E6E6;

        .one{
            width: 50px;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            //background: red;
        }

        .two{
            width: calc( 100% - 50px - 50px );
            height: 50px;
            //background: green;
            font-size: 15px;
            line-height: 50px;
            font-weight: 350;
            color: #3D3D3D;
        }

        .three{
            width: 50px;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            //justify-content: center;
            //background: yellow;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            //justify-content: center;
        }
    }
`


const SelectCoinParent = function(SonComponent:any){

    class PackageComponent extends Component<any>{

        state = {
            loadingStatus: 0,
        }

        UNSAFE_componentWillMount(){

            new Promise( (resolve,reject)=>{
                setTimeout( resolve, 3000 )
            } ).then( () => {
                this.setState({ loadingStatus: this.state.loadingStatus ^ 1 })
            } )

        }

        render(){
            const {
                drawerStatus = 1<<0,
                closeCall = ()=>{
                    console.log( "關閉按鈕未定義" )
                }
            } = this.props;
            return (
                <>
                    <Drawer 
                        placement="bottom" 
                        maskClosable = {false}

                        height={500}

                        title = "選擇幣種"

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

                        open={!!(1 << 0 & drawerStatus)}
                    >
                        <SonComponent {...Object.assign(
                            {
                                ...this.props,
                            },
                            {
    
                            },
                            {
    
                            }
                        )}></SonComponent>
                    </Drawer>

                </>
            )
        }

    }

    return connect( (store:RootStore)=>({

    }),{

    } )( withRouter<any,any>( PackageComponent ) )

}

class SelectCoin extends Component<any>{

    render(){
        return (
            <>
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map( (row) => (
                        <TokenList className="mui-content" key={row}>
                            <div className="mui-row innerBox">
                                <div className="mui-row one">
                                    <img src={usdtPng} alt="icon" style={{
                                        width: "33px",
                                        height: "33px",
                                    }} />
                                </div>

                                <div className="mui-row two">
                                    {row}USDT
                                </div>

                                <div className="mui-row three">
                                    {
                                        this.props.current === row ? (
                                            <img src={chenkPng} alt="icon" style={{
                                                height: "24px",
                                                width: "24px",
                                            }} />
                                        ) : (
                                            <img src={noChenkPng} alt="icon" style={{
                                                height: "24px",
                                                width: "24px",
                                            }} />
                                        )
                                    }
                                </div>
                            </div>
                        </TokenList>
                    ) )
                }
            </>
        )
    }

}

export default SelectCoinParent( SelectCoin )