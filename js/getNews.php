<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$news = array(
	array('title'=>'微盟启动新云计划  欲打造智能商业服务生态体系'),
	array('title'=>'上海市常务副市长周波调研宝山 莅临微盟参观'),
	array('title'=>'微盟创始人孙涛勇问鼎《我是创始人》总冠军'),
);

echo json_encode($news);
