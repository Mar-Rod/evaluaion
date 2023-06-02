function elementoMasComun(datos) {
    if(!Array.isArray(datos)){
        throw TypeError('debe de ser un arreglo');
    }
    if(!datos.length){
        return null;
    }
    let duplicados =[];

    for(let i = 0; i<datos.length; i++){
        let dato=datos[i];

        if(!duplicados.find(d=>d==dato) && datos.slice(i+1).find(d => d ==dato)){
            duplicados.push(dato);
        }
    }
    
    return duplicados;
  }
  
  let numeros= [1,1,1,2,3,4,5];
  