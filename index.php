<!doctype html>
<html>
    <head>
    <link rel="shortcut icon" href="#" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->    
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- FontAwesom CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">        
    <!--Sweet Alert 2 -->
    <!-- <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">   -->     
    <!--CSS custom -->  
    <link rel="stylesheet" href="main.css">  
    </head>
    <body >
    <header>
        <h2 class="text-center text-dark"><span class="badge badge-primary">Colección MacroInvertebrados UNISANGIL</span></h2>
    </header>    
    
     <div id="macroInvertebrados">               
        <div class="container">                
            <div class="row">       
                <div class="col">        
                    <button @click="btnAlta" class="btn btn-success" title="Nuevo"><i class="fas fa-plus-circle fa-2x"></i></button>
                </div>
              <div class="col text-right">                        
                    <h5>Registros Totales: <span class="badge badge-success">{{totalCodigoInstitucion}}</span></h5>
                </div> 
            </div>  
                          
            <div class="row mt-5">
                <div class="col-lg-12">   
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Buscar...">                 
                    <table class="table table-striped" id="miTabla">
                        <thead>
                            <tr class="bg-primary text-light">
                                <th>Acciones</th>    
                                <th>ID</th>                                                                
                                <th>Identificacion</th>
                                <th>BaseRegistro</th>
                                <th>CodigoInstitucion</th>                                
                               <!-- <th>CodigoColeccion</th>
                                <th>NumeroCatalogo</th>
                                <th>Tipo</th>
                                <th>IdInstitucion</th>
                                <th>IdColeccion</th>
                                <th>IdConjuntoDatos</th>
                                <th>NombreConjuntoDatos</th>
                                <th>NumeroRegistro</th>
                                <th>Registrador</th>
                                <th>_CantidadOrganismo</th> 
                                <th>TipoCantidad</th>
                                <th>Sexo</th>
                                <th>EstadoExistencia</th>
                                <th>Preparativos</th>
                                <th>Disposicion</th>
                                <th>ProtocoloMuestreo</th>
                                <th>Hora</th>
                                <th>FechaEvento</th>
                                <th>Habitat</th>
                                <th>NotaEvento</th>
                                <th>Continente</th>
                                <th>Localizacion</th>
                                <th>Ubicacion</th>
                                <th>ElevacionMinima</th>
                                <th>ElevacionMaxima</th>
                                <th>Latitud</th>
                                <th>Longitud</th>
                                <th>SistemaCoordenadas</th>
                                <th>SRSliteral</th>
                                <th>LatitudDecimal</th>
                                <th>LongitudDecimal</th>
                                <th>DatoGeodesico</th>
                                <th>ProtocoloGeorreferencia</th>
                                <th>Identificador</th>
                                <th>FechaIdentificado</th>
                                <th>IdentificacionCalificador</th>
                                <th>NombreCientifico</th>
                                <th>Reino</th>
                                <th>Filo</th>
                                <th>Clase</th>
                                <th>Orden</th>
                                <th>Familia</th>
                                <th>_RangoTaxon</th>
                                <th>EstadoTaxonomico</th>  
                             <th>Imagen</th>  --> 
                                
                            </tr>    
                        </thead>
                        <tbody>
                            <tr v-for="(invertebrado,indice) of invertebrados"> 
                                <td>
                                    <div class="btn-group" role="group">
                                        <button class="btn btn-secondary" title="Editar" @click="btnEditar(invertebrado.id, invertebrado.Identificacion, invertebrado.BaseRegistro, invertebrado.CodigoInstitucion, invertebrado.Imagen, invertebrado.CodigoColeccion, invertebrado.NumeroCatalogo, invertebrado.Tipo, invertebrado.IdInstitucion, invertebrado.IdColeccion, invertebrado.IdConjuntoDatos, invertebrado.NombreConjuntoDatos, invertebrado.NumeroRegistro, invertebrado.Registrador, invertebrado._CantidadOrganismo, invertebrado.TipoCantidad, invertebrado.Sexo, invertebrado.EstadoExistencia, invertebrado.Preparativos, invertebrado.Disposicion, invertebrado.ProtocoloMuestreo, invertebrado.Hora, invertebrado.FechaEvento, invertebrado.Habitat, invertebrado.NotaEvento, invertebrado.Continente, invertebrado.Localizacion, invertebrado.Ubicacion, invertebrado.ElevacionMinima, invertebrado.ElevacionMaxima, invertebrado.Latitud, invertebrado.Longitud, invertebrado.SistemaCoordenadas, invertebrado.SRSliteral, invertebrado.LatitudDecimal, invertebrado.LongitudDecimal, invertebrado.DatoGeodesico, invertebrado.ProtocoloGeorreferencia, invertebrado.Identificador, invertebrado.FechaIdentificado, invertebrado.IdentificacionCalificador, invertebrado.NombreCientifico, invertebrado.Reino, invertebrado.Filo, invertebrado.Clase, invertebrado.Orden, invertebrado.Familia, invertebrado._RangoTaxon, invertebrado.EstadoTaxonomico)"><i class="fas fa-pencil-alt"></i></button>    
                                        <button class="btn btn-danger" title="Eliminar" @click="btnBorrar(invertebrado.id)"><i class="fas fa-trash-alt"></i></button>      
								    </div>
                                </td>                               
                                <td>{{invertebrado.id}}</td>                                
                                <td>{{invertebrado.Identificacion}}</td>
                                <td>{{invertebrado.BaseRegistro}}</td>
                                <td>{{invertebrado.CodigoInstitucion}}</td>
                               <!-- <td>{{invertebrado.Imagen}}</td>
                                <td>{{invertebrado.CodigoColeccion}}</td>
                                <td>{{invertebrado.NumeroCatalogo}}</td>
                                <td>{{invertebrado.Tipo}}</td>
                                <td>{{invertebrado.IdInstitucion}}</td>
                                <td>{{invertebrado.IdColeccion}}</td>
                                <td>{{invertebrado.IdConjuntoDatos}}</td>
                                <td>{{invertebrado.NombreConjuntoDatos}}</td>
                                <td>{{invertebrado.NumeroRegistro}}</td>
                                <td>{{invertebrado.Registrador}}</td>
                                <td>{{invertebrado._CantidadOrganismo}}</td> 
                                <td>{{invertebrado.TipoCantidad}}</td>
                                <td>{{invertebrado.Sexo}}</td>
                                <td>{{invertebrado.EstadoExistencia}}</td>
                                <td>{{invertebrado.Preparativos}}</td>
                                <td>{{invertebrado.Disposicion}}</td>
                                <td>{{invertebrado.ProtocoloMuestreo}}</td>
                                <td>{{invertebrado.Hora}}</td>
                                <td>{{invertebrado.FechaEvento}}</td>
                                <td>{{invertebrado.Habitat}}</td>
                                <td>{{invertebrado.NotaEvento}}</td>
                                <td>{{invertebrado.Continente}}</td>
                                <td>{{invertebrado.Localizacion}}</td>
                                <td>{{invertebrado.Ubicacion}}</td>
                                <td>{{invertebrado.ElevacionMinima}}</td>
                                <td>{{invertebrado.ElevacionMaxima}}</td>
                                <td>{{invertebrado.Latitud}}</td>
                                <td>{{invertebrado.Longitud}}</td>
                                <td>{{invertebrado.SistemaCoordenadas}}</td>
                                <td>{{invertebrado.SRSliteral}}</td>
                                <td>{{invertebrado.LatitudDecimal}}</td>
                                <td>{{invertebrado.LongitudDecimal}}</td>
                                <td>{{invertebrado.DatoGeodesico}}</td>
                                <td>{{invertebrado.ProtocoloGeorreferencia}}</td>
                                <td>{{invertebrado.Identificador}}</td>
                                <td>{{invertebrado.FechaIdentificado}}</td>
                                <td>{{invertebrado.IdentificacionCalificador}}</td>
                                <td>{{invertebrado.NombreCientifico}}</td>
                                <td>{{invertebrado.Reino}}</td>
                                <td>{{invertebrado.Filo}}</td>
                                <td>{{invertebrado.Clase}}</td>
                                <td>{{invertebrado.Orden}}</td>
                                <td>{{invertebrado.Familia}}</td>
                                <td>{{invertebrado._RangoTaxon}}</td>
                                <td>{{invertebrado.EstadoTaxonomico}}</td> -->
                                
                                
                            </tr>    
                        </tbody>
                    </table>                    
                </div>
            </div>
        </div>        
    </div>        
    <!-- jQuery, Popper.js, Bootstrap JS -->
    <script src="jquery/jquery-3.3.1.min.js"></script>
    <script src="popper/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>         
    <!--Vue.JS -->    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>              
    <!--Axios -->      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>    
    <!--Sweet Alert 2 -->        
    <script src="plugins/sweetalert2/sweetalert2.all.min.js"></script>      
    <!--Código custom -->          
    <script src="main.js"></script>  
    
    </body>
</html>