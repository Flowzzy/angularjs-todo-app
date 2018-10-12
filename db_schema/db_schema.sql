CREATE TABLE todos (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  complete BOOLEAN,
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO todos (id, name, complete) VALUES
(1, 'Create AngularApp', 0),
(2, 'Create database', 0),
(3, 'Push app to GitHub', 0),
(4, 'Review code', 0);