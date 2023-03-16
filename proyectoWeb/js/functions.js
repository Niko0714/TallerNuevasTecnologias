$('#nuevoUsuario').click(
    function(){
        var nombre=$('#nombre').val();
        var identificacion = $('#identificacion').val();
        $('#usuarios tr:last').after('<tr><td>'+nombre+'</td><td>'+ identificacion+'</td></tr>');
         $('#exampleModal').find('form')[0].reset();
         $('#exampleModal').modal('toggle');
       
        
        
    }
    
);
$('#nuevoInsumo').click(
    function(){
        var insumo=$('#insumo').val();
        var descripcion = $('#descripcion').val();
        var cantidad = $('#cantidad').val();
        $('#insumos tr:last').after('<tr><td>'+insumo+'</td><td>'+ descripcion+'</td><td>'+ cantidad+'</td></tr>');
         $('#exampleModalinsumos').find('form')[0].reset();
         $('#exampleModalinsumos').modal('toggle');
       
        
        
    }
    
);