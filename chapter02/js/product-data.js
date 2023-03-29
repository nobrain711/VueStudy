var webstore = new Vue({
  el: "#app",
  data: {
    product: {
      id: 1001,
      title: "고양이 사료",
      description:
        "당신의 고양이를 위한 <em>거부할 수 없는</em>, " +
        "유기농 25파운드 사료입니다.",
      price: 2000,
      image: "../images/product-fullsize.png",
    },
  },
});
