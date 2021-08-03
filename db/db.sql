-- MySQL dump 10.13  Distrib 5.7.35, for Linux (x86_64)
--
-- Host: localhost    Database: create_vin
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Payments`
--

DROP TABLE IF EXISTS `Payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Payments` (
  `Pay_Id` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `Pay_Status` int(11) NOT NULL,
  `Pay_Msg` varchar(200) NOT NULL,
  `Pay_Gateway` varchar(100) NOT NULL,
  `Pay_Rep_Buyed` json DEFAULT NULL,
  `Pay_Amount_Dollar` double NOT NULL,
  `Pay_Amount_IOD` double NOT NULL,
  `Pay_CreatedAt` int(11) NOT NULL,
  `Pay_UpdatedAt` int(11) NOT NULL,
  PRIMARY KEY (`Pay_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Payments`
--

LOCK TABLES `Payments` WRITE;
/*!40000 ALTER TABLE `Payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `Payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reports`
--

DROP TABLE IF EXISTS `Reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reports` (
  `Rep_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Rep_Type` varchar(40) NOT NULL,
  `Rep_Price_Dollar` double NOT NULL,
  `Rep_Price_IOD` double NOT NULL,
  `Rep_CreatedAt` int(11) NOT NULL,
  `Rep_UpdatedAt` int(11) NOT NULL,
  PRIMARY KEY (`Rep_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reports`
--

LOCK TABLES `Reports` WRITE;
/*!40000 ALTER TABLE `Reports` DISABLE KEYS */;
INSERT INTO `Reports` VALUES (1,'carafax',4.49,6667,1627622688,1627622688),(2,'autocheck',4.49,6667,1627622688,1627622688),(3,'copart',5.99,8895,1627622688,1627622688),(4,'manheim',5.99,8895,1627622688,1627622688),(5,'iaai',5.99,8895,1627622688,1627622688),(6,'raar2',8.99,13350,1627622688,1627622688),(7,'raar1',7.49,11122,1627622688,1627622688),(8,'adesa',7.49,11122,1627622688,1627622688);
/*!40000 ALTER TABLE `Reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sessions` (
  `Sess_Id` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `Sess_Start_TS` int(11) NOT NULL,
  `Sess_Expiry_TS` int(11) NOT NULL,
  `Sess_CreatedAt` int(11) NOT NULL,
  `Sess_UpdatedAt` int(11) NOT NULL,
  PRIMARY KEY (`Sess_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `US_Email` varchar(100) DEFAULT NULL,
  `US_Mobile` int(11) DEFAULT NULL,
  `US_Psswd` varchar(100) DEFAULT NULL,
  `US_Register_Status` int(11) NOT NULL,
  `US_Country` varchar(10) DEFAULT NULL,
  `US_CreatedAt` int(11) NOT NULL,
  `US_UpdatedAt` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `US_Email` (`US_Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-30 18:36:25