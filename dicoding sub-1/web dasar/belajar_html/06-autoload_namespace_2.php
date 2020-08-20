<?php
spl_autoload_register( function ($className){
  $filePath = strtolower("$className.php");
  $filePath = str_replace('\\', '/', $filePath);
  require $filePath;
});

use Duniailkom\Library\Mobil as Mobil;
use Duniailkom\Plugin\SepedaMotor as SepedaMotor;

$produk01 = new Mobil("Toyota");
echo $produk01->getInfo();
echo "<br>";

$produk02 = new SepedaMotor("Yamaha");
echo $produk02->getInfo();
