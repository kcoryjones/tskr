CREATE DATABASE IF NOT EXISTS tskr;
CREATE TABLE IF NOT EXISTS tskr.task (id int(6) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, session_id varchar(64) NULL, label text NULL);