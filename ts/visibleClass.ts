class VisibleClass {
	
	private _row: number;
	private _col: number;

	constructor(row: number, col: number) {
		this._row = row;
		this._col = col;
	}

	setRow(row: number) {
		this._row = row;
	}

	getRow(): number {
		return this._row;
	}

	setCol(col: number) {
		this._col = col;
	}

	getCol(): number {
		return this._col;
	}

}
