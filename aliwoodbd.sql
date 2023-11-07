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
  `descuento` DOUBLE NOT NULL,
  `comentarios` VARCHAR(255),
  `disponibilidad` TINYINT NOT NULL,
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
  `fecha_de_nacimiento` DATETIME,
  `numero_de_telefono` VARCHAR(15),
  `direccion` VARCHAR(255),
  `codigo_postal` VARCHAR(50),
  `direccion_envio` VARCHAR(255),
  `preferencia_contacto` VARCHAR(255),
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