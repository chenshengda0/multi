import {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

const MoneyBtcInfoParent = function(SonComponent:any){
    class PackageComponent extends Component<any>{

        state = {
            network: "BTC",
        }

        render(){
            return(
                <>
                    <SonComponent {...Object.assign(
                        {
                            ...this.props,
                        },
                        {
                            network: this.state.network,
                        },
                        {}
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

class MoneyBtcInfo extends Component<any>{

    render(){
        return (
            <>
                <h1>{this.props.network}钱包详情</h1>
            </>
        )
    }

}

export default MoneyBtcInfoParent( MoneyBtcInfo )