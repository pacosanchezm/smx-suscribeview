import React, { useState, useEffect, useContext, createContext, Suspense } from "react"
// import moment from "moment";

import 'bootstrap/dist/css/bootstrap.min.css'

/** @jsxRuntime classic */
import { ThemeProvider, jsx, Styled, useThemeUI } from "theme-ui"
import { Flex, Box, Button, Text, Textarea, Image, Spinner, Grid, Input, Checkbox, Link } from "@theme-ui/components"
import { Container, Col, Row } from 'react-bootstrap'

 import Dropbox from "react-select"
// import {filtro2} from "./select"



let App

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------


const DropboxFiltro1= {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? null : null
  }),
  control: (base, state) => ({
    ...base,
    background: "lightgrey",
    fontFamily: "Arial",
    fontSize: 12
  }),
  menu: base => ({
    ...base,
    fontFamily: "Arial"
  }),

  singleValue: base => ({
    ...base,
    color: "slategrey"
  }),

  valueContainer: (base, state) => ({
    ...base,
    background: "lightgrey",
    color: "red"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "lightYellow",
    maxWidth: "100px"
  })
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------





const Body = props => {
  const Estilo = useThemeUI().theme.styles
  const [Loading, setLoading] = props.useContextLocal.Loading.DataMain
  const [LoadingSecc, setLoadingSecc] = props.useContextLocal.Loading.DataMain

  const [Registro, setRegistro] = props.useContext.Registro

  const Images = props.useContext.Images

  const [Detalle, setDetalle] = props.useContext.Detalle;
  const [Editado, setEditado] = props.useContext.Editado;
  const [Aceptado, setAceptado] = props.useContext.Aceptado;

  const {useChangeArray, useChangeBooleanArray, useChangeBoolean} = props.useAcciones



// ----------------------------------

useEffect(() => {
 // props.useAcciones.getPage({id:props.pageid})
}, [])




const ColorBoton = function(props) {
  if(Detalle.Nombre && Detalle.Apellido && Detalle.Telefono && Detalle.Email){

    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
        if(Aceptado){
          return "#B7CE3F"
        }
      } 
    }    
  }
};

const EnableBoton = function(props) {

  // if(LoadingSecc) {return false}

  if(Detalle.Nombre && Detalle.Apellido && Detalle.Telefono && Detalle.Email){
    if(Detalle.Email.lastIndexOf('@')>0){
      if(Detalle.Email.lastIndexOf('.')>0){
          if(Aceptado){
            return false
          }

      } 
    }      
  } 

  return true
  
};


const ModuloSimple  = () => {
  // console.log({Images})
   return (
     <div>
       <Flex sx={{ width: "100%" }}>
         <Box
           //bg="primary"
           sx={{
             fontWeight: "normal",
             fontSize: 1,
             color: "text",
             fontFamily: "body",
             width: "100%"
           }}
         >
 

          <Flex sx={{ width: "100%" }}>
              <Row>
                <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Recibimos tus datos, en breve recibirás nuestras historias e información relevante del mundo emprendedor. ¡Gracias por ser parte de la red empresando!"}</Text>
              </Row>
          </Flex>

          <Box css={{ height: 21 }} />

          <Row>
            <Text sx={Estilo.msecc2}>{"Red Empresando"}</Text>
            <Text sx={Estilo.msecc1}>{"Sembrando inspiración para emprender"}</Text>

          </Row>












         </Box>
       </Flex>
     </div>
   )
 }
 
 // ----------------------------------
 


 const ModuloEdit  = () => {
  //console.log(props)
    return (


    <Container 
      style={{ maxWidth: "987px"}}
    >




      <Box sx={{ height: 13,  }} />

      <Row>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Datos de contacto"}</Text>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Nombre</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Nombre", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Apellidos</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "ApellidoPat", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Teléfono</Text> <Text sx={Estilo.d2s} >(Whatsapp)</Text>  </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Telefono", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Email</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "Email", setDetalle)}/> </Col>
        </Row>



        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Estado</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.ClientesProfsEstado, label: Detalle.ClientesProfsEstado}}
              options={props.useContext.Estados[0]}
              onChange={async e => { setDetalle({ ...Detalle, "ClientesProfsEstado": e.value }) }} 
            />
          </Col>
        </Row>


      </Container>





      <Box sx={{ height: 13,  }} />

      <Row>
        <Col xs={9} style={{textAlign: "left"}}>
          <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Etapa del emprendimiento"}</Text> 
        </Col>
      </Row>


      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "ClientesProfsReferencia1", setDetalle)}
          >
            <Row>
                <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.ClientesProfsReferencia1}/> </Col>
               <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s} >Estoy desarrollando la idea de negocio</Text> </Col>
            </Row>
          </Button>
        </Row>



        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "ClientesProfsReferencia3", setDetalle)}
          >
            <Row>
            <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.ClientesProfsReferencia3}/> </Col>
              <Col xs={8} style={{textAlign: "left"}} > <Text sx={Estilo.d2s}>En operación (ya vendo productos y/o servicios)</Text> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "ClientesProfsReferencia4", setDetalle)}
          >
            <Row>
            <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.ClientesProfsReferencia4}/> </Col>
              <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s}>No tengo una idea concreta</Text> </Col>
            </Row>
          </Button>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Row>
            <Col xs={3} style={{textAlign: "left", paddingLeft: "50px"}}> <Text sx={Estilo.d2s}>Otro</Text> </Col>
            <Col xs={8} style={{textAlign: "left"}}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "ClientesProfsReferencia5", setDetalle)}/> </Col>
          </Row>
        </Row>

      </Container>

      <Box sx={{ height: 13,  }} />




      <Row>
        <Col xs={9} style={{textAlign: "left"}}>
          <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Datos del emprendimiento"}</Text> 
        </Col>

      </Row>



      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Nombre</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "ClientesProfsTitulo", setDetalle)}/> </Col>
        </Row>

        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Sitio Web / Redes</Text> </Col>
          <Col xs={9}> <Input sx={Estilo.input1} {...useChangeArray(Detalle, "ClientesProfsWeb", setDetalle)}/> </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Empleados</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Empleados"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.ClientesProfsEmpleados, label: Detalle.ClientesProfsEmpleados}}
              options={props.useContext.Empleados[0]}
              onChange={async e => { setDetalle({ ...Detalle, "ClientesProfsEmpleados": e.value }) }} 
            />
          </Col>
        </Row>


        <Row style={{marginBottom: "10px"}}>
          <Col xs={3}> <Text sx={Estilo.label1} >Categoría</Text> </Col>
          <Col xs={9}> 
            <Dropbox
              name="Categoria"
              isSearchable={false}
              styles={DropboxFiltro1}
              value={{value: Detalle.ClientesProfsCategoria, label: Detalle.ClientesProfsCategoria}}
              options={props.useContext.Categorias[0]}
              onChange={async e => { setDetalle({ ...Detalle, "ClientesProfsCategoria": e.value }) }} 
            />
          </Col>
        </Row>





      </Container>





      <Box sx={{ height: 13,  }} />




      <Col xs={9} style={{textAlign: "left"}}>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Comentarios"}</Text> 
      </Col>





      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>

          <Col xs={12}> 
            <Textarea
              // sx={Estilo.input1}
              {...useChangeArray(Detalle, "ClientesProfsDescripcion", setDetalle)}
              rows={5}
            />          
          </Col>
        </Row>

      </Container>

      <Box sx={{ height: 13,  }} />



      <Col xs={9} style={{textAlign: "left"}}>
        <Text sx={{...Estilo.msecc2, textAlign: "left"}}>{"Observaciones empresando"}</Text> 
      </Col>



      <Container fluid 
        style={{ width: "100%", bg: "white", borderRadius: "10px", borderStyle: "solid", borderWidth:1, borderColor: "#9999", paddingTop: "10px"}}
      >
        <Row style={{marginBottom: "10px"}}>

          <Col xs={12}> 
            <Textarea
              // sx={Estilo.input1}
              {...useChangeArray(Detalle, "ClientesProfsObv", setDetalle)}
              rows={5}
            />          
          </Col>
        </Row>



        <Row style={{marginBottom: "10px"}}>
          <Button
            sx={{width: "100%", bg: "transparent"}}
            {...useChangeBooleanArray(Detalle, "ClientesProfsDestacado", setDetalle)}
          >
            <Row>
            <Col xs={2} style={{paddingLeft: "50px"}}> <Checkbox checked={Detalle.ClientesProfsDestacado}/> </Col>
              <Col xs={8} style={{textAlign: "left"}}> <Text sx={Estilo.d2s}>Destacado</Text> </Col>
            </Row>
          </Button>
        </Row>










      </Container>



      <Box sx={{ height: 21,  }} />


      <Box css={{ height: 8 }} />


      <Container fluid 
      >
        <Row style={{marginBottom: "10px"}}>
        <Col xs={2}/> 

          <Col xs={8}> 
            <Button sx={{ width: "100%", height: "34px" }}
              width={1}
              bg="#B7CE3F"
              disabled={false}
              onClick={async () => {
                setLoadingSecc(true)
                  await props.useAcciones.InfoAdd()
                setLoadingSecc(false)
              }}
            >
              <Text sx={Estilo.mbtn1}>
                Guardar
                {LoadingSecc ? <Spinner size={17} ml={0} /> : <div/>}
              </Text>

            </Button>
          </Col>

        </Row>

      </Container>

      <Box css={{ height: 34 }} />





</Container>


    )
  }




 
 try {

  return (
    <div>
      {Loading ? <Spinner size={17} ml={3} /> : 
        <div>
          {(props.CompStatus.form()===1) ? ModuloEdit() : <div/>}
          {(props.CompStatus.form()===2) ? ModuloSimple() : <div/>}

          </div>
      }

    </div>
  )
  
} catch (e) {
  console.error(e);
}
}

// ---------------------------------------------------------------------
// -----------------------------------------------------------------------

export default (App = props => {
return (
  <Row className="justify-content-md-center">
    <Body {...props} />
  </Row>

);
});

// -----------------------------------------------------------------------


