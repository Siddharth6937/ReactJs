import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/count/action.js';


const Count = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (

        <>
            <h1 className="dispaly-1">{count}</h1>
            <Button variant='dark' onClick={() => dispatch(incrementCounter())}>Increment</Button>
            {" "}
            <Button variant='dark' onClick={() => dispatch(incrementCounter(5))}>Increment by 5</Button>
            <br />
            <br />
            <Button variant='dark' onClick={() => dispatch(decrementCounter())}>decrement</Button>
            {" "}
            <Button variant='dark' onClick={() => dispatch(decrementCounter(5))}>decrement by 5</Button>
        </>
    )

}


export default Count;


/*
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/count/action.js';


const Count = ({ count, incrementCounter, decrementCounter }) => {
    return (
        <>
            <h1 className="dispaly-1">{count}</h1>
            <Button variant='dark' onClick ={() => incrementCounter() }>Increment</Button> 
            {" "}
            <Button variant='dark' onClick ={ () => incrementCounter(5) }>Increment by 5</Button>
            <br />
            <br />
            <Button variant='dark' onClick ={() => decrementCounter()  }>decrement</Button>
            {" "}
            <Button variant='dark' onClick ={() => decrementCounter(5)  }>decrement by 5</Button>
        </>
    )
    
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter : (num) => dispatch(incrementCounter(num)),
        decrementCounter : (num) => dispatch(decrementCounter(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);

*/