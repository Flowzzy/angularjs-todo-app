CREATE TABLE todos (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  dueDate varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO todos (id, name, dueDate) VALUES
(1, 'Create AngularApp', '10/4/2018'),
(2, 'Create database', '10/3/2018'),
(3, 'Push app to GitHub', '10/4/2018'),
(4, 'Review code', '10/3/2018');