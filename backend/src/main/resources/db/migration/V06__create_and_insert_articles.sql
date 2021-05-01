create table articles (
    id  bigserial not null,
    title varchar(255) not null,
    intro TEXT not null,
    content TEXT not null,
    image_url varchar(255),
    user_id_created int,
    created_at TIMESTAMP WITHOUT TIME ZONE,
    updated_at TIMESTAMP WITHOUT TIME ZONE,
    primary key (id),
    CONSTRAINT fk_articles_usuarios FOREIGN KEY (user_id_created)
    REFERENCES users (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);


