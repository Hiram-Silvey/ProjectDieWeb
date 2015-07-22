/// <reference path="references.ts" />

var _dieJSON = 	'{"die": [{"type": "hero","name": "adonis","description": "god of smash","faces": ["SPAWNx4","ATK","ATKx4","ATKx2","MOVE","MOVE"],"life": 50,"strength": 20,"guard": 15},{"type": "hero","name": "brian","description": "god of rap","faces": ["SPAWNx4","ATK","ATKx4","ATKx2","MOVE","MOVE"],"life": 40,"strength": 25,"guard": 10}]}';

	
var factory: DieFactory = new DieFactory();
var pool: Pool = new Pool();

var jsonData = JSON.parse(_dieJSON);
for (var i = 0; i < jsonData.die.length; i++) {
	pool.addDie(factory.makeDie(jsonData.die[i]));
}
for (var i = 0; i < pool.getSize(); i++) {
	pool.getPool()[i].printDie();
}
