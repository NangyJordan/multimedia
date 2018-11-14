var Mechant = function(terrain)
{
	this.terrain = terrain;
	this.pas = [2,2];
	
	this.iteration = 0;
	this.calques = 1;
	this.pasAnime = 10;
	this.orientation = [1,1];

	positionTerrain = trouverPositionTerrain(this.terrain);
	//console.log('position ' + positionTerrain['rangee'] + ' ' + positionTerrain['colonne']);
	this.rangee = positionTerrain['rangee'];
	this.colonne = positionTerrain['colonne'];
	this.xPixel = ((this.colonne)?this.colonne*50:0);
	this.yPixel = ((this.rangee)?this.rangee*50:0);
};

Mechant.prototype.calculerCalque = function()
{
	//console.log('Nombre calques ' + this.calques);
	//console.log('Iteration ' + this.iteration);
	this.calqueChoisi = 0;
	var duree = this.calques*this.espace;
	this.avancement = this.iteration%duree;
	//console.log('Avancement ' + this.avancement);
	for(var instant = 1; instant <= this.calques; instant++)
	{
		if(this.avancement < duree/this.calques*instant) {this.calqueChoisi = instant; break;}			
	}
	//console.log('Animation ' + this.calqueChoisi);
	return this.calqueChoisi;
	//return 0;
}

Mechant.prototype.orienter = function()
{
	if(this.iteration%30 == 0)
	{
		this.orientation[0] = 2*Math.random()*aDeplacer.pas[0] - 1;
		this.orientation[1] = 2*Math.random()*aDeplacer.pas[1] - 1;
	}
}

Mechant.prototype.deplacer = function()
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
		if(terreMarchee != aDeplacer.terrain)
		{
			this.pas = [-this.pas[0],-this.pas[1]];			
		}
	}
}

function trouverPositionTerrain(terrainRecherche)
{
	for(rangeeCourante = 0; rangeeCourante < cartographie.length; rangeeCourante++)
	{
		for(colonneCourante = 0; colonneCourante < cartographie[rangeeCourante].length; colonneCourante++)
		{
			if(cartographie[rangeeCourante][colonneCourante] == terrainRecherche)
				return {rangee:rangeeCourante, colonne:colonneCourante};
		}
	}
}

		

