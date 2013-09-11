Calendary.Views.EventsDailyShow = Backbone.View.extend({
	template: JST['events/daily_show'],
	// el: $("<div class='eventDaily'></div>"),
	className: "eventDaily",
	render: function (theHeight) {
		var content = this.template({event: this.model});
		this.$el.html(content);
		var elHeight = this.model.full_end_datetime().getHours() -
		 this.model.full_start_datetime().getHours();
		this.$el.css('background-color', this.model.get("color"));
		this.$el.height(elHeight * theHeight);
		return this;
	}
});