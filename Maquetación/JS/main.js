function asignarEstiloAprendizaje(){
    var sumaV = 0;
    var sumaA = 0;
    var sumaK = 0
    
    for (let index = 1; index <= 15; index++) {
        var tipo = 'visual'+index.toString();
        var radiovalue= document.getElementsByName(tipo);
        //alert("Valor seleccionado: " + radiovalue);   
        for (var i = 0, length = radiovalue.length; i < length; i++)
        {
            if (radiovalue[i].checked)
            {
            // do whatever you want with the checked radio
                sumaV += parseInt(radiovalue[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
            }
        }
    }
    for (let index = 16; index <= 30; index++) {
        var tipo = 'auditiva'+index.toString();
        var radiovalue= document.getElementsByName(tipo);
        //alert("Valor seleccionado: " + radiovalue);   
        for (var i = 0, length = radiovalue.length; i < length; i++)
        {
            if (radiovalue[i].checked)
            {
            // do whatever you want with the checked radio
            sumaA += parseInt(radiovalue[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
            }
        }
    }
    for (let index = 31; index <= 45; index++) {
        var tipo = 'Kinestesica'+index.toString();
        var radiovalue= document.getElementsByName(tipo);
        //alert("Valor seleccionado: " + radiovalue);   
        for (var i = 0, length = radiovalue.length; i < length; i++)
        {
            if (radiovalue[i].checked)
            {
            // do whatever you want with the checked radio
            sumaK += parseInt(radiovalue[i].value);

            // only one radio can be logically checked, don't check the rest
            break;
            }
        }
    }
    var tipoAprendizaje;
    if (sumaV > sumaA) {
        if (sumaV > sumaK) {
            tipoAprendizaje = "Visual";
        }else{
            tipoAprendizaje = "Kinestesico";
        }
    }else if(sumaA > sumaK ){
        tipoAprendizaje = "Auditivo";
    }else{
        tipoAprendizaje = "Kinestesico";
    }
    alert("Felicidades el stilo de aprendizaje resultantes es "  +tipoAprendizaje);
}