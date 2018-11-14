var Chaise = function(terrain)
{
	Vehicule.call(this, terrain);
	var instanceChaise = this;
		
	this.afficher = function(dessin)
	{
dessin.save();
dessin.translate(instanceChaise.xPixel, instanceChaise.yPixel);
dessin.scale(0.7,0.7);

dessin.translate(-10, 0);
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.miterLimit=4;
dessin.font="normal normal normal normal 15px / 21.4286px ''";
dessin.font="   15px ";
dessin.scale(0.16666666666666666,0.16666666666666666);
dessin.save();
dessin.restore();
dessin.save();
dessin.restore();
dessin.save();
dessin.fillStyle="#00ffff";
dessin.font="   15px ";
dessin.transform(0.9266,0,0,0.9266,-1.066,60.34);
dessin.save();
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(308.9,445.7);
dessin.bezierCurveTo(334.4,436.7,342.3,408.6,353.8,385.5);
dessin.bezierCurveTo(367.2,371.4,378.9,403.9,405.1,401);
dessin.bezierCurveTo(423.2,398.8,451.9,368.4,440.8,348.5);
dessin.bezierCurveTo(416.2,326.9,398.6,354.7,383.3,336.8);
dessin.bezierCurveTo(380.9,317.5,434.2,303.6,421.8,289.5);
dessin.bezierCurveTo(398.9,272.5,356.6,277,315.9,261.4);
dessin.bezierCurveTo(297.7,240.8,357,249.3,343.9,229.3);
dessin.bezierCurveTo(338.6,221.3,303.2,201.7,263,210.1);
dessin.bezierCurveTo(237.3,218.7,267.6,244.8,227.2,242.1);
dessin.bezierCurveTo(199.6,238.7,152.8,220.7,126.1,229.3);
dessin.bezierCurveTo(105.4,243.5,95.09,263.3,93.4,270.2);
dessin.bezierCurveTo(89.19,291.9,139.1,277.3,146.5,283);
dessin.bezierCurveTo(167.9,300.8,122,322.7,109,315.3);
dessin.bezierCurveTo(103.8,304.9,91.2,299.4,73.91,303.1);
dessin.bezierCurveTo(56.34,304.1,26.88,356.5,35.66,370.2);
dessin.bezierCurveTo(50.38,387.4,130.1,409.1,149.9,406.6);
dessin.bezierCurveTo(175.8,407.3,161.6,395.9,163.3,381.4);
dessin.bezierCurveTo(167.4,363.1,259.5,389.2,239.8,401.7);
dessin.bezierCurveTo(213.6,406.6,206.3,415.6,216,424.8);
dessin.bezierCurveTo(233.5,439.5,294.2,452.7,308.9,445.7);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.font="   15px ";
dessin.translate(0.91,-4.551);
dessin.save();
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(308.9,445.7);
dessin.bezierCurveTo(334.4,436.7,342.3,408.6,353.8,385.5);
dessin.bezierCurveTo(367.2,371.4,378.9,403.9,405.1,401);
dessin.bezierCurveTo(423.2,398.8,451.9,368.4,440.8,348.5);
dessin.bezierCurveTo(416.2,326.9,398.6,354.7,383.3,336.8);
dessin.bezierCurveTo(380.9,317.5,434.2,303.6,421.8,289.5);
dessin.bezierCurveTo(398.9,272.5,356.6,277,315.9,261.4);
dessin.bezierCurveTo(297.7,240.8,357,249.3,343.9,229.3);
dessin.bezierCurveTo(338.6,221.3,303.2,201.7,263,210.1);
dessin.bezierCurveTo(237.3,218.7,267.6,244.8,227.2,242.1);
dessin.bezierCurveTo(199.6,238.7,152.8,220.7,126.1,229.3);
dessin.bezierCurveTo(105.4,243.5,95.09,263.3,93.4,270.2);
dessin.bezierCurveTo(89.19,291.9,139.1,277.3,146.5,283);
dessin.bezierCurveTo(167.9,300.8,122,322.7,109,315.3);
dessin.bezierCurveTo(103.8,304.9,91.2,299.4,73.91,303.1);
dessin.bezierCurveTo(56.34,304.1,26.88,356.5,35.66,370.2);
dessin.bezierCurveTo(50.38,387.4,130.1,409.1,149.9,406.6);
dessin.bezierCurveTo(175.8,407.3,161.6,395.9,163.3,381.4);
dessin.bezierCurveTo(167.4,363.1,259.5,389.2,239.8,401.7);
dessin.bezierCurveTo(213.6,406.6,206.3,415.6,216,424.8);
dessin.bezierCurveTo(233.5,439.5,294.2,452.7,308.9,445.7);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.restore();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(0, 0, 0, 0.1224)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(308,261.6);
dessin.lineTo(204.4,301.2);
dessin.lineTo(217.4,302.1);
dessin.lineTo(270.6,284.6);
dessin.bezierCurveTo(261.2,297.6,256.8,314.8,263.8,325.4);
dessin.lineTo(130.3,383.1);
dessin.lineTo(143.9,398.9);
dessin.lineTo(278.5,337.9);
dessin.bezierCurveTo(300.6,353.7,333.2,358.8,360,357.1);
dessin.lineTo(356.5,370.7);
dessin.lineTo(293.5,415.9);
dessin.lineTo(309.6,416.3);
dessin.lineTo(366.4,375);
dessin.bezierCurveTo(339.9,365.9,363,353.5,379.8,342.5);
dessin.bezierCurveTo(435.9,308.3,285.8,311.9,287.2,292.9);
dessin.bezierCurveTo(305.6,284.2,339.1,282,308,261.6);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="#a02c2c";
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="#994101";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.transform(-1.68,0,0,1.68,774.6,-784.9);
dessin.save();
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(277.2,714.6);
dessin.lineTo(288.6,716.4);
dessin.bezierCurveTo(293.6,645.7,285.3,605.2,302.9,603.1);
dessin.lineTo(289.3,601);
dessin.bezierCurveTo(273.4,603.8,280.2,648.9,277.2,714.6);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(375.9,703.6);
dessin.lineTo(384.2,694.7);
dessin.bezierCurveTo(388.5,606.2,392.7,594.5,367.9,594.5);
dessin.lineTo(356.8,598.4);
dessin.bezierCurveTo(386.3,599.6,376.7,617.5,375.9,703.6);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(332.1,646.6);
dessin.lineTo(341.8,647.4);
dessin.lineTo(341.8,597.7);
dessin.lineTo(331.8,598.1);
dessin.lineTo(332.1,646.6);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(243.9,662.7);
dessin.lineTo(251.8,656.3);
dessin.lineTo(268.2,579.5);
dessin.lineTo(266.1,571.6);
dessin.bezierCurveTo(257.6,571.8,259.6,585.6,243.9,662.7);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(262.6,572.3);
dessin.lineTo(251.8,502.3);
dessin.lineTo(263.4,500.3);
dessin.lineTo(273,569);
dessin.lineTo(262.6,572.3);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(331.3,560.9);
dessin.lineTo(336.4,496.3);
dessin.lineTo(350,496.8);
dessin.lineTo(344.2,563.2);
dessin.lineTo(331.3,560.9);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(160, 44, 44, 1)";
dessin.strokeStyle="rgba(153, 65, 1, 1)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(244.5,479.1);
dessin.bezierCurveTo(242.3,482.6,243.9,501.1,247.8,504.6);
dessin.bezierCurveTo(252.8,509.1,269.1,504.2,306.3,502.3);
dessin.bezierCurveTo(336.4,500.8,352.9,504.3,357.1,499);
dessin.bezierCurveTo(360,495.5,361.9,476.5,358.6,474.5);
dessin.bezierCurveTo(354.1,471.7,319.8,473.5,301.1,474.1);
dessin.bezierCurveTo(281.4,474.7,246.9,475.3,244.5,479.1);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.restore();
dessin.save();
dessin.fillStyle="#ffaaaa";
dessin.fillStyle="rgba(255, 170, 170, 1)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.font="   15px ";
dessin.transform(-1.68,0,0,1.68,774.6,-784.9);
dessin.save();
dessin.fillStyle="rgba(255, 170, 170, 1)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(374.6,578);
dessin.bezierCurveTo(383.5,580.5,381.6,589.2,381.1,591.8);
dessin.bezierCurveTo(379.1,602.6,310,609.1,290.4,606.1);
dessin.bezierCurveTo(279.4,604.4,261.3,589.7,261.1,581.4);
dessin.bezierCurveTo(257,559.6,287.1,564.6,301,566.4);
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.save();
dessin.fillStyle="rgba(255, 170, 170, 1)";
dessin.strokeStyle="rgba(0,0,0,0)";
dessin.font="   15px ";
dessin.beginPath();
dessin.moveTo(262.5,570.2);
dessin.bezierCurveTo(273,557.8,315.2,555.3,338.6,558.1);
dessin.bezierCurveTo(353,559.8,380.8,576,381.1,583.8);
dessin.bezierCurveTo(381.5,594.8,310,601.1,290.4,598.1);
dessin.bezierCurveTo(277.9,596.2,256.6,577.2,262.5,570.2);
dessin.closePath();
dessin.fill();
dessin.stroke();
dessin.restore();
dessin.restore();
dessin.restore();

	}
}

Chaise.prototype = Object.create(Artefact.prototype);
Chaise.prototype.constructor = Chaise;