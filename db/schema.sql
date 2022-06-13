DROP TABLE IF EXISTS user_tracked_habits;
DROP TABLE IF EXISTS pet_plant_sprite;
DROP TABLE IF EXISTS basic_habits_choice_list;
DROP TABLE IF EXISTS users;


CREATE TABLE basic_habits_choice_list (
    basic_habits_id SERIAL PRIMARY KEY,
    habit VARCHAR(255),
    category VARCHAR(255),
    created_by_user VARCHAR(255)

);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    last_login TIMESTAMP, 
    account_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user_tracked_habits (
    users_habits_id INTEGER REFERENCES users(id),
    habits_id INTEGER REFERENCES basic_habits_choice_list(basic_habits_id),
    time_completed TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE pet_plant_sprite (

    pet_id INTEGER REFERENCES users(id),
    pps_name VARCHAR(255), 
    pps_level VARCHAR(255),
    img_url VARCHAR(255)
);

