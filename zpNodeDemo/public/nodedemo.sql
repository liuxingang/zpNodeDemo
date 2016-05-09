-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-05-09 02:31:50
-- 服务器版本： 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodedemo`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newsimg` varchar(300) NOT NULL,
  `newstitle` text NOT NULL,
  `newscontent` text NOT NULL,
  `newstime` datetime(3) DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newsimg`, `newstitle`, `newscontent`, `newstime`) VALUES
(1, './images/news1.jpg', '互联网金融“原罪”被反复吊打 数据给出另一种真相', '互联网金融“原罪”被反复吊打 数据给出另一种真相互联网金融“原罪”被反复吊打 数据给出另一种真相互联网金融“原罪”被反复吊打', '0000-00-00 00:00:00.000'),
(3, './images/news2.jpg', '中平金融每日理财观察|5月4日', '央行5月3日进行1000亿元7天期逆回购操作。当日有3200亿逆回购到期，因此单日净回笼2200亿。华创证券固定收益分析师王文欢认为.', '0000-00-00 00:00:00.000'),
(4, './images/news3.jpg', '三年两会 从促进健康发展到规范发展总理力挺真互联网金融', '为鼓励金融创新，促进互联网金融健康发展，明确监管责任，规范市场秩序，2015年7月18日，人民银行、工信部、公安部.', '0000-00-00 00:00:00.000'),
(25, './images/news2.jpg', '康发展到规范发展总理力挺真互联网金融三年两会 从促进健康发展到规范发展总理力挺真互联网金融三年两会 从促进健康发展到规范发展总理力挺真互联网金融', '三年两会 从促进健康发展到规范发展总理力挺真互联网金融三年两会 从促进健康发展到规范发展总理力挺真互联网金融三年两会 从促进健康发展到规范发展总理力挺真互联网金融', '0000-00-00 00:00:00.000'),
(27, './images/news1.jpg', 'ffffff', 'ddddd', '0000-00-00 00:00:00.000');

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
