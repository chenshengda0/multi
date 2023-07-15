import {Component} from "react"
import {connect} from "react-redux"
import { Route, Redirect, withRouter } from 'react-router-dom'

const CheckBtcPrivateParent = function(SonComponent:any){
    class PackageComponent extends Component<any>{
        
        state = {
            netWork: "BTC",
        }

        render(){
            const chainData = this.props.PrivateStructStore.networks.find( (row:any)=>row.type.toUpperCase === this.state.netWork.toUpperCase() ) || {};
            return (
                <>
                    {
                        chainData ? (
                            <SonComponent {...Object.assign(
                                {
                                    ...this.props,
                                },
                                {
                                    chainData: this.props.PrivateStructStore
                                },
                                {}
                            )}></SonComponent>
                        ) : (
                            <h1>加载中...</h1>
                        )
                    }
                </>
            )
        }

    }

    return connect(
        (store:RootStore)=>({
            PrivateStructStore:  store.PrivateStructStore,
        }),{

        }
    )( withRouter<any,any>( PackageComponent ) )
}

class CheckBtcPrivate extends Component<any>{

    state = {
        hasAddress : false,
    }

    UNSAFE_componentWillMount(){

    }

    render(){
        const {
            component:Component,
            ...rest
        } = this.props;
        console.error( this.props )
        return (
            <>
                {
                    !!this.props.chainData.accounts ? (
                        <Route {...rest} render={(props) =>(<Component {...props} />)}/>
                    ) :(
                        <Redirect to="/import_btc_private" />
                    )
                }
            </>
        )
    }

}


export default CheckBtcPrivateParent( CheckBtcPrivate )