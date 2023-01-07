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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `book_ID` int NOT NULL AUTO_INCREMENT,
  `user_ID` varchar(255) NOT NULL,
  `university` varchar(255) NOT NULL,
  `college` varchar(255) NOT NULL,
  `major` varchar(255) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `exchange` varchar(45) DEFAULT NULL,
  `donation` varchar(45) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `userName` varchar(255) NOT NULL,
  `slide` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`book_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=823 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (819,'102','Al al-Bayt University','Shari’a','Football','Introduction to Hospitality','abd186513@gmail.com','5435','1','1','0','Introduction to Hospitality.jpg','abdulaziz-new','0','none'),(820,'102','Al Hussein Bin Talal University','Dentistry','Arabic','Acids and Bases and pH','abd186513@gmail.com','4324234','1','1','0','Acids and Bases and pH.jpg','abdulaziz-new','0','none'),(821,'102','Al-Zaytoonah University','Languages','chemistry','Culinary Skills','abd186513@gmail.com','42423','1','1','0','Culinary Skills.jpg','abdulaziz-new','0','none'),(822,'102','Al-Zaytoonah University','Shari’a','الدراسات الاسلامية','Baking Skills','abd186513@gmail.com','34','1','0','0','Baking Skills.jpg','abdulaziz-new','0','none');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
