<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit47e29b2a00bfbe485a411d680f6d026f
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit47e29b2a00bfbe485a411d680f6d026f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit47e29b2a00bfbe485a411d680f6d026f::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
