<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'mindgeek');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'mindgeek');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'mindgeek');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}?c7_Zqj^3azob*m(/.]2RY1Mm!CA6s3etLhF_Wq/p*$Uj>o1%R}t9iU)+iF3>KY');
define('SECURE_AUTH_KEY',  'QuCr &`P8p` NOlJ11;lk85Pw@(*kgnOEt=-T#| 6#AVOVU#,zfdUdU84D&I/yP|');
define('LOGGED_IN_KEY',    '?G^I(k0~yT=4&<FQLF&J3O-h6%GU=w$35g@t/^Tg1P,ZJOsQ#Ces]euTuGsy6Wr>');
define('NONCE_KEY',        'Wo-7$*@Ft^?W{*)uRryyHo>^HGT@%u{*?q@h*6p~#>/XVY2IeSO[Uy#/?u{r1v4;');
define('AUTH_SALT',        'gu@dCm@g/1^ybeVtsT#iezmw0 /`ge=a>C-vYz9_v5<DkkImyE$Rn0EypEb<WdqC');
define('SECURE_AUTH_SALT', 'd.ODu.t)~`-lh^_reI#CjdQ6VG^_e-sh+QCcs}=3%f8][suj^VJTejJ%OGETfT>a');
define('LOGGED_IN_SALT',   'J`5zjs/3J^8GW+zqwGekR>WHb44Q89~Z. 6/!TSd?ehMtKj8ia@w7n*%Z@KjClW(');
define('NONCE_SALT',       '.i5rb}w<&|bfPEMrdKeo@c43E~2<|SaYQY/jz/Os?^(CV$C*UNM7i`STp7U6k:xZ');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');