# Crear la base de datos "aliwoodbd":
CREATE SCHEMA IF NOT EXISTS `aliwoodbd`;

# Usar la base de datos "aliwoodbd":
USE aliwoodbd;

# Crear la tabla "productos":
CREATE TABLE IF NOT EXISTS `aliwoodbd`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `stock` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `descuento` DOUBLE NOT NULL,
  `categoria` VARCHAR(50) NOT NULL,
  `imagen` VARCHAR(255),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

# Crear la tabla "usuarios":
CREATE TABLE IF NOT EXISTS `aliwoodbd`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `contrasenia` VARCHAR(255) NOT NULL,
  `dni` VARCHAR(50),
  `fecha_de_registro` DATETIME,
  `numero_de_telefono` VARCHAR(15),
  `direccion` VARCHAR(255),
  `codigo_postal` VARCHAR(50),
  `direccion_envio` VARCHAR(255),
  `preferencia_contacto` VARCHAR(255),
  `localidad` VARCHAR(255),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

# Crear la tabla "pedidos":
CREATE TABLE `aliwoodbd`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `fecha_pedido` DATETIME NOT NULL,
  `total` DOUBLE NOT NULL,
  `tipo_de_pago` VARCHAR(50) NOT NULL,
  `estado_de_pago` VARCHAR(50) NOT NULL,
  `historial_de_estado` VARCHAR(255) NULL DEFAULT NULL,
  `productos` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_usuario_pedido`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `aliwoodbd`.`usuarios` (`id`)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

/* Estos algoritmos crearán la base de datos "aliwoodbd" 
junto con las tablas "usuarios", "productos" y "pedidos", 
y establecerán las relaciones adecuadas entre ellas. 
Cabe destacar que los tipos de datos y las longitudes de las columnas pueden ajustarse según tus necesidades.
*/

INSERT INTO aliwoodbd.productos (imagen, precio, descripcion, descuento, stock, cantidad, nombre, categoria)
VALUES
    ('https://i.postimg.cc/2yXfjQ8f/cocina1.jpg', 7500, 'Una cocina moderna con todos los electrodomésticos necesarios.', 3000, 50, 1, 'Cocina Moderna', 'Cocina'),
    ('https://i.postimg.cc/B6DwHF02/cocina2.jpg', 8200, 'Una cocina espaciosa con encimeras de granito y gabinetes de madera.', 2000, 35, 1, 'Cocina Espaciosa', 'Cocina'),
    ('https://i.postimg.cc/VLzH05Hb/cocina3.jpg', 9000, 'Cocina luminosa con una isla central y barra de desayuno.', 1500, 20, 1, 'Cocina Luminosa', 'Cocina'),
    ('https://i.postimg.cc/FzXFV0Jv/cocina4.jpg', 6500, 'Una cocina rústica con horno de leña y suelos de baldosas.', 2200, 42, 1, 'Cocina Rústica', 'Cocina'),
    ('https://i.postimg.cc/NfPShBp9/cocina5.jpg', 7200, 'Cocina minimalista con diseño abierto y electrodomésticos de acero inoxidable.', 1800, 60, 1, 'Cocina Minimalista', 'Cocina'),
    ('https://i.postimg.cc/SQgt8m0T/cocina6.jpg', 7800, 'Cocina elegante con encimeras de cuarzo y luces empotradas.', 2500, 70, 1, 'Cocina Elegante', 'Cocina'),
    ('https://i.postimg.cc/5Ncp8y7m/cocina7.jpg', 8300, 'Cocina amplia con vista al jardín y área de comedor.', 3200, 10, 1, 'Cocina Amplia', 'Cocina'),
    ('https://i.postimg.cc/5tmVvDSx/living4.jpg', 6800, 'Cocina abierta a la sala de estar con una isla de desayuno.', 2700, 85, 1, 'Cocina Abierta a Sala de Estar', 'Cocina');


-- Esta sentencia SQL agrega 8 filas con diferentes cocinas en una casa.

INSERT INTO aliwoodbd.productos (imagen, precio, descripcion, descuento, stock, cantidad, nombre, categoria)
VALUES
    ('https://i.postimg.cc/LXNcvtPZ/ba-o-1.jpg', 7200, 'Baño elegante con ducha de lluvia y azulejos de mármol.', 1800, 25, 1, 'Baño Elegante', 'Baño'),
    ('https://i.postimg.cc/9fYgX7GM/banio2.jpg', 8700, 'Baño espacioso con bañera de hidromasaje y tocador doble.', 1500, 20, 1, 'Baño Espacioso', 'Baño'),
    ('https://i.postimg.cc/PqTK75Bk/banio3.jpg', 9300, 'Baño moderno con iluminación LED y espejos de gran tamaño.', 2000, 15, 1, 'Baño Moderno', 'Baño'),
    ('https://i.postimg.cc/9fb1Hjhw/banio4.jpg', 7600, 'Baño minimalista con lavabo de pedestal y azulejos de cerámica.', 1400, 30, 1, 'Baño Minimalista', 'Baño'),
    ('https://i.postimg.cc/021tSncQ/banio5.jpg', 8100, 'Baño de diseño contemporáneo con tocador flotante y ducha de cristal.', 1700, 18, 1, 'Baño de Diseño Contemporáneo', 'Baño'),
    ('https://i.postimg.cc/Z5TV7Rkz/banio6.jpg', 7200, 'Baño con bañera antigua y suelos de baldosas de mosaico.', 1600, 22, 1, 'Baño con Bañera Antigua', 'Baño'),
    ('https://i.postimg.cc/PqJKHRr6/banio7.jpg', 7800, 'Baño luminoso con lavabo encastrado y espejo empotrado.', 1900, 12, 1, 'Baño Luminoso', 'Baño'),
    ('https://i.postimg.cc/4dh57HcV/banio8.jpg', 6900, 'Baño rústico con lavabo de pedestal y detalles en madera.', 2100, 28, 1, 'Baño Rústico', 'Baño');


-- Esta sentencia SQL agrega 8 filas con diferentes baños en una casa.

INSERT INTO aliwoodbd.productos (imagen, precio, descripcion, descuento, stock, cantidad, nombre, categoria)
VALUES
    ('https://i.postimg.cc/tRs3g6bg/living1.jpg', 7800, 'Sala de estar con sofá y televisión de pantalla plana.', 1500, 18, 1, 'Sala de Estar con Sofá y TV de Pantalla Plana', 'Living'),
    ('https://i.postimg.cc/vHd4dxHk/living2.jpg', 8500, 'Espacio de vida moderno con muebles contemporáneos.', 1600, 22, 1, 'Espacio de Vida Moderno con Muebles Contemporáneos', 'Living'),
    ('https://i.postimg.cc/j53sC0Z9/images-6.jpg', 9200, 'Sala de estar luminosa con ventanas panorámicas y vista al jardín.', 1800, 20, 1, 'Sala de Estar Luminosa con Ventanas Panorámicas', 'Living'),
    ('https://i.postimg.cc/5tmVvDSx/living4.jpg', 7600, 'Área de estar con sofá y chimenea de leña.', 1400, 25, 1, 'Área de Estar con Sofá y Chimenea de Leña', 'Living'),
    ('https://i.postimg.cc/sfWR4Bc6/living5.jpg', 8100, 'Sala de estar minimalista con muebles de diseño y suelos de madera.', 1700, 15, 1, 'Sala de Estar Minimalista con Muebles de Diseño', 'Living'),
    ('https://i.postimg.cc/j2RYMTtg/living6.webp', 7800, 'Sala de estar contemporánea con iluminación LED y paredes de acento.', 1500, 18, 1, 'Sala de Estar Contemporánea con Iluminación LED', 'Living'),
    ('https://i.postimg.cc/pVs6wzZX/living7.jpg', 8500, 'Espacio de vida con decoración elegante y biblioteca incorporada.', 1600, 22, 1, 'Espacio de Vida con Decoración Elegante y Biblioteca Incorporada', 'Living'),
    ('https://i.postimg.cc/7LNVgrtY/living8.png', 9200, 'Sala de estar con vistas al mar y acceso a la terraza.', 1800, 20, 1, 'Sala de Estar con Vistas al Mar y Acceso a la Terraza', 'Living');
    
-- Esta sentencia SQL agrega 8 filas con diferentes livings en una casa.