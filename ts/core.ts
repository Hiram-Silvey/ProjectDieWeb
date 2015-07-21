/// <reference path="references.ts" />

class Core extends VisibleClass implements VisibleInterface{
	private _health: number;
	private _tokens: number[];
	private _pool: Pool;

	constructor(row: number, col: number, pool: Pool){
		super(row, col);
		this._health = 3;
		this._tokens = [0,0,0,0,0];
		this._pool = pool;
	}

	getHealth(): number{
		return this._health;
	}

	getTokens(): number[]{
		return this._tokens;
	}

	getMovement(): number {
		return this._tokens[0];
	}

	getAttack(): number {
		return this._tokens[1];
	}

	getDefense(): number {
		return this._tokens[2];
	}

	getSpecial(): number {
		return this._tokens[3];
	}

	getMaterial(): number {
		return this._tokens[4];
	}

	getPool(): Pool{
		return this._pool;
	}

	getOwner(): Core{
		return this;
	}

	setHealth(health: number){
		this._health = health;
	}

	setTokens(tokens: number[]){
		this._tokens = tokens;
	}

	setMovement(numMovement: number){
		this._tokens[0] = numMovement;
	}

	setAttack(numAttack: number){
		this._tokens[1] = numAttack;
	}

	setDefense(numDefense: number){
		this._tokens[2] = numDefense;
	}

	setSpecial(numSpecial: number){
		this._tokens[3] = numSpecial;
	}

	setMaterial(numMaterial: number){
		this._tokens[4] = numMaterial;
	}
	
}
