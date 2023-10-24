# Crear la base de datos "aliwoodbd":
CREATE SCHEMA IF NOT EXISTS `aliwoodbd`

# Usar la base de datos "aliwoodbd":
USE aliwoodbd;

# Crear la tabla "pedidos":
CREATE TABLE IF NOT EXISTS `aliwoodbd`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `fecha_pedido` DATETIME NOT NULL,
  `total` DOUBLE NOT NULL,
  `tipo_de_pago` VARCHAR(45) NOT NULL,
  `estado_de_pago` VARCHAR(45) NULL DEFAULT NULL,
  `historial_de_estado` DOUBLE NOT NULL,
  PRIMARY KEY (`id`, `id_usuario`),
  INDEX `id.Usuario_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `id.Usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `aliwoodbd`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

# Crear la tabla "productos":
CREATE TABLE IF NOT EXISTS `aliwoodbd`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `stock` INT NOT NULL,
  `descuento` DOUBLE NOT NULL,
  `comentarios` VARCHAR(45) NOT NULL,
  `disponibilidad` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

# Crear la tabla "usuarios":
CREATE TABLE IF NOT EXISTS `aliwoodbd`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `fecha_de_registro` DATETIME NOT NULL,
  `fecha_de_nacimiento` DATETIME NOT NULL,
  `numero_de_telefono` INT NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci

/* Estos algoritmos crearán la base de datos "aliwoodbd" 
junto con las tablas "usuarios", "productos" y "pedidos", 
y establecerán las relaciones adecuadas entre ellas. 
Cabe destacar que los tipos de datos y las longitudes de las columnas pueden ajustarse según tus necesidades.
*/