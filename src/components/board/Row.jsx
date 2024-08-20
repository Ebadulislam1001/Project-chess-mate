import Cell from './Cell'
function Row(props) {

    return (
        <>
            <div className='flex flex-row'>
                <Cell rank = {props.rank} file = {0} />
                <Cell rank = {props.rank} file = {1} />
                <Cell rank = {props.rank} file = {2} />
                <Cell rank = {props.rank} file = {3} />
                <Cell rank = {props.rank} file = {4} />
                <Cell rank = {props.rank} file = {5} />
                <Cell rank = {props.rank} file = {6} />
                <Cell rank = {props.rank} file = {7} />
            </div>
        </>
    )
}

export default Row
