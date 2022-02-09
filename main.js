var url = "bd/crud.php";

var macroInvertebrados = new Vue({    
el: "#macroInvertebrados",   
data:{     
      invertebrados:[],          
      Identificacion:"",
      BaseRegistro:"",
      CodigoInstitucion:"",
     /* CodigoColeccion:"",
      NumeroCatalogo:"",
      Tipo:"",
      IdInstitucion:"",
      IdColeccion:"",
      IdConjuntoDatos:"",
      NombreConjuntoDatos:"",
      NumeroRegistro:"",
      Registrador:"",
      _CantidadOrganismo:"",
      TipoCantidad:"",
      Sexo:"",
      EstadoExistencia:"",
      Preparativos:"",
      Disposicion:"",
      ProtocoloMuestreo:"",
      Hora:"",
      FechaEvento:"",
      Habitat:"",
      NotaEvento:"",
      Continente:"",
      Localizacion:"",
      Ubicacion:"",
      ElevacionMinima:"",
      ElevacionMaxima:"",
      Latitud:"",
      Longitud:"",
      SistemaCoordenadas:"",
      SRSliteral:"",
      LatitudDecimal:"",
      LongitudDecimal:"",
      DatoGeodesico:"",
      ProtocoloGeorreferencia:"",
      Identificador:"",
      FechaIdentificado:"",
      IdentificacionCalificador:"",
      NombreCientifico:"",
      Reino:"",
      Filo:"",
      Clase:"",
      Orden:"",
      Familia:"",
      _RangoTaxon:"",
      EstadoTaxonomico:"",
      Imagen:"",*/
      total:0,       
 },    
methods:{  
    //BOTONES        
    btnAlta:async function(){                    
        const {value: formValues} = await Swal.fire({
        title: 'NUEVO',
        html:
        //<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Identificacion<div class="col-sm-7"><input id="Identificacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">BaseRegistro<div class="col-sm-7"><input id="BaseRegistro" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">CodigoInstitucion<div class="col-sm-7"><input id="CodigoInstitucion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">CodigoColeccion<div class="col-sm-7"><input id="CodigoColeccion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NumeroCatalogo<div class="col-sm-7"><input id="NumeroCatalogo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Tipo<div class="col-sm-7"><input id="Tipo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdInstitucion<div class="col-sm-7"><input id="IdInstitucion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdColeccion<div class="col-sm-7"><input id="IdColeccion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdConjuntoDatos<div class="col-sm-7"><input id="IdConjuntoDatos" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NombreConjuntoDatos<div class="col-sm-7"><input id="NombreConjuntoDatos" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NumeroRegistro<div class="col-sm-7"><input id="NumeroRegistro" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Registrador<div class="col-sm-7"><input id="Registrador" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">_CantidadOrganismo<div class="col-sm-7"><input id="_CantidadOrganismo" type="number" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">TipoCantidad<div class="col-sm-7"><input id="TipoCantidad" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Sexo<div class="col-sm-7"><input id="Sexo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">EstadoExistencia<div class="col-sm-7"><input id="EstadoExistencia" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Preparativos<div class="col-sm-7"><input id="Preparativos" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Disposicion<div class="col-sm-7"><input id="Disposicion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ProtocoloMuestreo<div class="col-sm-7"><input id="ProtocoloMuestreo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Hora<div class="col-sm-7"><input id="Hora" type="time" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">FechaEvento<div class="col-sm-7"><input id="FechaEvento" type="datetime-local" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Habitat<div class="col-sm-7"><input id="Habitat" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NotaEvento<div class="col-sm-7"><input id="NotaEvento" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Continente<div class="col-sm-7"><input id="Continente" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Localizacion<div class="col-sm-7"><input id="Localizacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Ubicacion<div class="col-sm-7"><input id="Ubicacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ElevacionMinima<div class="col-sm-7"><input id="ElevacionMinima" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ElevacionMaxima<div class="col-sm-7"><input id="ElevacionMaxima" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Latitud<div class="col-sm-7"><input id="Latitud" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Longitud<div class="col-sm-7"><input id="Longitud" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">SistemaCoordenadas<div class="col-sm-7"><input id="SistemaCoordenadas" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">SRSliteral<div class="col-sm-7"><input id="SRSliteral" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">LatitudDecimal<div class="col-sm-7"><input id="LatitudDecimal" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">LongitudDecimal<div class="col-sm-7"><input id="LongitudDecimal" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">DatoGeodesico<div class="col-sm-7"><input id="DatoGeodesico" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ProtocoloGeorreferencia<div class="col-sm-7"><input id="ProtocoloGeorreferencia" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Identificador<div class="col-sm-7"><input id="Identificador" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">FechaIdentificado<div class="col-sm-7"><input id="FechaIdentificado" type="datetime-local" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdentificacionCalificador<div class="col-sm-7"><input id="IdentificacionCalificador" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NombreCientifico<div class="col-sm-7"><input id="NombreCientifico" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Reino<div class="col-sm-7"><input id="Reino" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Filo<div class="col-sm-7"><input id="Filo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Clase<div class="col-sm-7"><input id="Clase" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Orden<div class="col-sm-7"><input id="Orden" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Familia<div class="col-sm-7"><input id="Familia" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">_RangoTaxon<div class="col-sm-7"><input id="_RangoTaxon" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">EstadoTaxonomico<div class="col-sm-7"><input id="EstadoTaxonomico<" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Imagen<div class="col-sm-7"><input id="Imagen" type="file" class="form-control"></div></div></div>',
        
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Identificacion<div class="col-sm-7"><input id="Identificacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">BaseRegistro<div class="col-sm-7"><input id="BaseRegistro" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">CodigoInstitucion<div class="col-sm-7"><input id="CodigoInstitucion" type="text" class="form-control"></div></div>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Guardar',          
        confirmButtonColor:'#1cc88a',          
        cancelButtonColor:'#3085d6',  
        preConfirm: () => {            
            return [
              this.Identificacion = document.getElementById('Identificacion').value,
              this.BaseRegistro = document.getElementById('BaseRegistro').value,
              this.CodigoInstitucion = document.getElementById('CodigoInstitucion').value,
             /* this.CodigoColeccion= document.getElementById('CodigoColeccion').value,
              this.NumeroCatalogo= document.getElementById('NumeroCatalogo').value,
              this.Tipo= document.getElementById('Tipo').value,
              this.IdInstitucion= document.getElementById('IdInstitucion').value,
              this.IdColeccion= document.getElementById('IdColeccion').value,
              this.IdConjuntoDatos= document.getElementById('IdConjuntoDatos').value,
              this.NombreConjuntoDatos= document.getElementById('NombreConjuntoDatos').value,
              this.NumeroRegistro= document.getElementById('NumeroRegistro').value,
              this.Registrador= document.getElementById('Registrador').value,
              this._CantidadOrganismo= document.getElementById('_CantidadOrganismo').value,
              this.TipoCantidad= document.getElementById('TipoCantidad').value,
              this.Sexo= document.getElementById('Sexo').value,
              this.EstadoExistencia= document.getElementById('EstadoExistencia').value,
              this.Preparativos= document.getElementById('Preparativos').value,
              this.Disposicion= document.getElementById('Disposicion').value,
              this.ProtocoloMuestreo= document.getElementById('ProtocoloMuestreo').value,
              this.Hora= document.getElementById('Hora').value,
              this.FechaEvento= document.getElementById('FechaEvento').value,
              this.Habitat= document.getElementById('Habitat').value,
              this.NotaEvento= document.getElementById('NotaEvento').value,
              this.Continente= document.getElementById('Continente').value,
              this.Localizacion= document.getElementById('Localizacion').value,
              this.Ubicacion= document.getElementById('Ubicacion').value,
              this.ElevacionMinima= document.getElementById('ElevacionMinima').value,
              this.ElevacionMaxima= document.getElementById('ElevacionMaxima').value,
              this.Latitud= document.getElementById('Latitud').value,
              this.Longitud= document.getElementById('Longitud').value,
              this.SistemaCoordenadas= document.getElementById('SistemaCoordenadas').value,
              this.SRSliteral= document.getElementById('SRSliteral').value,
              this.LatitudDecimal= document.getElementById('LatitudDecimal').value,
              this.LongitudDecimal= document.getElementById('LongitudDecimal').value,
              this.DatoGeodesico= document.getElementById('DatoGeodesico').value,
              this.ProtocoloGeorreferencia= document.getElementById('ProtocoloGeorreferencia').value,
              this.Identificador= document.getElementById('Identificador').value,
              this.FechaIdentificado= document.getElementById('FechaIdentificado').value,
              this.IdentificacionCalificador= document.getElementById('IdentificacionCalificador').value,
              this.NombreCientifico= document.getElementById('NombreCientifico').value,
              this.Reino= document.getElementById('Reino').value,
              this.Filo= document.getElementById('Filo').value,
              this.Clase= document.getElementById('Clase').value,
              this.Orden= document.getElementById('Orden').value,
              this.Familia= document.getElementById('Familia').value,
              this._RangoTaxon= document.getElementById('_RangoTaxon').value,
              this.EstadoTaxonomico= document.getElementById('EstadoTaxonomico').value,
              this.Imagen= document.getElementById('Imagen').value,  */                  
            ]
          }
        })        
        //if(this.Identificacion == "" || this.BaseRegistro == "" || this.CodigoInstitucion == "" || this.CodigoColeccion=="" ||   this.NumeroCatalogo=="" ||  this.Tipo=="" ||   this.IdInstitucion=="" ||   this.IdColeccion=="" ||   this.IdConjuntoDatos=="" ||   this.NombreConjuntoDatos=="" ||   this.NumeroRegistro=="" ||   this.Registrador=="" ||   this._CantidadOrganismo=="" ||   this.TipoCantidad=="" ||   this.Sexo=="" ||    this.EstadoExistencia=="" ||   this.Preparativos=="" ||   this.Disposicion=="" ||   this.ProtocoloMuestreo=="" ||   this.Hora=="" ||   this.FechaEvento=="" ||   this.Habitat=="" ||   this.NotaEvento=="" ||   this.Continente=="" ||   this.Localizacion=="" ||   this.Ubicacion=="" ||   this.ElevacionMinima=="" ||   this.ElevacionMaxima=="" ||   this.Latitud=="" ||   this.Longitud=="" ||   this.SistemaCoordenadas=="" ||   this.SRSliteral=="" ||   this.LatitudDecimal=="" ||   this.LongitudDecimal=="" ||   this.DatoGeodesico=="" ||   this.ProtocoloGeorreferencia=="" ||   this.Identificador=="" ||   this.FechaIdentificado=="" ||   this.IdentificacionCalificador=="" ||   this.NombreCientifico=="" ||   this.Reino=="" ||   this.Filo=="" ||   this.Clase=="" ||   this.Orden=="" ||    this.Familia=="" ||    this._RangoTaxon=="" ||  this.EstadoTaxonomico=="" ||  this.Imagen==""){
        
        if(this.Identificacion == "" || this.BaseRegistro == "" || this.CodigoInstitucion == "" ){
                Swal.fire({
                  type: 'info',
                  title: 'Datos incompletos',                                    
                }) 
        }       
        else{          
          this.altaInvertebrado();          
          const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: '¡Producto Agregado!'
            })                
        }
    },           
    btnEditar:async function(id, Identificacion, BaseRegistro, CodigoInstitucion, CodigoColeccion, NumeroCatalogo,  Tipo,  IdInstitucion,  IdColeccion,  IdConjuntoDatos,  NombreConjuntoDatos,  NumeroRegistro,  Registrador,  _CantidadOrganismo,  TipoCantidad,  Sexo,  EstadoExistencia,  Preparativos,  Disposicion,  ProtocoloMuestreo,  Hora,  FechaEvento,  Habitat,  NotaEvento,  Continente,  Localizacion,  Ubicacion,  ElevacionMinima,  ElevacionMaxima,  Latitud,  Longitud,  SistemaCoordenadas,  SRSliteral,  LatitudDecimal,  LongitudDecimal,  DatoGeodesico,  ProtocoloGeorreferencia,  Identificador,  FechaIdentificado,  IdentificacionCalificador,  NombreCientifico,  Reino,  Filo,  Clase,  Orden,  Familia,  _RangoTaxon,  EstadoTaxonomico,  Imagen ){                            
        await Swal.fire({
        title: 'EDITAR',
        html:
        //'<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Identificacion<div class="col-sm-7"><input id="Identificacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">BaseRegistro<div class="col-sm-7"><input id="BaseRegistro" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">CodigoInstitucion<div class="col-sm-7"><input id="CodigoInstitucion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">CodigoColeccion<div class="col-sm-7"><input id="CodigoColeccion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NumeroCatalogo<div class="col-sm-7"><input id="NumeroCatalogo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Tipo<div class="col-sm-7"><input id="Tipo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdInstitucion<div class="col-sm-7"><input id="IdInstitucion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdColeccion<div class="col-sm-7"><input id="IdColeccion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdConjuntoDatos<div class="col-sm-7"><input id="IdConjuntoDatos" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NombreConjuntoDatos<div class="col-sm-7"><input id="NombreConjuntoDatos" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NumeroRegistro<div class="col-sm-7"><input id="NumeroRegistro" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Registrador<div class="col-sm-7"><input id="Registrador" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">_CantidadOrganismo<div class="col-sm-7"><input id="_CantidadOrganismo" type="number" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">TipoCantidad<div class="col-sm-7"><input id="TipoCantidad" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Sexo<div class="col-sm-7"><input id="Sexo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">EstadoExistencia<div class="col-sm-7"><input id="EstadoExistencia" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Preparativos<div class="col-sm-7"><input id="Preparativos" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Disposicion<div class="col-sm-7"><input id="Disposicion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ProtocoloMuestreo<div class="col-sm-7"><input id="ProtocoloMuestreo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Hora<div class="col-sm-7"><input id="Hora" type="time" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">FechaEvento<div class="col-sm-7"><input id="FechaEvento" type="datetime-local" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Habitat<div class="col-sm-7"><input id="Habitat" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NotaEvento<div class="col-sm-7"><input id="NotaEvento" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Continente<div class="col-sm-7"><input id="Continente" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Localizacion<div class="col-sm-7"><input id="Localizacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Ubicacion<div class="col-sm-7"><input id="Ubicacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ElevacionMinima<div class="col-sm-7"><input id="ElevacionMinima" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ElevacionMaxima<div class="col-sm-7"><input id="ElevacionMaxima" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Latitud<div class="col-sm-7"><input id="Latitud" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Longitud<div class="col-sm-7"><input id="Longitud" type="number" step="any" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">SistemaCoordenadas<div class="col-sm-7"><input id="SistemaCoordenadas" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">SRSliteral<div class="col-sm-7"><input id="SRSliteral" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">LatitudDecimal<div class="col-sm-7"><input id="LatitudDecimal" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">LongitudDecimal<div class="col-sm-7"><input id="LongitudDecimal" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">DatoGeodesico<div class="col-sm-7"><input id="DatoGeodesico" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">ProtocoloGeorreferencia<div class="col-sm-7"><input id="ProtocoloGeorreferencia" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Identificador<div class="col-sm-7"><input id="Identificador" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">FechaIdentificado<div class="col-sm-7"><input id="FechaIdentificado" type="datetime-local" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">IdentificacionCalificador<div class="col-sm-7"><input id="IdentificacionCalificador" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">NombreCientifico<div class="col-sm-7"><input id="NombreCientifico" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Reino<div class="col-sm-7"><input id="Reino" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Filo<div class="col-sm-7"><input id="Filo" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Clase<div class="col-sm-7"><input id="Clase" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Orden<div class="col-sm-7"><input id="Orden" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Familia<div class="col-sm-7"><input id="Familia" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">_RangoTaxon<div class="col-sm-7"><input id="_RangoTaxon" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">EstadoTaxonomico<div class="col-sm-7"><input id="EstadoTaxonomico<" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">Imagen<div class="col-sm-7"><input id="Imagen" type="file"class="form-control"></div></div></div>',
        '<div class="form-group"><div class="row"><label class="col-sm-3 col-form-label">Identificacion<div class="col-sm-7"><input id="Identificacion" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">BaseRegistro<div class="col-sm-7"><input id="BaseRegistro" type="text" class="form-control"></div></div><div class="row"><label class="col-sm-3 col-form-label">CodigoInstitucion<div class="col-sm-7"><input id="CodigoInstitucion" type="text" class="form-control"></div></div>',
        focusConfirm: false,
        showCancelButton: true,                         
        }).then((result) => {
          if (result.value) {                                             
            Identificacion = document.getElementById('Identificacion').value,    
            BaseRegistro = document.getElementById('BaseRegistro').value,
            CodigoInstitucion = document.getElementById('CodigoInstitucion').value,
          /*  CodigoColeccion= document.getElementById('CodigoColeccion').value,
            NumeroCatalogo= document.getElementById('NumeroCatalogo').value,
            Tipo= document.getElementById('Tipo').value,
            IdInstitucion= document.getElementById('IdInstitucion').value,
            IdColeccion= document.getElementById('IdColeccion').value,
            IdConjuntoDatos= document.getElementById('IdConjuntoDatos').value,
            NombreConjuntoDatos= document.getElementById('NombreConjuntoDatos').value,
            NumeroRegistro= document.getElementById('NumeroRegistro').value,
            Registrador= document.getElementById('Registrador').value,
            _CantidadOrganismo= document.getElementById('_CantidadOrganismo').value,
            TipoCantidad= document.getElementById('TipoCantidad').value,
            Sexo= document.getElementById('Sexo').value,
            EstadoExistencia= document.getElementById('EstadoExistencia').value,
            Preparativos= document.getElementById('Preparativos').value,
            Disposicion= document.getElementById('Disposicion').value,
            ProtocoloMuestreo= document.getElementById('ProtocoloMuestreo').value,
            Hora= document.getElementById('Hora').value,
            FechaEvento= document.getElementById('FechaEvento').value,
            Habitat= document.getElementById('Habitat').value,
            NotaEvento= document.getElementById('NotaEvento').value,
            Continente= document.getElementById('Continente').value,
            Localizacion= document.getElementById('Localizacion').value,
            Ubicacion= document.getElementById('Ubicacion').value,
            ElevacionMinima= document.getElementById('ElevacionMinima').value,
            ElevacionMaxima= document.getElementById('ElevacionMaxima').value,
            Latitud= document.getElementById('Latitud').value,
            Longitud= document.getElementById('Longitud').value,
            SistemaCoordenadas= document.getElementById('SistemaCoordenadas').value,
            SRSliteral= document.getElementById('SRSliteral').value,
            LatitudDecimal= document.getElementById('LatitudDecimal').value,
            LongitudDecimal= document.getElementById('LongitudDecimal').value,
            DatoGeodesico= document.getElementById('DatoGeodesico').value,
            ProtocoloGeorreferencia= document.getElementById('ProtocoloGeorreferencia').value,
            Identificador= document.getElementById('Identificador').value,
            FechaIdentificado= document.getElementById('FechaIdentificado').value,
            IdentificacionCalificador= document.getElementById('IdentificacionCalificador').value,
            NombreCientifico= document.getElementById('NombreCientifico').value,
            Reino= document.getElementById('Reino').value,
            Filo= document.getElementById('Filo').value,
            Clase= document.getElementById('Clase').value,
            Orden= document.getElementById('Orden').value,
            Familia= document.getElementById('Familia').value,
            _RangoTaxon= document.getElementById('_RangoTaxon').value,
            EstadoTaxonomico= document.getElementById('EstadoTaxonomico').value,
            Imagen = document.getElementById('Imagen').value,   */                 
            
            //this.editarInvertebrado(id,Identificacion,BaseRegistro,CodigoInstitucion,CodigoColeccion, NumeroCatalogo, Tipo, IdInstitucion, IdColeccion, IdConjuntoDatos, NombreConjuntoDatos, NumeroRegistro, Registrador, _CantidadOrganismo, TipoCantidad, Sexo, EstadoExistencia, Preparativos, Disposicion, ProtocoloMuestreo, Hora, FechaEvento, Habitat, NotaEvento, Continente, Localizacion, Ubicacion, ElevacionMinima, ElevacionMaxima, Latitud, Longitud, SistemaCoordenadas, SRSliteral, LatitudDecimal, LongitudDecimal, DatoGeodesico, ProtocoloGeorreferencia, Identificador, FechaIdentificado, IdentificacionCalificador, NombreCientifico, Reino, Filo, Clase, Orden, Familia, _RangoTaxon, EstadoTaxonomico, Imagen); Swal.fire(
              this.editarInvertebrado(id,Identificacion,BaseRegistro,CodigoInstitucion); Swal.fire(
           
              '¡Actualizado!',
              'El registro ha sido actualizado.',
              'success'
            )                  
          }
        });
        
    },        
    btnBorrar:function(id){        
        Swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {            
            this.borrarInvertebrado(id);             
            //y mostramos un msj sobre la eliminación  
            Swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        })                
    },       
    
    //PROCEDIMIENTOS para el CRUD     
    listarInvertebrados:function(){
        axios.post(url, {opcion:4}).then(response =>{
           this.invertebrados = response.data;       
        });
    },    
    //Procedimiento CREAR.
    altaInvertebrado:function(){
        //axios.post(url, {opcion:1, Identificacion:this.Identificacion, BaseRegistro:this.BaseRegistro, CodigoInstitucion:this.CodigoInstitucion,CodigoColeccion:this.CodigoColeccion, NumeroCatalogo:this.NumeroCatalogo, Tipo:this.Tipo, IdInstitucion:this.IdInstitucion, IdColeccion:this.IdColeccion, IdConjuntoDatos:this.IdConjuntoDatos, NombreConjuntoDatos:this.NombreConjuntoDatos, NumeroRegistro:this.NumeroRegistro, Registrador:this.Registrador, _CantidadOrganismo:this._CantidadOrganismo, TipoCantidad:this.TipoCantidad, Sexo:this.Sexo, EstadoExistencia:this.EstadoExistencia, Preparativos:this.Preparativos, Disposicion:this.Disposicion, ProtocoloMuestreo:this.ProtocoloMuestreo, Hora:this.Hora, FechaEvento:this.FechaEvento, Habitat:this.Habitat, NotaEvento:this.NotaEvento, Continente:this.Continente, Localizacion:this.Localizacion, Ubicacion:this.Ubicacion, ElevacionMinima:this.ElevacionMinima, ElevacionMaxima:this.ElevacionMaxima, Latitud:this.Latitud, Longitud:this.Longitud, SistemaCoordenadas:this.SistemaCoordenadas, SRSliteral:this.SRSliteral, LatitudDecimal:this.LatitudDecimal, LongitudDecimal:this.LongitudDecimal, DatoGeodesico:this.DatoGeodesico, ProtocoloGeorreferencia:this.ProtocoloGeorreferencia, Identificador:this.Identificador, FechaIdentificado:this.FechaIdentificado, IdentificacionCalificador:this.IdentificacionCalificador, NombreCientifico:this.NombreCientifico, Reino:this.Reino, Filo:this.Filo, Clase:this.Clase, Orden:this.Orden, Familia:this.Familia, _RangoTaxon:this._RangoTaxon, EstadoTaxonomico:this.EstadoTaxonomico, Imagen:this.Imagen }).then(response =>{
          axios.post(url, {opcion:1, Identificacion:this.Identificacion, BaseRegistro:this.BaseRegistro, CodigoInstitucion:this.CodigoInstitucion }).then(response =>{
            
          this.listarInvertebrados();
        });        
         this.Identificacion = "",
         this.BaseRegistro = "",
         this.CodigoInstitucion = "",
         this.CodigoColeccion= ""
        /*  this.NumeroCatalogo= "",
          this.Tipo= "",
          this.IdInstitucion= "",
          this.IdColeccion= "",
          this.IdConjuntoDatos= "",
          this.NombreConjuntoDatos= "",
          this.NumeroRegistro= "",
          this.Registrador= "",
          this._CantidadOrganismo= "",
          this.TipoCantidad= "",
          this.Sexo= "",
          this.EstadoExistencia= "",
          this.Preparativos= "",
          this.Disposicion= "",
          this.ProtocoloMuestreo= "",
          this.Hora= "",
          this.FechaEvento= "",
          this.Habitat= "",
          this.NotaEvento= "",
          this.Continente= "",
          this.Localizacion= "",
          this.Ubicacion= "",
          this.ElevacionMinima= "",
          this.ElevacionMaxima= "",
          this.Latitud= "",
          this.Longitud= "",
          this.SistemaCoordenadas= "",
          this.SRSliteral= "",
          this.LatitudDecimal= "",
          this.LongitudDecimal= "",
          this.DatoGeodesico= "",
          this.ProtocoloGeorreferencia= "",
          this.Identificador= "",
          this.FechaIdentificado= "",
          this.IdentificacionCalificador= "",
          this.NombreCientifico= "",
          this.Reino= "",
          this.Filo= "",
          this.Clase= "",
          this.Orden= "",
          this.Familia= "",
          this._RangoTaxon= "",
          this.EstadoTaxonomico= "",
          this.Imagen= ""*/
    },               
    //Procedimiento EDITAR.
    /*editarInvertebrado:function(id,Identificacion,BaseRegistro,CodigoInstitucion,id,Identificacion,BaseRegistro,CodigoInstitucion,CodigoColeccion, NumeroCatalogo, Tipo, IdInstitucion, IdColeccion, IdConjuntoDatos, NombreConjuntoDatos, NumeroRegistro, Registrador, _CantidadOrganismo, TipoCantidad, Sexo, EstadoExistencia, Preparativos, Disposicion, ProtocoloMuestreo, Hora, FechaEvento, Habitat, NotaEvento, Continente, Localizacion, Ubicacion, ElevacionMinima, ElevacionMaxima, Latitud, Longitud, SistemaCoordenadas, SRSliteral, LatitudDecimal, LongitudDecimal, DatoGeodesico, ProtocoloGeorreferencia, Identificador, FechaIdentificado, IdentificacionCalificador, NombreCientifico, Reino, Filo, Clase, Orden, Familia, _RangoTaxon, EstadoTaxonomico, Imagen){       
       axios.post(url, {opcion:2, id:id, Identificacion:Identificacion, BaseRegistro: BaseRegistro, CodigoInstitucion:CodigoInstitucion, CodigoColeccion:CodigoColeccion, NumeroCatalogo:NumeroCatalogo, Tipo:Tipo, IdInstitucion:IdInstitucion, IdColeccion:IdColeccion, IdConjuntoDatos:IdConjuntoDatos, NombreConjuntoDatos:NombreConjuntoDatos, NumeroRegistro:NumeroRegistro, Registrador:Registrador, _CantidadOrganismo:_CantidadOrganismo, TipoCantidad:TipoCantidad, Sexo:Sexo, EstadoExistencia:EstadoExistencia, Preparativos:Preparativos, Disposicion:Disposicion, ProtocoloMuestreo:ProtocoloMuestreo, Hora:Hora, FechaEvento:FechaEvento, Habitat:Habitat, NotaEvento:NotaEvento, Continente:Continente, Localizacion:Localizacion, Ubicacion:Ubicacion, ElevacionMinima:ElevacionMinima, ElevacionMaxima:ElevacionMaxima, Latitud:Latitud, Longitud:Longitud, SistemaCoordenadas:SistemaCoordenadas, SRSliteral:SRSliteral, LatitudDecimal:LatitudDecimal, LongitudDecimal:LongitudDecimal, DatoGeodesico:DatoGeodesico, ProtocoloGeorreferencia:ProtocoloGeorreferencia, Identificador:Identificador, FechaIdentificado:FechaIdentificado, IdentificacionCalificador:IdentificacionCalificador, NombreCientifico:NombreCientifico, Reino:Reino, Filo:Filo, Clase:Clase, Orden:Orden, Familia:Familia, _RangoTaxon:_RangoTaxon, EstadoTaxonomico:EstadoTaxonomico, Imagen:Imagen }).then(response =>{           
           this.listarInvertebrados();           
        });                              
    },*/
    editarInvertebrado:function(id,Identificacion,BaseRegistro,CodigoInstitucion){       
      axios.post(url, {opcion:2, id:id, Identificacion:Identificacion, BaseRegistro: BaseRegistro, CodigoInstitucion:CodigoInstitucion }).then(response =>{           
          this.listarInvertebrados();           
       });                              
   }, 
    
    //Procedimiento BORRAR.
    borrarInvertebrado:function(id){
        axios.post(url, {opcion:3, id:id}).then(response =>{           
            this.listarInvertebrados();
            });
    }             
},      
created: function(){            
   this.listarInvertebrados();            
},    
computed:{
    totalCodigoInstitucion(){
        this.total = 0;
        for(invertebrado of this.invertebrados){
            this.total = this.total + parseInt(invertebrado.id);
        }
        return this.total;   
    }
}   
});

//funcion para filtrar indistintamente de la cantidad de columnas y registros
function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, j, visible;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("miTabla");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    visible = false;
    /* Obtenemos todas las celdas de la fila, no sólo la primera */
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        visible = true;
      }
    }
    if (visible === true) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}