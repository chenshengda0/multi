import {Component} from "react"
import {connect} from "react-redux"
// import styled from "styled-components"
import { Switch, Redirect,withRouter,Route } from 'react-router-dom';
import {
    ImportPrivateKeyAction,
    RemovePrivateKeyAction,
} from "Redux/Actions"
import {
    CommonLoadingComponent,

    CheckBscPrivateRoute,
    CheckBtcPrivateRoute,
    CheckEthPrivateRoute,
    CheckTronPrivateRoute,
} from "Components"
import * as PageMap from "Pages"


const AppParent = (SonComponent:any)=>{
    class PackageComponent extends Component<any>{

        state = {

        }

        UNSAFE_componentWillMount(){

        }

        //组件挂载完成调用
        componentDidMount(){
            window.mui.init();
            //初始化区域滚动
            window.mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
            //解决登陆页面图标丢失
            window.mui("input").input();
        }

        render(){
            const loading = true;
            return (
                <>
                    {
                        loading ? (
                            <SonComponent {...Object.assign(
                                {
                                    ...this.props,
                                },
                                {},
                                {}
                            )}></SonComponent>
                        ) : (
                            <CommonLoadingComponent></CommonLoadingComponent>
                        )
                    }
                </>
            )
        }

    }

    return connect( (store:RootStore)=>({
        RandomKeyStore: store.RandomKeyStore,
        PrivateStructStore: store.PrivateStructStore,
    }),{
        ImportPrivateKeyAction,
        RemovePrivateKeyAction,
    } )( withRouter<any,any>( PackageComponent ) )
} 

class App extends Component<any>{

    render(){
        return (
            <>
                <Switch>
                    {/*首页*/}
                    <Route exact path="/" component={PageMap.HomePage}></Route>

                    {/*TRON网络*/}
                    <Route exact path="/import_tron_private" component={PageMap.ImportTronPrivatePage}></Route>
                    <CheckTronPrivateRoute exact path="/money_tron_info" component={PageMap.MoneyTronInfoPage}></CheckTronPrivateRoute>
                    <CheckTronPrivateRoute exact path="/transfer_tron" component={PageMap.TransferTronPage}></CheckTronPrivateRoute>
                    <CheckTronPrivateRoute exact path="/sign_tron" component={PageMap.SignTronPage}></CheckTronPrivateRoute>

                    {/*BSC网络*/}
                    <Route exact path="/import_bsc_private" component={PageMap.ImportBscPrivatePage}></Route>
                    <CheckBscPrivateRoute exact path="/money_bsc_info" component={PageMap.MoneyBscInfoPage}></CheckBscPrivateRoute>
                    <CheckBscPrivateRoute exact path="/transfer_bsc" component={PageMap.TransferBscPage}></CheckBscPrivateRoute>
                    <CheckBscPrivateRoute exact path="/sign_bsc" component={PageMap.SignTronPage}></CheckBscPrivateRoute>

                    {/*ETH网络*/}
                    <Route exact path="/import_eth_private" component={PageMap.ImportEthPrivatePage}></Route>
                    <CheckEthPrivateRoute exact path="/money_eth_info" component={PageMap.MoneyEthInfoPage}></CheckEthPrivateRoute>
                    <CheckEthPrivateRoute exact path="/transfer_eth" component={PageMap.TransferEthPage}></CheckEthPrivateRoute>
                    <CheckEthPrivateRoute exact path="/sign_eth" component={PageMap.SignTronPage}></CheckEthPrivateRoute>

                    {/*BTC网络*/}
                    <Route exact path="/import_btc_private" component={PageMap.ImportBtcPrivatePage}></Route>
                    <CheckBtcPrivateRoute exact path="/money_btc_info" component={PageMap.MoneyBtcInfoPage}></CheckBtcPrivateRoute>
                    <CheckBtcPrivateRoute exact path="/transfer_btc" component={PageMap.TransferBtcPage}></CheckBtcPrivateRoute>
                    <CheckBtcPrivateRoute exact path="/sign_btc" component={PageMap.SignTronPage}></CheckBtcPrivateRoute>

                    <Redirect to="/" />
                </Switch>
            </>
        )
    }

}

export default AppParent( App );