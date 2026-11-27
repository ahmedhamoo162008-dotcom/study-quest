(function () {
  const SETUP = "CREATE TABLE residents(id int PRIMARY KEY, name text, gender text, age int, height_cm int, hair text, shoe_size int, district text);\nINSERT INTO residents VALUES (1,'Karim Nabil','M',58,181,'black',43,'Old Town'),(2,'Mostafa Farag','M',27,179,'brown',44,'Garden City'),(3,'Ramy Kamel','M',24,176,'brown',44,'University'),(4,'Ziad Sabry','M',44,178,'black',45,'Old Town'),(5,'Aya Barakat','F',51,165,'blond',39,'Old Town'),(6,'Eman Nabil','F',49,175,'gray',38,'Harbor'),(7,'Heba Gaber','F',44,162,'blond',38,'Old Town'),(8,'Wael Sabry','M',26,180,'black',45,'Garden City'),(9,'Ibrahim Farag','M',60,182,'brown',41,'University'),(10,'Tarek Fathy','M',30,184,'gray',40,'Old Town'),(11,'Ibrahim Gaber','M',24,186,'blond',44,'Harbor'),(12,'Ghada Mansour','F',26,170,'brown',36,'University'),(13,'Sherif Tawfik','M',47,186,'black',41,'Garden City'),(14,'Ramy Salem','M',44,171,'gray',42,'University'),(15,'Mona Rashad','F',52,166,'gray',37,'Old Town'),(16,'Bassem Sabry','M',39,172,'blond',45,'Garden City'),(17,'Salma Nasr','F',57,170,'black',37,'Harbor'),(18,'Sherif Wahba','M',61,170,'gray',41,'Downtown'),(19,'Ibrahim Badawy','M',41,189,'black',45,'University'),(20,'Mahmoud Barakat','M',46,192,'brown',42,'Harbor'),(21,'Khaled Nabil','M',50,186,'brown',41,'Old Town'),(22,'Fady Rashad','M',21,170,'brown',43,'University'),(23,'Samia Rashad','F',63,174,'brown',38,'Harbor'),(24,'Sherif Sabry','M',48,170,'brown',44,'Downtown'),(25,'Youssef Radwan','M',45,173,'black',41,'Harbor'),(26,'Ziad Tawfik','M',40,190,'blond',43,'Harbor'),(27,'Dina Badawy','F',59,165,'gray',39,'Downtown'),(28,'Amr Shaker','M',27,186,'brown',43,'Garden City'),(29,'Nour Selim','F',26,167,'brown',36,'Old Town'),(30,'Mona Darwish','F',60,158,'gray',36,'Garden City'),(31,'Aya Nabil','F',52,164,'gray',39,'Downtown'),(32,'Sherif Badawy','M',21,189,'blond',45,'Downtown'),(33,'Farida Anwar','F',24,162,'black',37,'Downtown'),(34,'Amr Hamdy','M',37,172,'blond',44,'Old Town'),(35,'Samia Radwan','F',42,160,'black',38,'Harbor'),(36,'Salma Hegazy','F',35,166,'brown',37,'Garden City'),(37,'Farida Lotfy','F',61,173,'brown',39,'Garden City'),(38,'Ibrahim Salem','M',61,166,'brown',44,'Downtown'),(39,'Karim Gaber','M',24,185,'black',44,'University'),(40,'Bassem Nabil','M',23,174,'brown',40,'Garden City'),(41,'Youssef Sabry','M',38,185,'black',44,'Old Town'),(42,'Mariam Darwish','F',35,170,'blond',37,'Old Town'),(43,'Hossam Selim','M',22,190,'brown',41,'Garden City'),(44,'Ghada Anwar','F',20,155,'brown',36,'Harbor'),(45,'Ghada Rashad','F',40,161,'blond',36,'University'),(46,'Salma Nabil','F',28,173,'gray',36,'University'),(47,'Hany Hamdy','M',44,188,'black',40,'Downtown'),(48,'Ghada Farag','F',24,159,'gray',37,'Downtown'),(49,'Ziad Lotfy','M',42,170,'black',42,'Old Town'),(50,'Samir Nabil','M',28,186,'brown',41,'Garden City'),(51,'Wael Barakat','M',25,166,'black',45,'Garden City'),(52,'Heba Farag','F',51,162,'brown',36,'Garden City'),(53,'Hassan Mansour','M',40,187,'black',40,'Downtown'),(54,'Karim Sabry','M',22,187,'brown',40,'Old Town'),(55,'Omar Sabry','M',28,185,'brown',41,'Downtown'),(56,'Hossam Rashad','M',42,171,'gray',45,'Garden City'),(57,'Ramy Saeed','M',31,170,'brown',45,'Old Town'),(58,'Salma Badawy','F',31,161,'brown',36,'Downtown'),(59,'Samia Barakat','F',45,159,'gray',36,'Downtown'),(60,'Amal Lotfy','F',44,157,'black',36,'Old Town');\nCREATE TABLE vehicles(owner_id int REFERENCES residents(id), plate text, color text, model text);\nINSERT INTO vehicles VALUES (1,'HR-5960','gray','Cerato'),(2,'HQ-3530','gray','Logan'),(3,'HX-3342','gray','Elantra'),(4,'HR-8663','gray','Lancer'),(8,'HQ-7525','gray','Sunny'),(9,'KR-4665','gray','Lancer'),(10,'HY-9447','white','Sunny'),(42,'KQ-8434','gray','Corolla'),(49,'RY-5388','white','Accent'),(39,'AR-2793','gray','Lancer'),(27,'AR-4305','white','Elantra'),(56,'KR-5750','red','Sunny'),(18,'TR-5432','blue','Elantra'),(17,'AX-1605','silver','Corolla'),(50,'WR-9425','gray','Sunny'),(14,'NQ-8080','gray','Logan'),(38,'RY-9301','black','Elantra'),(5,'DR-6614','red','Lancer'),(25,'WR-7630','silver','Elantra'),(33,'CQ-2158','gray','Logan'),(53,'KY-3674','red','Corolla'),(19,'TY-9289','gray','Logan'),(23,'SR-5801','white','Corolla'),(24,'CR-5407','black','Sunny'),(45,'KX-6389','gray','Accent'),(58,'DQ-6071','white','Lancer'),(57,'CQ-6494','white','Sunny'),(21,'NX-9237','gray','Logan'),(44,'DQ-2488','gray','Elantra'),(59,'BR-7545','silver','Accent'),(55,'MQ-5909','gray','Elantra'),(46,'DQ-9670','red','Cerato'),(47,'CY-6343','silver','Logan'),(35,'CX-3371','black','Corolla'),(16,'WY-9282','silver','Lancer'),(7,'ZQ-4767','blue','Corolla'),(11,'AR-6909','gray','Corolla'),(48,'HY-8395','gray','Accent'),(22,'HQ-1308','gray','Logan'),(15,'HR-9016','gray','Elantra'),(12,'HQ-8486','gray','Cerato');\nCREATE TABLE jobs(person_id int REFERENCES residents(id), employer text, role text);\nINSERT INTO jobs VALUES (1,'Star Cafe','waiter'),(2,'Nile Bakery','baker'),(3,'Delta Hospital','nurse'),(4,'Port Authority','driver'),(5,'Pharmacy Life','pharmacist'),(6,'Al-Nour Jewelry','accountant'),(7,'Port Authority','clerk'),(8,'Fit Gym','trainer'),(9,'City Library','nurse'),(10,'Fit Gym','trainer'),(11,'Nile Bakery','baker'),(12,'Star Cafe','barista'),(13,'Delta Hospital','technician'),(14,'Delta Hospital','technician'),(15,'Star Cafe','barista'),(16,'Pharmacy Life','pharmacist'),(17,'Star Cafe','waiter'),(18,'Al-Nour Jewelry','accountant'),(19,'Al-Nour Jewelry','salesman'),(20,'Pharmacy Life','pharmacist'),(21,'Fit Gym','receptionist'),(22,'Delta Hospital','technician'),(23,'Al-Nour Jewelry','salesman'),(24,'Al-Nour Jewelry','accountant'),(25,'Port Authority','clerk'),(26,'Pharmacy Life','pharmacist'),(27,'Fit Gym','trainer'),(28,'Star Cafe','waiter'),(29,'City Library','librarian'),(30,'Fit Gym','receptionist'),(31,'Pharmacy Life','pharmacist'),(32,'Al-Nour Jewelry','accountant'),(33,'Delta Hospital','nurse'),(34,'Delta Hospital','technician'),(35,'Al-Nour Jewelry','accountant'),(36,'Star Cafe','barista'),(37,'Port Authority','driver'),(38,'Port Authority','driver'),(39,'Fit Gym','receptionist'),(40,'Delta Hospital','technician'),(41,'Nile Bakery','baker'),(42,'Fit Gym','trainer'),(43,'Delta Hospital','technician'),(44,'Star Cafe','waiter'),(45,'Fit Gym','receptionist'),(46,'Port Authority','clerk'),(47,'Nile Bakery','baker'),(48,'Star Cafe','barista'),(49,'Star Cafe','barista'),(50,'Delta Hospital','technician'),(51,'City Library','librarian'),(52,'Star Cafe','waiter'),(53,'Nile Bakery','baker'),(54,'Nile Bakery','baker'),(55,'Delta Hospital','technician'),(56,'Pharmacy Life','pharmacist'),(57,'Delta Hospital','technician'),(58,'Al-Nour Jewelry','salesman'),(59,'Star Cafe','waiter'),(60,'Delta Hospital','nurse');\nCREATE TABLE work_shifts(person_id int REFERENCES residents(id), work_date date, start_time time, end_time time, workplace text);\nINSERT INTO work_shifts VALUES (1,'2026-03-13','16:00','23:00','Star Cafe'),(1,'2026-03-15','08:00','14:00','Star Cafe'),(2,'2026-03-14','05:00','13:00','Nile Bakery'),(2,'2026-03-15','05:00','13:00','Nile Bakery'),(3,'2026-03-14','18:00','23:59','Delta Hospital'),(4,'2026-03-14','14:00','22:30','Port Authority'),(5,'2026-03-12','09:00','17:00','Pharmacy Life'),(5,'2026-03-13','18:00','23:00','Pharmacy Life'),(5,'2026-03-14','08:00','16:00','Pharmacy Life'),(5,'2026-03-15','18:00','23:00','Pharmacy Life'),(6,'2026-03-13','16:00','23:00','Al-Nour Jewelry'),(6,'2026-03-14','14:00','22:00','Al-Nour Jewelry'),(7,'2026-03-12','08:00','14:00','Port Authority'),(7,'2026-03-13','09:00','15:00','Port Authority'),(7,'2026-03-14','09:00','17:00','Port Authority'),(8,'2026-03-13','20:00','23:00','Fit Gym'),(9,'2026-03-14','12:00','21:30','City Library'),(10,'2026-03-12','14:00','22:00','Fit Gym'),(10,'2026-03-13','16:00','22:00','Fit Gym'),(10,'2026-03-14','09:00','15:00','Fit Gym'),(10,'2026-03-15','16:00','23:00','Fit Gym'),(11,'2026-03-12','18:00','23:00','Nile Bakery'),(11,'2026-03-13','08:00','16:00','Nile Bakery'),(11,'2026-03-14','14:00','22:00','Nile Bakery'),(14,'2026-03-12','18:00','23:00','Delta Hospital'),(14,'2026-03-14','06:00','14:00','Delta Hospital'),(16,'2026-03-12','14:00','20:00','Pharmacy Life'),(16,'2026-03-14','08:00','14:00','Pharmacy Life'),(17,'2026-03-14','16:00','22:00','Star Cafe'),(17,'2026-03-15','08:00','14:00','Star Cafe'),(18,'2026-03-12','18:00','23:00','Al-Nour Jewelry'),(18,'2026-03-15','14:00','20:00','Al-Nour Jewelry'),(19,'2026-03-12','16:00','22:00','Al-Nour Jewelry'),(19,'2026-03-13','08:00','14:00','Al-Nour Jewelry'),(19,'2026-03-14','09:00','17:00','Al-Nour Jewelry'),(19,'2026-03-15','09:00','15:00','Al-Nour Jewelry'),(20,'2026-03-12','08:00','14:00','Pharmacy Life'),(20,'2026-03-15','06:00','12:00','Pharmacy Life'),(21,'2026-03-13','09:00','15:00','Fit Gym'),(22,'2026-03-12','09:00','17:00','Delta Hospital'),(22,'2026-03-13','14:00','20:00','Delta Hospital'),(22,'2026-03-14','09:00','15:00','Delta Hospital'),(22,'2026-03-15','08:00','16:00','Delta Hospital'),(23,'2026-03-12','14:00','20:00','Al-Nour Jewelry'),(23,'2026-03-13','09:00','15:00','Al-Nour Jewelry'),(23,'2026-03-15','08:00','14:00','Al-Nour Jewelry'),(24,'2026-03-13','16:00','22:00','Al-Nour Jewelry'),(24,'2026-03-15','06:00','12:00','Al-Nour Jewelry'),(25,'2026-03-13','14:00','22:00','Port Authority'),(27,'2026-03-12','16:00','23:00','Fit Gym'),(27,'2026-03-13','18:00','23:00','Fit Gym'),(28,'2026-03-12','06:00','14:00','Star Cafe'),(28,'2026-03-13','14:00','20:00','Star Cafe'),(28,'2026-03-14','08:00','16:00','Star Cafe'),(28,'2026-03-15','09:00','17:00','Star Cafe'),(29,'2026-03-13','16:00','23:00','City Library'),(29,'2026-03-14','09:00','17:00','City Library'),(29,'2026-03-15','14:00','20:00','City Library'),(31,'2026-03-12','06:00','14:00','Pharmacy Life'),(31,'2026-03-13','06:00','14:00','Pharmacy Life'),(31,'2026-03-14','06:00','14:00','Pharmacy Life'),(31,'2026-03-15','09:00','15:00','Pharmacy Life'),(32,'2026-03-13','09:00','17:00','Al-Nour Jewelry'),(32,'2026-03-14','16:00','22:00','Al-Nour Jewelry'),(32,'2026-03-15','08:00','14:00','Al-Nour Jewelry'),(33,'2026-03-14','09:00','17:00','Delta Hospital'),(34,'2026-03-12','06:00','14:00','Delta Hospital'),(35,'2026-03-12','09:00','15:00','Al-Nour Jewelry'),(35,'2026-03-13','14:00','20:00','Al-Nour Jewelry'),(35,'2026-03-14','06:00','12:00','Al-Nour Jewelry'),(35,'2026-03-15','16:00','23:00','Al-Nour Jewelry'),(36,'2026-03-12','06:00','12:00','Star Cafe'),(36,'2026-03-13','06:00','12:00','Star Cafe'),(36,'2026-03-14','14:00','22:00','Star Cafe'),(36,'2026-03-15','08:00','16:00','Star Cafe'),(37,'2026-03-13','16:00','22:00','Port Authority'),(37,'2026-03-15','09:00','17:00','Port Authority'),(38,'2026-03-13','08:00','14:00','Port Authority'),(38,'2026-03-14','08:00','16:00','Port Authority'),(39,'2026-03-12','14:00','22:00','Fit Gym'),(39,'2026-03-14','08:00','14:00','Fit Gym'),(41,'2026-03-12','08:00','16:00','Nile Bakery'),(41,'2026-03-14','09:00','15:00','Nile Bakery'),(41,'2026-03-15','08:00','14:00','Nile Bakery'),(43,'2026-03-13','09:00','15:00','Delta Hospital'),(43,'2026-03-14','16:00','23:00','Delta Hospital'),(43,'2026-03-15','09:00','17:00','Delta Hospital'),(44,'2026-03-12','09:00','15:00','Star Cafe'),(44,'2026-03-13','18:00','23:00','Star Cafe'),(45,'2026-03-12','16:00','23:00','Fit Gym'),(45,'2026-03-13','06:00','14:00','Fit Gym'),(45,'2026-03-14','06:00','14:00','Fit Gym'),(45,'2026-03-15','14:00','20:00','Fit Gym'),(46,'2026-03-12','08:00','16:00','Port Authority'),(46,'2026-03-14','09:00','17:00','Port Authority'),(46,'2026-03-15','06:00','14:00','Port Authority'),(47,'2026-03-13','06:00','14:00','Nile Bakery'),(47,'2026-03-15','14:00','20:00','Nile Bakery'),(49,'2026-03-12','06:00','12:00','Star Cafe'),(49,'2026-03-13','09:00','17:00','Star Cafe'),(49,'2026-03-15','06:00','12:00','Star Cafe'),(50,'2026-03-13','16:00','23:00','Delta Hospital'),(50,'2026-03-15','09:00','17:00','Delta Hospital'),(51,'2026-03-12','06:00','12:00','City Library'),(51,'2026-03-13','08:00','16:00','City Library'),(51,'2026-03-14','06:00','14:00','City Library'),(51,'2026-03-15','16:00','23:00','City Library'),(54,'2026-03-13','14:00','20:00','Nile Bakery'),(54,'2026-03-14','06:00','14:00','Nile Bakery'),(55,'2026-03-12','08:00','14:00','Delta Hospital'),(55,'2026-03-15','16:00','22:00','Delta Hospital'),(56,'2026-03-12','14:00','22:00','Pharmacy Life'),(56,'2026-03-13','18:00','23:00','Pharmacy Life'),(56,'2026-03-15','08:00','16:00','Pharmacy Life'),(57,'2026-03-12','16:00','23:00','Delta Hospital'),(57,'2026-03-13','06:00','14:00','Delta Hospital'),(57,'2026-03-14','14:00','22:00','Delta Hospital'),(59,'2026-03-12','09:00','17:00','Star Cafe'),(59,'2026-03-13','14:00','20:00','Star Cafe'),(59,'2026-03-14','08:00','14:00','Star Cafe'),(60,'2026-03-13','16:00','23:00','Delta Hospital');\nCREATE TABLE card_swipes(person_id int REFERENCES residents(id), place text, swiped_at timestamp);\nINSERT INTO card_swipes VALUES (19,'Metro Station Mar Girgis','2026-03-14 18:12'),(55,'Pharmacy Life','2026-03-14 19:04'),(45,'Delta Hospital','2026-03-14 19:16'),(32,'Star Cafe','2026-03-14 19:20'),(40,'Metro Station Mar Girgis','2026-03-14 19:20'),(2,'Star Cafe','2026-03-14 20:15'),(13,'Star Cafe','2026-03-14 20:39'),(44,'Pharmacy Life','2026-03-14 20:43'),(47,'Star Cafe','2026-03-14 20:57'),(11,'City Library','2026-03-14 21:10'),(1,'Metro Station Mar Girgis','2026-03-14 21:12'),(53,'Star Cafe','2026-03-14 21:13'),(9,'City Library','2026-03-14 21:28'),(8,'Fit Gym','2026-03-14 21:35'),(8,'Fit Gym','2026-03-14 22:20'),(5,'Metro Station Mar Girgis','2026-03-14 22:48');\nCREATE TABLE phone_calls(caller_id int REFERENCES residents(id), callee_id int REFERENCES residents(id), started_at timestamp, duration_sec int, tower_district text);\nINSERT INTO phone_calls VALUES (16,11,'2026-03-14 18:02',83,'Garden City'),(52,17,'2026-03-14 18:03',595,'Harbor'),(23,20,'2026-03-14 18:33',385,'Garden City'),(50,34,'2026-03-14 18:40',388,'University'),(12,16,'2026-03-14 19:03',127,'Downtown'),(1,2,'2026-03-14 19:05',120,'Old Town'),(48,3,'2026-03-14 19:09',317,'Garden City'),(60,52,'2026-03-14 19:45',172,'University'),(2,9,'2026-03-14 20:40',300,'Garden City'),(48,4,'2026-03-14 20:52',548,'Harbor'),(21,58,'2026-03-14 21:10',290,'Downtown'),(24,40,'2026-03-14 21:10',157,'Downtown'),(49,6,'2026-03-14 21:14',200,'Garden City'),(41,28,'2026-03-14 21:32',392,'Downtown'),(35,41,'2026-03-14 21:47',400,'Harbor'),(10,2,'2026-03-14 21:50',140,'Harbor'),(25,24,'2026-03-14 22:09',388,'Harbor'),(15,27,'2026-03-14 22:19',156,'Old Town'),(39,42,'2026-03-14 22:28',550,'University'),(13,34,'2026-03-14 22:41',539,'University'),(36,34,'2026-03-14 22:44',127,'Harbor'),(2,1,'2026-03-14 22:45',90,'Downtown'),(20,41,'2026-03-14 22:59',340,'Downtown'),(15,40,'2026-03-14 23:02',42,'Downtown'),(7,5,'2026-03-14 23:09',296,'University'),(40,36,'2026-03-14 23:12',165,'University');\nCREATE TABLE pawn_sales(person_id int REFERENCES residents(id), item text, sold_at timestamp, price int);\nINSERT INTO pawn_sales VALUES (42,'camera','2026-03-12 16:37',1252),(55,'watch','2026-03-13 10:56',1278),(35,'watch','2026-03-13 13:51',379),(22,'watch','2026-03-13 14:55',407),(1,'gold chain + 2 rings','2026-03-15 10:20',4200),(14,'watch','2026-03-15 17:21',762);\nCREATE TABLE witnesses(id int PRIMARY KEY, name text, position text, distance_m int, lighting text, wears_glasses text);\nINSERT INTO witnesses VALUES (1,'Samia Fouad','Balcony across the street',8,'street lamp','no'),(2,'Hassan Abdo','Night guard of the building next door',15,'bright','no'),(3,'Yassin (kid)','Playing on the corner',60,'dark','no');\nCREATE TABLE witness_statements(id int PRIMARY KEY, witness_id int REFERENCES witnesses(id), statement text);\nINSERT INTO witness_statements VALUES (1,1,'\u0634\u0641\u062a \u0631\u0627\u062c\u0644 (\u0645\u0634 \u0633\u062a) \u0637\u0648\u064a\u0644 \u0634\u0648\u064a\u0629 \u062e\u0631\u062c \u0645\u0646 \u0627\u0644\u0645\u062d\u0644 \u0648\u062c\u0631\u064a. \u0637\u0648\u0644\u0647 \u062a\u0642\u0631\u064a\u0628\u0627 \u0628\u064a\u0646 176 \u0648184 \u0633\u0645.'),(2,2,'\u0627\u0644\u0631\u0627\u062c\u0644 \u0631\u0643\u0628 \u0639\u0631\u0628\u064a\u0629 \u0644\u0648\u0646\u0647\u0627 \u0631\u0645\u0627\u062f\u064a. \u0644\u0648\u062d\u062a\u0647\u0627 \u0643\u0627\u0646\u062a \u0628\u062a\u0628\u062f\u0623 \u0628\u062d\u0631\u0641 H.'),(3,3,'\u0623\u0646\u0627 \u0634\u0641\u062a \u0633\u062a \u0644\u0627\u0628\u0633\u0629 \u0623\u0633\u0648\u062f \u0648\u0628\u0639\u062f\u064a\u0646 \u0631\u0643\u0628\u062a \u0639\u0631\u0628\u064a\u0629 \u062d\u0645\u0631\u0627. \u0627\u0644\u062f\u0646\u064a\u0627 \u0643\u0627\u0646\u062a \u0636\u0644\u0645\u0629 \u0648\u0643\u0646\u062a \u0628\u0639\u064a\u062f.');\nCREATE TABLE evidence(id int PRIMARY KEY, item text, value text);\nINSERT INTO evidence VALUES (1,'shoe print in the back room','size 43'),(2,'time the alarm went off','2026-03-14 21:48'),(3,'time the shop owner locked up','2026-03-14 21:30'),(4,'time the police arrived','2026-03-14 22:10');";
  const SOLUTION = 'karim nabil';
  const KEY = 'sq-challenge-detective';
  const $app = document.getElementById('app');
  const h = (tag, attrs, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === 'class') el.className = v; else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else if (k === 'style') el.style.cssText = v; else if (v !== false && v != null) el.setAttribute(k, v);
    }
    for (const kid of kids.flat(Infinity)) if (kid != null && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    return el;
  };
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const save = (o) => localStorage.setItem(KEY, JSON.stringify({ ...load(), ...o }));
  const stars = (n) => '★'.repeat(n) + '☆'.repeat(3 - n);

  // ---- SQL runner (own worker, read-only) ----
  let worker = null, ready = null, seq = 0, chain = Promise.resolve();
  function spawn() {
    worker = new Worker('sql-worker.js', { type: 'module' });
    ready = new Promise((res) => { const f = (e) => { if (e.data && e.data.ready) { worker.removeEventListener('message', f); res(); } }; worker.addEventListener('message', f); worker.addEventListener('error', () => res()); });
  }
  function runSql(sql) {
    const bad = guard(sql); if (bad) return Promise.resolve({ ok: false, error: bad });
    const p = chain.then(async () => { if (!worker) spawn(); await ready; return new Promise((resolve) => {
      const id = ++seq, w = worker; let done = false;
      const t = setTimeout(() => { if (done) return; done = true; w.terminate(); spawn(); resolve({ ok: false, error: 'الاستعلام أخد وقت طويل (أكتر من 4 ثواني). غالبا فيه join من غير شرط.' }); }, 4000);
      const f = (e) => { if (!e.data || e.data.id !== id || done) return; done = true; clearTimeout(t); w.removeEventListener('message', f); resolve(e.data.res); };
      w.addEventListener('message', f); w.postMessage({ id, job: { setup: SETUP, sql } });
    }); });
    chain = p.catch(() => {}); return p;
  }
  function guard(sql) {
    const s = String(sql || '').replace(/--.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').trim();
    if (!s) return 'اكتب استعلام الأول.';
    if (s.length > 3000) return 'الاستعلام طويل زيادة.';
    if (!/^(select|with|table)\b/i.test(s)) return 'في القضية دي مسموح بس بـ SELECT (انت محقق، مش بتغير الأدلة 😉).';
    if (/;\s*\S/.test(s)) return 'استعلام واحد بس في المرة.';
    if (/\b(pg_sleep|pg_read_file|dblink|set_config|insert|update|delete|drop|alter|create|truncate)\b/i.test(s)) return 'الكلمة دي مش مسموحة في القضية دي. استخدم SELECT بس.';
    return null;
  }
  const resTable = (cols, rows) => h('table', { class: 'res' }, h('tr', null, cols.map((c) => h('th', null, c))), rows.map((r) => h('tr', null, r.map((v) => h('td', null, v === null ? 'NULL' : String(v))))));

  const TABLES = [
    ['residents', 'id, name, gender, age, height_cm, hair, shoe_size, district'],
    ['jobs', 'person_id → residents.id, employer, role'],
    ['work_shifts', 'person_id → residents.id, work_date, start_time, end_time, workplace'],
    ['vehicles', 'owner_id → residents.id, plate, color, model'],
    ['card_swipes', 'person_id → residents.id, place, swiped_at'],
    ['phone_calls', 'caller_id, callee_id → residents.id, started_at, duration_sec, tower_district'],
    ['pawn_sales', 'person_id → residents.id, item, sold_at, price'],
    ['witnesses', 'id, name, position, distance_m, lighting, wears_glasses'],
    ['witness_statements', 'id, witness_id → witnesses.id, statement'],
    ['evidence', 'id, item, value'],
  ];
  const HINTS = [
    'ابدأ بالشهود: اقرا witness_statements واربطها بـ witnesses. مين فيهم شاهد موثوق ومين لأ؟ (بُعد المسافة والإضاءة بيفرقوا).',
    'الشاهدين الموثوقين بيدّوك: الجنس، الطول، لون العربية وأول حرف من اللوحة. اعمل JOIN بين residents و vehicles وطلّع المطابقين بس.',
    'بعد كده استبعد اللي عنده حجة غياب: شوف work_shifts في يوم 2026-03-14 (وقت الإنذار في جدول evidence) و card_swipes. خد بالك: وردية انتهت قبل الجريمة مش حجة، وكمان وردية في يوم تاني مش حجة.',
    'لو فضل اتنين، قارن بينهم بـ evidence (مقاس الحذاء) وبـ pawn_sales بعد الجريمة. تلميح أخير: NOT EXISTS مفيدة جدا في الاستبعاد.',
  ];

  function view() {
    const st = load();
    let hints = 0, wrongs = 0, minPool = null, finished = false;
    const out = h('div'), poolEl = h('div', { class: 'muted' });
    const ta = h('textarea', { spellcheck: 'false', dir: 'ltr' }, 'SELECT * FROM witness_statements');
    const hintBox = h('div'), hintBtn = h('button', { class: 'btn ghost' }, '💡 تلميح (بيقلل النجوم)');
    const notes = h('textarea', { placeholder: 'اكتب هنا ملاحظاتك: مين استبعدته وليه...', style: 'min-height:90px' }, st.notes || '');
    notes.addEventListener('input', () => save({ notes: notes.value }));
    hintBtn.addEventListener('click', () => {
      if (hints >= HINTS.length) return;
      hintBox.append(h('div', { class: 'fb clue' }, '💡 ' + (hints + 1) + '/' + HINTS.length + ': ' + HINTS[hints])); hints++;
      if (hints >= HINTS.length) hintBtn.remove();
    });
    const run = h('button', { class: 'btn' }, '▶ نفذ');
    run.addEventListener('click', async () => {
      run.disabled = true; out.replaceChildren(h('p', { class: 'muted' }, '...'));
      const r = await runSql(ta.value); run.disabled = false;
      if (!r.ok) return out.replaceChildren(h('div', { class: 'fb bad' }, '⚠️ ' + r.error));
      if (!r.hasRows) return out.replaceChildren(h('p', { class: 'muted' }, 'اتنفذ من غير نتيجة.'));
      out.replaceChildren(h('div', { class: 'scroll' }, resTable(r.columns, r.rows.slice(0, 100))), h('p', { class: 'muted' }, r.rows.length + ' صف'));
      const idc = r.columns.findIndex((c) => ['id', 'person_id', 'owner_id', 'name'].includes(c));
      if (idc >= 0 && !r.columns.some((c) => ['statement', 'distance_m', 'position', 'item', 'value'].includes(c)) && r.columns.some((c) => ['name', 'id', 'person_id', 'owner_id'].includes(c)) && r.rows.length > 0) {
        const n = new Set(r.rows.map((x) => x[idc])).size;
        if (n <= 60 && (minPool === null || n < minPool)) minPool = n;
        if (minPool !== null) poolEl.textContent = '🎯 أقل قايمة مشتبه بهم وصلتلها: ' + minPool + ' من 60';
      }
    });
    const nameIn = h('input', { type: 'text', placeholder: 'اسم المجرم (بالإنجليزي زي ما في الجدول)', dir: 'ltr', style: 'width:100%;padding:10px;border-radius:10px;border:1px solid #2d3a57;background:#0b101a;color:inherit;margin:8px 0' });
    const verdict = h('div');
    const accuse = h('button', { class: 'btn' }, '🚨 اتهم');
    accuse.addEventListener('click', () => {
      if (finished) return;
      const a = nameIn.value.trim().toLowerCase().replace(/\s+/g, ' ');
      if (!a) return;
      if (a === SOLUTION) {
        finished = true;
        const s = hints === 0 && wrongs === 0 ? 3 : hints <= 1 && wrongs <= 1 ? 2 : 1;
        const prev = load().stars || 0; save({ stars: Math.max(prev, s), solved: true });
        window.scrollTo(0, 0);
        $app.replaceChildren(h('div', { class: 'big' }, '🕵️'), h('h2', { class: 'center' }, 'قفشت المجرم! \u2066Karim Nabil\u2069 🎉'), h('div', { class: 'big stars' }, stars(s)),
          h('div', { class: 'card' },
            h('p', { style: 'line-height:1.9' }, '📋 الطريق للحل:'),
            h('div', { style: 'line-height:1.9' },
              h('p', null, '1) استبعدت الشاهد الصغير (60 متر، ضلمة) وخدت كلام الشاهدين الموثوقين: راجل، طوله 176-184، عربية رمادي لوحتها بتبدأ بـ H.'),
              h('p', null, '2) JOIN بين residents و vehicles رجّع 5 أشخاص.'),
              h('p', null, '3) استبعدت اللي في وردية وقت الإنذار (21:48) واللي كارت الجيم بتاعه بيثبت إنه كان هناك: فضل Karim Nabil و Mostafa Farag.'),
              h('p', null, '4) مقاس الحذاء في المحل 43: Karim = 43 و Mostafa = 44. وكمان Karim باع دهب في pawn_sales الصبح اللي بعد السرقة.'))),
          h('div', { class: 'center' }, h('button', { class: 'btn', onclick: () => (location.hash = '#/challenges') }, 'رجوع للتحديات')));
        return;
      }
      wrongs++;
      const msg = a === 'mostafa farag' ? 'قريب جدا، بس لسه فيه دليل بيفرق بينه وبين المجرم. قارن مقاس الحذاء وبيع الدهب.' : 'مش هو. الأدلة ما بتشاورش عليه. ارجع لاستعلاماتك وتأكد إنك استبعدت صح.';
      verdict.replaceChildren(h('div', { class: 'fb bad' }, '❌ ' + msg + ' (اتهامات غلط: ' + wrongs + ')'));
    });
    return [
      h('button', { class: 'btn ghost', onclick: () => (location.hash = '#/challenges') }, '→ رجوع'),
      h('h2', null, '🕵️ قضية سرقة محل النور'),
      h('div', { class: 'card' },
        h('p', { style: 'line-height:1.9' }, 'ليلة السبت 14 مارس 2026 اتسرق محل مجوهرات النور في وسط البلد. الشرطة جمعت ملفات عن 60 ساكن في الحي: شغلهم ومواعيد ورديتهم وعربياتهم وكروت الدخول والمكالمات ومبيعات محلات الرهن، وكمان أقوال 3 شهود.'),
        h('p', { style: 'line-height:1.9' }, '🎯 مهمتك: استبعد الناس بالاستعلامات خطوة خطوة لحد ما يفضل واحد أو اتنين، وبعدين قارن الأدلة الأخيرة وسمّي المجرم. مفيش جدول فيه اسم المجرم جاهز، لازم تحلل وتربط.'),
        h('p', { class: 'muted' }, '⚠️ مش كل شاهد موثوق، ومش كل وردية حجة غياب. اقرا التفاصيل كويس.')),
      h('details', { open: true }, h('summary', null, '🗂️ ملفات القضية (الجداول)'), h('div', { class: 'lens' }, TABLES.map(([n, c]) => h('div', { class: 't', style: 'direction:ltr;text-align:left' }, h('b', null, n), h('div', null, c))))),
      ta, h('div', { class: 'row', style: 'margin:8px 0' }, run, hintBtn), poolEl, out, hintBox,
      h('h3', null, '📝 دفتر الملاحظات'), notes,
      h('h3', null, '🚨 جاهز تتهم؟'), nameIn, accuse, verdict,
    ];
  }

  function list() {
    const st = load();
    return [
      h('button', { class: 'btn ghost', onclick: () => (location.hash = '#/') }, '→ رجوع'),
      h('h2', null, '🧩 مرحلة التحديات العملية'),
      h('p', { class: 'muted' }, 'مش مجرد تمارين: هنا بتحلل وتربط وتستنتج زي المحلل الحقيقي. كل عالم له تحديه الكبير.'),
      h('div', { class: 'card world', style: '--c:#336791', onclick: () => (location.hash = '#/challenges/detective') },
        h('div', { class: 'icon' }, '🕵️'),
        h('div', null, h('h3', null, 'PostgreSQL · قضية سرقة محل النور'), h('div', { class: 'muted' }, '60 مشتبه، شهود، ورديات، وقت الجريمة. استبعد لحد ما يفضل المجرم.'), h('div', { class: 'muted' }, st.solved ? 'اتحلت ' + stars(st.stars || 1) : 'لسه ما اتحلتش'))),
      h('div', { class: 'card world', style: '--c:#3572A5', onclick: () => (location.hash = '#/challenges/cipher') },
        h('div', { class: 'icon' }, '🔐'),
        h('div', null, h('h3', null, 'Python · فك الشفرة: الخلية النائمة'), h('div', { class: 'muted' }, '6 رسايل مشفرة بين خلية نائمة. اكتب الكود اللي يفكها رسالة رسالة لحد كلمة سر المخبأ.'), h('div', { class: 'muted' }, caseProgressText(CIPHER_CFG)))),
      h('div', { class: 'card world', style: '--c:#7d3c98', onclick: () => (location.hash = '#/challenges/warroom') },
        h('div', { class: 'icon' }, '🎖️'),
        h('div', null, h('h3', null, 'Python · غرفة العمليات: الحرب السرية'), h('div', { class: 'muted' }, 'إنت ضابط الشفرة في حزب سري. فك رسايل العدو وارمّز تقاريرك قبل الهجوم.'), h('div', { class: 'muted' }, caseProgressText(WAR_CFG)))),
      h('div', { class: 'card world', style: '--c:#555;opacity:.6' }, h('div', { class: 'icon' }, '🔒'), h('div', null, h('h3', null, 'تحديات تانية'), h('div', { class: 'muted' }, 'Excel / Node: جاية قريب'))),
    ];
  }
  // ================= Python big cases engine (cipher + war room) =================
  const caseLoad = (key) => { try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; } };
  const caseSave = (key, o) => localStorage.setItem(key, JSON.stringify({ ...caseLoad(key), ...o }));

  // Python runner over the app's py-worker.js (Pyodide), same message protocol as the main runner
  let pworker = null, pready = null, pseq = 0, pchain = Promise.resolve();
  function pspawn() {
    pworker = new Worker('py-worker.js', { type: 'module' });
    pready = new Promise((res) => {
      const f = (e) => { if (e.data && e.data.ready) { pworker.removeEventListener('message', f); res(); } };
      pworker.addEventListener('message', f); pworker.addEventListener('error', () => res());
    });
  }
  function runPy(code, kind, items) {
    const p = pchain.then(async () => {
      if (!pworker) pspawn(); await pready;
      return new Promise((resolve) => {
        const id = ++pseq, w = pworker; let done = false;
        const t = setTimeout(() => { if (done) return; done = true; w.terminate(); pworker = null; pspawn(); resolve({ ok: false, error: 'الكود أخد وقت طويل (أكتر من 6 ثواني). غالبا فيه loop مش بتخلص.' }); }, 6000);
        const f = (e) => { if (!e.data || e.data.id !== id || done) return; done = true; clearTimeout(t); w.removeEventListener('message', f); resolve(e.data.res); };
        w.addEventListener('message', f);
        w.postMessage({ id, code, kind, stdin: '', items: items || [] });
      });
    });
    pchain = p.catch(() => {}); return p;
  }
  const normText = (s) => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
  const anyLine = (stdout, pred) => { const lines = String(stdout || '').split('\n'); return lines.some((l) => pred(normText(l))) || pred(normText(stdout)); };
  const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const codePre = (txt) => h('pre', { dir: 'ltr', style: 'background:#0b101a;padding:10px;border-radius:10px;white-space:pre-wrap' }, txt);

  function caseProgressText(cfg) {
    const st = caseLoad(cfg.key);
    const c = cfg.stages.filter((s) => st['s' + s.n]).length;
    if (c === cfg.stages.length) return 'اتحلت ' + stars(st.stars || 1);
    return c + '/' + cfg.stages.length + ' مراحل';
  }

  function caseFinal(cfg) {
    const st = caseLoad(cfg.key);
    const s = (st.wrongs || 0) === 0 && (st.hints || 0) <= 1 ? 3 : (st.wrongs || 0) <= 3 && (st.hints || 0) <= 4 ? 2 : 1;
    const prev = caseLoad(cfg.key).stars || 0; caseSave(cfg.key, { stars: Math.max(prev, s), solvedAll: true });
    $app.replaceChildren(
      h('div', { class: 'big' }, cfg.icon),
      h('h2', { class: 'center' }, cfg.finalTitle),
      h('div', { class: 'big stars' }, stars(s)),
      h('div', { class: 'card' }, ...cfg.finalBody),
      h('div', { class: 'center' }, h('button', { class: 'btn', onclick: () => (location.hash = '#/challenges') }, 'رجوع للتحديات')));
  }

  function caseStageView(cfg, stage) {
    const st = caseLoad(cfg.key);
    const solved = !!st['s' + stage.n];
    let hintsUsed = 0;
    const out = h('div');
    const ta = h('textarea', { spellcheck: 'false', dir: 'ltr', style: 'min-height:140px' }, (st.code && st.code[stage.n]) || stage.starter);
    ta.addEventListener('input', () => { const cur = caseLoad(cfg.key); cur.code = cur.code || {}; cur.code[stage.n] = ta.value; localStorage.setItem(cfg.key, JSON.stringify(cur)); });
    const hintBox = h('div');
    const hintBtn = h('button', { class: 'btn ghost' }, '💡 تلميح (بيقلل النجوم)');
    hintBtn.addEventListener('click', () => {
      if (hintsUsed >= stage.hints.length) return;
      hintBox.append(h('div', { class: 'fb clue' }, '💡 ' + (hintsUsed + 1) + '/' + stage.hints.length + ': ' + stage.hints[hintsUsed]));
      hintsUsed++;
      const cur = caseLoad(cfg.key); caseSave(cfg.key, { hints: (cur.hints || 0) + 1 });
      if (hintsUsed >= stage.hints.length) hintBtn.remove();
    });
    const keyBox = h('div');
    const run = h('button', { class: 'btn' }, '▶ نفذ وتحقق');
    const bumpWrongs = () => { const cur = caseLoad(cfg.key); caseSave(cfg.key, { wrongs: (cur.wrongs || 0) + 1 }); };
    const markSolved = () => { const cur = caseLoad(cfg.key); cur['s' + stage.n] = true; localStorage.setItem(cfg.key, JSON.stringify(cur)); };
    const showSolved = () => {
      out.replaceChildren(h('div', { class: 'fb clue' }, '✅ ' + stage.done));
      if (stage.n < cfg.stages.length) {
        out.append(h('div', { class: 'center', style: 'margin-top:10px' }, h('button', { class: 'btn', onclick: () => renderCaseStage(cfg, stage.n + 1) }, 'المرحلة اللي بعدها ⬅')));
      } else {
        caseSave(cfg.key, { solvedAll: true });
        setTimeout(() => caseFinal(cfg), 1200);
      }
    };
    const showEntry = (parts) => {
      keyBox.replaceChildren(
        h('h3', null, stage.entry.title),
        h('div', { class: 'row' },
          h('input', { type: 'text', placeholder: stage.entry.placeholder, dir: 'ltr', style: 'padding:10px;border-radius:10px;border:1px solid #2d3a57;background:#0b101a;color:inherit;width:170px' }),
          h('button', { class: 'btn', onclick: (ev) => {
            const inp = ev.target.previousSibling;
            if (stage.entry.check(inp.value)) { const cur = caseLoad(cfg.key); cur['k' + stage.n] = true; localStorage.setItem(cfg.key, JSON.stringify(cur)); markSolved(); keyBox.replaceChildren(); showSolved(); }
            else { bumpWrongs(); keyBox.append(h('div', { class: 'fb bad' }, '❌ ' + stage.entry.wrongMsg)); }
          } }, 'تأكيد')));
      out.replaceChildren(...parts);
    };
    run.addEventListener('click', async () => {
      const code = ta.value;
      if (!code.trim()) { out.replaceChildren(h('div', { class: 'fb bad' }, '⚠️ اكتب الكود الأول.')); return; }
      if (code.length > 20000) { out.replaceChildren(h('div', { class: 'fb bad' }, '⚠️ الكود طويل زيادة.')); return; }
      run.disabled = true; out.replaceChildren(h('p', { class: 'muted' }, 'بيتم التنفيذ... (أول مرة بتحمل بيئة Python، ممكن ثواني)'));
      let r;
      if (stage.mode === 'call') r = await runPy(code, 'call', stage.tests.map((t) => ({ expr: t.expr })));
      else r = await runPy((stage.data != null ? 'DATA = ' + JSON.stringify(stage.data) + '\n' : '') + code, 'io', []);
      run.disabled = false;
      if (!r || !r.ok) {
        bumpWrongs();
        return out.replaceChildren(h('div', { class: 'fb bad' }, '⚠️ ' + ((r && r.error) || 'حصلت مشكلة في التنفيذ.')));
      }
      const parts = [];
      if (r.stdout && r.stdout.trim()) parts.push(codePre(r.stdout));
      if (stage.mode === 'io') {
        if (!stage.ioCheck(r.stdout)) {
          bumpWrongs();
          parts.push(h('div', { class: 'fb bad' }, '❌ ' + stage.ioFail));
          return out.replaceChildren(...parts);
        }
        if (stage.entry && !caseLoad(cfg.key)['k' + stage.n]) {
          parts.push(h('div', { class: 'fb clue' }, '✅ الشفرة اتفكت صح! باقي خطوة واحدة:'));
          return showEntry(parts);
        }
        markSolved(); return showSolved();
      }
      // call mode
      let passed = 0;
      for (let i = 0; i < stage.tests.length; i++) {
        const t = stage.tests[i], got = r.results && r.results[i];
        if (got && got.ok && eq(got.v, t.expect)) passed++;
        else {
          bumpWrongs();
          parts.push(h('div', { class: 'fb bad' },
            '❌ نجح ' + passed + ' من ' + stage.tests.length + '. الحالة اللي فشلت:',
            codePre('المدخل: ' + t.expr + '\nالمتوقع: ' + JSON.stringify(t.expect) + '\nاللي طلع: ' + (got && got.ok ? JSON.stringify(got.v) : 'Error: ' + (got && got.e)))));
          return out.replaceChildren(...parts);
        }
      }
      if (stage.entry && !caseLoad(cfg.key)['k' + stage.n]) {
        parts.push(h('div', { class: 'fb clue' }, '✅ الدالة شغالة على كل الحالات! باقي خطوة واحدة:'));
        return showEntry(parts);
      }
      markSolved(); showSolved();
    });
    return [
      h('button', { class: 'btn ghost', onclick: () => renderCaseHome(cfg) }, '→ رجوع للقضية'),
      h('h3', null, stage.icon + ' المرحلة ' + stage.n + ' من ' + cfg.stages.length + ': ' + stage.title + (solved ? ' ✅' : '')),
      h('div', { class: 'card' }, h('p', { style: 'line-height:1.9' }, stage.story)),
      h('details', { open: true }, h('summary', null, '📖 الشرح'), h('div', { class: 'card' }, stage.teach.map((line) => line.startsWith('CODE:') ? codePre(line.slice(5)) : h('p', { style: 'line-height:1.9' }, line)))),
      h('div', { class: 'card' }, h('p', { style: 'line-height:1.9' }, '🎯 ' + stage.task)),
      ta,
      h('div', { class: 'row', style: 'margin:8px 0' }, run, hintBtn),
      out, keyBox, hintBox,
    ];
  }

  function renderCaseStage(cfg, n) {
    $app.replaceChildren(...caseStageView(cfg, cfg.stages[n - 1]).flat()); window.scrollTo(0, 0);
  }

  function renderCaseHome(cfg) {
    $app.replaceChildren(...caseView(cfg).flat()); window.scrollTo(0, 0);
  }

  function caseView(cfg) {
    if (!pworker) pspawn();
    const st = caseLoad(cfg.key);
    const rows = cfg.stages.map((s, i) => {
      const done = !!st['s' + s.n];
      const open = done || i === 0 || !!st['s' + (s.n - 1)];
      return h('div', { class: 'node' + (open ? '' : ' locked'), onclick: () => { if (open) renderCaseStage(cfg, s.n); } },
        h('div', { class: 'num' }, done ? '✅' : open ? String(s.n) : '🔒'),
        h('div', { style: 'flex:1' }, h('b', null, s.icon + ' ' + s.title), h('div', { class: 'muted' }, done ? 'اتحلت' : open ? 'متاحة' : 'اقفل اللي قبلها الأول')));
    });
    return [
      h('button', { class: 'btn ghost', onclick: () => (location.hash = '#/challenges') }, '→ رجوع'),
      h('h2', null, cfg.icon + ' ' + cfg.title),
      h('div', { class: 'card' }, cfg.intro.map((p, i) => h('p', { class: i === cfg.intro.length - 1 ? 'muted' : '', style: 'line-height:1.9' }, p))),
      h('p', { class: 'muted' }, caseProgressText(cfg)),
      h('div', { class: 'path', style: '--c:' + cfg.color }, rows),
    ];
  }

  // ================= Case 1: فك الشفرة =================
  const CIPHER_CFG = {
    key: 'sq-challenge-cipher', icon: '🔐', color: '#3572A5',
    title: 'فك الشفرة: الخلية النائمة',
    intro: [
      'المخابرات اعترضت 6 رسايل متبادلة بين خلية نائمة. كل رسالة متشفرة بطريقة أصعب من اللي قبلها، وكل رسالة بتفكها بتقربك من كلمة سر المخبأ.',
      '🎯 مفيش اختيارات ولا جداول جاهزة: إنت اللي هتكتب كود Python يفك كل شفرة بنفسك. كل مرحلة فيها شرحها الأول، وبعدين التنفيذ عليك.',
      'الكود بيتنفذ في المتصفح بتاعك (Pyodide). أول تشغيل ممكن ياخد ثواني وهو بيحمل بيئة Python.',
    ],
    finalTitle: 'فككت الشفرة وقفلت القضية! 🎉',
    finalBody: [
      h('p', { style: 'line-height:1.9' }, '📋 اللي استخدمته عشان توصل لكلمة سر المخبأ:'),
      h('div', { style: 'line-height:1.9' },
        h('p', null, '1) شفرة قيصر: الإزاحة الثابتة بالـ ord و chr وباقي القسمة.'),
        h('p', null, '2) الكسر بالقوة الغاشمة: 25 احتمال بس، جربهم كلهم.'),
        h('p', null, '3) تحليل التكرار: أكتر حرف في الإنجليزي هو e، ومنه المفتاح.'),
        h('p', null, '4) Vigenère: مفتاح كلمة بيتلف على النص.'),
        h('p', null, '5) فك الطبقات: رسالة جوه رسالة، والترتيب الصح هو الحل.')),
    ],
    stages: [
      {
        n: 1, icon: '🅰️', title: 'شفرة قيصر',
        story: 'أول رسالة اعترضناها من الخلية: "khoor zruog". شكلها شفرة قديمة معروفة: شفرة قيصر، كل حرف متزاح عدد ثابت من الخانات في الأبجدية.',
        teach: [
          'قيصر بمفتاح 3 يعني: a تبقى d، و b تبقى e، وهكذا. الفك هو العكس: ارجع بكل حرف 3 خانات ورا.',
          'في Python: الدالة ord(h) بتديك رقم الحرف، و chr(n) بترجع الحرف من رقمه. مثال: ord("a") بـ 97.',
          'CODE:out = chr((ord(ch) - 97 - key) % 26 + 97)',
          'باقي القسمة % 26 بيخلي الأبجدية تلف: a لو رجعت خانة واحدة ورا توصل z.',
          'الحروف هنا small بس. أي حاجة مش حرف (مسافة، نقطة، رقم) تفضل زي ما هي من غير ما تتغير.',
        ],
        task: 'اكتب دالة caesar_decrypt(cipher, key) بترجع (return) النص المفكوك. هنختبرها على رسايل مختلفة وبمفاتيح مختلفة.',
        mode: 'call',
        starter: 'def caesar_decrypt(cipher, key):\n    # اكتب كودك هنا\n',
        tests: [{"expr": "caesar_decrypt(\"khoor zruog\", 3)", "expect": "hello world"}, {"expr": "caesar_decrypt(\"phhw dw wkh eulgjh dw gdzq\", 3)", "expect": "meet at the bridge at dawn"}, {"expr": "caesar_decrypt(\"fdhvdu lv hdvb\", 3)", "expect": "caesar is easy"}, {"expr": "caesar_decrypt(\"aol hnlua slma aol jpaf\", 7)", "expect": "the agent left the city"}],
        hints: [
          'المطلوب return مش print. امشي على النص حرف حرف: لو الحرف بين "a" و "z" طبق المعادلة اللي في الشرح، ولو لأ سيبه زي ما هو.',
          'آخر تلميح حقيقي: جوه الدالة اعمل out فاضي، ولكل ch في cipher: لو "a" <= ch <= "z" ضيف chr((ord(ch) - 97 - key) % 26 + 97)، غير كده ضيف ch زي ما هو. في الآخر return out.',
        ],
        done: 'اتفكت! "meet at the bridge at dawn" — الخلية بتحدد معاد. وصلت رسالة تانية.',
      },
      {
        n: 2, icon: '🔨', title: 'كسر قيصر من غير مفتاح',
        story: 'الرسالة التانية: "esp xppetyr xzgpo ez esp zwo azce le xtoytrse". قيصر برضه، بس المرة دي المفتاح مش معانا.',
        teach: [
          'مفيش غير 25 مفتاح ممكن في قيصر. القوة الغاشمة (brute force) هنا حلال: جربهم كلهم وبص على النتايج.',
          'اكتب دالة crack(cipher) بترجع list فيها 25 نص: الأول مفكوك بمفتاح 1، التاني بمفتاح 2، لحد 25.',
          'تقدر تعيد استخدام فكرة caesar_decrypt جواها (انسخ الدالة ونادِها)، أو تكتب كل حاجة من الأول.',
          'خلي crack تطبع كل احتمال في سطر كمان (print) عشان تشوفهم في النتايج. سطر واحد بس هيبقى كلام مفهوم، ورقمه هو المفتاح.',
        ],
        task: 'اكتب crack(cipher) بترجع قائمة الـ 25 احتمال بالترتيب وتطبعهم، وبعدين اكتب المفتاح اللي طلعلك في الخانة اللي تحت النتايج.',
        mode: 'call',
        starter: 'def crack(cipher):\n    # ارجع list من 25 نص (مفاتيح 1 لـ 25) واطبعهم\n',
        tests: [{ expr: 'crack("esp xppetyr xzgpo ez esp zwo azce le xtoytrse")', expect: ["dro woodsxq wyfon dy dro yvn zybd kd wsnxsqrd", "cqn vnncrwp vxenm cx cqn xum yxac jc vrmwrpqc", "bpm ummbqvo uwdml bw bpm wtl xwzb ib uqlvqopb", "aol tllapun tvclk av aol vsk wvya ha tpkupnoa", "znk skkzotm subkj zu znk urj vuxz gz sojtomnz", "ymj rjjynsl rtaji yt ymj tqi utwy fy rnisnlmy", "xli qiixmrk qszih xs xli sph tsvx ex qmhrmklx", "wkh phhwlqj pryhg wr wkh rog sruw dw plgqljkw", "vjg oggvkpi oqxgf vq vjg qnf rqtv cv okfpkijv", "uif nffujoh npwfe up uif pme qpsu bu njeojhiu", "the meeting moved to the old port at midnight", "sgd lddshmf lnudc sn sgd nkc onqs zs lhcmhfgs", "rfc kccrgle kmtcb rm rfc mjb nmpr yr kgblgefr", "qeb jbbqfkd jlsba ql qeb lia mloq xq jfakfdeq", "pda iaapejc ikraz pk pda khz lknp wp iezjecdp", "ocz hzzodib hjqzy oj ocz jgy kjmo vo hdyidbco", "nby gyyncha gipyx ni nby ifx jiln un gcxhcabn", "max fxxmbgz fhoxw mh max hew ihkm tm fbwgbzam", "lzw ewwlafy egnwv lg lzw gdv hgjl sl eavfayzl", "kyv dvvkzex dfmvu kf kyv fcu gfik rk dzuezxyk", "jxu cuujydw celut je jxu ebt fehj qj cytdywxj", "iwt bttixcv bdkts id iwt das edgi pi bxscxvwi", "hvs asshwbu acjsr hc hvs czr dcfh oh awrbwuvh", "gur zrrgvat zbirq gb gur byq cbeg ng zvqavtug", "ftq yqqfuzs yahqp fa ftq axp badf mf yupzustf"] }],
        entry: {
          title: '🔢 المفتاح كان كام؟', placeholder: 'رقم من 1 لـ 25',
          check: (v) => parseInt(v, 10) === 11,
          wrongMsg: 'مش هو. بص تاني على السطور: مين فيهم كلام مفهوم؟',
        },
        hints: [
          'جوه الدالة اعمل قائمة فاضية، و loop على k من 1 لـ 25، ولكل k فك النص (نفس معادلة مرحلة 1) وضيف النتيجة للقائمة واطبعها. في الآخر return القائمة.',
          'آخر تلميح حقيقي: لما تبص على الـ 25 سطر، هتلاقي سطر واحد مفهوم بيتكلم عن meeting. رقمه هو المفتاح (أكبر من 10).',
        ],
        done: 'المفتاح كان 11. "the meeting moved to the old port at midnight" — غيروا مكان المقابلة. الرسالة الجاية أطول.',
      },
      {
        n: 3, icon: '📊', title: 'تحليل التكرار',
        story: 'الرسالة التالتة طويلة، ومحتاجين نفكها بسرعة قبل ما الخلية تتحرك. هتقعد تجرب 25 مفتاح وتقراهم بعينك؟ فيه طريقة المحققين الأذكى.',
        teach: [
          'في أي نص إنجليزي طويل، أكتر حرف بيتكرار هو e. يعني في النص المشفر، أكتر حرف هيتكرار هو e بعد ما اتشفرت.',
          'عد الحروف بـ Dictionary: لكل حرف في النص (بعد ما تعمله lower)، لو حرف من a لـ z زود عداده.',
          'CODE:counts[ch] = counts.get(ch, 0) + 1',
          'أكبر قيمة في الـ Dictionary هي الحرف الأكثر تكرارا: max(counts, key=counts.get).',
          'المفتاح = المسافة بين الحرف ده و e: (ord(top) - ord("e")) % 26.',
        ],
        task: 'اكتب دالتين: most_common(text) بترجع أكتر حرف متكرر (حروف بس، small)، و guess_key(cipher) بترجع المفتاح المتوقع على أساس إن الأكثر تكرارا هو e.',
        mode: 'call',
        starter: 'def most_common(text):\n    # اكتب كودك هنا\n\ndef guess_key(cipher):\n    # اكتب كودك هنا\n',
        tests: [
          { expr: 'most_common("aol jlss dpss nhaoly ulhy aol ypcly dhylovbzl ilmvyl aol aopyk ilss. rllw aol johuuls jslhu huk dhpa mvy aol nyllu spnoa. aoyll tltilyz dpss tlla aol rllwly aolyl huk aolu slhcl ilmvyl zbuypzl.")', expect: 'l' },
          { expr: 'guess_key("aol jlss dpss nhaoly ulhy aol ypcly dhylovbzl ilmvyl aol aopyk ilss. rllw aol johuuls jslhu huk dhpa mvy aol nyllu spnoa. aoyll tltilyz dpss tlla aol rllwly aolyl huk aolu slhcl ilmvyl zbuypzl.")', expect: 7 },
        ],
        hints: [
          'most_common: اعمل counts فاضي، امشي على text.lower() حرف حرف، ومتعدش غير الحروف ("a" <= ch <= "z"). في الآخر max(counts, key=counts.get).',
          'آخر تلميح حقيقي: guess_key سطر واحد: return (ord(most_common(cipher)) - ord("e")) % 26.',
        ],
        done: 'صح! المفتاح 7، وتحليل التكرار فك الرسالة كلها في لحظة. الخلية هتغير طريقتها...',
      },
      {
        n: 4, icon: '🔑', title: 'شفرة Vigenère',
        story: 'زي ما توقعنا: الخلية بطلت قيصر. الرسالة الرابعة متشفرة بـ Vigenère — مفتاح كلمة بدل رقم، وأصعب بكتير في الكسر.',
        teach: [
          'المفتاح كلمة، مثلا "key". كل حرف منها بيحدد إزاحة: k يعني 10، e يعني 4، y يعني 24.',
          'الحرف الأول من النص يتزاح 10، التاني 4، التالت 24، الرابع يرجع لـ 10 تاني... الكلمة بتلف.',
          'الفك هو العكس: اطرح الإزاحة من كل حرف. المعادلة نفس قيصر، بس k بتتغير مع كل حرف.',
          'المسافات والعلامات تفضل زي ما هي، وما بتستهلكش حرف من المفتاح: المؤشر على الكلمة يتحرك بس لما تفك حرف حقيقي.',
        ],
        task: 'اكتب vigenere_decrypt(cipher, key) بترجع النص المفكوك. لو كتبتها صح، "lxfopv ef rnhr" بمفتاح "lemon" هتديك جملة مفهومة.',
        mode: 'call',
        starter: 'def vigenere_decrypt(cipher, key):\n    # اكتب كودك هنا\n',
        tests: [{"expr": "vigenere_decrypt(\"lxfopv ef rnhr\", \"lemon\")", "expect": "attack at dawn"}, {"expr": "vigenere_decrypt(\"dlc oeevi fkw jkrboh\", \"key\")", "expect": "the eagle has landed"}, {"expr": "vigenere_decrypt(\"repv ar ft ejs fffp jchxe\", \"falcon\")", "expect": "meet me at the safe house"}],
        hints: [
          'محتاج مؤشر j يبدأ من 0. لكل حرف من النص: لو حرف، احسب k = ord(key[j % len(key)]) - 97، فك بيه، وحرك j خطوة. لو مش حرف، ضيفه وسيب j مكانه.',
          'آخر تلميح حقيقي: الفك chr((ord(ch) - 97 - k) % 26 + 97) — نفس قيصر بالظبط، الفرق الوحيد إن k جاية من حرف المفتاح الحالي.',
        ],
        done: 'Vigenère اتكسر! الخلية حسّت إن فيه حد بيقرا — الخطاب الأخير منهم اتعقد.',
      },
      {
        n: 5, icon: '📜', title: 'الخطاب الكبير',
        story: 'اعترضنا خطاب كامل، صفحة كاملة متشفرة بقيصر بمفتاح مجهول. جواه تفاصيل العملية كلها، وأهم حاجة: الكلمة السرية للمظروف الأخير.',
        teach: [
          'النص المشفر جاهز في متغير اسمه DATA — استخدمه على طول في كودك (متعرفهوش بنفسك).',
          'معاك سلاحين: تجرب المفاتيح الـ 25 زي مرحلة 2، أو تحليل التكرار من مرحلة 3. النص طويل، فالتكرار شغال ممتاز هنا.',
          'بعد ما تفك، دوّر في النص على جملة "the key word is" — الكلمة اللي بعدها هي المطلوبة.',
          'CODE:word = text.split("the key word is ")[1].split()[0]',
        ],
        task: 'اكتب كود يفك DATA ويطبع (print) الكلمة السرية بس في سطر لوحدها: كلمة واحدة، حروف small، من غير نقط أو مسافات.',
        mode: 'io',
        data: 'tzxgm litkkhp, max vxee bl fhobgz max vktmxl hg ykbwtr gbzam makhnza max hew ktbeptr. max zntkwl vatgzx tm xexoxg tgw max atkuhnk ztmx vhwx bl yhnk mph gbgx. dxxi max ktwbh lbexgm ngmbe max mabkw lbzgte. max dxr phkw bl ytevhg. unkg mabl exmmxk tymxk kxtwbgz.',
        starter: '# المتغير DATA جاهز فيه الخطاب المشفر\n# فك الشفرة واطبع الكلمة السرية\n',
        ioCheck: (out) => anyLine(out, (l) => l.replace(/[^a-z]/g, '') === 'falcon'),
        ioFail: 'الكلمة اللي طلعت مش هي المطلوبة. اطبع الكلمة السرية بس في سطر لوحدها (small، من غير نقط أو مسافات).',
        hints: [
          'عد الحروف في DATA (small بس)، لقّي الأكثر تكرارا، احسب المفتاح من e زي مرحلة 3، وفك الخطاب كله.',
          'آخر تلميح حقيقي: بعد الفك هتلاقي جملة فيها "the key word is ...". اطبع الكلمة اللي بعدها بس (split هيوصلك ليها).',
        ],
        done: 'الكلمة السرية: falcon. خزنها كويس — دي مفتاح المظروف الأخير.',
      },
      {
        n: 6, icon: '🎯', title: 'المظروف الأخير',
        story: 'المظروف الأخير من الخلية، ومتشفر بطبقتين فوق بعض: الأول شفرة قيصر، وفوقيها طبقة Vigenère بالكلمة السرية اللي طلعت من الخطاب. مفيش رسايل بعدها — دي النهاية.',
        teach: [
          'النص المشفر جاهز في متغير اسمه DATA.',
          'الترتيب مهم: فك Vigenère الأول بمفتاح "falcon" (الكلمة اللي طلعت من مرحلة 5). الناتج لسه مشفر — دي طبقة قيصر.',
          'بعدها اكسر قيصر زي ما عملت في مرحلة 2 أو 3، ودوّر على الجملة اللي فيها "password is".',
        ],
        task: 'اكتب كود يفك الطبقتين بالترتيب ويطبع كلمة سر المخبأ في سطر لوحدها: كلمة واحدة، small، من غير نقط.',
        mode: 'io',
        data: 'sqgkh jelxb. pcr atpacbclo lvfapyny va irkzaqq. bakrim, ddz cilcsjel bc lcbmgst.',
        starter: '# المتغير DATA جاهز فيه الرسالة المشفرة بطبقتين\n# 1) فك Vigenère بالكلمة من مرحلة 5   2) اكسر قيصر   3) اطبع كلمة السر\n',
        ioCheck: (out) => anyLine(out, (l) => l.replace(/[^a-z]/g, '') === 'phoenix'),
        ioFail: 'لسه مش هي. فك Vigenère الأول، وبعدين اكسر قيصر، واطبع الكلمة اللي بعد "password is" في سطر لوحدها.',
        hints: [
          'الخطوة الأولى vigenere_decrypt(DATA, "falcon") — لو كتبت الدالة في مرحلة 4 انسخها هنا. الناتج هيبقى شكله مقلقل، ده طبيعي: لسه طبقة قيصر.',
          'آخر تلميح حقيقي: جرب على ناتج Vigenère كل المفاتيح من 1 لـ 25، ودوّر على نص فيه "password is" — الكلمة اللي بعدها هي المطلوبة، اطبعها من غير النقطة.',
        ],
        done: '',
      },
    ],
  };

  // ================= Case 2: غرفة العمليات =================
  const WAR_CFG = {
    key: 'sq-challenge-warroom', icon: '🎖️', color: '#7d3c98',
    title: 'غرفة العمليات: الحرب السرية',
    intro: [
      'إنت ضابط الشفرة في حزب "الدرع"، وفي حرب خفية بينك وبين 3 أحزاب: الذئاب (wolves)، العقارب (scorpions)، والصقور (falcons). واحد فيهم بيحضر هجوم عليكم.',
      'غرفة العمليات بتبعتلك رسايل مشفرة وإنت بترد عليها مشفر. وفي نفس الوقت بترصد ترددات العدو وتحاول تفك رسايلهم.',
      '🎯 مهمتك النهائية: قبل الفجر، لازم تكون عرفت مين اللي هيهجم، وإمتى، ومنين، وبأسلحة إيه — وتبعت تقرير مشفر للقاعدة عشان تجهزلك الدفاع والتعزيزات.',
      'نصيحة: تحدي "فك الشفرة" بيعلّم نفس الأدوات خطوة بخطوة. هنا المعركة الحقيقية: هتفك شفرات العدو وترمّز (encrypt) رسايلك كمان.',
    ],
    finalTitle: 'التقرير وصل والقاعدة ردت! 🎖️',
    finalBody: [
      h('p', { style: 'line-height:1.9' }, '📡 رد غرفة العمليات: "أحسنت يا ضابط. التعزيزات في الطريق: 200 جندي ومدفعية مضادة على التلة الشرقية، ودعم جوي يوصل قبل الفجر. الهجوم هيتكسر قبل ما يبدأ."'),
      h('p', { style: 'line-height:1.9' }, '📋 اللي عملته في المهمة:'),
      h('div', { style: 'line-height:1.9' },
        h('p', null, '1) فكيت رسايل القاعدة (قيصر بمفتاح معروف).'),
        h('p', null, '2) رمّزت ردودك للقاعدة (caesar encrypt).'),
        h('p', null, '3) كسرت أول اعتراض بالقوة الغاشمة (الوقت: الجمعة الفجر).'),
        h('p', null, '4) كسرت التاني بتحليل التكرار (الأسلحة والمكان).'),
        h('p', null, '5) فكيت خطة العدو بـ Vigenère (الحزب المهاجم).'),
        h('p', null, '6) رمّزت التقرير النهائي وبعته للقاعدة.')),
    ],
    stages: [
      {
        n: 1, icon: '📡', title: 'رسالة القاعدة',
        story: 'أول رسالة من غرفة العمليات وصلت مشفرة. شيفرة القاعدة معروفة ليك: قيصر بمفتاح 5.',
        teach: [
          'قيصر: كل حرف متزاح عدد ثابت. القاعدة بتستخدم مفتاح 5: a تبقى f.',
          'الفك هو العكس: ارجع بكل حرف 5 خانات. الدالة ord(h) بتديك رقم الحرف، و chr(n) بترجع الحرف من رقمه.',
          'CODE:out = chr((ord(ch) - 97 - key) % 26 + 97)',
          'غير الحروف (مسافات وعلامات) تفضل زي ما هي.',
        ],
        task: 'اكتب caesar_decrypt(cipher, key) بترجع (return) النص المفكوك. أول اختبار هو رسالة القاعدة نفسها.',
        mode: 'call',
        starter: 'def caesar_decrypt(cipher, key):\n    # اكتب كودك هنا\n',
        tests: [{"expr": "caesar_decrypt(\"fljsy kfqhts, bj nsyjwhjuyji jsjrd ywfkknh. gwjfp ymjnw htijx fsi wjutwy gjktwj kwnifd.\", 5)", "expect": "agent falcon, we intercepted enemy traffic. break their codes and report before friday."}, {"expr": "caesar_decrypt(\"mtqi dtzw utxnynts\", 5)", "expect": "hold your position"}, {"expr": "caesar_decrypt(\"ajmrx brunwln dwcru mjfw\", 9)", "expect": "radio silence until dawn"}],
        hints: [
          'المطلوب return مش print. امشي على النص حرف حرف: لو الحرف بين "a" و "z" طبق معادلة الشرح، ولو لأ سيبه زي ما هو.',
          'آخر تلميح حقيقي: لكل ch في cipher: لو "a" <= ch <= "z" ضيف chr((ord(ch) - 97 - key) % 26 + 97)، غير كده ضيف ch. وفي الآخر return.',
        ],
        done: 'رسالة القاعدة: "agent falcon, we intercepted enemy traffic. break their codes and report before friday." — القاعدة مستنية تأكيد الاستلام.',
      },
      {
        n: 2, icon: '📤', title: 'رد مشفر',
        story: 'القاعدة بعتت تعليمات تانية: "لما توصلك الرسالة دي، أكد الاستلام بنفس الشيفرة". المرة دي إنت اللي هترمّز، مش بس تفك.',
        teach: [
          'التشفير عكس الفك بالظبط: بدل ما تطرح المفتاح، اجمعه.',
          'CODE:out = chr((ord(ch) - 97 + key) % 26 + 97)',
          'لو فهمت caesar_decrypt، دي نفسها بس بإشارة + بدل −.',
        ],
        task: 'اكتب caesar_encrypt(plain, key) بترجع النص المرمز. القاعدة هتختبرك على 3 رسايل قبل ما تبعت حقيقي.',
        mode: 'call',
        starter: 'def caesar_encrypt(plain, key):\n    # اكتب كودك هنا\n',
        tests: [{"expr": "caesar_encrypt(\"report ready\", 5)", "expect": "wjutwy wjfid"}, {"expr": "caesar_encrypt(\"the base is safe\", 3)", "expect": "wkh edvh lv vdih"}, {"expr": "caesar_encrypt(\"attack confirmed\", 5)", "expect": "fyyfhp htsknwrji"}],
        hints: [
          'خد caesar_decrypt بتاعتك وغير إشارة واحدة: + key بدل − key.',
          'آخر تلميح حقيقي: chr((ord(ch) - 97 + key) % 26 + 97) لكل حرف، وغير الحروف زي ما هو.',
        ],
        done: 'التأكيد اتبعت مشفر ✅ القاعدة ردت: "ابدأ الرصد. أي رسالة عدو تفكها، بلّغنا فورا."',
      },
      {
        n: 3, icon: '🕵️', title: 'أول اعتراض',
        story: 'الراديو سجل تردد غريب: رسالة قصيرة من العدو، قيصر بس بمفتاح مجهول: "sevqnl ng qnja jr zbir. jnvg sbe gur fvtany."',
        teach: [
          'المفتاح واحد من 25 بس. جربهم كلهم: فك النص بكل مفتاح من 1 لـ 25 واطبع كل محاولة في سطر.',
          'سطر واحد بس هيطلع كلام مفهوم. اقراه كويس — دي أول معلومة عن الهجوم.',
        ],
        task: 'اكتب كود يكسر الرسالة واطبع النص المفكوك الصحيح (السطر المفهوم). المعلومة اللي فيها هتحتاجها في التقرير النهائي.',
        mode: 'io',
        starter: '# الرسالة المعترضة:\nmsg = "sevqnl ng qnja jr zbir. jnvg sbe gur fvtany."\n# اكسرها واطبع النص الصح\n',
        ioCheck: (out) => anyLine(out, (l) => l === normText('friday at dawn we move. wait for the signal.')),
        ioFail: 'لسه مش هي. اطبع السطر المفهوم بس بعد ما تكسر الشفرة.',
        hints: [
          'اعمل دالة فك قيصر (زي مرحلة 1) و loop على k من 1 لـ 25 واطبع: print(k, dec(msg, k)) — وبص على السطور.',
          'آخر تلميح حقيقي: السطر المفهوم بيبدأ بـ friday. المفتاح بين 10 و 20.',
        ],
        done: '"friday at dawn we move. wait for the signal." — الهجوم الجمعة الفجر. بس مين؟ وبإيه؟ كمل رصد.',
      },
      {
        n: 4, icon: '🔥', title: 'ثاني اعتراض',
        story: 'رسالة أطول من نفس التردد، والمفتاح اتغير. تجربة الـ 25 مفتاح بعينك هتضيع وقت — والهجوم قرب.',
        teach: [
          'النصوص الطويلة ليها نقطة ضعف: التكرار. في الإنجليزي أكتر حرف بيتكرار هو e.',
          'عد الحروف بـ Dictionary، وأكتر حرف في النص المشفر هو e بعد التشفير. المفتاح = (ord(top) - ord("e")) % 26.',
          'CODE:counts[ch] = counts.get(ch, 0) + 1',
        ],
        task: 'النص جاهز في متغير DATA. اكسره بتحليل التكرار (أو أي طريقة) واطبع الرسالة المفكوكة كاملة. فيها الأسلحة ومكان الهجوم.',
        mode: 'io',
        data: 'cqn jacruunah jwm cqn axltncb jan anjmh. cqn bcartn fruu lxvn oaxv cqn njbcnaw qruu. tnny cqn ajmrxb brunwc dwcru cqn ujbc vxvnwc. cnuu wx xwn xdcbrmn cqn lnuu.',
        starter: '# المتغير DATA جاهز فيه الرسالة المعترضة\n# اكسرها واطبع النص المفكوك\n',
        ioCheck: (out) => anyLine(out, (l) => l === normText('the artillery and the rockets are ready. the strike will come from the eastern hill. keep the radios silent until the last moment. tell no one outside the cell.')),
        ioFail: 'لسه مش هي. اطبع الرسالة المفكوكة كاملة في سطر واحد.',
        hints: [
          'عد الحروف في DATA.lower() (الحروف بس)، لقّي الأكثر تكرارا، والمفتاح = (ord(top) - ord("e")) % 26. بعدها فك بيه.',
          'آخر تلميح حقيقي: top = max(counts, key=counts.get)، وبعد الفك هتلاقي جملة عن artillery و rockets.',
        ],
        done: '"the artillery and the rockets are ready. the strike will come from the eastern hill." — مدفعية وصواريخ من التلة الشرقية. فضل نعرف مين.',
      },
      {
        n: 5, icon: '🔑', title: 'خطة العدو الكبيرة',
        story: 'أهم اعتراض لحد دلوقتي: العدو بعت خطته الكبيرة بشفرة Vigenère. وجاسوسنا جواهم بعت معلومة خطيرة: المفتاح هو اسم الحزب اللي قائد الهجوم — بس محدش يعرف مين فيهم.',
        teach: [
          'Vigenère: المفتاح كلمة، كل حرف منها إزاحة، والكلمة بتلف على النص. المسافات والعلامات متستهلكش حرف من المفتاح.',
          'عندك 3 مرشحين بس للمفتاح: wolves و scorpions و falcons. جربهم التلاتة — مفتاح واحد بس هيطلع كلام مفهوم.',
          'اللي هيتفك صح هو الحزب المهاجم.',
        ],
        task: 'النص في DATA. اكتب vigenere_decrypt(cipher, key) وجرّب أسماء الأحزاب التلاتة، واطبع الخطة المفكوكة. وبعدين جاوب في الخانة: مين الحزب اللي هيهجم؟',
        mode: 'io',
        data: 'kecieqcak okzc amoq lzg ojhiiyl. oqzmta oav xcztdvg flsa pvwqbq. ydqfp iw huw kecieqcak.',
        starter: '# المتغير DATA جاهز فيه خطة العدو المشفرة\ndef vigenere_decrypt(cipher, key):\n    # اكتب كودك هنا\n\n# جرب: wolves / scorpions / falcons واطبع النتايج\n',
        ioCheck: (out) => anyLine(out, (l) => l.includes('scorpions will lead the assault')),
        ioFail: 'لسه ما اتفكتش. جرب أسماء الأحزاب التلاتة كمفتاح واطبع النص اللي يطلع مفهوم.',
        entry: {
          title: '⚔️ مين الحزب اللي هيهجم؟', placeholder: 'اسم الحزب بالإنجليزي',
          check: (v) => ['scorpions', 'العقارب'].includes(String(v || '').trim().toLowerCase()),
          wrongMsg: 'لأ. بص على النص اللي اتفك صح: مين اللي هيقود الهجوم؟',
        },
        hints: [
          'انسخ vigenere_decrypt (أو اكتبها من الشرح) وبعدين: print(vigenere_decrypt(DATA, "wolves")) — وكرر مع scorpions و falcons.',
          'آخر تلميح حقيقي: الحزب الصح هو اللي الخطة بتمدحه في آخرها (glory to the ...).',
        ],
        done: '"scorpions will lead the assault..." — العقارب هم المهاجمين. اكتملت المعلومات: مين، إمتى، منين، وبإيه. ابعت التقرير!',
      },
      {
        n: 6, icon: '📨', title: 'التقرير النهائي',
        story: 'الفجر قرب. القاعدة مستنية تقريرك: مين، إمتى، منين، وبأسلحة إيه. والتقرير لازم يتبعت مشفر بـ Vigenère بمفتاح القاعدة السري للرسايل المهمة: "shield".',
        teach: [
          'جمع المعلومات اللي طلعتها من الاعتراضات في جملة واحدة بالصيغة دي بالظبط (حروف small):',
          'CODE:<party> attack <day> at <time> from the <place> with <weapons>',
          'مثال بمعلومات وهمية: "wolves attack monday at noon from the north gate with tanks"',
          'Vigenère encrypt عكس decrypt بالظبط: اجمع الإزاحة بدل ما تطرحها.',
        ],
        task: 'اكتب vigenere_encrypt(plain, key)، كوّن التقرير بالمعلومات الصح اللي جمعتها، واطبع النص المشفر. القاعدة هتفكه عندهم — لو حرف غلط، التعزيزات هتروح غلط.',
        mode: 'io',
        starter: 'def vigenere_encrypt(plain, key):\n    # اكتب كودك هنا\n\nreport = ""  # التقرير بالصيغة المطلوبة\n# اطبع النص المشفر\n',
        ioCheck: (out) => anyLine(out, (l) => l === normText('kjwvalgua eewsjs jclvhg ee gsdv jcre api pdkamvy kast atwz hzxtodlzc lqv ywgvhlz')),
        ioFail: 'التشفير مش مظبوط أو التقرير ناقص. تأكد من الصيغة بالظبط، وإن encrypt بتجمع الإزاحة مش بتطرحها.',
        hints: [
          'vigenere_encrypt نفس decrypt بإشارة +: chr((ord(ch) - 97 + k) % 26 + 97)، والمؤشر على المفتاح يتحرك على الحروف بس.',
          'آخر تلميح حقيقي: التقرير هو: scorpions attack friday at dawn from the eastern hill with artillery and rockets — شفّره بمفتاح shield واطبع الناتج.',
        ],
        done: '',
      },
    ],
  };

  window.CHALLENGES = {
    route(sub) { $app.replaceChildren(...(sub === 'detective' ? view() : sub === 'cipher' ? caseView(CIPHER_CFG) : sub === 'warroom' ? caseView(WAR_CFG) : list()).flat()); window.scrollTo(0, 0); },
    card() { const st = load(); return h('div', { class: 'card world', style: '--c:#c0392b', onclick: () => (location.hash = '#/challenges') }, h('div', { class: 'icon' }, '🧩'), h('div', null, h('h3', null, 'مرحلة التحديات العملية'), h('div', { class: 'muted' }, 'قضايا وتحديات كبيرة بتحلل فيها وتربط بنفسك'), h('div', { class: 'muted' }, (() => { const n = (st.solved ? 1 : 0) + (caseLoad('sq-challenge-cipher').solvedAll ? 1 : 0) + (caseLoad('sq-challenge-warroom').solvedAll ? 1 : 0); return n + '/3 اتحل'; })()))); },
  };
})();
