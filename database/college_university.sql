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
-- Table structure for table `university`
--

DROP TABLE IF EXISTS `university`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `university` (
  `id` int NOT NULL AUTO_INCREMENT,
  `college` varchar(655) NOT NULL,
  `image` varchar(655) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=armscii8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `university`
--

LOCK TABLES `university` WRITE;
/*!40000 ALTER TABLE `university` DISABLE KEYS */;
INSERT INTO `university` VALUES (1,'Arts','undraw_Art_re_vj2w.png'),(2,'Science','undraw_Scientist_exmf.png'),(4,'Languages','undraw_Typing_re_d4sq.png'),(5,'Veterinary medicine','undraw_pet_adoption_2qkw.png'),(6,'Engineering','undraw_Building_re_xfcm.png'),(7,'Shari’a','undraw_barber_3uel.png'),(9,'Physical Education','undraw_fitness_stats_sht6.png'),(11,'Information Technology','undraw_Visionary_technology_re_jfp7.png'),(13,'Tourism & Hotel Management','undraw_tourist_map_re_293e.png'),(14,'Mass Communication','undraw_Status_update_re_dm9y.png'),(15,'Pharmacy','undraw_medicine_b1ol.png'),(16,'Medicine','undraw_medical_care_movn.png'),(17,'Educational Science','undraw_Alien_science_re_0f8q.png'),(18,'Dentistry','undraw_medicine_b1ol.png'),(19,'Business and economic','undraw_Business_analytics_re_tfh3.png'),(20,'Nursing','undraw_medical_care_movn.png'),(21,'Law','undraw_judge_katerina_limpitsouni_ny1q.png'),(22,'Architecture & Design','undraw_design_components_9vy6.png'),(23,'Applied Medical Sciences','undraw_medical_care_movn.png'),(24,'Agricultural Technology','undraw_Code_review_re_woeb.png');
/*!40000 ALTER TABLE `university` ENABLE KEYS */;
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
