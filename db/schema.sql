
DROP TABLE IF EXISTS pet_plant_sprite;
DROP TABLE IF EXISTS user_habit_log;
DROP TABLE IF EXISTS user_habits;
DROP TABLE IF EXISTS basic_habits_choice_list;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS identities;



CREATE TABLE identities (
    identities_id SERIAL PRIMARY KEY,
    identities VARCHAR(255),
    image_related_identity_url VARCHAR(255)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    last_login TIMESTAMP, 
    account_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE basic_habits_choice_list (
    basic_habits_id SERIAL PRIMARY KEY,
    identities_referenece INTEGER REFERENCES identities(identities_id),
    habit VARCHAR(255),    
    created_by_user VARCHAR(255)
);

CREATE TABLE user_habits(

    user_habits_id SERIAL PRIMARY KEY,
    date_started TIMESTAMP NOT NULL DEFAULT NOW(),
    date_completed TIMESTAMP NOT NULL DEFAULT NOW(),
    habits_reference INTEGER REFERENCES basic_habits_choice_list(basic_habits_id),
    user_reference INTEGER REFERENCES users(id),
    user_determined_frequency_of_reminder VARCHAR(255)
);




CREATE TABLE user_habit_log (
    user_habit_log_ID SERIAL PRIMARY KEY,
    user_profile_reference_ID INTEGER REFERENCES users(id),
    habits_id INTEGER REFERENCES basic_habits_choice_list(basic_habits_id),
    time_completed TIMESTAMP NOT NULL DEFAULT NOW(),
    is_habit_completed BOOLEAN
);

CREATE TABLE pet_plant_sprite (

    pps_id SERIAL PRIMARY KEY,
    pet_id INTEGER REFERENCES users(id),
    pps_name VARCHAR(255), 
    pps_level VARCHAR(255),
    img_url VARCHAR(255)
);

