window.onload = function()
{
	inicio();
}

function inicio()
{
	
	function movimiento(path, obj, vel)
    {
       
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
	var crea_satelites = function(objeto, Satelite)
    {
        var tamanoSatelite = Satelite.tamano;
      
        if(tamReal)
        {
         
            tamanoSatelite = Math.round(elSol.tamano * (Satelite.porcentaje / 100));
            
        }
        objeto.style.width = tamanoSatelite + "px";
        objeto.style.height = tamanoSatelite + "px";
        objeto.style.backgroundImage = "url('lunas/"+Satelite.foto+"')";
        objeto.style.backgroundSize = tamanoSatelite + "px " + tamanoSatelite + "px";
        var margen = (Math.round(tamanoSatelite / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
       
    }
	var _satelites = [
            
                {nombre: "Calisto", 
                 foto: "calisto.gif",
                 porcentaje: 9.3,
                 tamano: 30
                },
                {nombre: "Europa", 
                 foto: "europa.gif",
                 porcentaje: 8.7,
                 tamano: 45
                },
                {nombre: "Ganimedes", 
                 foto: "ganimedes.gif",
                 porcentaje: 3.7,
                 tamano: 35
                },
                {nombre: "Io", 
                 foto: "io.gif",
                 porcentaje: 10.3,
                 tamano: 50
                }];
    var objSol = nom_div('jupiter_svg');
    var elSol = {
        tamano: objSol.height.baseVal.value, 
        x : objSol.x.baseVal.value, 
        y : objSol.y.baseVal.value
    };
    var objeto = "";
    var ruta = "";
    var velInicia = 9000;
    for(var i = 1; i <= _satelites.length; i++)
    {
    	objeto = nom_div("obj_" + i);
    	ruta = nom_div("ruta_" + i);
    	crea_satelites(objeto, _satelites[i - 1]);
    	movimiento(ruta, objeto, velInicia);
    	velInicia += 8000;
    }
    
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}
