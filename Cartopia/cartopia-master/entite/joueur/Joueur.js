var Joueur = function()
{
	this.pas = [2,2];	
	this.orientation = [1,1];

	positionTerrain = [20,20];
	//console.log('position ' + positionTerrain['rangee'] + ' ' + positionTerrain['colonne']);
	this.rangee = positionTerrain['rangee'];
	this.colonne = positionTerrain['colonne'];
	this.xPixel = ((this.colonne)?this.colonne*50:0);
	this.yPixel = ((this.rangee)?this.rangee*50:0);
};

Joueur.prototype.orienter = function()
{
	if(this.iteration%30 == 0)
	{
		this.orientation[0] = 2*Math.random()*aDeplacer.pas[0] - 1;
		this.orientation[1] = 2*Math.random()*aDeplacer.pas[1] - 1;
	}
}

Joueur.prototype.deplacer = function()
{
	this.iteration++;
	this.orienter();
	aDeplacer = this;
	//alert(this.instanceHerisson);
	aDeplacer.xPixel += aDeplacer.orientation[0]*aDeplacer.pas[0];
	aDeplacer.yPixel += aDeplacer.orientation[1]*aDeplacer.pas[1];
	aDeplacer.colonne = Math.floor(aDeplacer.xPixel/50) + 1;
	aDeplacer.rangee = Math.floor(aDeplacer.yPixel/50) + 1;
	if(aDeplacer.colonne < 22 && aDeplacer.rangee < 15)
	{			
		terreMarchee = cartographie[aDeplacer.rangee][aDeplacer.colonne];
		//document.getElementById('message').innerHTML = terreMarchee;
		if('O' == terreMarchee)
		{
			this.pas = [-this.pas[0],-this.pas[1]];			
		}
	}
}



