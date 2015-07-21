/// <reference path="references.ts" />
class DieFactory{

  makeDie(json: string): Die{
    var info = JSON.parse(json);
    var finalArtifact: Artifact;
    var kind: string = info.type;

    switch(kind){
      case 'hero':
      var hero: Hero = new Hero();
      hero.setName(info.name);
      hero.setDescription(info.description);
      hero.setLife(info.life);
      hero.setStrength(info.strength);
      hero.setGuard(info.guard);
      finalArtifact = hero;
      break;

      case 'Artifact':
      var artifact: Artifact = new Artifact();
      artifact.setName(info.name);
      artifact.setDescription(info.description);
      finalArtifact = artifact;
      break;

      default:
      return null;
    }

    var faces: Face[] = [null,null,null,null,null,null];
    for(var i = 0; i < info.faces; i++){
      var temp: string = info.faces[i];
      faces[i] = Face[temp];
    }

    var die: Die = new Die(faces, finalArtifact);
    return die;

  }

}
