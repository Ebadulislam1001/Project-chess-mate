function Cell(props) {
    const boardState = [
        ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"]
    ];

    const cellColor = (props.rank + props.file) % 2;
    const piece = boardState[props.rank][props.file];
    const png = piece ? `https://images.chesscomfiles.com/chess-themes/pieces/neo/150/${piece}.png` : "";

    return (
        <div className={`w-[36px] h-[36px] sm:w-[64px] sm:h-[64px] md:w-[84px] md:h-[84px] ${cellColor === 0 ? 'bg-[#EBECD0]' : 'bg-[#779556]'}`}>
            <img src={png} alt={piece} />
        </div>
    );
}

export default Cell;
