$('#nuevoUsuario').click(
    function(){
        var nombre=$('#nombre').val();
        var identificacion = $('#identificacion').val();
        $('#usuarios tr:last').after('<tr><td>'+nombre+'</td><td>'+ identificacion+'</td></tr>');
         $('#exampleModal').find('form')[0].reset();
         $('#exampleModal').modal('toggle');
       
        
        
    }
    
);