import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// Selector to fetch state
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => { dispatch(buyCake) }
    }
};

export default connect(
    mapDispatchToProps,
    mapStateToProps
)(CakeContainer)
