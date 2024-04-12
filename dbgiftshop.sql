-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2024 at 02:20 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbgiftshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_user`
--

CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL,
  `id_number` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `type_id` int(11) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `refresh_token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_user`
--

INSERT INTO `admin_user` (`id`, `id_number`, `password`, `type_id`, `last_login`, `created_at`, `modified_at`, `first_name`, `last_name`, `refresh_token`) VALUES
(1, '2067497', '$2b$10$MkzcytKte6QbbYU/dcT3KegyaWELX/NjADC4MhECnnY7cLOsGF0HK', 0, '2024-04-12 12:12:07', '2024-04-09 13:40:25', '2024-04-09 13:40:25', 'Roy jhon', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImZOYW1lIjoiUm95IGpob24iLCJpYXQiOjE3MTI5MjM5MjcsImV4cCI6MTcxMzAxMDMyN30.CODVEPkWrERvw722aCS02uknD-2PxGKxPgJCw3JqSfw'),
(2, '2067494', '$2b$10$jXAxidrH9abirvLnowN0z.rlQJOiGpwLDUHGZ/ztRurQr6CKPbz2K', 0, '2024-04-09 16:44:25', '2024-04-09 16:44:25', '2024-04-09 16:44:25', 'Roy jhons', '', ''),
(3, '2067491', '$2b$10$Yff/UeOEwTRiNryCGt3jAe1F32cSJlndfnU.HhL9b/8/Ydr5ZwXCm', 0, '2024-04-12 06:06:48', '2024-04-10 01:27:19', '2024-04-10 01:27:19', 'Roy jhons', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjMsImZOYW1lIjoiUm95IGpob25zIiwiaWF0IjoxNzEyOTAyMDA4LCJleHAiOjE3MTI5ODg0MDh9.2TBncypUv1gqT2CZ_aIgjyXb1XNG8vivu8XiizUfyiM'),
(4, '2067499', '$2b$10$/4orvItG8YzAwpKUgIFanOdyAEHKCQNKFkeJdx6vBnF10jDeUqW0W', 0, '2024-04-10 01:28:02', '2024-04-10 01:28:02', '2024-04-10 01:28:02', 'Roy jhon1', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `admin_user_session`
--

CREATE TABLE `admin_user_session` (
  `id` bigint(20) NOT NULL,
  `adminID` bigint(20) NOT NULL,
  `refresh_token` text NOT NULL,
  `is_active` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_user_session`
--

INSERT INTO `admin_user_session` (`id`, `adminID`, `refresh_token`, `is_active`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImZOYW1lIjoiUm95IGpob24iLCJpYXQiOjE3MTI4OTI1NzgsImV4cCI6MTcxMjk3ODk3OH0.LtySQqAf7iq_N_1uZ8hTkIEEFk0oHWtzibYzCu-ft3c', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `id_number` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(550) NOT NULL,
  `email_address` varchar(50) NOT NULL,
  `contact_no` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_user`
--
ALTER TABLE `admin_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_user_session`
--
ALTER TABLE `admin_user_session`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_user`
--
ALTER TABLE `admin_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `admin_user_session`
--
ALTER TABLE `admin_user_session`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
