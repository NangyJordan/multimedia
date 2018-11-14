var Fusee = function(terrain)
{
	Vehicule.call(this, terrain);
	var instanceFusee = this;
	
	this.afficher = function(dessin)
	{	
dessin.save();
dessin.translate(instanceFusee.xPixel, instanceFusee.yPixel);
dessin.scale(2,2);

dessin.translate(-25, 0);
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.miterLimit=4;
dessin.font="normal normal normal normal 15px / 21.4286px ''";
dessin.font="   15px ";
dessin.scale(0.1861634005965746,0.1861634005965746);
dessin.save();
dessin.fillStyle="#5f5f5f";
dessin.fillStyle="rgba(95, 95, 95, 0.99990216)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.lineWidth=3.74297166;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(200.507,259.16);
dessin.bezierCurveTo(200.507,274.961,200.411,287.741,202.877,287.741);
dessin.lineTo(202.96,287.741);
dessin.bezierCurveTo(205.427,287.741,205.568,274.792,205.373,259.16);
dessin.lineTo(205.107,238.016);
dessin.lineTo(202.917,63.978);
dessin.bezierCurveTo(202.917,51.284,201.359,184.957,200.747,238.016);
dessin.bezierCurveTo(200.598,251.002,200.504,259.16,200.504,259.16);
dessin.closePath();
dessin.fill("nonzero");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="#5f5f5f";
dessin.fillStyle="rgba(95, 95, 95, 0.99990216)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.lineWidth=3.74297166;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(194.658,257.21);
dessin.bezierCurveTo(194.658,273.011,194.562,285.791,197.028,285.791);
dessin.lineTo(197.111,285.791);
dessin.bezierCurveTo(199.578,285.791,199.718,272.842,199.524,257.21);
dessin.lineTo(199.258,236.066);
dessin.lineTo(197.067,62.028);
dessin.bezierCurveTo(197.067,49.334,195.51,183.007,194.898,236.066);
dessin.bezierCurveTo(194.748,249.052,194.654,257.21,194.654,257.21);
dessin.closePath();
dessin.fill("nonzero");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="#5f5f5f";
dessin.fillStyle="rgba(95, 95, 95, 0.99990216)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.lineWidth=3.74297166;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(204.895,257.21);
dessin.bezierCurveTo(204.895,273.011,204.798,285.791,207.265,285.791);
dessin.lineTo(207.348,285.791);
dessin.bezierCurveTo(209.814,285.791,209.955,272.842,209.761,257.21);
dessin.lineTo(209.495,236.066);
dessin.lineTo(207.305,62.028);
dessin.bezierCurveTo(207.305,49.334,205.747,183.007,205.135,236.066);
dessin.bezierCurveTo(204.986,249.052,204.892,257.21,204.892,257.21);
dessin.closePath();
dessin.fill("nonzero");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.font="   15px ";
dessin.transform(1.378863,0,0,1.378863,-11122.363281,117.566223);
dessin.save();
dessin.fillStyle="#5f5f5f";
dessin.fillStyle="rgba(95, 95, 95, 1)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.lineWidth=0.83577561;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(8212.8244,-69.309136);
dessin.bezierCurveTo(8209.679199999999,-69.309136,8203.4494,-58.0423,8203.4494,-52.848834999999994);
dessin.lineTo(8203.4494,-28.568811999999994);
dessin.lineTo(8205.717499999999,-31.333795999999992);
dessin.lineTo(8205.717499999999,-40.36319999999999);
dessin.bezierCurveTo(8205.717499999999,-42.51458699999999,8206.757699999998,-44.97161499999999,8208.0073,-47.18925699999999);
dessin.bezierCurveTo(8208.6322,-48.29807799999999,8209.311899999999,-49.30229299999999,8210.0378,-50.10545199999999);
dessin.bezierCurveTo(8210.763500000001,-50.90861099999999,8211.4653,-51.70395899999999,8212.8244,-51.70395899999999);
dessin.bezierCurveTo(8214.1835,-51.70395899999999,8214.8853,-50.90861099999999,8215.610999999999,-50.10545199999999);
dessin.bezierCurveTo(8216.336899999998,-49.30229299999999,8217.016599999999,-48.29807799999999,8217.6415,-47.18925699999999);
dessin.bezierCurveTo(8218.8912,-44.97161499999999,8219.9313,-42.51458699999999,8219.9313,-40.36319999999999);
dessin.lineTo(8219.9313,-31.333795999999992);
dessin.lineTo(8222.1994,-28.568811999999994);
dessin.lineTo(8222.1994,-52.848834999999994);
dessin.bezierCurveTo(8222.1994,-58.0423,8215.9697,-69.309136,8212.8244,-69.309136);
dessin.closePath();
dessin.fill("nonzero");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="#5f5f5f";
dessin.fillStyle="rgba(95, 95, 95, 1)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.lineWidth=0.83577561;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(8197.833,-54.900973);
dessin.bezierCurveTo(8196.5576,-54.900973,8194.0311,-48.863455,8194.0311,-46.757228);
dessin.lineTo(8194.0311,-18.113711999999996);
dessin.lineTo(8201.267600000001,-24.464536999999996);
dessin.lineTo(8201.332600000002,-24.507736999999995);
dessin.lineTo(8201.635000000002,-24.874960999999995);
dessin.lineTo(8201.635000000002,-46.75722499999999);
dessin.bezierCurveTo(8201.635000000002,-48.86345199999999,8199.108600000001,-54.90096999999999,8197.833100000002,-54.90096999999999);
dessin.closePath();
dessin.moveTo(8194.0311,1.6300091000000023);
dessin.lineTo(8194.0311,4.719015200000003);
dessin.lineTo(8194.0101,4.719015200000003);
dessin.lineTo(8191.6771,11.069840000000003);
dessin.lineTo(8194.0317,11.069840000000003);
dessin.lineTo(8194.0317,13.921230000000003);
dessin.lineTo(8201.6354,13.921230000000003);
dessin.lineTo(8201.6354,11.069840000000003);
dessin.lineTo(8203.99,11.069840000000003);
dessin.lineTo(8201.657,4.719015200000003);
dessin.lineTo(8201.635999999999,4.719015200000003);
dessin.lineTo(8201.635999999999,1.6300091000000028);
dessin.lineTo(8194.032299999999,1.6300091000000028);
dessin.closePath();
dessin.fill("nonzero");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="#5f5f5f";
dessin.fillStyle="rgba(95, 95, 95, 1)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.lineWidth=0.83577561;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(8227.8158,-54.900973);
dessin.bezierCurveTo(8226.5404,-54.900973,8224.0139,-48.863455,8224.0139,-46.757228);
dessin.lineTo(8224.0139,-24.874964);
dessin.lineTo(8224.3164,-24.50774);
dessin.lineTo(8224.3814,-24.46454);
dessin.lineTo(8231.6178,-18.113715);
dessin.lineTo(8231.6178,-46.757231000000004);
dessin.bezierCurveTo(8231.6178,-48.863458,8229.0915,-54.900976,8227.816,-54.900976);
dessin.closePath();
dessin.moveTo(8224.0139,1.6300091000000023);
dessin.lineTo(8224.0139,4.719015200000003);
dessin.lineTo(8223.9929,4.719015200000003);
dessin.lineTo(8221.659899999999,11.069840000000003);
dessin.lineTo(8224.0145,11.069840000000003);
dessin.lineTo(8224.0145,13.921230000000003);
dessin.lineTo(8231.618199999999,13.921230000000003);
dessin.lineTo(8231.618199999999,11.069840000000003);
dessin.lineTo(8233.9728,11.069840000000003);
dessin.lineTo(8231.639799999999,4.719015200000003);
dessin.lineTo(8231.618799999998,4.719015200000003);
dessin.lineTo(8231.618799999998,1.6300091000000028);
dessin.lineTo(8224.015099999999,1.6300091000000028);
dessin.closePath();
dessin.fill("nonzero");
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="#5f5f5f";
dessin.fillStyle="rgba(95, 95, 95, 1)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.lineWidth=3.74297166;
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(8212.6516,-49.262996);
dessin.bezierCurveTo(8210.7195,-48.863981,8207.2081,-42.426978,8207.2081,-39.412737);
dessin.lineTo(8207.2081,-5.023235900000003);
dessin.lineTo(8190.6613,-5.023235900000003);
dessin.lineTo(8190.6613,0.07470505999999677);
dessin.lineTo(8207.5537,0.07470505999999677);
dessin.lineTo(8206.236,1.4139940999999967);
dessin.lineTo(8206.236,5.280652799999997);
dessin.lineTo(8219.412900000001,5.280652799999997);
dessin.lineTo(8219.412900000001,1.413994099999997);
dessin.lineTo(8218.095200000002,0.07470505999999699);
dessin.lineTo(8234.987500000001,0.07470505999999699);
dessin.lineTo(8234.987500000001,-5.023235900000003);
dessin.lineTo(8218.4408,-5.023235900000003);
dessin.lineTo(8218.4408,-39.412737);
dessin.bezierCurveTo(8218.4408,-42.524209,8214.7088,-49.262996,8212.8244,-49.262996);
dessin.bezierCurveTo(8212.7654,-49.262996,8212.714,-49.275856000000005,8212.6516,-49.262996);
dessin.closePath();
dessin.moveTo(8205.717499999999,-27.078312);
dessin.lineTo(8202.498899999999,-23.16845);
dessin.lineTo(8190.661299999999,-12.799757);
dessin.lineTo(8190.661299999999,-7.3561929);
dessin.lineTo(8205.760699999999,-7.3561929);
dessin.bezierCurveTo(8205.732699999999,-7.4691839,8205.7177,-7.5854509,8205.7177,-7.7018159);
dessin.lineTo(8205.7177,-27.078312);
dessin.closePath();
dessin.moveTo(8219.931299999998,-27.078312);
dessin.lineTo(8219.931299999998,-7.7018159);
dessin.bezierCurveTo(8219.931299999998,-7.5854509,8219.914299999999,-7.4691839,8219.888299999999,-7.3561929);
dessin.lineTo(8234.987699999998,-7.3561929);
dessin.lineTo(8234.987699999998,-12.799757);
dessin.lineTo(8223.150099999997,-23.16845);
dessin.lineTo(8219.931499999997,-27.078312);
dessin.closePath();
dessin.fill("nonzero");
dessin.stroke();
dessin.restore();
dessin.restore();
dessin.restore();

	}
}

Fusee.prototype = Object.create(Artefact.prototype);
Fusee.prototype.constructor = Fusee;