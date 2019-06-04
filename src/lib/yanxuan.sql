-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 10:38:50
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yanxuan`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `p_id` int(20) NOT NULL COMMENT '商品id',
  `p_name` varchar(200) NOT NULL COMMENT '商品名',
  `p_about` varchar(200) NOT NULL COMMENT '商品说明',
  `p_pic` varchar(255) NOT NULL COMMENT '商品图片',
  `p_good` int(5) NOT NULL COMMENT '好评',
  `p_price` int(5) NOT NULL COMMENT '价格',
  `p_gwf` varchar(200) NOT NULL COMMENT '购物返',
  `p_type` varchar(255) NOT NULL COMMENT '商品类型'
) ENGINE=MyISAM DEFAULT CHARSET=ucs2;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`p_id`, `p_name`, `p_about`, `p_pic`, `p_good`, `p_price`, `p_gwf`, `p_type`) VALUES
(1, '出行 360度可旋转挂钩 2件装', '360°旋转自由挂晒', '[{"src":"../img/fdj01.png"},{"src":"../img/fdj02.jpg"},{"src":"../img/fdj03.jpg"},{"src":"../img/fdj04.jpg"},{"src":"../img/fdj05.png"}]', 98, 16, '￥0.16回馈金+1积分', '[{"src":"../img/j-color01.png"},{"src":"../img/j-color02.png"}]'),
(2, '中华精铁爆炒锅', '中华炒锅，严选出品，酣畅爆炒', '[{"src":"../img/g01.png"},{"src":"../img/g02.jpg"},{"src":"../img/g03.png"},{"src":"../img/g04.jpg"},{"src":"../img/g05.jpg"}]', 99, 169, '￥2.49回馈金+16积分', '[{"src":"../img/gc-01.png"},{"src":"../img/gc-02.png"}]'),
(3, '3只装 铝制洗涤用衣架', '轻巧又结实，3斤承重', '[{"src":"../img/y01.jpg"},{"src":"../img/y02.png"},{"src":"../img/y03.jpg"},{"src":"../img/y04.jpg"},{"src":"../img/y05.jpg"}]', 100, 10, '¥0.19回馈金', '[{"src":"../img/yc01.png"},{"src":"../img/yc02.png"}]'),
(4, '阿瓦提长绒棉毛巾', '瞬间吸水，亲肤近0掉毛率。', '[{"src":"../img/m01.png"},{"src":"../img/m02.jpg"},{"src":"../img/m03.jpg"},{"src":"../img/m04.jpg"},{"src":"../img/m05.jpg"}]', 99, 22, '¥0.23回馈金 + 2积分', '[{"src":"../img/mc-02.png"},{"src":"../img/mc-03.png"}]'),
(5, '日本制造 标签款收纳篮', '定制标签，一物多用', '[{"src":"../img/l01.png"},{"src":"../img/l02.jpg"},{"src":"../img/l03.jpg"},{"src":"../img/l04.jpg"},{"src":"../img/l05.jpg"}]', 100, 10, '¥0.13回馈金', '[{"src":"../img/lc01.png"},{"src":"../img/lc02.png"}]'),
(6, '马戏团·我是大儿童系列四件套', '马戏团的纯真故事', '[{"src":"../img/cd01.png"},{"src":"../img/cd02.png"},{"src":"../img/cd03.png"},{"src":"../img/c04.png"},{"src":"../img/cd05.png"}]', 80, 399, '¥3.99回馈金 + 39积分', '[{"src":"../img/cd01.png"},{"src":"../img/cd02.png"}]'),
(7, '现代组合全皮沙发', '高端品质 松软坐感', '[{"src":"../img/sf01.png"},{"src":"../img/sf02.jpg"},{"src":"../img/sf03.jpg"},{"src":"../img/sf04.jpg"},{"src":"../img/sf05.jpg"}]', 97, 19099, '¥190.99回馈金 + 1909积分', '[{"src":"../img/sf-c01.png"},{"src":"../img/sfc-02.png"}]'),
(8, '北欧实木置物架', '随心搭配，多层收纳', '[{"src":"../img/jz01.jpg"},{"src":"../img/jz02.jpg"},{"src":"../img/jz03.png"},{"src":"../img/jz04.jpg"},{"src":"../img/jz05.jpg"}]', 97, 699, '¥6.99回馈金 + 69积分\r\n', '[{"src":"../img/jz-c01.png"},{"src":"../img/jz-c02.png"}]');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `user_phone` varchar(15) NOT NULL COMMENT '用户手机号',
  `user_pwd` varchar(16) NOT NULL COMMENT '用户密码'
) ENGINE=MyISAM DEFAULT CHARSET=ucs2;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`user_id`, `user_phone`, `user_pwd`) VALUES
(1, '13122222222', '123'),
(2, '13111111111', '31313131'),
(3, '13131111111', '1313133'),
(4, '13131313131', '3131313'),
(5, '13131311111', '31313131');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
