# ************************************************************
# Sequel Ace SQL dump
# Versión 20070
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Equipo: MacBook-Air-de-Angel-2.local (MySQL 9.0.1)
# Base de datos: cursos
# Tiempo de generación: 2024-08-20 9:37:48 p.m. +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla cursos
# ------------------------------------------------------------

CREATE TABLE `cursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(64) DEFAULT NULL,
  `descripcion` text,
  `profesor_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cursos_profesores_FK` (`profesor_id`),
  CONSTRAINT `cursos_profesores_FK` FOREIGN KEY (`profesor_id`) REFERENCES `profesores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Volcado de tabla cursos_estudiantes
# ------------------------------------------------------------

CREATE TABLE `cursos_estudiantes` (
  `curso_id` int NOT NULL,
  `estudiante_id` int NOT NULL,
  PRIMARY KEY (`curso_id`,`estudiante_id`),
  KEY `cursos_estudiantes_estudiantes_FK` (`estudiante_id`),
  CONSTRAINT `cursos_estudiantes_cursos_FK` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  CONSTRAINT `cursos_estudiantes_estudiantes_FK` FOREIGN KEY (`estudiante_id`) REFERENCES `estudiantes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Volcado de tabla estudiantes
# ------------------------------------------------------------

CREATE TABLE `estudiantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(64) DEFAULT NULL,
  `nombre` varchar(64) DEFAULT NULL,
  `apellido` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



# Volcado de tabla profesores
# ------------------------------------------------------------

CREATE TABLE `profesores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dni` varchar(64) DEFAULT NULL,
  `nombre` varchar(64) DEFAULT NULL,
  `apellido` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `profesion` varchar(64) DEFAULT NULL,
  `telefono` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
