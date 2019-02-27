-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2019 at 01:56 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `runescape`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UID` int(255) NOT NULL,
  `username` varchar(12) NOT NULL,
  `displayname` varchar(12) NOT NULL,
  `previousname` varchar(12) NOT NULL,
  `password` varchar(40) NOT NULL,
  `	userhash` text NOT NULL,
  `email` tinytext NOT NULL,
  `dob` varchar(10) DEFAULT NULL,
  `country` int(4) DEFAULT NULL,
  `register_ip` varchar(40) DEFAULT NULL,
  `register_date` date DEFAULT NULL,
  `last_ip` varchar(40) DEFAULT NULL,
  `last_signin` datetime DEFAULT NULL,
  `privacySetting` varchar(22) NOT NULL,
  `website_rights` tinyint(4) NOT NULL,
  `server_rights` tinyint(4) NOT NULL,
  `forum_mod` int(1) NOT NULL,
  `online` enum('0','1') NOT NULL DEFAULT '0',
  `active` tinyint(4) NOT NULL,
  `members` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `versioning`
--

CREATE TABLE `versioning` (
  `id` int(4) NOT NULL,
  `server_version` text,
  `website_version` text,
  `database_version` text,
  `client_version` int(11) DEFAULT NULL,
  `theme` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `versioning`
--

INSERT INTO `versioning` (`id`, `server_version`, `website_version`, `database_version`, `client_version`, `theme`) VALUES
(0, '1.0', '0.1', '1.0', 865, 0);

-- --------------------------------------------------------

--
-- Table structure for table `web_news`
--

CREATE TABLE `web_news` (
  `id` int(11) NOT NULL,
  `author_id` int(10) UNSIGNED DEFAULT NULL,
  `main_news` varchar(2) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  `title` tinytext,
  `description` text,
  `story` text,
  `other news` text,
  `pic` varchar(40) NOT NULL,
  `pic_big` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `web_news`
--

INSERT INTO `web_news` (`id`, `author_id`, `main_news`, `date`, `title`, `description`, `story`, `other news`, `pic`, `pic_big`) VALUES
(0, 0, '1', '2019-02-27', 'news1', 'news1', 'news1', '', 'article', 'functionality-update'),
(1, 0, '0', '2019-02-27', 'news2', 'news2', 'news2', '', 'workinprogress', 'functionality-update'),
(2, 0, '0', '2019-02-27', 'news3', 'news3', 'news3', '', 'workinprogress', 'functionality-update'),
(3, 0, '0', '2019-02-27', 'news4', 'news4', 'news4', '', 'article', 'Behind-the-Scenes-April_EN');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`);

--
-- Indexes for table `versioning`
--
ALTER TABLE `versioning`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `web_news`
--
ALTER TABLE `web_news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `web_news`
--
ALTER TABLE `web_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
