/// <reference path="references.ts" />
class DieFactory{

  makeDie(json): Die{
    var finalArtifact: Artifact;
    var kind: string = json.type;

    switch(kind){
      case 'hero':
      var hero: Hero = new Hero();
      hero.setName(json.name);
      hero.setDescription(json.description);
      hero.setLife(json.life);
      hero.setStrength(json.strength);
      hero.setGuard(json.guard);
      finalArtifact = hero;
      break;

      case 'Artifact':
      var artifact: Artifact = new Artifact();
      artifact.setName(json.name);
      artifact.setDescription(json.description);
      finalArtifact = artifact;
      break;

      default:
      return null;
    }

    var faces: Face[] = [null,null,null,null,null,null];
    for(var i = 0; i < json.faces; i++){
      var temp: string = json.faces[i];
      faces[i] = Face[temp];
    }

    var die: Die = new Die(faces, finalArtifact);
    return die;

  }

}
