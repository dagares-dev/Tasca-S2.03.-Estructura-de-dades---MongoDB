use("cul_d_ampolla")
db.dropDatabase()

const proveedor1 = db.proveedores.insertOne({
  nombre: "Manolito Gafotas SL",
  direccion: {
    calle: "Rue del Percebe",
    numero: 13,
    piso: "4",
    puerta: "B",
    ciudad: "Barcelona",
    codigo_postal: "08083",
    pais: "España"
  },
  telefono: "934635241",
  fax: "934635242",
  nif: "B48569702"
})

const gafa1 = db.gafas.insertOne({
  marca: "Rayban",
  graduacion: 
    { izquierdo: 2.3, derecho: 2.0 },
  tipo_montura: "metalica",
  color_montura: "roja",
  color_vidrio: 
    { izquierdo: null, derecho: null },
  precio: 127.0,
  id_proveedor: proveedor1.insertedId
})

const cliente1 = db.clientes.insertOne({
  nombre: "Sherlock",
  direccion: "Right Street, 123",
  telefono: "678921235",
  email: "sherlock@email.com",
  fecha_registro: new Date("2023-09-23"),
  recomendado_por: null
})

const cliente2 = db.clientes.insertOne({
  nombre: "Watson",
  direccion: "Right Street, 124",
  telefono: "630456923",
  email: "watson@email.com",
  fecha_registro: new Date("2023-09-24"),
  recomendado_por: cliente1.insertedId
})

const empleado1 = db.empleados.insertOne(
    { nombre: "Luigi Bros" })


db.ventas.insertOne({
  id_gafa: gafa1.insertedId,
  id_cliente: cliente2.insertedId,
  id_empleado: empleado1.insertedId,
  fecha_hora: new Date()
})

db.ventas.insertOne({
  id_gafa: gafa1.insertedId,
  id_cliente: cliente1.insertedId,
  id_empleado: empleado1.insertedId,
  fecha_hora: new Date()
})