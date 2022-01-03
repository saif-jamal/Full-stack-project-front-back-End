-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2022 at 04:04 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecomarce_electronics_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryname_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryname_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categorydescriptions_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `categorydescriptions_ar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryimage` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_en` enum('Available','Unavailable') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Available',
  `status_ar` enum('متوفر','غير متوفر') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'متوفر',
  `categorysection_en` enum('mainsection','subsection') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'mainsection',
  `categorysection_ar` enum('قسم رأيسي','قسم فرعي') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'قسم رأيسي',
  `categoryparientID` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryname_en`, `categoryname_ar`, `categorydescriptions_en`, `categorydescriptions_ar`, `categoryimage`, `status_en`, `status_ar`, `categorysection_en`, `categorysection_ar`, `categoryparientID`, `created_at`, `updated_at`) VALUES
(2, 'Desktop Computer Section', 'حاسبات مكتبية', 'desktop pc this part is have all component for PC as gaming or default pc', 'هذا القسم يحتوي على حميع الجزاء الخاصة بالحاسبات المكتبية سواء للالعاب او الحاسبات العادية', 'Categories_1641013234_500.png', 'Available', 'متوفر', 'mainsection', 'قسم رأيسي', 0, '2021-12-24 22:13:02', '2022-01-01 02:00:34'),
(3, 'Mobile phones section', 'قسم الهواتف النقالة', 'mobile phones sections are sections that have all phones with different companies such as Samsung or Apple or Huawei or etc...', 'أقسام الهواتف المحمولة هي أقسام بها جميع الهواتف بشركات مختلفة مثل Samsung أو Apple أو Huawei أو غيرها ...', 'Categories_1640397788_765.jpg', 'Available', 'متوفر', 'mainsection', 'قسم رأيسي', 0, '2021-12-24 22:20:03', '2021-12-24 23:03:08'),
(4, 'Laptop Sections', 'قسم اللابتوبات', 'the laptop section has all devices with all companies such as hp or Lenovo or dull apple etc.....', 'قسم اللاب توب به جميع الاجهزة بجميع الشركات مثل hp او Lenovo او dull apple الخ .....', 'Categories_1640399166_28.jpg', 'Available', 'متوفر', 'mainsection', 'قسم رأيسي', 0, '2021-12-24 22:26:35', '2021-12-24 23:26:06'),
(5, 'Samsung Mobile phones sections', 'قسم اجهزت هواتف سامسنك', 'Galaxy A, B, C, D: Samsung phone series explained\r\nGalaxy Note Series. As is evident from its name, the Note series is all about Samsung\'s biggest and baddest smartphones. ...\r\nGalaxy Pro series. ...\r\nGalaxy E series. ...\r\nGalaxy Max and On series.', 'Galaxy A و B و C و D: شرح سلسلة هواتف Samsung\r\nسلسلة جالكسي نوت. كما يتضح من اسمها ، فإن سلسلة Note تدور حول أكبر وأسوأ الهواتف الذكية من سامسونج. ...\r\nسلسلة جالكسي أ. ...\r\nسلسلة جالكسي سي. ...\r\nسلسلة جالكسي جيه. ...\r\nسلسلة Galaxy Prime. ...\r\nسلسلة جلاكسي برو. ...\r\nسلسلة جالكسي إي. ...\r\nسلسلة Galaxy Max و On.', 'Categories_1640398265_198.png', 'Available', 'متوفر', 'subsection', 'قسم فرعي', 3, '2021-12-24 22:31:36', '2021-12-24 23:11:05'),
(6, 'Apple Mobile phones', 'قسم هواتف ابل', 'Apple mobile phone has a lot of devices like Iphone4 to 13 with other models...', 'حتوي هاتف Apple المحمول على الكثير من الأجهزة مثل Iphone4 إلى 13 مع موديلات أخرى ...', 'Categories_1640396305_91.png', 'Available', 'متوفر', 'subsection', 'قسم فرعي', 3, '2021-12-24 22:38:25', '2021-12-24 22:38:25'),
(7, 'Huawei mobile phones', 'قسم هواتف شركة  هواوي', 'Huawei mobile phones it has a lot of devices like series of y and Not elc...', 'هواتف هواوي المحمولة لديها الكثير من الاجهزة مثل سلسلة y وليس elc ...', 'Categories_1640396999_868.jpg', 'Available', 'متوفر', 'subsection', 'قسم فرعي', 3, '2021-12-24 22:49:59', '2021-12-24 22:49:59'),
(8, 'TV Devices', 'احهزت التلفاز', 'Tv devices with different marked such as Samsung and apple and lg...', 'أجهزة تلفزيون بعلامات مختلفة مثل Samsung و apple و lg ...', 'Categories_1640574874_498.jpg', 'Available', 'متوفر', 'mainsection', 'قسم رأيسي', 0, '2021-12-27 00:14:34', '2021-12-27 00:14:34'),
(9, 'Samsung Smart TV 4K', 'تلفزيون سامسونج الذكي 4K', 'Samsung Smart TV 4K it has the best monitor to watch', 'تلفزيون Samsung Smart TV 4K لديه أفضل شاشة يمكن مشاهدتها', 'Categories_1640575008_803.jpg', 'Available', 'متوفر', 'subsection', 'قسم فرعي', 8, '2021-12-27 00:16:48', '2021-12-27 00:16:48'),
(10, 'Apple Smart TV', 'تلفزيون أبل الذكي', 'Apple Smart TV is the best device bet is more expensive smart tv from other', 'Apple Smart TV هو أفضل رهان على جهاز التلفزيون الذكي الأكثر تكلفة من الآخرين', 'Categories_1640575574_456.jpg', 'Available', 'متوفر', 'subsection', 'قسم فرعي', 8, '2021-12-27 00:26:14', '2021-12-27 00:26:14'),
(11, 'LG Smart Device TV', 'تلفزيون الجهاز الذكي من إل جي', 'LG Smart Device TV is the best tv to watch at a low price ...', 'تلفزيون LG Smart Device هو أفضل تلفزيون يمكنك مشاهدته بسعر منخفض ...', 'Categories_1640575701_135.jpg', 'Available', 'متوفر', 'subsection', 'قسم فرعي', 8, '2021-12-27 00:28:21', '2021-12-27 00:28:21'),
(12, 'headphones wire & wireless', 'السماعات السلكية واللاسلكية السماعات السلكية واللاسلكية السماعات السلكية واللاسلكية', 'السماعات السلكية واللاسلكية\r\nالسماعات السلكية واللاسلكية', 'السماعات السلكية واللاسلكية\r\nالسماعات السلكية واللاسلكية', 'Categories_1641013697_719.png', 'Available', 'متوفر', 'mainsection', 'قسم رأيسي', 0, '2022-01-01 02:08:17', '2022-01-01 02:08:17');

-- --------------------------------------------------------

--
-- Table structure for table `dark_modes`
--

CREATE TABLE `dark_modes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `darkmodeColor_check` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dark_modes`
--

INSERT INTO `dark_modes` (`id`, `darkmodeColor_check`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'true', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leftnav_colors`
--

CREATE TABLE `leftnav_colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ColorDashboard` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorUsers` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorProducts` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorShowProducts` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorCreateProduct` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorCategories` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorShowCategories` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorCreateCategory` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorSettings` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorNotifications` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ColorLanguage` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leftnav_colors`
--

INSERT INTO `leftnav_colors` (`id`, `ColorDashboard`, `ColorUsers`, `ColorProducts`, `ColorShowProducts`, `ColorCreateProduct`, `ColorCategories`, `ColorShowCategories`, `ColorCreateCategory`, `ColorSettings`, `ColorNotifications`, `ColorLanguage`, `created_at`, `updated_at`) VALUES
(1, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 16:27:12', '2021-12-10 17:01:01'),
(2, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 17:55:47', '2021-12-10 17:55:47'),
(3, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 17:55:48', '2021-12-10 17:55:48'),
(4, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 17:55:48', '2021-12-10 17:55:48'),
(5, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 17:55:49', '2021-12-10 17:55:49'),
(6, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 17:56:26', '2021-12-10 17:56:47'),
(7, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:18:18', '2021-12-10 18:19:28'),
(8, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:24:25', '2021-12-10 18:24:36'),
(9, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:24:41', '2021-12-10 18:25:41'),
(10, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:25:42', '2021-12-10 18:25:44'),
(11, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:25:48', '2021-12-10 18:25:55'),
(12, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:26:17', '2021-12-10 18:28:41'),
(13, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:29:00', '2021-12-10 18:29:21'),
(14, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 18:29:33', '2021-12-10 19:33:46'),
(15, 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 19:47:49', '2021-12-10 22:33:14'),
(16, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-10 22:33:20', '2021-12-10 23:18:09'),
(17, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 17:25:23', '2021-12-11 17:25:23'),
(18, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 17:28:08', '2021-12-11 17:28:08'),
(19, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:18:50', '2021-12-11 18:19:40'),
(20, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:18', '2021-12-11 18:20:18'),
(21, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:21', '2021-12-11 18:20:21'),
(22, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:23', '2021-12-11 18:20:23'),
(23, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:24', '2021-12-11 18:20:24'),
(24, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:25', '2021-12-11 18:20:25'),
(25, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:25', '2021-12-11 18:20:25'),
(26, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:26', '2021-12-11 18:20:26'),
(27, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:20:27', '2021-12-11 18:20:27'),
(28, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:27:27', '2021-12-11 18:27:27'),
(29, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:27:28', '2021-12-11 18:27:28'),
(30, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:27:32', '2021-12-11 18:27:32'),
(31, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:27:45', '2021-12-11 18:27:45'),
(32, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:27:48', '2021-12-11 18:27:48'),
(33, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:27:55', '2021-12-11 18:27:55'),
(34, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:28:01', '2021-12-11 18:28:01'),
(35, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:28:12', '2021-12-11 18:28:12'),
(36, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:28:13', '2021-12-11 18:28:13'),
(37, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:28:13', '2021-12-11 18:28:13'),
(38, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:29:38', '2021-12-11 18:29:38'),
(39, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:29:40', '2021-12-11 18:29:40'),
(40, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:29:41', '2021-12-11 18:29:41'),
(41, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:29:50', '2021-12-11 18:29:50'),
(42, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:29:51', '2021-12-11 18:29:51'),
(43, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:30:14', '2021-12-11 18:30:14'),
(44, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:30:17', '2021-12-11 18:30:17'),
(45, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:30:26', '2021-12-11 18:30:26'),
(46, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:30:39', '2021-12-11 18:30:42'),
(47, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:31:11', '2021-12-11 18:31:11'),
(48, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:32:15', '2021-12-11 18:32:23'),
(49, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:32:36', '2021-12-11 18:32:36'),
(50, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:32:43', '2021-12-11 18:32:43'),
(51, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:32:47', '2021-12-11 18:32:47'),
(52, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:34:38', '2021-12-11 18:34:38'),
(53, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:09', '2021-12-11 18:36:09'),
(54, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:10', '2021-12-11 18:36:10'),
(55, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:13', '2021-12-11 18:36:13'),
(56, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:14', '2021-12-11 18:36:14'),
(57, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:15', '2021-12-11 18:36:15'),
(58, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:16', '2021-12-11 18:36:16'),
(59, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:17', '2021-12-11 18:36:17'),
(60, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:31', '2021-12-11 18:36:32'),
(61, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:38', '2021-12-11 18:36:40'),
(62, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:36:49', '2021-12-11 18:36:49'),
(63, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:37:56', '2021-12-11 18:37:56'),
(64, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:37:58', '2021-12-11 18:37:58'),
(65, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:38:11', '2021-12-11 18:38:11'),
(66, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:38:30', '2021-12-11 18:38:30'),
(67, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:38:33', '2021-12-11 18:38:33'),
(68, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:40:23', '2021-12-11 18:40:23'),
(69, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:40:32', '2021-12-11 18:40:47'),
(70, 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:40:49', '2021-12-11 18:41:04'),
(71, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:43:04', '2021-12-11 18:43:04'),
(72, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:43:10', '2021-12-11 18:43:10'),
(73, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:43:19', '2021-12-11 18:43:19'),
(74, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:43:41', '2021-12-11 18:43:41'),
(75, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:43:43', '2021-12-11 18:43:43'),
(76, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-11 18:45:42', '2021-12-11 19:49:39'),
(77, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-19 16:25:46', '2021-12-19 16:25:46'),
(78, 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-19 16:26:33', '2021-12-19 16:28:17'),
(79, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 12:52:41', '2021-12-21 12:52:41'),
(80, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 12:53:11', '2021-12-21 12:53:11'),
(81, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 12:54:18', '2021-12-21 12:54:18'),
(82, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 12:58:55', '2021-12-21 12:58:55'),
(83, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 13:07:18', '2021-12-21 13:07:18'),
(84, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 13:08:42', '2021-12-21 16:42:37'),
(85, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 16:42:40', '2021-12-21 16:43:15'),
(86, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 17:11:50', '2021-12-21 17:12:22'),
(87, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 17:12:26', '2021-12-21 17:12:39'),
(88, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-21 17:28:09', '2021-12-21 22:31:39'),
(89, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-22 13:06:07', '2021-12-22 13:06:07'),
(90, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-22 17:50:55', '2021-12-22 19:02:36'),
(91, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-22 19:09:30', '2021-12-25 21:49:49'),
(92, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-26 17:19:57', '2021-12-26 17:19:57'),
(93, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-26 17:22:03', '2021-12-26 17:22:06'),
(94, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-26 17:24:27', '2021-12-26 17:24:27'),
(95, 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-26 17:24:59', '2021-12-27 00:47:43'),
(96, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-27 13:15:31', '2021-12-27 13:15:31'),
(97, 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-27 13:15:34', '2021-12-27 13:15:48'),
(98, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-27 13:16:00', '2021-12-27 13:32:51'),
(99, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-27 13:50:30', '2021-12-29 15:37:43'),
(100, 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-29 15:37:52', '2021-12-29 22:49:35'),
(101, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2021-12-31 10:53:28', '2022-01-01 23:53:02'),
(102, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-01 23:53:07', '2022-01-02 15:21:33'),
(103, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 16:55:48', '2022-01-02 17:36:50'),
(104, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 17:59:11', '2022-01-02 17:59:16'),
(105, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 18:01:19', '2022-01-02 19:12:58'),
(106, 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 19:13:02', '2022-01-02 19:17:51'),
(107, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', '2022-01-02 19:25:52', '2022-01-02 20:03:33'),
(108, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'rgb(76,175,80)', 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', '2022-01-02 20:16:03', '2022-01-02 20:17:46'),
(109, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:07:22', '2022-01-02 21:07:47'),
(110, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:07:54', '2022-01-02 21:08:50'),
(111, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:08:53', '2022-01-02 21:08:53'),
(112, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:08:58', '2022-01-02 21:11:35'),
(113, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:11:51', '2022-01-02 21:12:59'),
(114, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:15:45', '2022-01-02 21:15:52'),
(115, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:15:56', '2022-01-02 21:17:32'),
(116, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 21:17:34', '2022-01-02 22:55:02'),
(117, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 22:55:05', '2022-01-02 22:55:05'),
(118, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 23:01:17', '2022-01-02 23:01:17'),
(119, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 23:01:59', '2022-01-02 23:01:59'),
(120, 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 23:02:28', '2022-01-02 23:02:52'),
(121, 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 23:02:59', '2022-01-02 23:06:54'),
(122, 'transparent', 'rgb(76,175,80)', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '2022-01-02 23:07:02', '2022-01-02 23:17:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_11_23_154412_create_categories_table', 1),
(5, '2021_11_23_222038_create_products_table', 1),
(6, '2021_11_23_231230_create_productimages_table', 1),
(7, '2021_11_23_231253_create_producttags_table', 1),
(8, '2021_11_23_231445_create_shoppingbaskets_table', 1),
(9, '2021_11_23_231516_create_wishlists_table', 1),
(10, '2021_11_30_161304_create_leftnav_colors_table', 1),
(11, '2021_12_08_003707_create_users_infos_table', 1),
(12, '2021_12_29_221610_add_product_quantity_to_wishlist', 2),
(13, '2021_12_29_224428_add_product_quantity_to_wishlist', 3),
(14, '2021_12_29_232728_add_product_quantity_to_wishlist', 4),
(15, '2021_12_29_233048_add_product_quantity_to_wishlist', 5),
(16, '2021_12_30_043257_add_product_quantity_toshoppingbasket', 6),
(17, '2021_12_31_230714_asignproduct_to_user_his_login', 7),
(18, '2022_01_01_002557_create__wish_list_table', 8),
(19, '2022_01_01_011602_changewishlistname', 9),
(20, '2022_01_02_194848_create_darkmode_table', 10),
(21, '2022_01_02_200047_create_darkmode_table', 11),
(22, '2022_01_02_204701_change_darkmode_nmae', 12);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productimages`
--

CREATE TABLE `productimages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `imageproductname` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `productimages`
--

INSERT INTO `productimages` (`id`, `product_id`, `imageproductname`, `created_at`, `updated_at`) VALUES
(21, 11, 'product_1640397340_687.jpg', '2021-12-24 22:55:40', '2021-12-24 22:55:40'),
(23, 11, 'product_1640397341_945.jpg', '2021-12-24 22:55:41', '2021-12-24 22:55:41'),
(24, 11, 'product_1640397341_159.jpg', '2021-12-24 22:55:41', '2021-12-24 22:55:41'),
(25, 12, 'product_1640399463_342.jpg', '2021-12-24 23:31:03', '2021-12-24 23:31:03'),
(26, 12, 'product_1640399463_850.jpg', '2021-12-24 23:31:03', '2021-12-24 23:31:03'),
(27, 12, 'product_1640399463_47.jpg', '2021-12-24 23:31:03', '2021-12-24 23:31:03'),
(28, 12, 'product_1640399463_440.jpg', '2021-12-24 23:31:03', '2021-12-24 23:31:03'),
(29, 12, 'product_1640399463_128.jpg', '2021-12-24 23:31:03', '2021-12-24 23:31:03'),
(30, 13, 'product_1640399725_781.jpg', '2021-12-24 23:35:25', '2021-12-24 23:35:25'),
(31, 13, 'product_1640399725_750.jpg', '2021-12-24 23:35:25', '2021-12-24 23:35:25'),
(32, 13, 'product_1640399725_501.jpg', '2021-12-24 23:35:25', '2021-12-24 23:35:25'),
(33, 13, 'product_1640399725_530.png', '2021-12-24 23:35:25', '2021-12-24 23:35:25'),
(34, 13, 'product_1640399725_193.jpg', '2021-12-24 23:35:25', '2021-12-24 23:35:25'),
(40, 14, 'product_1640454789_797.jpg', '2021-12-25 14:53:09', '2021-12-25 14:53:09'),
(42, 14, 'product_1640454844_917.jpg', '2021-12-25 14:54:04', '2021-12-25 14:54:04'),
(43, 14, 'product_1640454844_983.jpg', '2021-12-25 14:54:04', '2021-12-25 14:54:04'),
(44, 14, 'product_1640454844_72.jpg', '2021-12-25 14:54:04', '2021-12-25 14:54:04'),
(45, 15, 'product_1640576306_186.webp', '2021-12-27 00:38:26', '2021-12-27 00:38:26'),
(46, 15, 'product_1640576307_265.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(47, 15, 'product_1640576307_459.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(48, 15, 'product_1640576307_912.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(49, 15, 'product_1640576307_404.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(50, 15, 'product_1640576307_265.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(51, 15, 'product_1640576307_189.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(52, 15, 'product_1640576307_209.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(53, 15, 'product_1640576307_323.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(54, 15, 'product_1640576307_605.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(55, 15, 'product_1640576307_731.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(56, 15, 'product_1640576307_89.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(57, 15, 'product_1640576307_717.webp', '2021-12-27 00:38:27', '2021-12-27 00:38:27'),
(58, 16, 'product_1640576804_713.webp', '2021-12-27 00:46:44', '2021-12-27 00:46:44'),
(59, 16, 'product_1640576804_996.webp', '2021-12-27 00:46:44', '2021-12-27 00:46:44'),
(60, 16, 'product_1640576804_649.webp', '2021-12-27 00:46:44', '2021-12-27 00:46:44'),
(61, 16, 'product_1640576804_87.webp', '2021-12-27 00:46:44', '2021-12-27 00:46:44'),
(62, 16, 'product_1640576804_615.webp', '2021-12-27 00:46:44', '2021-12-27 00:46:44'),
(63, 17, 'product_1640636648_986.webp', '2021-12-27 17:24:08', '2021-12-27 17:24:08'),
(65, 17, 'product_1640636648_934.webp', '2021-12-27 17:24:08', '2021-12-27 17:24:08'),
(67, 18, 'product_1640989542_5.jpg', '2021-12-31 19:25:42', '2021-12-31 19:25:42'),
(68, 18, 'product_1640989542_550.png', '2021-12-31 19:25:42', '2021-12-31 19:25:42'),
(69, 18, 'product_1640989542_955.png', '2021-12-31 19:25:42', '2021-12-31 19:25:42'),
(74, 18, 'product_1640989781_890.jpg', '2021-12-31 19:29:41', '2021-12-31 19:29:41'),
(76, 18, 'product_1640989827_46.jpg', '2021-12-31 19:30:27', '2021-12-31 19:30:27'),
(78, 19, 'product_1641003553_135.png', '2021-12-31 23:19:13', '2021-12-31 23:19:13'),
(79, 19, 'product_1641003553_760.png', '2021-12-31 23:19:13', '2021-12-31 23:19:13'),
(80, 19, 'product_1641003553_782.jpg', '2021-12-31 23:19:13', '2021-12-31 23:19:13'),
(81, 19, 'product_1641007236_527.jpg', '2022-01-01 00:20:36', '2022-01-01 00:20:36');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productname_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productname_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptions_ar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `productfeature_en` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productfeature_ar` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `producthowused_en` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `producthowused_ar` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status_en` enum('Available','Unavailable') COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_ar` enum('متوفر','غير متوفر') COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double(8,2) NOT NULL,
  `discountprice` double(8,2) NOT NULL,
  `dayfordiscount` datetime DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productname_en`, `productname_ar`, `descriptions_en`, `descriptions_ar`, `productfeature_en`, `productfeature_ar`, `producthowused_en`, `producthowused_ar`, `status_en`, `status_ar`, `price`, `discountprice`, `dayfordiscount`, `user_id`, `category_id`, `created_at`, `updated_at`) VALUES
(11, 'iphone 13 pro max', 'آيفون 13 برو ماكس', 'A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip. Exceptional durability. And a huge leap in battery life.\r\nLet’s Pro.', 'نظام كاميرا أكثر قوة بشكل كبير. شاشة سريعة الاستجابة ، كل تفاعل يبدو جديدًا مرة أخرى. أسرع شريحة هاتف ذكي في العالم. متانة استثنائية. وقفزة هائلة في عمر البطارية.\r\nهيا بنا محترفون.', NULL, NULL, NULL, NULL, 'Available', 'متوفر', 1500.00, 1400.00, '2022-01-14 09:06:00', 53, 6, '2021-12-24 22:54:29', '2022-01-02 23:13:07'),
(12, 'Not 21 ultra', 'Not 21 ultra', 'Not 21 ultra is a new version of the Samsung series that have powerful uses and other features that makes him very amazing elc...', 'Not 21 Ultra هو إصدار جديد من سلسلة Samsung له استخدامات قوية وميزات أخرى تجعله مذهلاً للغاية ...', NULL, NULL, NULL, NULL, 'Available', 'متوفر', 1200.00, 1100.00, '2022-01-07 20:20:00', 5, 5, '2021-12-24 23:29:35', '2021-12-29 00:18:31'),
(13, 'huawei mate 40 pro', 'huawei mate 40 pro', 'Huawei mate 40 pro is the best useful and new device of the best series of Huawei company that\'s the device has powerful usability ..', 'Huawei mate 40 pro هو أفضل جهاز مفيد وجديد من أفضل سلسلة شركة Huawei هذا الجهاز لديه قابلية استخدام قوية ..', NULL, NULL, NULL, NULL, 'Available', 'متوفر', 1000.00, 900.00, NULL, 5, 7, '2021-12-24 23:34:02', '2021-12-28 23:57:51'),
(14, 'Gaming Desktop pc', 'كمبيوتر سطح المكتب للألعاب', 'Gaming Desktop pc has the best and latest version of components like Graphics card and microprocessor and other details...', 'جهاز كمبيوتر سطح المكتب للألعاب يحتوي على أفضل وأحدث إصدار من المكونات مثل بطاقة الرسومات والمعالج الدقيق وتفاصيل أخرى ...', NULL, NULL, NULL, NULL, 'Available', 'متوفر', 1700.00, 1650.00, '2022-01-14 03:40:00', 52, 2, '2021-12-24 23:40:01', '2022-01-02 21:41:00'),
(15, 'AU7000، تلفزيون UHD 4K Smart TV', 'AU7000، تلفزيون UHD 4K Smart TV', 'You\'ll feel the subtlety of shades closest to the image you want in 4K\r\nCrystal 4K processor\r\nUpscaling to 4K ensures that your content you love will be viewed in up to 4K resolution. Closer to reality thanks to advanced color technology.', 'ستشعر براعة الظلال اللونية الأقرب إلى الواقع بدقة 4K فائقة الوضوح\r\nمعالج Crystal 4K\r\nيضمن لك الارتقاء بالدقة إلى 4K فائقة الوضوح مشاهدة محتواك الذي تحبه بدقة تصل إلى 4K. كما نتيح لك الاستمتاع بتعابير لونية أقرب إلى الواقع بفضل تكنولوجيا تخطيط الألوان المتقدمة.', NULL, NULL, NULL, NULL, 'Available', 'متوفر', 950.00, 900.00, NULL, 5, 9, '2021-12-27 00:34:07', '2021-12-28 23:58:51'),
(16, 'Galaxy Z Flip3 5G', 'هاتف Galaxy Z Flip3 5G', 'Get the Galaxy Z Flip3 5G with free gifts.\r\nGet Galaxy Buds2 free with every purchase*\r\n\r\n  gift\r\nDiscount on screen repair\r\nPay 70 Jordanian dinars only for the screen of your device in case it breaks. The offer is applicable for one repair for a period of one year from the date of activation.', 'احصل على Galaxy Z Flip3 5G مع هدايا مجانية. \r\nاحصل على Galaxy Buds2 مجاناً مع كل عملية الشراء *\r\n\r\n  هدية\r\nخصم على إصلاح الشاشة\r\nادفع مبلغ 70 دينار أردني فقط لإصلاح شاشة جهازك في حال تعطلها.يطبق العرض على إصلاح واحد لمدة عام من تاريخ التفعيل.', NULL, NULL, NULL, NULL, 'Available', 'متوفر', 1000.00, 0.00, NULL, 5, 5, '2021-12-27 00:46:23', '2021-12-27 00:46:23'),
(17, 'LG NanoCell TV 55 Inch NANO80 Series', 'LG NanoCell TV 55 Inch NANO80 Series', 'Every color crystal clear.\r\nLG NanoCell TV utilizes nanoparticles, our own distinctive Nano technology, to filter and refine color, removing impurities from RGB wavelengths. This means that only pure, accurate colors will be displayed on screen. The result is a more vibrant, more realistic picture that will bring your content', 'كل لون واضح وضوح الشمس.\r\nيستخدم تلفزيون LG NanoCell الجسيمات النانوية ، وهي تقنية النانو المميزة الخاصة بنا ، لفلترة اللون وصقله ، وإزالة الشوائب من أطوال موجات RGB. هذا يعني أنه سيتم عرض الألوان النقية والدقيقة فقط على الشاشة. والنتيجة هي صورة أكثر حيوية وواقعية تجلب المحتوى الخاص بك', NULL, NULL, NULL, NULL, 'Available', 'متوفر', 635.00, 610.00, '2022-01-14 23:24:00', 52, 11, '2021-12-27 17:23:28', '2022-01-02 21:28:35'),
(18, 'headset for music', 'headset for music', 'headset for music headset for music', 'headset for music headset for music', 'headset for music headset for music', 'headset for musicheadset for music', 'headset for music', 'headset for musicheadset for music', 'Available', 'متوفر', 15.00, 10.00, '2022-01-13 00:00:00', 5, 12, '2021-12-31 19:23:31', '2022-01-01 02:08:55'),
(19, 'air pod', 'air pod', 'air podair podair podair podair podair pod', 'air podair podair podair podair podair podair podair pod', 'air podair podair pod', 'air podair podair podair pod', 'air podair podair podair pod', 'air podair pod', 'Available', 'متوفر', 25.00, 20.00, '2022-01-13 00:00:00', 5, 12, '2021-12-31 23:17:05', '2022-01-01 02:09:10');

-- --------------------------------------------------------

--
-- Table structure for table `producttags`
--

CREATE TABLE `producttags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `tagname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `producttags`
--

INSERT INTO `producttags` (`id`, `product_id`, `tagname`, `created_at`, `updated_at`) VALUES
(14, 11, 'phone', '2021-12-24 22:55:46', '2021-12-24 22:55:46'),
(15, 11, 'apple', '2021-12-24 22:55:53', '2021-12-24 22:55:53'),
(16, 11, 'iphone', '2021-12-24 22:55:58', '2021-12-24 22:55:58'),
(17, 11, 'ios', '2021-12-24 22:56:03', '2021-12-24 22:56:03'),
(18, 11, 'pro max', '2021-12-24 22:56:11', '2021-12-24 22:56:11'),
(19, 12, 'samsung', '2021-12-24 23:31:11', '2021-12-24 23:31:11'),
(20, 12, 'phone', '2021-12-24 23:31:19', '2021-12-24 23:31:19'),
(21, 12, 'android', '2021-12-24 23:31:41', '2021-12-24 23:31:41'),
(22, 13, 'Huawei', '2021-12-24 23:35:54', '2021-12-24 23:35:54'),
(23, 13, 'mate pro', '2021-12-24 23:36:00', '2021-12-24 23:36:00'),
(24, 13, 'mate 40 pro', '2021-12-24 23:36:12', '2021-12-24 23:36:12'),
(25, 13, 'android', '2021-12-24 23:36:17', '2021-12-24 23:36:17'),
(26, 14, 'pc', '2021-12-24 23:40:18', '2021-12-24 23:40:18'),
(27, 14, 'desktop pc', '2021-12-24 23:40:24', '2021-12-24 23:40:24'),
(28, 14, 'gaming pc', '2021-12-24 23:40:30', '2021-12-24 23:40:30'),
(29, 14, 'windows', '2021-12-24 23:40:34', '2021-12-24 23:40:34'),
(30, 11, 'ios', '2021-12-26 23:48:21', '2021-12-26 23:48:21'),
(31, 15, 'TV', '2021-12-27 00:38:34', '2021-12-27 00:38:34'),
(32, 15, 'samsung', '2021-12-27 00:38:45', '2021-12-27 00:38:45'),
(33, 15, 'device', '2021-12-27 00:38:51', '2021-12-27 00:38:51'),
(34, 15, 'electronic', '2021-12-27 00:39:00', '2021-12-27 00:39:00'),
(35, 15, 'smart', '2021-12-27 00:39:07', '2021-12-27 00:39:07'),
(36, 16, 'Smart', '2021-12-27 00:46:52', '2021-12-27 00:46:52'),
(37, 16, 'android', '2021-12-27 00:46:57', '2021-12-27 00:46:57'),
(38, 16, 'samsung', '2021-12-27 00:47:02', '2021-12-27 00:47:02'),
(64, 19, 'music', '2021-12-31 23:19:25', '2021-12-31 23:19:25'),
(65, 19, 'moble phone', '2021-12-31 23:19:32', '2021-12-31 23:19:32'),
(66, 19, 'electronics', '2021-12-31 23:19:40', '2021-12-31 23:19:40'),
(67, 18, 'music', '2022-01-01 00:18:50', '2022-01-01 00:18:50'),
(68, 18, 'moble phone', '2022-01-01 00:22:09', '2022-01-01 00:22:09'),
(69, 18, 'electronics', '2022-01-01 00:22:30', '2022-01-01 00:22:30'),
(71, 17, 'electronics', '2022-01-02 21:28:19', '2022-01-02 21:28:19'),
(72, 17, 'Smart', '2022-01-02 21:28:23', '2022-01-02 21:28:23');

-- --------------------------------------------------------

--
-- Table structure for table `shoppingbaskets`
--

CREATE TABLE `shoppingbaskets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_quantity` int(11) NOT NULL DEFAULT 1,
  `TotalPrice_for_oneProduct` double(8,2) NOT NULL,
  `MainTotalPrice_allProduct` double(8,2) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(5, 'saif jamal', 'saif.jamal6173@gmail.com', NULL, '$2y$10$FNyKoEnHrMLQyZ39WcpMTuxRNevn1Y177ClAIHXUCGO4wOyKtpXLW', 'admin', NULL, '2021-12-10 18:19:24', '2022-01-02 23:08:33'),
(10, 'asdasda', 'saif.jamalasdasd6173@gmail.com', NULL, '$2y$10$WJlkqfSFmQAhmqy7YYg3zuk/py2zfsfa9kpLDxpQwUDR0U9WWxGfy', 'admin', NULL, '2021-12-10 21:24:10', '2021-12-10 21:24:10'),
(12, 'asdad', 'saif.jamal6asdasdas173@gmail.com', NULL, '$2y$10$T6nzOvgaslN5D2UeMnBFR.d3Z7uPbIiJcGyI4jJm/hMQrzIwtYuue', 'admin', NULL, '2021-12-10 21:32:55', '2021-12-10 21:32:55'),
(14, 'saif jamal', 'saifsaifsaifsaif@gmail.com', NULL, '$2y$10$QieIto7cSlssR5e3Hxsh2ep4lLDMjKRutp259ZxcELHVWI2FnicO6', 'admin', NULL, '2021-12-21 16:43:15', '2021-12-23 20:21:30'),
(49, 'rrrrrrrrrrrrrrrrr', 'saifrrrrrrrrrrrr@gmail.com', NULL, '$2y$10$8Tlp1d.7JICRiNahQQz/Q.EpicICYcn2mm/f1cz5j2sY.1n5lPO4S', 'user', NULL, '2021-12-22 20:15:53', '2021-12-22 20:15:53'),
(50, 'Saif jamal Abd Joad', 'saifjamalabd048@gmail.com', NULL, '$2y$10$.8BZFfppakAKgArTxHfleuC1alqnj0BjpGB31vxrNW1ZtRqTFJtVO', 'admin', NULL, '2021-12-22 20:58:32', '2021-12-22 20:58:32'),
(51, 'sdfsdfs', 'saif.jamalsdfsdfsdfsdfsdfsdff6173@gmail.com', NULL, '$2y$10$AxdBsRgGn61s.i7JGsJzpOwZS3EwluYZAr01g4zNNHFlD90qS69o2', 'admin', NULL, '2022-01-02 17:37:42', '2022-01-02 17:37:42'),
(52, 'saif jamal ahmed', 'ahmedHatem@gmail.com', NULL, '$2y$10$8aP8jydWM1E0noufN.LoV.zk843RiNn82qep44oPNNHggrRbgzIT6', 'admin', NULL, '2022-01-02 21:11:00', '2022-01-02 21:11:00'),
(53, 'saif jamal', 'saif.jamalsaifsaif@gmail.com', NULL, '$2y$10$XDfyf9B33Wj//9ir2Z/pBe3VcahlWr6RsUn8TduI.fgRUSrlXN7Bu', 'admin', NULL, '2022-01-02 23:04:21', '2022-01-02 23:11:14');

-- --------------------------------------------------------

--
-- Table structure for table `users_infos`
--

CREATE TABLE `users_infos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userimage` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','blocked') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `wallpaper` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` enum('male','female') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebookprofile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instgramprofile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitterprofile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedlnprofile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `githubprofile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `locationOnMAP` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users_infos`
--

INSERT INTO `users_infos` (`id`, `phone_number`, `userimage`, `status`, `wallpaper`, `gender`, `facebookprofile`, `instgramprofile`, `twitterprofile`, `linkedlnprofile`, `githubprofile`, `locationOnMAP`, `user_id`, `created_at`, `updated_at`) VALUES
(4, '+9647500677192', 'User_image_1641175713_157.jpg', 'active', 'User_wallpaper_1641175713_507.jpg', 'male', 'https://www.facebook.com/profile.php?id=100074911944954', 'https://www.instagram.com/saifjamal6173/', 'https://twitter.com/saif53554945', 'https://www.linkedin.com/in/saif-jamal-a5a062195/', 'https://github.com/saif-jamal', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 5, '2021-12-10 18:24:01', '2022-01-02 23:08:33'),
(9, NULL, 'User_image_1639188516_671.jpg', 'active', 'User_wallpaper_1640480427_549.jpg', 'male', 'https://www.facebook.com', 'https://www.instagram.com', 'https://www.twitter.com', 'https://www.linkedin.com', 'https://www.github.com', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 10, '2021-12-10 21:24:10', '2021-12-25 22:00:27'),
(11, NULL, 'User_image_1639188535_241.jpg', 'active', 'User_wallpaper_1640479915_525.jpg', 'male', 'https://www.facebook.com', 'https://www.instagram.com', 'https://www.twitter.com', 'https://www.linkedin.com', 'https://www.github.com', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 12, '2021-12-10 21:32:55', '2021-12-25 21:51:55'),
(13, '+9647500677192', 'User_image_1640217512_371.jpg', 'active', 'User_wallpaper_1640217512_456.jpg', 'male', 'https://www.facebook.com/profile.php?id=100074911944954', 'https://www.instagram.com/saifjamal6173/', 'https://twitter.com/saif53554945', 'https://www.linkedin.com/in/saif-jamal-a5a062195/', 'https://github.com/saif-jamal', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 50, '2021-12-22 20:58:32', '2021-12-22 22:13:31'),
(14, '+9647500677192', 'User_image_1640302051_993.jpg', 'active', 'User_wallpaper_1640359820_263.jpg', 'female', 'https://www.facebook.com', 'https://www.instagram.com', 'https://www.twitter.com', 'https://www.linkedin.com', 'https://www.github.com', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 14, '2021-12-23 18:48:54', '2021-12-24 12:30:20'),
(16, NULL, 'User_image_1640480479_746.jpg', 'active', 'User_wallpaper_1640480479_856.jpg', 'male', 'https://www.facebook.com', 'https://www.instagram.com', 'https://www.twitter.com', 'https://www.linkedin.com', 'https://www.github.com', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 49, '2021-12-25 22:01:19', '2021-12-25 22:01:19'),
(17, NULL, 'User_image_1641155862_296.jpg', 'active', 'User_wallpaper_1641155862_552.jpg', 'male', NULL, NULL, NULL, NULL, NULL, NULL, 51, '2022-01-02 17:37:42', '2022-01-02 17:37:42'),
(18, NULL, 'User_image_1641171130_896.jpg', 'active', 'User_wallpaper_1641171130_485.jpg', 'male', 'https://www.facebook.com/profile.php?id=100074911944954', 'https://www.instagram.com/saifjamal6173/', 'https://twitter.com/saif53554945', 'https://www.linkedin.com/in/saif-jamal-a5a062195/', 'https://github.com/saif-jamal', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 52, '2022-01-02 21:25:52', '2022-01-02 21:52:10'),
(19, '+9647500677192', 'User_image_1641175874_878.jpg', 'active', 'User_wallpaper_1641175874_87.jpg', 'male', 'https://www.facebook.com/profile.php?id=100074911944954', 'https://www.instagram.com/saifjamal6173/', 'https://twitter.com/saif53554945', 'https://www.linkedin.com/in/saif-jamal-a5a062195/', 'https://github.com/saif-jamal', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31802.2595964777!2d44.41294569243564!3d33.088025907022114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1640221762207!5m2!1sar!2siq', 53, '2022-01-02 23:11:14', '2022-01-02 23:11:14');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_name_en` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name_ar` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_descri_en` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_descri_ar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_img` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_price` double(8,2) NOT NULL,
  `product_discountprice` double(8,2) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dark_modes`
--
ALTER TABLE `dark_modes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `darkmode_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leftnav_colors`
--
ALTER TABLE `leftnav_colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `productimages`
--
ALTER TABLE `productimages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productimages_product_id_foreign` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_user_id_foreign` (`user_id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `producttags`
--
ALTER TABLE `producttags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producttags_product_id_foreign` (`product_id`);

--
-- Indexes for table `shoppingbaskets`
--
ALTER TABLE `shoppingbaskets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shoppingbaskets_product_id_foreign` (`product_id`),
  ADD KEY `shoppingbaskets_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `users_infos`
--
ALTER TABLE `users_infos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_infos_user_id_foreign` (`user_id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `_wish_list_product_id_foreign` (`product_id`),
  ADD KEY `_wish_list_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dark_modes`
--
ALTER TABLE `dark_modes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `leftnav_colors`
--
ALTER TABLE `leftnav_colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `productimages`
--
ALTER TABLE `productimages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `producttags`
--
ALTER TABLE `producttags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `shoppingbaskets`
--
ALTER TABLE `shoppingbaskets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `users_infos`
--
ALTER TABLE `users_infos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dark_modes`
--
ALTER TABLE `dark_modes`
  ADD CONSTRAINT `darkmode_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productimages`
--
ALTER TABLE `productimages`
  ADD CONSTRAINT `productimages_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `producttags`
--
ALTER TABLE `producttags`
  ADD CONSTRAINT `producttags_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shoppingbaskets`
--
ALTER TABLE `shoppingbaskets`
  ADD CONSTRAINT `shoppingbaskets_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `shoppingbaskets_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users_infos`
--
ALTER TABLE `users_infos`
  ADD CONSTRAINT `users_infos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `_wish_list_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_wish_list_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
