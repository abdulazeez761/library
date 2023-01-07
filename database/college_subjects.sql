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
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `major` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`major`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,'culinary arts','Introduction to Hospitality','Introduction to Hospitality.jpg'),(2,'culinary arts','Culinary Skills','Culinary Skills.jpg'),(3,'culinary arts','Indian Cuisine','Indian Cuisine.jpg'),(4,'culinary arts','Baking Skills','Baking Skills.jpg'),(5,'culinary arts','Food Commodities','Food Commodities.jpg'),(6,'culinary arts','Gastronomy','Gastronomy.jpg'),(7,'culinary arts','Food Management Facilities','Food Management Facilities.jpg'),(8,'chemistry','Acids and Bases and pH','Acids and Bases and pH.jpg'),(9,'chemistry','Atomic Structure','Atomic Structure.jpg'),(10,'chemistry','Electrochemistry','Electrochemistry.jpg'),(11,'chemistry','Units and Measurement','Units and Measurement.jpg'),(12,'chemistry','Thermochemistry','Thermochemistry.JPG'),(13,'chemistry','Periodic Table','Periodic Table.jpg'),(14,'chemistry','Equations and Stoichiometry','Equations and Stoichiometry.jpg'),(15,'chemistry','solutions and mixtures','solutions and mixtures.jpg'),(16,'Arabic ','مناهج قراءة النصوص العربية',''),(17,'Arabic ','علم الصرف - Morphology',''),(18,'Arabic ','علم النحو - Arabic Syntax',''),(19,'Arabic ','علم العروض - Arabic Prosody',''),(20,'Arabic ','علم الصوتيات - Phonetics',''),(21,'Arabic ','الأدب الجاهلي - Pre-Islamic Literature',''),(22,'Arabic ','الشعر في العصر الإسلامي والعصر الأموي - Early Islamic and Umayyad Poetry',''),(23,'Civil Engineering','Mechanics A',NULL),(24,'Civil Engineering','Civil Engineering Applications 1',NULL),(25,'Civil Engineering','Civil Construction Technology 1',NULL),(26,'Civil Engineering','Mathematics for Engineers and Scientists 1',NULL),(27,'Civil Engineering','Mechanics B',NULL),(28,'Civil Engineering','Introduction to Materials',NULL),(29,'Civil Engineering','Civil Introduction to Engineering Design',NULL),(30,'Civil Engineering','Mathematics for Engineers and Scientists 2',NULL),(31,'Civil Engineering','Analysis of Determinate Structures',NULL),(32,'الدراسات الاسلامية','التفسير',NULL),(33,'الدراسات الاسلامية','أصول الفقه 2',NULL),(34,'الدراسات الاسلامية','تاريخ الأديان',NULL),(35,'الدراسات الاسلامية','الأدب الإسلامي',NULL),(36,'الدراسات الاسلامية','المواريث',NULL);
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-31  1:08:14
