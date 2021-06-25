var box = $(".img-1")
var oneDiv = true
var twoDiv = true
var youAtck
var enemyAtck
var youHealth
var enemyHealth
var youCan
var enemyCan
$("#value1").html($("#darth").data('target'))
$("#value2").html($("#sidious").data('target'))
$("#value3").html($("#luke").data("target"))
$("#value4").html($("#obi").data("target"))

// var darthAttacker = Math.floor(Math.random() * (25 - 10) + 40)
// var sidiousAttacker = Math.floor(Math.random() * (25 - 10) + 30)
// var lukeAttacker = Math.floor(Math.random() * (25 - 10) + 20)
// var obiAttacker = Math.floor(Math.random() * (25 - 10) + 10)
var sidio
var birinciSecilen = null
var ikinciSecilen = null


box.on('click', function () {
  if (oneDiv) {
    if (birinciSecilen === null) {
      $(".you-choice").html($(this))
      oneDiv = false
      box.css('border', '5px solid red')
      birinciSecilen = $(this)
    }
  } else if (twoDiv) {
    if (ikinciSecilen === null) {
      $(".comp-choice").html($(this))
      twoDiv = true
      ikinciSecilen = $(this)
    }
  }

})

$(".btn").on('click', function () {

  youAtck = parseInt(($('.you-choice').children().data('attack')));
  enemyAtck = parseInt($('.comp-choice').children().data('attack'));
  youHealth = parseInt(($('.you-choice').children().data('target')));
  enemyHealth = parseInt(($(".comp-choice").children().data("target")))
  console.log("yAttac", youAtck)
  console.log('cattack', enemyAtck)
  console.log("yHealth", youHealth)
  console.log("coHealth", enemyHealth)
  youHealthAzalt()

})



function youHealthAzalt() {
 youCan = youHealth - youAtck
 $('.you-choice').children().$("p").html(youCan)

}