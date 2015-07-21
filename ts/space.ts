/// <reference path="references.ts" />

class Space extends VisibleClass implements VisibleInterface {
	
	constructor(row: number, col: number) {
		super(row, col);
	}

	getOwner(): Core {
		return null;
	}

}
