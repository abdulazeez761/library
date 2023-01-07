-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: college
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `majors`
--

DROP TABLE IF EXISTS `majors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `majors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `arts` varchar(255) DEFAULT NULL,
  `Science` varchar(255) DEFAULT NULL,
  `Languages` varchar(255) DEFAULT NULL,
  `Veterinary medicine` varchar(255) DEFAULT NULL,
  `Engineering` varchar(255) DEFAULT NULL,
  `Shari’a` varchar(255) DEFAULT NULL,
  `Physical Education` varchar(255) DEFAULT NULL,
  `Information Technology` varchar(255) DEFAULT NULL,
  `Tourism and Hotel Management` varchar(255) DEFAULT NULL,
  `Mass Communication` varchar(255) DEFAULT NULL,
  `Pharmacy` varchar(255) DEFAULT NULL,
  `Medicine` varchar(255) DEFAULT NULL,
  `Educational Science` varchar(255) DEFAULT NULL,
  `Dentistry` varchar(255) DEFAULT NULL,
  `Business and economic` varchar(255) DEFAULT NULL,
  `Nursing` varchar(255) DEFAULT NULL,
  `Law` varchar(255) DEFAULT NULL,
  `Architecture & Design` varchar(255) DEFAULT NULL,
  `Applied Medical Sciences` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `majors`
--

LOCK TABLES `majors` WRITE;
/*!40000 ALTER TABLE `majors` DISABLE KEYS */;
INSERT INTO `majors` VALUES (1,'culinary arts','chemistry','Arabic ','','Civil Engineering','الدراسات الاسلامية','Football','3D Printing','archeology','scientific press','Pharmaceutical Technology','Nursing','Special Education','Oral,and Maxillofacial Surgery,Oral ','Accounting','Registered Nursing','Legal Studies, General*',NULL,'Physiology'),(2,'graphic design','Physics','German',NULL,'Nuclear Engineering.','الفقه و اصوله','Handball','Aerospace Engineering','Tourism Administration','cinema and film','Medical Pharmaceutical Chemistry and Pharmacognosy','General medicine','Teaching Foreign Languages','Conservative Dentistry','Accounting Technician','Family Practice Nurse/Nursing','Court Reporting*',NULL,'Nanoscience and Nanotechnology.'),(3,'music and drama','Maths','Italian',NULL,'Aerospace Engineering.','أصول الدين','Basketball','Animation and Multimedia','Tourism Guiding','radio press','Nutrition','Pediatrics','Classroom Teacher','Pediatric Dentistry,Orthodontics and Preventive Dentistry','Business Administration & Management, General','Nursing Administration','Law (Pre-Law)',NULL,'Neuroscience'),(4,'arts , design and music','geology','Spanish',NULL,'Chemical Engineering.','الدعوة و الإعلام','Boxing','Artificial Intelligence','hotel management','fashion and fashion','Pharmacology and Biomedical Sciences','dentistry','Counseling and Mental','Removable Prosthodontics','Hotel/Motel Management','Nursing Practice','Legal Administrative Assisting/Secretarial*',NULL,'Nutrition and Dietetics.'),(5,'visual arts','plant','Dutch',NULL,' Industrial Engineering.','القضاء الشرعي',' Fitness Coach','Astronomy','Hotel and restaurants','journalsim',NULL,'heart surgery','Teaching English ',NULL,'Human Resources Development/Training','Other Registered Nursing, Nursing Administration, Nursing Research and Clinical Nursing','Paralegal/Legal Assistant',NULL,'Nutrition Science.'),(6,'fashin design','Animal','Romanian',NULL,'Structural Engineering','تكنولوجيا التعليم','Weightlifting','Audio Engineering','cultural resource management','international press',NULL,'Psychiatry','Kindergartens',NULL,'Human Resources Management','Nursing Science','Social Sciences, General',NULL,'Pathology'),(7,NULL,'insects','Portuguese',NULL,'Electrical Engineering.','الفنون الاسلامية',NULL,'Computer Engineering','Managing and preserving heritage resources',NULL,NULL,'Nuclear medicine','Educational Psychology',NULL,'International Business Management','Nurse Anesthetist','Anthropology',NULL,'Pharmacology'),(8,NULL,'space and astronomy','Turkish ',NULL,'Architectural Engineering.Environmental Engineering','الاقتصاد و التعاون الدولي',NULL,'computer science','Preservation of antiquities',NULL,NULL,'Kidney disease','Learning Disabilities',NULL,'Labor/Industrial Relations','Adult Health Nurse/Nursing','Criminology',NULL,'Physics'),(9,NULL,'Bophysics','Greek',NULL,'Environmental Engineering',NULL,NULL,'network security',NULL,NULL,NULL,'Diseases of the glands','Elementary Education',NULL,'Logistics & Materials Management','Public Health/Community Nurse/Nursing','Economics',NULL,'Physiology'),(10,NULL,'Petroleum sciences','Filipino',NULL,'Mechanical Engineering',NULL,NULL,'data science',NULL,NULL,NULL,'emergency medicine','Learning Technology',NULL,'Marketing Management & Research','Psychiatric/Mental Health Nurse/Nursing','Geography',NULL,NULL),(11,NULL,'Biochemistry','Indonesian',NULL,'Biomedical Engineering',NULL,NULL,'film studies',NULL,NULL,NULL,'brain surgery',NULL,NULL,'Marketing Management & Research','Geriatric Nurse/Nursing','History',NULL,NULL),(12,NULL,'Geophysics','Chinese ',NULL,'Petroleum and Natural Gas Engineering.',NULL,NULL,'internet of things ',NULL,NULL,NULL,'Optical medicine',NULL,NULL,'Office Supervision & Management','Critical Care Nursing','International Relations & Affairs',NULL,NULL),(13,NULL,'Microbiology','Japanese ',NULL,'Software Engineering',NULL,NULL,'robotics',NULL,NULL,NULL,'Veterinary medicine',NULL,NULL,'Operations Management & Supervision','School Nursing','Political Science & Government',NULL,NULL),(14,NULL,'sea ​​science','Korean ',NULL,'Robotics',NULL,NULL,'Software Engineering',NULL,NULL,NULL,'Physiotherapy',NULL,NULL,'Organizational Behavior','Nurse Midwife/Nursing Midwifery','',NULL,NULL),(15,NULL,NULL,'Russian ',NULL,'Renewable and Alternative Energy Engineering',NULL,NULL,'vr and vr',NULL,NULL,NULL,'medical tests',NULL,NULL,'Purchasing/Procurement/Contracts Management','Clinical Nurse Leader',NULL,NULL,NULL),(16,NULL,NULL,'French',NULL,'Computer Engineering',NULL,NULL,NULL,NULL,NULL,NULL,'Marrow diseases',NULL,NULL,'Restaurant/Food Services Management','Clinical Nurse Specialist',NULL,NULL,NULL),(17,NULL,NULL,'Persian ',NULL,'Mechatronics Engineering',NULL,NULL,NULL,NULL,NULL,NULL,'Diabetes',NULL,NULL,'Small Business Management/Operations','Perioperative/Operating Room and Surgical Nurse/Nursing',NULL,NULL,NULL),(18,NULL,NULL,'Romanian ',NULL,'Agriculture',NULL,NULL,NULL,NULL,NULL,NULL,'Hospital Administration',NULL,NULL,'Travel/Tourism Management','Maternal/Child Health and Neonatal Nurse/Nursing',NULL,NULL,NULL),(19,NULL,NULL,'Hindi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'organ transplantation',NULL,NULL,'Business/Management Quantitative Methods, General','Emergency Room/Trauma Nursing',NULL,NULL,NULL),(20,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Dermatology',NULL,NULL,'Actuarial Science*','Occupational and Environmental Health Nursing',NULL,NULL,NULL),(21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'muscle disease',NULL,NULL,'Business/Managerial Economics','Forensic Nursing.',NULL,NULL,NULL),(22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Plastic surgery',NULL,NULL,'Finance, General',NULL,NULL,NULL,NULL),(23,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Obstetrics and Gynecology',NULL,NULL,'Banking & Financial Support Services',NULL,NULL,NULL,NULL),(24,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Respiratory Medicine',NULL,NULL,'Financial Planning & Services',NULL,NULL,NULL,NULL),(25,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'mental and psychological diseases',NULL,NULL,'Insurance & Risk Management',NULL,NULL,NULL,NULL),(26,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Cancer and various tumors',NULL,NULL,'Investments & Securities',NULL,NULL,NULL,NULL),(27,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Diseases of the ear, nose and throat',NULL,NULL,'Management Information Systems',NULL,NULL,NULL,NULL),(28,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Orthopedics, joints and cartilage',NULL,NULL,'Real Estate',NULL,NULL,NULL,NULL),(29,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Internal Medicine and Gastroenterology',NULL,NULL,'Sales, Merchandising, & Marketing, General',NULL,NULL,NULL,NULL),(30,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Fashion Merchandising',NULL,NULL,NULL,NULL),(31,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Tourism & Travel Marketing',NULL,NULL,NULL,NULL),(32,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Secretarial Studies & Office Administration',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `majors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-31  1:08:15
