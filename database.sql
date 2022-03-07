create database todos;


create table todos(
    todos_id serial,
    title character varying(100) not null,
    todo boolean default true,
    doing boolean default false, 
    done boolean default false,
    time timestamptz DEFAULT CURRENT_TIMESTAMP
);

insert into  todos(title) values 
('Dars qilish kerak'),
('Darsni topshirish kerak'),
('Bugun 8- mart'),
('Bugn sening kuning bugun kuning seni'),
('8-marttttt');