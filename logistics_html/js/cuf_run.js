Cufon.replace('h1, h2, h3, h4, h5, h6', { hover: true });
window.onload=function(){
	var msg = "请输入订单号";
	var on = document.getElementsByName("orderNumber")[0];
	if (on.value.length <= 0 || on.value == "Search...") {
		on.value = msg;
	}
	on.onfocus = function() {
		if (this.value == msg) {
			this.value = "";
		}
	};
	on.onblur = function() {
		if (this.value.length <= 0) {
			this.value = msg;
		}
	};
};
