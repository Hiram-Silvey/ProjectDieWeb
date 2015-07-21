/// <reference path="references.ts" />

class Grid {

	private _width: number;
	private _length: number;
	private _player1: Core;
	private _player2: Core;
	_land: VisibleInterface[][];

	constructor(width: number, length: number, player1: Core, player2: Core) {
		this._width = width;
		this._length = length;
		this._player1 = player1;
		this._player2 = player2;
		this._land = [][];
		for (var i = 0; i < width; i++) {
			for (var j = 0; j < length; j++) {
				this._land[i][j] = new Space(i, j);
			}
		}
		this._player1.setRow(0);
		this._player1.setCol((width/2) + 1);
		this._land[0][(width/2) + 1] = player1;
		this._player2.setRow(length - 1);
		this._player2.setCol(width/2 + 1);
		this._land[length-1][(width/2) + 1] = player2;
	}
	
	getWidth(): number {
		return this._width;
	}

	getLength(): number {
		return this._length;
	}

	getPlayer1(): Core {
		return this._player1;
	}

	getPlayer2(): Core {
		return this._player2;
	}

	getVisibleAt(row: number, col: number): Visible {
		return this._land[row][col];
	}

	buildPlatformAt(row: number, col: number, owner: Core) {
		this._land[row][col] = new Platform(row, col, owner);
	}

	buildPlatformAt(row: number, col: number, owner: Core, occupant: Artifact) {
		this._land[row][col] = new Platform(row, col, owner, occupand);
	}

	removePlatformAt(row: number, col: number) {
		this._land[row][col] = new Space(row, col);
	}
	
}
