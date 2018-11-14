// https://pixabay.com/fr/bouteille-l-eau-cork-verre-brown-306487/
// Auteur : https://pixabay.com/fr/users/Clker-Free-Vector-Images-3736/

var Bouteille = function(terrain)
{
	Artefact.call(this, terrain);
	var instanceBouteille = this;	
	
	this.afficher = function(dessin)
	{
dessin.save();
dessin.translate(instanceBouteille.xPixel, instanceBouteille.yPixel);
dessin.scale(0.3,0.3);

    	
// #path2
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.lineWidth = 2.000000;
	dessin.lineCap = 'round';
	dessin.fillStyle = 'rgb(127, 0, 0)';
	dessin.moveTo(168.649300, 25.976810);
	dessin.bezierCurveTo(163.676000, 29.275610, 157.330300, 31.993010, 153.907300, 33.707710);
	dessin.bezierCurveTo(150.484200, 35.422510, 149.866300, 35.471710, 148.178600, 36.311310);
	dessin.bezierCurveTo(145.853600, 34.281910, 142.969000, 31.132110, 141.904900, 28.208010);
	dessin.bezierCurveTo(141.495110, 25.750410, 141.614930, 20.961910, 140.777000, 18.678210);
	dessin.bezierCurveTo(140.781000, 18.671210, 140.820600, 18.685210, 140.824700, 18.678210);
	dessin.bezierCurveTo(142.382400, 17.203610, 143.522000, 16.802910, 146.983500, 15.526510);
	dessin.bezierCurveTo(150.475400, 14.239010, 154.335100, 10.077010, 159.516500, 7.133510);
	dessin.bezierCurveTo(164.728100, 4.172710, 167.241000, 3.316310, 170.632500, 0.015410);
	dessin.bezierCurveTo(174.625900, -0.296630, 177.757700, 4.197110, 179.804000, 7.350410);
	dessin.bezierCurveTo(181.406400, 10.305710, 183.170800, 15.957010, 183.345300, 18.744410);
	dessin.bezierCurveTo(178.748200, 21.629410, 173.689600, 22.633310, 168.649300, 25.976610);
	dessin.fill();
	
// #path4
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.lineWidth = 2.000000;
	dessin.lineCap = 'round';
	dessin.moveTo(169.649300, 26.316810);
	dessin.bezierCurveTo(164.676000, 29.615610, 158.330300, 32.333010, 154.907300, 34.047710);
	dessin.bezierCurveTo(151.484200, 35.762510, 150.866300, 35.811710, 149.178600, 36.651310);
	dessin.bezierCurveTo(146.853600, 34.621910, 143.969000, 31.472110, 142.904900, 28.548010);
	dessin.bezierCurveTo(142.495110, 26.090410, 142.614930, 21.301910, 141.777000, 19.018210);
	dessin.bezierCurveTo(141.781000, 19.011210, 141.820600, 19.025210, 141.824700, 19.018210);
	dessin.bezierCurveTo(143.382400, 17.543610, 144.522000, 17.142910, 147.983500, 15.866510);
	dessin.bezierCurveTo(151.475400, 14.579010, 155.335100, 10.417010, 160.516500, 7.473510);
	dessin.bezierCurveTo(165.728100, 4.512710, 168.241000, 3.656310, 171.632500, 0.355410);
	dessin.bezierCurveTo(175.625900, 0.043370, 178.757700, 4.537110, 180.804000, 7.690410);
	dessin.bezierCurveTo(182.406400, 10.645710, 184.170800, 16.297010, 184.345300, 19.084410);
	dessin.bezierCurveTo(179.748200, 21.969410, 174.689600, 22.973310, 169.649300, 26.316610);
	dessin.moveTo(179.746300, 8.460810);
	dessin.bezierCurveTo(178.731300, 5.425710, 175.840800, 1.924310, 172.685500, 1.671910);
	dessin.bezierCurveTo(172.461790, 3.246310, 173.560060, 9.675310, 175.216300, 12.275910);
	dessin.bezierCurveTo(176.845200, 14.833110, 179.725800, 16.286410, 182.302700, 16.981710);
	dessin.bezierCurveTo(182.603810, 14.226810, 180.761300, 11.496310, 179.746300, 8.461210);
	dessin.moveTo(173.819900, 12.853810);
	dessin.bezierCurveTo(172.723400, 10.036210, 171.411100, 6.945010, 170.975900, 3.962310);
	dessin.bezierCurveTo(166.700500, 5.768710, 165.439600, 7.799910, 161.043600, 9.809010);
	dessin.bezierCurveTo(156.683400, 11.801810, 151.708900, 16.119410, 148.656600, 17.574110);
	dessin.bezierCurveTo(145.604400, 19.028710, 144.701300, 19.000510, 143.071000, 19.843810);
	dessin.bezierCurveTo(143.734120, 22.131910, 143.697460, 25.599710, 144.254100, 27.920510);
	dessin.bezierCurveTo(145.169660, 30.763010, 147.431700, 32.589410, 149.347300, 34.870410);
	dessin.bezierCurveTo(151.356400, 34.461520, 150.889000, 33.997960, 153.992300, 32.554410);
	dessin.bezierCurveTo(157.133700, 31.093210, 164.760300, 26.863110, 169.098300, 24.485610);
	dessin.bezierCurveTo(173.367900, 22.146010, 177.077300, 20.975410, 181.562300, 18.759610);
	dessin.bezierCurveTo(179.209800, 17.408610, 175.227600, 15.245510, 173.819700, 12.853710);
	
// #path6
	dessin.beginPath();
	dessin.globalAlpha = 0.4;
	dessin.lineJoin = 'bevel';
	dessin.lineWidth = 2.000000;
	dessin.lineCap = 'round';
	dessin.moveTo(26.540300, 108.151810);
	dessin.bezierCurveTo(29.919300, 100.165110, 30.871100, 92.510810, 29.944900, 84.278810);
	dessin.bezierCurveTo(29.369630, 75.942410, 27.030500, 67.957810, 23.713000, 60.288810);
	dessin.bezierCurveTo(19.570000, 53.059210, 12.831000, 46.632810, 6.398000, 41.330810);
	dessin.lineTo(6.486100, 41.878710);
	dessin.bezierCurveTo(12.936400, 46.862410, 18.125100, 53.731710, 22.146100, 60.809710);
	dessin.bezierCurveTo(25.988500, 68.280910, 26.747200, 76.509710, 27.844900, 84.663710);
	dessin.bezierCurveTo(29.699300, 92.939210, 28.709720, 100.067710, 26.487900, 108.134710);
	dessin.lineTo(26.539600, 108.151910);
	
// #path8
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.lineWidth = 3.051800;
	dessin.lineCap = 'round';
	dessin.fillStyle = 'rgb(0, 255, 255)';
	dessin.moveTo(26.533352, 108.151840);
	dessin.bezierCurveTo(29.912458, 100.165120, 30.864161, 92.511362, 29.937940, 84.279131);
	dessin.bezierCurveTo(29.362676, 75.942835, 27.023471, 67.958105, 23.706012, 60.288932);
	dessin.bezierCurveTo(19.562888, 53.059217, 12.823903, 46.633042, 6.391625, 41.331150);
	dessin.lineTo(6.479669, 41.878948);
	dessin.bezierCurveTo(3.656296, 47.815462, 1.603808, 51.254688, 1.305952, 61.698863);
	dessin.bezierCurveTo(-0.504833, 71.837858, 1.460709, 88.324292, 8.275043, 96.541264);
	dessin.bezierCurveTo(11.780951, 103.482890, 20.763772, 106.418870, 26.482082, 108.134440);
	dessin.lineTo(26.533812, 108.151640);
	dessin.fill();
	
// #path10
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.lineWidth = 3.051800;
	dessin.lineCap = 'round';
	dessin.fillStyle = 'rgb(0, 255, 255)';
	dessin.moveTo(167.691310, 28.486124);
	dessin.bezierCurveTo(163.374230, 32.516026, 157.814460, 35.814259, 152.524630, 38.638394);
	dessin.bezierCurveTo(152.378670, 37.648192, 151.449570, 37.337595, 150.712620, 36.826388);
	dessin.bezierCurveTo(146.836830, 38.337441, 147.490830, 39.125156, 139.840580, 42.882380);
	dessin.bezierCurveTo(132.086420, 46.690569, 130.980440, 47.054801, 127.851590, 51.613732);
	dessin.bezierCurveTo(124.401370, 56.641115, 123.109700, 63.554358, 120.528490, 68.917438);
	dessin.bezierCurveTo(115.606390, 79.145088, 106.882520, 81.512064, 94.301318, 85.464298);
	dessin.bezierCurveTo(81.720882, 89.416074, 61.752345, 95.891078, 50.622430, 100.151090);
	dessin.bezierCurveTo(39.493126, 104.411090, 34.766803, 105.999550, 26.923677, 109.115750);
	dessin.bezierCurveTo(19.948025, 108.977090, 13.129236, 104.479910, 8.660180, 98.815923);
	dessin.bezierCurveTo(4.191429, 93.151935, 0.299774, 86.641682, 0.053036, 77.134410);
	dessin.bezierCurveTo(-0.193626, 67.626527, 0.209456, 50.187016, 5.914323, 40.033677);
	dessin.bezierCurveTo(16.989610, 37.623060, 26.863404, 31.950375, 37.482142, 28.378853);
	dessin.bezierCurveTo(46.847811, 25.228480, 55.753269, 21.484226, 65.844046, 17.958024);
	dessin.bezierCurveTo(77.070397, 14.035393, 89.535169, 7.892120, 99.404690, 8.263829);
	dessin.bezierCurveTo(109.273910, 8.635523, 116.804530, 15.520246, 121.435630, 18.659023);
	dessin.bezierCurveTo(126.065830, 21.797799, 126.756750, 19.424658, 130.829380, 18.098926);
	dessin.bezierCurveTo(134.845550, 16.791580, 138.269970, 15.516798, 142.188180, 14.321865);
	dessin.bezierCurveTo(142.160280, 12.338043, 142.058660, 11.178206, 141.558330, 9.217425);
	dessin.bezierCurveTo(146.565120, 7.420220, 150.871820, 5.044393, 156.101990, 4.258250);
	dessin.bezierCurveTo(156.121090, 4.251690, 156.130590, 4.217158, 156.149690, 4.210566);
	dessin.bezierCurveTo(157.424420, 5.545042, 158.535740, 6.442042, 159.816880, 7.871810);
	dessin.lineTo(155.440910, 9.479041);
	dessin.bezierCurveTo(156.220430, 13.577913, 157.895770, 16.258156, 159.712510, 19.973570);
	dessin.bezierCurveTo(159.877260, 23.341842, 169.043540, 29.644114, 163.229860, 25.959981);
	dessin.lineTo(166.735620, 24.810368);
	dessin.bezierCurveTo(167.462850, 25.824969, 167.604110, 27.327340, 167.692310, 28.486566);
	dessin.fill();
	
// #path14
	dessin.beginPath();
	dessin.globalAlpha = 0.4;
	dessin.lineJoin = 'bevel';
	dessin.lineCap = 'round';
	dessin.lineWidth = 2.000000;
	dessin.fillStyle = 'rgb(129, 141, 156)';
	dessin.moveTo(84.250300, 87.583810);
	dessin.bezierCurveTo(73.121300, 91.843810, 34.766300, 105.999810, 26.923300, 109.116810);
	dessin.bezierCurveTo(19.947700, 108.978150, 13.129300, 104.481010, 8.660300, 98.816810);
	dessin.bezierCurveTo(4.191700, 93.152810, 0.299900, 86.642810, 0.053200, 77.134810);
	dessin.bezierCurveTo(-0.193490, 67.627010, 0.209590, 50.186810, 5.914500, 40.033810);
	dessin.bezierCurveTo(16.989500, 37.623310, 26.864500, 31.950410, 37.481500, 28.378810);
	dessin.bezierCurveTo(46.847100, 25.228410, 61.526500, 19.785810, 71.618500, 16.259810);
	dessin.bezierCurveTo(62.798600, 59.040810, 72.396480, 60.617810, 84.250500, 87.583810);
	dessin.fill();
	
// #path16
	dessin.beginPath();
	dessin.lineJoin = 'bevel';
	dessin.lineWidth = 2.000000;
	dessin.lineCap = 'round';
	dessin.moveTo(167.692300, 28.486810);
	dessin.bezierCurveTo(163.375300, 32.516710, 157.815400, 35.815010, 152.525300, 38.638810);
	dessin.bezierCurveTo(152.379330, 37.648610, 151.450200, 37.338010, 150.713300, 36.826810);
	dessin.bezierCurveTo(146.837500, 38.337810, 147.491500, 39.125610, 139.841300, 42.882710);
	dessin.bezierCurveTo(132.087200, 46.690810, 130.981100, 47.055010, 127.852300, 51.614110);
	dessin.bezierCurveTo(124.402100, 56.641510, 123.110400, 63.555110, 120.529100, 68.918110);
	dessin.bezierCurveTo(115.607000, 79.146110, 106.883100, 81.513110, 94.303100, 85.464110);
	dessin.bezierCurveTo(81.723100, 89.415910, 61.753100, 95.891110, 50.624100, 100.151110);
	dessin.bezierCurveTo(39.495100, 104.411110, 34.768100, 105.999510, 26.925100, 109.115710);
	dessin.bezierCurveTo(19.949500, 108.977050, 13.131100, 104.479910, 8.662100, 98.815710);
	dessin.bezierCurveTo(4.193500, 93.151710, 0.301700, 86.641710, 0.055000, 77.133710);
	dessin.bezierCurveTo(-0.191690, 67.625910, 0.211390, 50.185710, 5.916300, 40.032710);
	dessin.bezierCurveTo(16.991300, 37.622210, 26.866300, 31.949310, 37.483300, 28.377710);
	dessin.bezierCurveTo(46.848900, 25.227310, 55.753300, 21.483110, 65.845300, 17.956710);
	dessin.bezierCurveTo(77.071300, 14.034110, 89.536300, 7.890710, 99.405300, 8.262510);
	dessin.bezierCurveTo(109.274500, 8.634210, 116.805300, 15.518910, 121.435300, 18.657510);
	dessin.bezierCurveTo(126.065500, 21.796310, 126.756400, 19.423130, 130.829100, 18.097410);
	dessin.bezierCurveTo(134.845300, 16.790110, 138.269600, 15.515310, 142.188100, 14.320410);
	dessin.bezierCurveTo(142.160100, 12.336610, 142.058570, 11.176810, 141.558240, 9.216010);
	dessin.bezierCurveTo(146.565040, 7.418810, 150.871740, 5.042910, 156.102240, 4.256810);
	dessin.bezierCurveTo(156.121240, 4.249810, 156.130840, 4.215710, 156.149940, 4.209110);
	dessin.bezierCurveTo(157.424640, 5.543610, 158.535940, 6.440510, 159.817140, 7.870310);
	dessin.lineTo(159.046640, 8.636310);
	dessin.bezierCurveTo(157.942340, 7.167610, 157.379840, 7.225710, 156.149940, 5.863110);
	dessin.bezierCurveTo(155.922310, 5.556540, 155.499590, 5.117340, 155.196250, 5.162840);
	dessin.bezierCurveTo(155.363660, 10.233640, 157.234550, 15.230840, 159.712750, 19.971840);
	dessin.bezierCurveTo(162.270150, 24.864040, 163.419350, 24.846440, 166.440750, 27.615940);
	dessin.bezierCurveTo(166.548400, 26.499740, 166.533950, 25.735240, 166.114480, 24.756340);
	dessin.lineTo(166.735880, 24.808540);
	dessin.bezierCurveTo(167.463130, 25.823140, 167.604400, 27.325540, 167.692590, 28.484740);
	dessin.moveTo(165.047100, 28.965110);
	dessin.bezierCurveTo(162.255200, 26.180310, 160.523400, 25.741910, 158.071700, 20.742810);
	dessin.bezierCurveTo(155.581700, 15.665710, 155.165800, 11.041710, 154.380900, 6.177810);
	dessin.bezierCurveTo(150.134200, 7.529910, 147.285300, 7.361510, 143.192900, 10.464910);
	dessin.bezierCurveTo(143.522400, 16.343210, 144.366100, 21.520910, 146.524800, 27.000910);
	dessin.bezierCurveTo(148.746000, 30.598310, 149.984500, 34.192010, 153.485200, 36.618110);
	dessin.bezierCurveTo(158.284700, 34.156910, 160.842600, 32.299110, 165.047200, 28.965010);
	dessin.lineTo(165.047190, 28.965010);
	dessin.moveTo(150.206100, 35.886510);
	dessin.bezierCurveTo(149.450460, 32.673310, 147.094000, 30.398410, 145.563500, 27.433110);
	dessin.bezierCurveTo(144.047300, 23.726210, 142.766800, 19.869510, 142.607100, 15.846110);
	dessin.bezierCurveTo(138.614700, 17.015710, 134.519300, 18.482210, 130.924100, 19.708510);
	dessin.bezierCurveTo(127.388100, 20.914710, 124.505900, 22.439310, 119.790100, 20.260790);
	dessin.bezierCurveTo(115.003200, 18.049390, 108.730100, 9.487790, 99.128100, 10.053790);
	dessin.bezierCurveTo(89.526800, 10.620430, 78.493100, 15.349990, 67.481100, 19.338690);
	dessin.bezierCurveTo(58.170500, 22.711090, 47.063100, 26.820090, 37.806100, 30.301690);
	dessin.bezierCurveTo(27.141100, 34.312890, 17.174100, 38.836190, 6.277100, 42.262690);
	dessin.bezierCurveTo(3.004200, 53.122690, 0.295700, 67.420690, 1.365600, 76.881690);
	dessin.bezierCurveTo(2.435600, 86.342690, 5.643900, 92.035690, 10.034700, 98.010690);
	dessin.bezierCurveTo(14.425500, 103.985790, 19.593500, 105.685590, 26.525700, 107.057990);
	dessin.bezierCurveTo(34.386500, 104.048390, 39.051700, 102.522490, 50.084700, 98.014790);
	dessin.bezierCurveTo(61.117700, 93.507090, 80.912700, 88.123990, 93.565700, 83.931790);
	dessin.bezierCurveTo(106.218700, 79.739490, 113.946700, 78.262490, 118.517700, 68.121790);
	dessin.bezierCurveTo(123.214800, 57.699790, 123.100200, 57.257790, 126.218000, 51.486790);
	dessin.bezierCurveTo(129.335800, 45.715590, 134.022400, 43.355390, 138.580000, 41.384790);
	dessin.bezierCurveTo(143.137100, 39.413790, 146.653700, 37.729590, 150.206000, 35.887890);
	
// #path18
	dessin.beginPath();
	dessin.globalAlpha = 0.6;
	dessin.lineJoin = 'bevel';
	dessin.lineWidth = 2.000000;
	dessin.lineCap = 'round';
	dessin.fillStyle = 'rgb(0, 127, 255)';
	dessin.moveTo(87.150300, 64.102810);
	dessin.bezierCurveTo(87.264480, 76.003810, 85.445500, 85.425810, 84.241500, 87.563810);
	dessin.bezierCurveTo(72.387500, 60.597810, 62.785500, 59.056810, 71.605500, 16.275810);
	dessin.bezierCurveTo(83.649500, 29.449810, 87.003500, 48.801810, 87.150500, 64.102810);
	dessin.moveTo(84.241500, 87.563810);
	dessin.bezierCurveTo(72.172500, 93.371110, 61.729500, 97.167910, 52.769500, 99.341810);
	dessin.bezierCurveTo(65.233500, 94.691610, 78.415500, 89.793610, 84.241500, 87.563810);
	dessin.fill();
	
// #path20
	dessin.beginPath();
	dessin.globalAlpha = 0.4;
	dessin.lineJoin = 'bevel';
	dessin.lineCap = 'round';
	dessin.lineWidth = 2.000000;
	dessin.fillStyle = 'rgb(48, 48, 48)';
	dessin.moveTo(26.540300, 108.151810);
	dessin.bezierCurveTo(29.919300, 100.165110, 30.871100, 92.510810, 29.944900, 84.278810);
	dessin.bezierCurveTo(29.369630, 75.942410, 27.030500, 67.957810, 23.713000, 60.288810);
	dessin.bezierCurveTo(19.570000, 53.059210, 12.831000, 46.632810, 6.398000, 41.330810);
	dessin.lineTo(6.486100, 41.878710);
	dessin.bezierCurveTo(3.662700, 47.815210, 1.610200, 51.254410, 1.312400, 61.698710);
	dessin.bezierCurveTo(-0.498400, 71.837710, 1.467200, 88.323710, 8.281500, 96.541710);
	dessin.bezierCurveTo(11.787300, 103.483310, 20.770500, 106.419310, 26.488500, 108.134710);
	dessin.lineTo(26.540200, 108.151910);
	dessin.fill();

   

dessin.restore();

	}
}

Bouteille.prototype = Object.create(Artefact.prototype);
Bouteille.prototype.constructor = Bouteille;
