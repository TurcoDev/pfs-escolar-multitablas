CREATE DATABASE IF NOT EXISTS escolar;
USE escolar;

CREATE TABLE IF NOT EXISTS ciudad ( 
id_ciudad INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
nombre VARCHAR (45) NOT NULL);

CREATE TABLE IF NOT EXISTS escuela ( 
	id INT AUTO_INCREMENT NOT NULL, 
	nombre VARCHAR (45) NOT NULL, 
	domicilio VARCHAR (45) NOT NULL, 
	id_ciudad INT,
    PRIMARY KEY (id),
	FOREIGN KEY (id_ciudad) REFERENCES ciudad(id_ciudad)
);

CREATE TABLE IF NOT EXISTS profesor ( 
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	apellidoNombres VARCHAR (45) NOT NULL
);

CREATE TABLE IF NOT EXISTS estudiante ( 
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	apellidoNombres VARCHAR (45) NOT NULL, 
	fechaNacimiento DATETIME
);

CREATE TABLE IF NOT EXISTS clase ( 
	id_clase INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	nombre VARCHAR (45) NOT NULL,
    id_escuela INT,
	FOREIGN KEY (id_escuela) REFERENCES escuela(id)
);

INSERT INTO clase (nombre, id_escuela) VALUES ("matematicas", 1);
INSERT INTO clase (nombre, id_escuela) VALUES ("fisica", 2);
INSERT INTO clase (nombre, id_escuela) VALUES ("biologia", 1);

INSERT INTO ciudad (nombre) VALUES ("General Madariaga");
INSERT INTO ciudad (nombre) VALUES ("Tandil");
INSERT INTO ciudad (nombre) VALUES ("Pinamar");
INSERT INTO ciudad (nombre) VALUES ("Villa Gesell");
INSERT INTO ciudad (nombre) VALUES ("Mar del Plata");

INSERT INTO escuela (nombre,domicilio,id_ciudad) VALUES ("Escuela Normal N°31", "Av Buenos Aires 987",1);
INSERT INTO escuela (nombre,domicilio,id_ciudad) VALUES ("Escuela Normal N°10", "Sarmiento 580",2);
INSERT INTO escuela (nombre,domicilio,id_ciudad) VALUES ("Escuela Belgrano", "Mitre 875",4);

INSERT INTO profesor (apellidoNombres) VALUES ("Juan Lopez");
INSERT INTO profesor (apellidoNombres) VALUES ("Miguel Torres");
INSERT INTO profesor (apellidoNombres) VALUES ("Antonio Cruz");