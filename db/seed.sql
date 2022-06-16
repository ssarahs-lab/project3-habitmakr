

INSERT INTO identities (identities, image_related_identity_url) VALUES ('gymbunny', 'https://images.unsplash.com/photo-1533514114760-4389f572ae26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80');
INSERT INTO identities (identities, image_related_identity_url) VALUES ('functioning adult', 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
INSERT INTO identities (identities, image_related_identity_url) VALUES ('reader', 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
INSERT INTO identities (identities, image_related_identity_url) VALUES ('smart cookie', 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
INSERT INTO identities (identities, image_related_identity_url) VALUES ('money bags', 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');


--habits

--gymbunny
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Excercise for atleast 25 minutes.', true, 1);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Avoid unhealthy food.', true, 1);

--functioning adult
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Clean the house.', true, 2);
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Wake up early.', true, 2);

--reader
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Read at least 25 minutes.', true, 3);

--smart cookie
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Spend atleast 30 minutes studying.', true, 4);

--money bags
INSERT INTO habits_list (habit, type, identities_id) VALUES ('Set aside money to invest.', true, 5);