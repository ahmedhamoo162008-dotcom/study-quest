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
      h('div', { class: 'card world', style: '--c:#555;opacity:.6' }, h('div', { class: 'icon' }, '🔒'), h('div', null, h('h3', null, 'تحديات الأعوام التانية'), h('div', { class: 'muted' }, 'Python / Excel / Node: جاية قريب'))),
    ];
  }
  window.CHALLENGES = {
    route(sub) { $app.replaceChildren(...(sub === 'detective' ? view() : list()).flat()); window.scrollTo(0, 0); },
    card() { const st = load(); return h('div', { class: 'card world', style: '--c:#c0392b', onclick: () => (location.hash = '#/challenges') }, h('div', { class: 'icon' }, '🧩'), h('div', null, h('h3', null, 'مرحلة التحديات العملية'), h('div', { class: 'muted' }, 'قضايا وتحديات كبيرة بتحلل فيها وتربط بنفسك'), h('div', { class: 'muted' }, st.solved ? '1/1 اتحل' : '0/1 اتحل'))); },
  };
})();
