//node平台支持JS全部核心语法
var  a = 100;
var  b = 200;
console.log(a+b);
console.log(3>5?5:6);
//for (var i = 0; i <50 ; i++) {
//    if (i%2==0){
//        console.log(i);
//    }
//}


var arr = ["吃饭","睡觉","打豆豆"];
console.log(arr.reverse());

function People(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
People.prototype.eat = function(){
    console.log(this.name+"一顿能吃8碗米饭");
};

var xiaoming = new People("小明","22","男");
xiaoming.eat();