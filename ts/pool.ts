/// <reference path="references.ts" />

class Pool {
	
	private _pool: Die[];
	
	constructor() {
		this._pool = [];
	}

	addDie(die: Die) {
		this._pool.push(die);
	}

	// **REMEMBER** remove die when put in play
	removeDie(die: Die): boolean {
		var index = this._pool.indexOf(die, 0);
		if (index != undefined) {
			this._pool.splice(index, 1);
			return true;
		}
		return false;
	}

	get pool(): Die[] {
		return this._pool;
	}

	clearPool() {
		this._pool.splice(0, this._pool.length);
	}

	get size(): number {
		return this._pool.length;
	}

}
