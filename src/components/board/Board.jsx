import Row from './Row'

function Board() {
    return (
        <>
            <div className='flex flex-col border-4 border-black'>
                <Row rank={0} />
                <Row rank={1} />
                <Row rank={2} />
                <Row rank={3} />
                <Row rank={4} />
                <Row rank={5} />
                <Row rank={6} />
                <Row rank={7} />
            </div>
        </>
    )
}

export default Board
