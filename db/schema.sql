
DROP TABLE IF EXISTS pet_plant_sprite;
DROP TABLE IF EXISTS user_habit_log;
DROP TABLE IF EXISTS user_habits;
DROP TABLE IF EXISTS habits_list;
--DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS identities;
DROP TABLE IF EXISTS journal_entries CASCADE;


-- templated categories of default habits

CREATE TABLE identities (
    identities_id SERIAL PRIMARY KEY,
    identities VARCHAR(255),
    image_related_identity_url VARCHAR(255)
);

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(255),
--     email VARCHAR(255),
--     password_hash VARCHAR(255),
--     last_login TIMESTAMP, 
--     account_created TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- master / general public habits list

CREATE TABLE habits_list (
    habits_list_id SERIAL PRIMARY KEY,
    habit VARCHAR(255),
    type BOOLEAN, 
    created_by_user VARCHAR(255),
    identities_id INTEGER REFERENCES identities(identities_id)
);

-- user's master list of habits

  CREATE TABLE user_habits(

    user_habits_id SERIAL PRIMARY KEY,
    habit_name VARCHAR(255),
    date_started TIMESTAMP NOT NULL DEFAULT NOW(),
    time_of_habit VARCHAR(255),
    days_of_week TEXT,
    date_completed TIMESTAMP,
    user_determined_frequency_of_reminder VARCHAR(255),
    habits_list_id INTEGER REFERENCES habits_list(habits_list_id),
    user_id INTEGER REFERENCES users(id)
);


-- user's habits completed log

CREATE TABLE user_habit_log (
    user_habit_log_ID SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    time_completed TIMESTAMP NOT NULL DEFAULT NOW(),
    is_habit_completed BOOLEAN,
    habits_list_id INTEGER REFERENCES habits_list(habits_list_id)
);

CREATE TABLE pet_plant_sprite (

    pps_id SERIAL PRIMARY KEY,
    pet_id INTEGER REFERENCES users(id),
    pps_name VARCHAR(255), 
    pps_level VARCHAR(255),
    img_url VARCHAR(255)
);

CREATE TABLE journal_entries (
    id SERIAL PRIMARY KEY,
    user_entry_id INTEGER REFERENCES users(id),
    date_entered TIMESTAMP NOT NULL DEFAULT NOW(),
    title TEXT,
    journal_entry TEXT
);

