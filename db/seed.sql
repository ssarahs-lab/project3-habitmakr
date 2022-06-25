INSERT INTO identities (identities, image_related_identity_url) VALUES ('Gymbunny', 'https://images.unsplash.com/photo-1533514114760-4389f572ae26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80');INSERT INTO identities (identities, image_related_identity_url) VALUES ('Functioning Adult', 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
INSERT INTO identities (identities, image_related_identity_url) VALUES ('Reader', 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
INSERT INTO identities (identities, image_related_identity_url) VALUES ('Smart Cookie', 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
INSERT INTO identities (identities, image_related_identity_url) VALUES ('Money Bags', 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');


--habits
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', true, 1);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Avoid junk food.', true, 1);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('15 minutes of yoga.', true, 1);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Exercise with a friend.', true, 1);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Wake up early.', true, 2);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Make the bed.', true, 2);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Brush teeth.', true, 2);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Vacuum the house.', true, 2);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Check calendar, manage life admin.', true, 2);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Give someone a compliment.', true, 2);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Go to bed at a reasonable time.', true, 2);

INSERT INTO habits_list (habit, type, identities_id) VALUES ('Read or listen to a nonfiction book for 10 minutes.', true, 3);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Write a book review for 10 minutes.', true, 3);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Visit the library.', true, 3);

INSERT INTO habits_list (habit, type, identities_id) VALUES ('Spend 15 minutes learning a new skill.', true, 4);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Meet with a mentor.', true, 4);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Review study goals.', true, 4);

INSERT INTO habits_list (habit, type, identities_id) VALUES ('Set aside money to invest.', true, 5);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Set aside money to donate.', true, 5);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Set aside money for living expenses.', true, 5);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Make a tax plan with accountant.', true, 5);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Meet with a financial planner.', true, 5);

--fake user

--user
INSERT INTO users(id, username, email, password_hash) VALUES (3, 'Ed Test', 'test@test.com', '$2b$10$naZA9QykpAH8mfKrHIWX4.nqJklAyQqYBN0gHKMZt7Zg9DLmB.P92')

--tracked habit
INSERT INTO user_habits (habit_name, user_determined_frequency_of_reminder, user_id) VALUES('Exercise at 80% of mx HR for 10 mins.', 'Daily', 3);
INSERT INTO user_habits (habit_name, user_determined_frequency_of_reminder, user_id) VALUES('Avoid junk food', 'Daily', 3);
INSERT INTO user_habits (habit_name, user_determined_frequency_of_reminder, user_id) VALUES('Exercise at 80% of mx HR for 10 mins.', 'Daily', 3);
INSERT INTO user_habits (habit_name, user_determined_frequency_of_reminder, user_id) VALUES('Write a book review for 10 minutes.', 'Daily', 3);
INSERT INTO user_habits (habit_name, user_determined_frequency_of_reminder, user_id) VALUES('Wake up early.', 'Daily', 3);

-- habit log
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-10 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-10 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-10 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-10 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-10 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-11 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-11 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-11 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-11 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-11 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-14 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-14 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-14 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-14 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-14 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-15 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-15 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-15 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-15 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-15 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-16 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-16 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-16 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-16 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-16 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-18 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-18 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-18 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-18 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-18 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-22 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-22 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-22 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-22 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-22 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-23 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-23 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-23 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-23 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-23 10:33:08.76486', 3);

INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Exercise at 80% of mx HR for 10 mins.', '2022-06-24 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Avoid junk food.', '2022-06-24 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Write a book review for 10 minutes.', '2022-06-24 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Make a tax plan with accountant.', '2022-06-24 10:33:08.76486', 3);
INSERT INTO user_habit_log (habit_name, time_completed, user_id) VALUES ('Wake up early.', '2022-06-24 10:33:08.76486', 3);