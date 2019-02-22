//课程数据集，课程固定，静态，不需要服务器支持。Time是将时间转为分钟，比如10小时变为600分钟，duration表示将课程时段。
//周日在最前面
// var fjl = [
// 	[
// 		// { 'cousrName': 'Dance Yoga 舞韵瑜伽', 'TrainName': 'Yur', 'Time': '1130', 'duration': '50' },
// 		// { 'cousrName': 'Yin yoga阴瑜伽', 'TrainName': 'Yiyi', 'Time': '1130', 'duration': '50' },
// 		// { 'cousrName': 'Ready to go', 'TrainName': 'Darren', 'Time': '1200', 'duration': '50' }
// 	],

// 	[
// 		// { 'cousrName': '尊巴Zumba', 'TrainName': 'Darren', 'Time': '600', 'duration': '50' },
// 		// { 'cousrName': 'Yin yoga阴瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' },
// 		// { 'cousrName': "Yogi Therapy 正位理疗", 'TrainName': 'Julia', 'Time': '1130', 'duration': '50' },
// 		// { 'cousrName': 'Fight FX 能量搏击', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' }
// 	],

// 	[
// 		// { 'cousrName': 'Yoga physical 理疗瑜伽', 'TrainName': 'Yiyi', 'Time': '1130', 'duration': '50' },
// 		// { 'cousrName': 'Flow 流瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' },
// 		// { 'cousrName': 'Gentle Flow 绽放·流', 'TrainName': 'Julia', 'Time': '840', 'duration': '50' },
// 		// { 'cousrName': 'Training Day', 'TrainName': 'Darren', 'Time': '1200', 'duration': '50' }
// 	],

// 	[
// 		// { 'cousrName': 'Hatha yoga 哈他瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' },
// 		// { 'cousrName': 'Yoga physical 理疗瑜伽', 'TrainName': 'Yiyi', 'Time': '600', 'duration': '50' },
// 		// { 'cousrName': 'Pump FX 功能杠铃', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' }
// 	],

// 	[
// 		// { 'cousrName': 'Zumba 尊巴', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' },
// 		// { 'cousrName': 'Yin yoga 阴瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' },
// 		// { 'cousrName': 'Sexy Butt 美臀', 'TrainName': 'Julia', 'Time': '840', 'duration': '50' },
// 		// { 'cousrName': 'Ready to go', 'TrainName': 'Rambo', 'Time': '1200', 'duration': '30' }
// 	],

// 	[
// 		// { 'cousrName': 'Yoga Basic 基础瑜伽', 'TrainName': 'Julia', 'Time': '600', 'duration': '50' },
// 		// { 'cousrName': 'Aerobic Exercise综合有氧', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' },
// 		// { 'cousrName': "Yogi Therapy 正位理疗", 'TrainName': 'Julia', 'Time': '1200', 'duration': '50' },
// 		// { 'cousrName': 'Training Day', 'TrainName': 'Darren', 'Time': '1200', 'duration': '50' }
// 	],

// 	[
// 		// { 'cousrName': 'Flow yoga 流瑜伽', 'TrainName': 'Yiyi', 'Time': '840', 'duration': '50' },
// 		// { 'cousrName': 'Hatha Yoga 哈他瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' }
// 	]
// ]

// 以下为2019年2月15日到2019年3月1日暂行课表
var fjl = [
	[
		// { 'cousrName': 'Dance Yoga 舞韵瑜伽', 'TrainName': 'Yur', 'Time': '1130', 'duration': '50' },
		// { 'cousrName': 'Yin yoga阴瑜伽', 'TrainName': 'Yiyi', 'Time': '1130', 'duration': '50' },
		// { 'cousrName': 'Ready to go', 'TrainName': 'Darren', 'Time': '1200', 'duration': '50' }
		{ 'cousrName': 'Hatha Yoga 哈他瑜伽', 'TrainName': 'Yiyi', 'Time': '1170', 'duration': '50' }
	],

	[
		// { 'cousrName': '尊巴Zumba', 'TrainName': 'Darren', 'Time': '600', 'duration': '50' },
		// { 'cousrName': 'Yin yoga阴瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' },
		{ 'cousrName': "Yogi Therapy 正位理疗", 'TrainName': 'Julia', 'Time': '1110', 'duration': '50' },
		{ 'cousrName': 'Yoga Basic 基础瑜伽', 'TrainName': 'Julia', 'Time': '1170', 'duration': '50' },
		// { 'cousrName': 'Fight FX 能量搏击', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' }
	],

	[
		// { 'cousrName': 'Yoga physical 理疗瑜伽', 'TrainName': 'Yiyi', 'Time': '1130', 'duration': '50' },
		// { 'cousrName': 'Flow 流瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' },
		{ 'cousrName': 'Gentle Flow 绽放·流', 'TrainName': 'Julia', 'Time': '840', 'duration': '50' },
		{ 'cousrName': 'Yin yoga 阴瑜伽', 'TrainName': 'Yiyi', 'Time': '1170', 'duration': '50' },
		// { 'cousrName': 'Training Day', 'TrainName': 'Darren', 'Time': '1200', 'duration': '50' }
	],

	[
		{ 'cousrName': 'Hatha yoga 哈他瑜伽', 'TrainName': 'Yiyi', 'Time': '600', 'duration': '50' },
		{ 'cousrName': 'Sexy Butt 美臀', 'TrainName': 'Julia', 'Time': '1110', 'duration': '50' },
		// { 'cousrName': 'Yoga physical 理疗瑜伽', 'TrainName': 'Yiyi', 'Time': '600', 'duration': '50' },
		// { 'cousrName': 'Pump FX 功能杠铃', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' }
	],

	[
		// { 'cousrName': 'Zumba 尊巴', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' },
		{ 'cousrName': 'Yin yoga 阴瑜伽', 'TrainName': 'Yiyi', 'Time': '840', 'duration': '50' },
		{ 'cousrName': 'Dance Yoga 舞韵瑜伽', 'TrainName': 'Yur', 'Time': '1170', 'duration': '50' },
		// { 'cousrName': 'Sexy Butt 美臀', 'TrainName': 'Julia', 'Time': '840', 'duration': '50' },
		// { 'cousrName': 'Ready to go', 'TrainName': 'Rambo', 'Time': '1200', 'duration': '30' }
	],

	[
		// { 'cousrName': 'Yoga Basic 基础瑜伽', 'TrainName': 'Julia', 'Time': '600', 'duration': '50' },
		{ 'cousrName': 'Hatha Yoga 哈他瑜伽', 'TrainName': 'Yiyi', 'Time': '1110', 'duration': '50' },
		// { 'cousrName': 'Aerobic Exercise综合有氧', 'TrainName': 'Darren', 'Time': '1130', 'duration': '50' },
		// { 'cousrName': "Yogi Therapy 正位理疗", 'TrainName': 'Julia', 'Time': '1200', 'duration': '50' },
		// { 'cousrName': 'Training Day', 'TrainName': 'Darren', 'Time': '1200', 'duration': '50' }
	],

	[
		{ 'cousrName': 'Flow yoga 流瑜伽', 'TrainName': 'Yiyi', 'Time': '840', 'duration': '50' },
		{ 'cousrName': 'Yoga physical 理疗瑜伽', 'TrainName': 'Yiyi', 'Time': '1110', 'duration': '50' },
		// { 'cousrName': 'Hatha Yoga 哈他瑜伽', 'TrainName': 'Yiyi', 'Time': '1200', 'duration': '50' }
	]
]