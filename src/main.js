// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('skills'));

// // 指定图表的配置项和数据
// option = {
//     backgroundColor: '#ddd',

//     title: {
//         text: '能力饼图',
//         left: 'center',
//         top: 20,
//         textStyle: {
//             color: '#fff'
//         }
//     },

//     tooltip: {
//         trigger: 'item',
//         formatter: '{a} <br/>{b} : {c} ({d}%)'
//     },

//     visualMap: {
//         show: false,
//         min: 80,
//         max: 600,
//         inRange: {
//             colorLightness: [0, 1]
//         }
//     },
//     series: [
//         {
//             name: '能力',
//             type: 'pie',
//             radius: '55%',
//             center: ['50%', '50%'],
//             data: [
//                 {value: 335, name: 'Vue'},
//                 {value: 310, name: '项目开发'},
//                 {value: 290, name: 'React'},
//                 {value: 280, name: '团队沟通'},
//                 {value: 400, name: '静态页面'}
//             ].sort(function (a, b) { return a.value - b.value; }),
//             roseType: 'radius',
//             label: {
//                 color: 'rgba(0, 0, 0, 0.8)'
//             },
//             labelLine: {
//                 lineStyle: {
//                     color: 'rgba(0, 0, 0, 0.3)'
//                 },
//                 smooth: 0.2,
//                 length: 10,
//                 length2: 20
//             },
//             itemStyle: {
//                 color: '#c23531',
//                 shadowBlur: 200,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)'
//             },

//             animationType: 'scale',
//             animationEasing: 'elasticOut',
//             animationDelay: function (idx) {
//                 return Math.random() * 200;
//             }
//         }
//     ]
// };
// // 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);