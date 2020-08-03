-- write your code in PostgreSQL 9.4
CREATE TABLE average (
    task_id integer not null,
    task_name varchar(40) not null,
    difficulty integer not null,
    unique(task_id)
);

SELECT AVG(score) FROM reports group by task_id;


insert into average SELECT tasks.id, tasks.name, AVG(reports.score) FROM reports left join tasks on reports.task_id=tasks.id group by tasks.id, tasks.name;

SELECT * FROM average
