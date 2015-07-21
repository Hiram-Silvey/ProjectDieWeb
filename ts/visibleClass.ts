class VisibleInterface {
	
	private _row: number;
	private _col: number;

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
